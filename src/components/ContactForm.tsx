import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    grecaptcha?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => number;
      getResponse: (id?: number) => string;
      reset: (id?: number) => void;
    };
  }
}

interface Labels {
  email: string;
  emailPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successMessage: string;
  captchaRequired: string;
  failed: string;
}

interface Props {
  endpoint: string;
  siteKey: string;
  labels: Labels;
}

type Status = 'idle' | 'sending' | 'sent';

export default function ContactForm({ endpoint, siteKey, labels }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const captchaHost = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const mount = () => {
      if (cancelled || widgetId.current !== null) return true;
      const host = captchaHost.current;
      if (!host || !window.grecaptcha?.render) return false;
      widgetId.current = window.grecaptcha.render(host, { sitekey: siteKey, theme: 'dark' });
      return true;
    };
    if (mount()) return;
    const timer = window.setInterval(() => {
      if (mount()) window.clearInterval(timer);
    }, 150);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [siteKey]);

  // Takes the form element rather than the event, so the handler needs none
  // of React's deprecated synthetic-event types.
  const submit = async (form: HTMLFormElement) => {
    setError(null);

    const token = widgetId.current !== null ? window.grecaptcha?.getResponse(widgetId.current) : '';
    if (!token) {
      setError(labels.captchaRequired);
      return;
    }

    setStatus('sending');
    const body = new FormData(form);
    body.set('g-recaptcha-response', token);

    try {
      const res = await fetch(endpoint, { method: 'POST', body, headers: { Accept: 'application/json' } });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { errors?: { message: string }[] } | null;
        throw new Error(data?.errors?.map((e) => e.message).join(', ') || labels.failed);
      }
      form.reset();
      if (widgetId.current !== null) window.grecaptcha?.reset(widgetId.current);
      setStatus('sent');
    } catch (e) {
      setError(e instanceof Error ? e.message : labels.failed);
      setStatus('idle');
    }
  };

  if (status === 'sent') {
    return (
      <div className="form form--done" role="status">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#e3000f" strokeWidth={1.8}
             strokeLinecap="square" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5" /></svg>
        <h3 className="form__done-title">{labels.successTitle}</h3>
        <p className="body-muted">{labels.successMessage}</p>
      </div>
    );
  }

  return (
    <form
      className="form"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        void submit(event.currentTarget);
      }}
    >
      <label className="form__field">
        <span className="form__label mono">{labels.email}</span>
        <input type="email" name="email" required autoComplete="email"
               placeholder={labels.emailPlaceholder} className="form__input" />
      </label>

      <label className="form__field">
        <span className="form__label mono">{labels.message}</span>
        <textarea name="message" required rows={6}
                  placeholder={labels.messagePlaceholder} className="form__input form__input--area" />
      </label>

      {/* Bot trap: a real person never fills this. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="form__trap" />

      <div ref={captchaHost} className="form__captcha" />

      {error && <p className="form__error" role="alert">{error}</p>}

      <button type="submit" className="btn btn--primary form__submit" disabled={status === 'sending'}>
        {status === 'sending' ? labels.submitting : labels.submit}
        {status !== 'sending' && (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth={2} strokeLinecap="square" aria-hidden="true">
            <path d="M5 12h13M13 6l6 6-6 6" />
          </svg>
        )}
      </button>
    </form>
  );
}

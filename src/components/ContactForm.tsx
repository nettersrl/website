import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

// Declare grecaptcha on window
declare global {
  interface Window {
    grecaptcha: any;
  }
}

export function ContactForm() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);

  useEffect(() => {
    // Load reCAPTCHA when component mounts
    const loadRecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.render && recaptchaRef.current && recaptchaWidgetId.current === null) {
        try {
          recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
            sitekey: '6Ldo0oIUAAAAAGcNGTtp-6kruWAddaznK0hRrogH',
            callback: (response: string) => {
              // Update hidden field when reCAPTCHA is completed
              const hiddenInput = document.getElementById('g-recaptcha-response') as HTMLInputElement;
              if (hiddenInput) {
                hiddenInput.value = response;
              }
            }
          });
          console.log('reCAPTCHA loaded successfully');
        } catch (error) {
          console.error('Error rendering reCAPTCHA:', error);
        }
      }
    };

    // Check if grecaptcha is already loaded
    if (window.grecaptcha && window.grecaptcha.render) {
      loadRecaptcha();
    } else {
      // Wait for grecaptcha to load
      const interval = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
          loadRecaptcha();
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = event.currentTarget;

    // Get reCAPTCHA response
    const recaptchaResponse = window.grecaptcha?.getResponse(recaptchaWidgetId.current);
    if (!recaptchaResponse) {
      setError('Please complete the reCAPTCHA verification');
      setIsSubmitting(false);
      return;
    }

    // Set the hidden input value
    const hiddenInput = form.querySelector('#g-recaptcha-response') as HTMLInputElement;
    if (hiddenInput) {
      hiddenInput.value = recaptchaResponse;
    }

    // Create FormData
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        // Reset reCAPTCHA
        if (window.grecaptcha && recaptchaWidgetId.current !== null) {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        }
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map((error: any) => error.message).join(', '));
        } else {
          setError('Oops! There was a problem submitting your form');
        }
      }
    } catch (error) {
      setError('Oops! There was a problem submitting your form');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold mb-2">{t('contact.successTitle')}</h3>
        <p className="text-muted-foreground">{t('contact.successMessage')}</p>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/xldpvnoe"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          {t('contact.emailLabel')}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
          placeholder={t('contact.emailPlaceholder')}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          {t('contact.messageLabel')}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
          placeholder={t('contact.messagePlaceholder')}
        />
      </div>

      <div className="flex justify-center">
        <div ref={recaptchaRef} />
      </div>

      <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />

      {error && (
        <div className="text-sm text-red-500 bg-red-50 dark:bg-red-950/20 p-3 rounded-md border border-red-200 dark:border-red-800">
          {error}
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
        {isSubmitting ? t('contact.submitting') : t('contact.submit')}
      </Button>
    </form>
  );
}

interface EmailDisplayProps {
  className?: string;
}

export function EmailDisplay({ className = '' }: EmailDisplayProps) {
  // Email displayed as base64 encoded image to prevent spam bot scraping
  // SVG with bold text: <svg xmlns="http://www.w3.org/2000/svg" width="140" height="24" viewBox="0 0 140 24"><text x="0" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="currentColor">info@netter.io</text></svg>
  const emailImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxNDAgMjQiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSJjdXJyZW50Q29sb3IiPmluZm9AbmV0dGVyLmlvPC90ZXh0Pjwvc3ZnPg==";

  return (
    <div className="inline-flex items-center justify-center ml-2">
      <img
        src={emailImage}
        alt="Email address"
        className={`inline-block ${className}`}
        style={{ height: '1.5em', width: 'auto', display: 'block' }}
      />
    </div>
  );
}

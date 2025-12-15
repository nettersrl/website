import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-muted/20 to-gray-50 dark:from-gray-900 dark:via-muted/20 dark:to-gray-900"></div>
    </div>
  );
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AnimatedBackground />
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}
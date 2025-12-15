import { Button } from '@/components/ui/button';
import {
  Sparkles,
  Menu,
  X,
  ChevronDown,
  Database,
  Activity,
  Server,
  Monitor,
  Cpu,
  Network,
  Monitor as VDI,
  Laptop,
  BarChart3,
  Layers,
  Zap
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { productsNav, servicesNav } from '@/config/navigation';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useTranslation } from '@/contexts/TranslationContext';
import NetterLogo from '@/assets/logonetter-clean.svg';

// Product icon mapping
const productStyles: Record<string, { icon: any }> = {
  '/products/d-sql': {
    icon: Database,
  },
  '/products/obstack': {
    icon: BarChart3,
  },
  '/products/hadron': {
    icon: Layers,
  },
  '/products/dcache': {
    icon: Zap,
  },
};

// Service icon and gradient mapping
const serviceStyles: Record<string, { icon: any; gradient: string; iconColor: string }> = {
  '/services/backend': {
    icon: Server,
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-blue-600'
  },
  '/services/frontend': {
    icon: Monitor,
    gradient: 'from-purple-500/10 to-pink-500/10',
    iconColor: 'text-purple-600'
  },
  '/services/dba': {
    icon: Database,
    gradient: 'from-green-500/10 to-emerald-500/10',
    iconColor: 'text-green-600'
  },
  '/services/virtualization': {
    icon: Cpu,
    gradient: 'from-orange-500/10 to-amber-500/10',
    iconColor: 'text-orange-600'
  },
  '/services/networking': {
    icon: Network,
    gradient: 'from-red-500/10 to-rose-500/10',
    iconColor: 'text-red-600'
  },
  '/services/vdi': {
    icon: VDI,
    gradient: 'from-indigo-500/10 to-blue-500/10',
    iconColor: 'text-indigo-600'
  },
  '/services/desktop-fleet': {
    icon: Laptop,
    gradient: 'from-gray-500/10 to-slate-500/10',
    iconColor: 'text-gray-600'
  },
  '/services/observability-sre': {
    icon: Activity,
    gradient: 'from-teal-500/10 to-cyan-500/10',
    iconColor: 'text-teal-600'
  }
};

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setServicesDropdownOpen(false);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(false);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
        if (servicesTimeoutRef.current) {
          clearTimeout(servicesTimeoutRef.current);
          servicesTimeoutRef.current = null;
        }
      }
    };

    if (dropdownOpen || servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, [dropdownOpen, servicesDropdownOpen]);

  return (
    <>
      <header className={`fixed top-4 left-4 right-4 z-50 border rounded-lg shadow-gray-500/20 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-[3px] border-border/6'
          : 'backdrop-blur-[2px] border-border/4'
      }`} style={{ boxShadow: '0 10px 15px -3px rgba(107, 114, 128, 0.1), 0 4px 6px -2px rgba(107, 114, 128, 0.05)', mixBlendMode: 'difference' }}>
        <div className="px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center flex-1">
              <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-200" style={{ mixBlendMode: 'normal', isolation: 'isolate' }}>
                <img src={NetterLogo} alt="Netter" className="h-8 sm:h-10 w-auto" />
              </Link>
            </div>

            <div className="flex justify-center">
              <nav className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className="text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 px-4 py-2 rounded-md hover:bg-white/10"
                >
                  {t('header.home')}
                </Link>

                <Link
                  to="/about"
                  className="text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 px-4 py-2 rounded-md hover:bg-white/10"
                >
                  {t('header.about')}
                </Link>

                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={dropdownRef}
                >
                  <button className="flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 px-4 py-2 rounded-md hover:bg-white/10">
                    {t(productsNav.titleKey)}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[700px] bg-popover text-popover-foreground border shadow-lg animate-in fade-in-0 zoom-in-95">
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-3">
                          {productsNav.items.map((item) => {
                            const style = productStyles[item.href];
                            const IconComponent = style?.icon || Database;
                            return (
                              <Link
                                key={item.href}
                                to={item.href}
                                className="flex select-none flex-col justify-end bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none transition-colors hover:bg-accent focus:shadow-md"
                              >
                                <IconComponent className="h-6 w-6" />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  {t(item.titleKey)}
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  {t(item.descriptionKey!)}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                  ref={servicesDropdownRef}
                >
                  <button className="flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 px-4 py-2 rounded-md hover:bg-white/10">
                    {t(servicesNav.titleKey)}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[900px] bg-popover text-popover-foreground border shadow-lg animate-in fade-in-0 zoom-in-95">
                      <div className="grid gap-3 p-6 lg:grid-cols-2">
                        <div className="grid grid-cols-2 gap-3">
                          {servicesNav.items.slice(0, 4).map((item) => {
                            const style = serviceStyles[item.href];
                            const IconComponent = style?.icon || Server;
                            return (
                              <Link
                                key={item.href}
                                to={item.href}
                                className="flex select-none flex-col justify-end bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none transition-colors hover:bg-accent focus:shadow-md"
                              >
                                <IconComponent className="h-6 w-6" />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  {t(item.titleKey)}
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  {t(item.descriptionKey!)}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="space-y-2">
                          {servicesNav.items.slice(4).map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{t(item.titleKey)}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {t(item.descriptionKey!)}
                              </p>
                            </Link>
                          ))}
                          {servicesNav.featured && (
                            <Link
                              to={servicesNav.featured.href}
                              className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{t(servicesNav.featured.titleKey)}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {t(servicesNav.featured.descriptionKey!)}
                              </p>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            <div className="flex items-center justify-end space-x-2 sm:space-x-4 flex-1">
              <LanguageSelector />

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white hover:text-white/80 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              <Link to="/">
                <Button>
                  {t('common.getStarted')}
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Detached below topbar */}
      {mobileMenuOpen && (
        <div className="fixed top-[88px] left-4 right-4 z-40 md:hidden">
          <nav className="bg-black/80 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl transition-all duration-300">
            <div className="px-6 py-4 space-y-4">
              <Link
                to="/"
                className="block text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('header.home')}
              </Link>

              <div className="space-y-2">
                <div className="text-sm font-medium text-white py-2">{t(productsNav.titleKey)}</div>
                <div className="pl-4 space-y-2">
                  {productsNav.featured && (
                    <Link
                      to={productsNav.featured.href}
                      className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(productsNav.featured.titleKey)}
                    </Link>
                  )}
                  {productsNav.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(item.titleKey)}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-white py-2">{t(servicesNav.titleKey)}</div>
                <div className="pl-4 space-y-2">
                  {servicesNav.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(item.titleKey)}
                    </Link>
                  ))}
                  {servicesNav.featured && (
                    <Link
                      to={servicesNav.featured.href}
                      className="block text-sm text-white/80 hover:text-white transition-colors duration-200 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(servicesNav.featured.titleKey)}
                    </Link>
                  )}
                </div>
              </div>

              <Link
                to="/about"
                className="block text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('header.about')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
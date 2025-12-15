import { lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { NewsSection } from '@/components/NewsSection';
import { Terminal, ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Lazy load 3D animations to prevent SSR/hydration issues
const ConsultancyTileAnimation = lazy(() => import('@/components/ui/ConsultancyTileAnimation').then(m => ({ default: m.ConsultancyTileAnimation })));
const ProductsTileAnimation = lazy(() => import('@/components/ui/ProductsTileAnimation').then(m => ({ default: m.ProductsTileAnimation })));

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Main Header */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Sparkles className="mr-2 h-4 w-4" />
            {t('home.badge')}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t('home.title')} <br />
              <span className="text-muted-foreground">{t('home.titleHighlight')}</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t('home.subtitle')}
            </p>
          </div>
        </div>

        {/* Single Column Layout */}
        <div className="grid gap-8 lg:gap-12">
          {/* Consultancy Services */}
          <div className="bg-white p-8 border border-border relative overflow-hidden">
            <Suspense fallback={null}>
              <ConsultancyTileAnimation />
            </Suspense>
            <div className="relative z-10 backdrop-blur-sm bg-white/10 p-6 w-full lg:w-1/2 shadow-lg" style={{ mixBlendMode: 'difference', boxShadow: '0 10px 15px -3px rgba(107, 114, 128, 0.1), 0 4px 6px -2px rgba(107, 114, 128, 0.05)' }}>
              <Terminal className="h-12 w-12 text-white mb-4" />
              <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">
                {t('home.consultancy.title')}
              </h2>
              <p className="text-white mb-6 leading-relaxed">
                {t('home.consultancy.description')}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-white">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('home.consultancy.features.architecture')}
                </div>
                <div className="flex items-center text-sm text-white">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('home.consultancy.features.systemEngineering')}
                </div>
                <div className="flex items-center text-sm text-white">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('home.consultancy.features.technologyStrategy')}
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button size="lg" variant="outline" className="bg-gray-100/10 border-gray-400 text-white backdrop-blur-sm hover:bg-gray-200/20">
                  {t('home.consultancy.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Software Products */}
          <div className="bg-gray-900 p-8 border border-border relative overflow-hidden">
            <Suspense fallback={null}>
              <ProductsTileAnimation />
            </Suspense>
            <div className="relative z-10 backdrop-blur-sm bg-white/10 p-6 w-full lg:w-1/2 shadow-lg" style={{ mixBlendMode: 'difference', boxShadow: '0 10px 15px -3px rgba(107, 114, 128, 0.1), 0 4px 6px -2px rgba(107, 114, 128, 0.05)' }}>
              <Sparkles className="h-12 w-12 text-white mb-4" />
              <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">
                {t('home.products.title')}
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t('home.products.description')}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-white/70">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('home.products.features.distributedSystems')}
                </div>
                <div className="flex items-center text-sm text-white/70">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('home.products.features.cloudNative')}
                </div>
                <div className="flex items-center text-sm text-white/70">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t('home.products.features.microservices')}
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button size="lg" variant="outline" className="bg-gray-100/10 border-gray-400 text-white backdrop-blur-sm hover:bg-gray-200/20">
                  {t('home.products.cta')}
                  <Terminal className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <NewsSection />
    </div>
  );
}
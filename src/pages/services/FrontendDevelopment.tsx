import { Button } from '@/components/ui/button';
import {
  Code,
  ArrowRight,
  Palette,
  Cpu,
  Network,
  Users,
  Sparkles,
  CheckCircle,
  Shield,
  Layers,
  Lightbulb,
  Monitor,
  Gauge,
  Lock,
  Radio
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FrontendDevelopment() {
  const { t } = useTranslation();

  const icItems = [
    {
      title: t('services.frontend.servicesSection.ic.frameworkExpertise.title'),
      description: t('services.frontend.servicesSection.ic.frameworkExpertise.description')
    },
    {
      title: t('services.frontend.servicesSection.ic.modernTooling.title'),
      description: t('services.frontend.servicesSection.ic.modernTooling.description')
    },
    {
      title: t('services.frontend.servicesSection.ic.componentDevelopment.title'),
      description: t('services.frontend.servicesSection.ic.componentDevelopment.description')
    },
    {
      title: t('services.frontend.servicesSection.ic.performanceFocus.title'),
      description: t('services.frontend.servicesSection.ic.performanceFocus.description')
    }
  ];

  const uxuiItems = [
    {
      title: t('services.frontend.servicesSection.uxui.userResearch.title'),
      description: t('services.frontend.servicesSection.uxui.userResearch.description')
    },
    {
      title: t('services.frontend.servicesSection.uxui.wireframing.title'),
      description: t('services.frontend.servicesSection.uxui.wireframing.description')
    },
    {
      title: t('services.frontend.servicesSection.uxui.visualDesign.title'),
      description: t('services.frontend.servicesSection.uxui.visualDesign.description')
    },
    {
      title: t('services.frontend.servicesSection.uxui.designSystems.title'),
      description: t('services.frontend.servicesSection.uxui.designSystems.description')
    },
    {
      title: t('services.frontend.servicesSection.uxui.accessibility.title'),
      description: t('services.frontend.servicesSection.uxui.accessibility.description')
    },
    {
      title: t('services.frontend.servicesSection.uxui.usabilityTesting.title'),
      description: t('services.frontend.servicesSection.uxui.usabilityTesting.description')
    }
  ];

  const wasmPerformanceItems = [
    t('services.frontend.servicesSection.wasm.performanceBenefits.nativeSpeed'),
    t('services.frontend.servicesSection.wasm.performanceBenefits.memoryManagement'),
    t('services.frontend.servicesSection.wasm.performanceBenefits.smooth60fps'),
    t('services.frontend.servicesSection.wasm.performanceBenefits.reducedBlocking')
  ];

  const wasmUseCasesItems = [
    t('services.frontend.servicesSection.wasm.useCases.dataVisualization'),
    t('services.frontend.servicesSection.wasm.useCases.imageVideo'),
    t('services.frontend.servicesSection.wasm.useCases.scientific'),
    t('services.frontend.servicesSection.wasm.useCases.cryptography')
  ];

  const networkingTechItems = [
    t('services.frontend.servicesSection.networking.realTimeTech.websocket'),
    t('services.frontend.servicesSection.networking.realTimeTech.webrtc'),
    t('services.frontend.servicesSection.networking.realTimeTech.sse'),
    t('services.frontend.servicesSection.networking.realTimeTech.custom')
  ];

  const networkingSecurityItems = [
    t('services.frontend.servicesSection.networking.security.e2e'),
    t('services.frontend.servicesSection.networking.security.auth'),
    t('services.frontend.servicesSection.networking.security.reconnection'),
    t('services.frontend.servicesSection.networking.security.rateLimit')
  ];

  const whyChooseUsItems = [
    {
      icon: Monitor,
      title: t('services.frontend.whyChooseUs.responsiveDesign.title'),
      description: t('services.frontend.whyChooseUs.responsiveDesign.description'),
      iconColor: 'text-blue-600'
    },
    {
      icon: Lightbulb,
      title: t('services.frontend.whyChooseUs.innovationDriven.title'),
      description: t('services.frontend.whyChooseUs.innovationDriven.description'),
      iconColor: 'text-purple-600'
    },
    {
      icon: Shield,
      title: t('services.frontend.whyChooseUs.securityMinded.title'),
      description: t('services.frontend.whyChooseUs.securityMinded.description'),
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Code className="mr-2 h-4 w-4" />
            {t('services.frontend.badge')}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t('services.frontend.title')}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t('services.frontend.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              {t('services.frontend.buttons.getStarted')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              {t('services.frontend.buttons.contactUs')}
              <Code className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('services.frontend.techStack.title')}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            {t('services.frontend.techStack.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-red-100 rounded-lg">
                <Code className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.frontend.techStack.angular.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.frontend.techStack.angular.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-blue-100 rounded-lg">
                <Sparkles className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.frontend.techStack.react.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.frontend.techStack.react.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t('services.frontend.servicesSection.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.frontend.servicesSection.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* Individual Contributor Service */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-600 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.frontend.servicesSection.ic.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.frontend.servicesSection.ic.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {icItems.slice(0, 2).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {icItems.slice(2).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* UX/UI Designer */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.frontend.servicesSection.uxui.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.frontend.servicesSection.uxui.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {uxuiItems.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Sparkles className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {uxuiItems.slice(3).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Sparkles className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WASM-backed Components */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-600 rounded-lg flex-shrink-0">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.frontend.servicesSection.wasm.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.frontend.servicesSection.wasm.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Gauge className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.frontend.servicesSection.wasm.performanceBenefits.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {wasmPerformanceItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Layers className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.frontend.servicesSection.wasm.useCases.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {wasmUseCasesItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tailor-made Networking */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.frontend.servicesSection.networking.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.frontend.servicesSection.networking.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Radio className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.frontend.servicesSection.networking.realTimeTech.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {networkingTechItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Lock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.frontend.servicesSection.networking.security.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {networkingSecurityItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 p-8 border border-border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t('services.frontend.whyChooseUs.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.frontend.whyChooseUs.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <item.icon className={`h-8 w-8 mb-3 ${item.iconColor}`} />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t('services.frontend.cta.title')}</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {t('services.frontend.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              {t('services.frontend.cta.primaryButton')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              {t('services.frontend.cta.secondaryButton')}
              <Palette className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
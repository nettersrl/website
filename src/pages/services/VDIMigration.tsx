import { Button } from '@/components/ui/button';
import {
  MonitorSmartphone,
  ArrowRight,
  Zap,
  Cpu,
  Monitor,
  DollarSign,
  CheckCircle,
  Shield,
  TrendingUp,
  Users,
  Server,
  Sparkles,
  Cloud,
  Layers,
  Settings,
  Boxes
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function VDIMigration() {
  const { t } = useTranslation();

  const valuePropositionItems = [
    {
      icon: Shield,
      title: t('services.vdi.valueProposition.security.title'),
      description: t('services.vdi.valueProposition.security.description'),
      iconColor: 'text-blue-600'
    },
    {
      icon: Users,
      title: t('services.vdi.valueProposition.flexibility.title'),
      description: t('services.vdi.valueProposition.flexibility.description'),
      iconColor: 'text-green-600'
    },
    {
      icon: Settings,
      title: t('services.vdi.valueProposition.management.title'),
      description: t('services.vdi.valueProposition.management.description'),
      iconColor: 'text-purple-600'
    }
  ];

  const largeFleetItems = [
    {
      title: t('services.vdi.servicesSection.largeFleet.assessmentPlanning.title'),
      description: t('services.vdi.servicesSection.largeFleet.assessmentPlanning.description')
    },
    {
      title: t('services.vdi.servicesSection.largeFleet.phasedMigration.title'),
      description: t('services.vdi.servicesSection.largeFleet.phasedMigration.description')
    },
    {
      title: t('services.vdi.servicesSection.largeFleet.userTraining.title'),
      description: t('services.vdi.servicesSection.largeFleet.userTraining.description')
    },
    {
      title: t('services.vdi.servicesSection.largeFleet.appCompatibility.title'),
      description: t('services.vdi.servicesSection.largeFleet.appCompatibility.description')
    },
    {
      title: t('services.vdi.servicesSection.largeFleet.performanceOptimization.title'),
      description: t(
        'services.vdi.servicesSection.largeFleet.performanceOptimization.description'
      )
    },
    {
      title: t('services.vdi.servicesSection.largeFleet.support.title'),
      description: t('services.vdi.servicesSection.largeFleet.support.description')
    }
  ];

  const gpuTechItems = [
    t('services.vdi.servicesSection.gpuAccelerated.gpuTech.nvidia'),
    t('services.vdi.servicesSection.gpuAccelerated.gpuTech.amd'),
    t('services.vdi.servicesSection.gpuAccelerated.gpuTech.intel'),
    t('services.vdi.servicesSection.gpuAccelerated.gpuTech.sharing')
  ];

  const gpuUseCasesItems = [
    t('services.vdi.servicesSection.gpuAccelerated.useCases.cad'),
    t('services.vdi.servicesSection.gpuAccelerated.useCases.video'),
    t('services.vdi.servicesSection.gpuAccelerated.useCases.rendering'),
    t('services.vdi.servicesSection.gpuAccelerated.useCases.ai')
  ];

  const windowsProtocolItems = [
    t('services.vdi.servicesSection.protocols.windows.rdp'),
    t('services.vdi.servicesSection.protocols.windows.citrix'),
    t('services.vdi.servicesSection.protocols.windows.vmware'),
    t('services.vdi.servicesSection.protocols.windows.remotefx')
  ];

  const linuxProtocolItems = [
    t('services.vdi.servicesSection.protocols.linux.x2go'),
    t('services.vdi.servicesSection.protocols.linux.spice'),
    t('services.vdi.servicesSection.protocols.linux.nomachine'),
    t('services.vdi.servicesSection.protocols.linux.vnc')
  ];

  const reliableItems = [
    t('services.vdi.servicesSection.reliableFastCheap.reliable.uptime'),
    t('services.vdi.servicesSection.reliableFastCheap.reliable.redundant'),
    t('services.vdi.servicesSection.reliableFastCheap.reliable.failover'),
    t('services.vdi.servicesSection.reliableFastCheap.reliable.backups'),
    t('services.vdi.servicesSection.reliableFastCheap.reliable.monitoring')
  ];

  const fastItems = [
    t('services.vdi.servicesSection.reliableFastCheap.fast.storage'),
    t('services.vdi.servicesSection.reliableFastCheap.fast.protocols'),
    t('services.vdi.servicesSection.reliableFastCheap.fast.network'),
    t('services.vdi.servicesSection.reliableFastCheap.fast.gpu'),
    t('services.vdi.servicesSection.reliableFastCheap.fast.tuning')
  ];

  const costEffectiveItems = [
    t('services.vdi.servicesSection.reliableFastCheap.costEffective.hardware'),
    t('services.vdi.servicesSection.reliableFastCheap.costEffective.energy'),
    t('services.vdi.servicesSection.reliableFastCheap.costEffective.management'),
    t('services.vdi.servicesSection.reliableFastCheap.costEffective.lifespan'),
    t('services.vdi.servicesSection.reliableFastCheap.costEffective.licensing')
  ];

  const platformItems = [
    {
      icon: Cloud,
      title: t('services.vdi.platforms.vmwareHorizon.title'),
      description: t('services.vdi.platforms.vmwareHorizon.description'),
      iconColor: 'text-blue-600'
    },
    {
      icon: Server,
      title: t('services.vdi.platforms.citrix.title'),
      description: t('services.vdi.platforms.citrix.description'),
      iconColor: 'text-orange-600'
    },
    {
      icon: Monitor,
      title: t('services.vdi.platforms.avd.title'),
      description: t('services.vdi.platforms.avd.description'),
      iconColor: 'text-green-600'
    },
    {
      icon: Layers,
      title: t('services.vdi.platforms.openSource.title'),
      description: t('services.vdi.platforms.openSource.description'),
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <MonitorSmartphone className="mr-2 h-4 w-4" />
            {t('services.vdi.badge')}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t('services.vdi.title')}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t('services.vdi.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              {t('services.vdi.buttons.getStarted')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              {t('services.vdi.buttons.contactUs')}
              <MonitorSmartphone className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('services.vdi.valueProposition.title')}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            {t('services.vdi.valueProposition.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {valuePropositionItems.map((item, index) => (
              <div
                key={index}
                className="p-6 border border-border bg-white hover:shadow-lg transition-shadow"
              >
                <item.icon className={`h-12 w-12 mb-4 mx-auto ${item.iconColor}`} />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t('services.vdi.servicesSection.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.vdi.servicesSection.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* Large Fleet Migrations */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-600 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.vdi.servicesSection.largeFleet.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.vdi.servicesSection.largeFleet.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {largeFleetItems.slice(0, 3).map((item, index) => (
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
                  {largeFleetItems.slice(3).map((item, index) => (
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

            {/* GPU Accelerated VMs */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.vdi.servicesSection.gpuAccelerated.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.vdi.servicesSection.gpuAccelerated.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.vdi.servicesSection.gpuAccelerated.gpuTech.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {gpuTechItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Boxes className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.vdi.servicesSection.gpuAccelerated.useCases.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {gpuUseCasesItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Remote Desktop Protocols */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.vdi.servicesSection.protocols.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.vdi.servicesSection.protocols.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Server className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.vdi.servicesSection.protocols.windows.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {windowsProtocolItems.map((item, index) => (
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
                      <Layers className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.vdi.servicesSection.protocols.linux.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {linuxProtocolItems.map((item, index) => (
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

            {/* Reliable, Fast, and Cheap Solutions */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-600 rounded-lg flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.vdi.servicesSection.reliableFastCheap.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.vdi.servicesSection.reliableFastCheap.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-orange-200 h-full">
                    <div className="flex items-start gap-2 mb-3">
                      <Shield className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.vdi.servicesSection.reliableFastCheap.reliable.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {reliableItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-orange-200 h-full">
                    <div className="flex items-start gap-2 mb-3">
                      <Zap className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.vdi.servicesSection.reliableFastCheap.fast.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {fastItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-orange-200 h-full">
                    <div className="flex items-start gap-2 mb-3">
                      <DollarSign className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.vdi.servicesSection.reliableFastCheap.costEffective.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {costEffectiveItems.map((item, index) => (
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
          </div>
        </div>

        {/* VDI Platforms */}
        <div className="bg-gray-50 p-8 border border-border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t('services.vdi.platforms.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.vdi.platforms.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {platformItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <item.icon className={`h-8 w-8 mb-3 mx-auto ${item.iconColor}`} />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t('services.vdi.cta.title')}</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {t('services.vdi.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              {t('services.vdi.cta.primaryButton')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              {t('services.vdi.cta.secondaryButton')}
              <MonitorSmartphone className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
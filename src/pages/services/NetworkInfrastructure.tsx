import { Button } from '@/components/ui/button';
import {
  Network,
  ArrowRight,
  Router,
  Shield,
  GitBranch,
  Lock,
  Zap,
  CheckCircle,
  Globe,
  Cloud,
  Building2,
  Settings,
  Code2,
  Layers,
  Eye,
  ShieldAlert,
  Wifi,
  Server,
  TrendingUp
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function NetworkInfrastructure() {
  const { t } = useTranslation();

  const carrierGradeItems = [
    {
      title: t('services.networking.servicesSection.carrierGrade.serviceProviderNetworks.title'),
      description: t(
        'services.networking.servicesSection.carrierGrade.serviceProviderNetworks.description'
      )
    },
    {
      title: t('services.networking.servicesSection.carrierGrade.enterpriseCampus.title'),
      description: t(
        'services.networking.servicesSection.carrierGrade.enterpriseCampus.description'
      )
    },
    {
      title: t('services.networking.servicesSection.carrierGrade.architecture.title'),
      description: t('services.networking.servicesSection.carrierGrade.architecture.description')
    },
    {
      title: t('services.networking.servicesSection.carrierGrade.haDesign.title'),
      description: t('services.networking.servicesSection.carrierGrade.haDesign.description')
    },
    {
      title: t('services.networking.servicesSection.carrierGrade.performance.title'),
      description: t('services.networking.servicesSection.carrierGrade.performance.description')
    },
    {
      title: t('services.networking.servicesSection.carrierGrade.capacity.title'),
      description: t('services.networking.servicesSection.carrierGrade.capacity.description')
    }
  ];

  const tcpipItems = [
    t('services.networking.servicesSection.tcpipExpertise.tcpip.routing'),
    t('services.networking.servicesSection.tcpipExpertise.tcpip.dualStack'),
    t('services.networking.servicesSection.tcpipExpertise.tcpip.troubleshooting'),
    t('services.networking.servicesSection.tcpipExpertise.tcpip.tuning')
  ];

  const platformConfigItems = [
    t('services.networking.servicesSection.tcpipExpertise.platformConfig.openwrt'),
    t('services.networking.servicesSection.tcpipExpertise.platformConfig.vyos'),
    t('services.networking.servicesSection.tcpipExpertise.platformConfig.opnsense'),
    t('services.networking.servicesSection.tcpipExpertise.platformConfig.integration')
  ];

  const customSolutionsItems = [
    {
      title: t('services.networking.servicesSection.customSolutions.customProtocol.title'),
      description: t(
        'services.networking.servicesSection.customSolutions.customProtocol.description'
      )
    },
    {
      title: t('services.networking.servicesSection.customSolutions.networkAutomation.title'),
      description: t(
        'services.networking.servicesSection.customSolutions.networkAutomation.description'
      )
    },
    {
      title: t('services.networking.servicesSection.customSolutions.apiDevelopment.title'),
      description: t(
        'services.networking.servicesSection.customSolutions.apiDevelopment.description'
      )
    },
    {
      title: t('services.networking.servicesSection.customSolutions.pluginExtensions.title'),
      description: t(
        'services.networking.servicesSection.customSolutions.pluginExtensions.description'
      )
    },
    {
      title: t('services.networking.servicesSection.customSolutions.integrations.title'),
      description: t(
        'services.networking.servicesSection.customSolutions.integrations.description'
      )
    },
    {
      title: t('services.networking.servicesSection.customSolutions.managementInterfaces.title'),
      description: t(
        'services.networking.servicesSection.customSolutions.managementInterfaces.description'
      )
    }
  ];

  const meshItems = [
    t('services.networking.servicesSection.meshVpn.mesh.selfHealing'),
    t('services.networking.servicesSection.meshVpn.mesh.dynamicRouting'),
    t('services.networking.servicesSection.meshVpn.mesh.batman'),
    t('services.networking.servicesSection.meshVpn.mesh.wireless')
  ];

  const vpnItems = [
    t('services.networking.servicesSection.meshVpn.vpn.wireguard'),
    t('services.networking.servicesSection.meshVpn.vpn.ipsec'),
    t('services.networking.servicesSection.meshVpn.vpn.openvpn'),
    t('services.networking.servicesSection.meshVpn.vpn.ztna')
  ];

  const inspectionItems = [
    {
      icon: Eye,
      title: t('services.networking.servicesSection.deepInspection.dpi.title'),
      description: t('services.networking.servicesSection.deepInspection.dpi.description')
    },
    {
      icon: Shield,
      title: t('services.networking.servicesSection.deepInspection.idsIps.title'),
      description: t('services.networking.servicesSection.deepInspection.idsIps.description')
    },
    {
      icon: ShieldAlert,
      title: t('services.networking.servicesSection.deepInspection.sslInspection.title'),
      description: t('services.networking.servicesSection.deepInspection.sslInspection.description')
    },
    {
      icon: Globe,
      title: t('services.networking.servicesSection.deepInspection.waf.title'),
      description: t('services.networking.servicesSection.deepInspection.waf.description')
    },
    {
      icon: Lock,
      title: t('services.networking.servicesSection.deepInspection.ddosMitigation.title'),
      description: t('services.networking.servicesSection.deepInspection.ddosMitigation.description')
    },
    {
      icon: TrendingUp,
      title: t('services.networking.servicesSection.deepInspection.threatIntel.title'),
      description: t('services.networking.servicesSection.deepInspection.threatIntel.description')
    }
  ];

  const whyChooseUsItems = [
    {
      icon: Shield,
      title: t('services.networking.whyChooseUs.securityFirst.title'),
      description: t('services.networking.whyChooseUs.securityFirst.description'),
      iconColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: t('services.networking.whyChooseUs.highPerformance.title'),
      description: t('services.networking.whyChooseUs.highPerformance.description'),
      iconColor: 'text-orange-600'
    },
    {
      icon: Settings,
      title: t('services.networking.whyChooseUs.openStandards.title'),
      description: t('services.networking.whyChooseUs.openStandards.description'),
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Network className="mr-2 h-4 w-4" />
            {t('services.networking.badge')}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t('services.networking.title')}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t('services.networking.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              {t('services.networking.buttons.getStarted')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              {t('services.networking.buttons.contactUs')}
              <Network className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Target Audience */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('services.networking.targetAudience.title')}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            {t('services.networking.targetAudience.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Cloud className="h-12 w-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('services.networking.targetAudience.serviceProviders.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.networking.targetAudience.serviceProviders.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 mb-4 mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('services.networking.targetAudience.enterprise.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.networking.targetAudience.enterprise.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Platform Expertise */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('services.networking.platforms.title')}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            {t('services.networking.platforms.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-orange-100 rounded-lg">
                <Router className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.networking.platforms.openwrt.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.networking.platforms.openwrt.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-blue-100 rounded-lg">
                <Server className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.networking.platforms.vyos.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.networking.platforms.vyos.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-red-100 rounded-lg">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.networking.platforms.opnsense.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.networking.platforms.opnsense.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t('services.networking.servicesSection.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.networking.servicesSection.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* Carrier-Grade Infrastructure */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-600 rounded-lg flex-shrink-0">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.networking.servicesSection.carrierGrade.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.networking.servicesSection.carrierGrade.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {carrierGradeItems.slice(0, 3).map((item, index) => (
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
                  {carrierGradeItems.slice(3).map((item, index) => (
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

            {/* TCP/IP and Platform Expertise */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.networking.servicesSection.tcpipExpertise.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.networking.servicesSection.tcpipExpertise.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Network className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.networking.servicesSection.tcpipExpertise.tcpip.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {tcpipItems.map((item, index) => (
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
                      <Settings className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t(
                          'services.networking.servicesSection.tcpipExpertise.platformConfig.title'
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {platformConfigItems.map((item, index) => (
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

            {/* Custom Solutions Development */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.networking.servicesSection.customSolutions.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.networking.servicesSection.customSolutions.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {customSolutionsItems.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {customSolutionsItems.slice(3).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mesh Networking & VPN */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-600 rounded-lg flex-shrink-0">
                  <GitBranch className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.networking.servicesSection.meshVpn.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.networking.servicesSection.meshVpn.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Wifi className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.networking.servicesSection.meshVpn.mesh.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {meshItems.map((item, index) => (
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
                      <Lock className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.networking.servicesSection.meshVpn.vpn.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {vpnItems.map((item, index) => (
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

            {/* Deep Inspection & WAF */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-red-600 rounded-lg flex-shrink-0">
                  <ShieldAlert className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.networking.servicesSection.deepInspection.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.networking.servicesSection.deepInspection.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {inspectionItems.slice(0, 3).map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-red-200">
                      <div className="flex items-start gap-2">
                        <item.icon className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-sm mb-1">{item.title}</div>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {inspectionItems.slice(3).map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-red-200">
                      <div className="flex items-start gap-2">
                        <item.icon className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-sm mb-1">{item.title}</div>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 p-8 border border-border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t('services.networking.whyChooseUs.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.networking.whyChooseUs.subtitle')}
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
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t('services.networking.cta.title')}</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {t('services.networking.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              {t('services.networking.cta.primaryButton')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              {t('services.networking.cta.secondaryButton')}
              <Network className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
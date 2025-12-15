import { Button } from '@/components/ui/button';
import {
  Terminal,
  ArrowRight,
  Shield,
  Eye,
  Users,
  Cpu,
  CheckCircle,
  Lock,
  AlertTriangle,
  Monitor,
  Server,
  Activity,
  ShieldAlert,
  Layers,
  Settings,
  FileSearch,
  WifiOff,
  Laptop,
  Code2,
  ShieldCheck,
  Database
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function DesktopFleetSolutioning() {
  const { t } = useTranslation();

  const rmmItems = [
    {
      title: t('services.desktopFleet.servicesSection.rmm.realTimeMonitoring.title'),
      description: t('services.desktopFleet.servicesSection.rmm.realTimeMonitoring.description')
    },
    {
      title: t('services.desktopFleet.servicesSection.rmm.patchManagement.title'),
      description: t('services.desktopFleet.servicesSection.rmm.patchManagement.description')
    },
    {
      title: t('services.desktopFleet.servicesSection.rmm.remoteAccess.title'),
      description: t('services.desktopFleet.servicesSection.rmm.remoteAccess.description')
    },
    {
      title: t('services.desktopFleet.servicesSection.rmm.assetInventory.title'),
      description: t('services.desktopFleet.servicesSection.rmm.assetInventory.description')
    },
    {
      title: t('services.desktopFleet.servicesSection.rmm.automationScripts.title'),
      description: t('services.desktopFleet.servicesSection.rmm.automationScripts.description')
    },
    {
      title: t('services.desktopFleet.servicesSection.rmm.reporting.title'),
      description: t('services.desktopFleet.servicesSection.rmm.reporting.description')
    }
  ];

  const adPolicyConfigItems = [
    t('services.desktopFleet.servicesSection.adPolicy.policyConfig.userComputer'),
    t('services.desktopFleet.servicesSection.adPolicy.policyConfig.whiteBlacklist'),
    t('services.desktopFleet.servicesSection.adPolicy.policyConfig.usb'),
    t('services.desktopFleet.servicesSection.adPolicy.policyConfig.password')
  ];

  const adPolicyHardeningItems = [
    t('services.desktopFleet.servicesSection.adPolicy.securityHardening.firewall'),
    t('services.desktopFleet.servicesSection.adPolicy.securityHardening.bitlocker'),
    t('services.desktopFleet.servicesSection.adPolicy.securityHardening.softwareRestriction'),
    t('services.desktopFleet.servicesSection.adPolicy.securityHardening.audit')
  ];

  const osqueryItems = [
    t('services.desktopFleet.servicesSection.cyberSecurity.osquery.sql'),
    t('services.desktopFleet.servicesSection.cyberSecurity.osquery.realtime'),
    t('services.desktopFleet.servicesSection.cyberSecurity.osquery.customRules'),
    t('services.desktopFleet.servicesSection.cyberSecurity.osquery.siem')
  ];

  const threatSecurityItems = [
    t('services.desktopFleet.servicesSection.cyberSecurity.threatSecurity.edr'),
    t('services.desktopFleet.servicesSection.cyberSecurity.threatSecurity.behavioral'),
    t('services.desktopFleet.servicesSection.cyberSecurity.threatSecurity.threatIntel'),
    t('services.desktopFleet.servicesSection.cyberSecurity.threatSecurity.automated')
  ];

  const socNocItems = [
    {
      icon: Server,
      title: t('services.desktopFleet.servicesSection.socNoc.nocSetup.title'),
      description: t('services.desktopFleet.servicesSection.socNoc.nocSetup.description')
    },
    {
      icon: ShieldAlert,
      title: t('services.desktopFleet.servicesSection.socNoc.socSetup.title'),
      description: t('services.desktopFleet.servicesSection.socNoc.socSetup.description')
    },
    {
      icon: Layers,
      title: t('services.desktopFleet.servicesSection.socNoc.toolSelection.title'),
      description: t('services.desktopFleet.servicesSection.socNoc.toolSelection.description')
    },
    {
      icon: Settings,
      title: t('services.desktopFleet.servicesSection.socNoc.processDesign.title'),
      description: t('services.desktopFleet.servicesSection.socNoc.processDesign.description')
    },
    {
      icon: Users,
      title: t('services.desktopFleet.servicesSection.socNoc.teamTraining.title'),
      description: t('services.desktopFleet.servicesSection.socNoc.teamTraining.description')
    },
    {
      icon: Eye,
      title: t('services.desktopFleet.servicesSection.socNoc.metricsKPIs.title'),
      description: t('services.desktopFleet.servicesSection.socNoc.metricsKPIs.description')
    }
  ];

  const offlineVmItems = [
    {
      title: t('services.desktopFleet.servicesSection.offlineVMs.queueBased.title'),
      description: t('services.desktopFleet.servicesSection.offlineVMs.queueBased.description')
    },
    {
      title: t('services.desktopFleet.servicesSection.offlineVMs.localData.title'),
      description: t('services.desktopFleet.servicesSection.offlineVMs.localData.description')
    },
    {
      title: t('services.desktopFleet.servicesSection.offlineVMs.scheduledSync.title'),
      description: t('services.desktopFleet.servicesSection.offlineVMs.scheduledSync.description')
    },
    {
      title: t('services.desktopFleet.servicesSection.offlineVMs.airGapped.title'),
      description: t('services.desktopFleet.servicesSection.offlineVMs.airGapped.description')
    },
    {
      title: t('services.desktopFleet.servicesSection.offlineVMs.vmLifecycle.title'),
      description: t('services.desktopFleet.servicesSection.offlineVMs.vmLifecycle.description')
    },
    {
      title: t('services.desktopFleet.servicesSection.offlineVMs.bandwidth.title'),
      description: t('services.desktopFleet.servicesSection.offlineVMs.bandwidth.description')
    }
  ];

  const thinClientItems = [
    {
      title: t('services.desktopFleet.servicesSection.thinClients.customOS.title'),
      description: t('services.desktopFleet.servicesSection.thinClients.customOS.description')
    },
    {
      title: t('services.desktopFleet.servicesSection.thinClients.remoteManagement.title'),
      description: t(
        'services.desktopFleet.servicesSection.thinClients.remoteManagement.description'
      )
    },
    {
      title: t('services.desktopFleet.servicesSection.thinClients.lightweight.title'),
      description: t('services.desktopFleet.servicesSection.thinClients.lightweight.description')
    },
    {
      title: t('services.desktopFleet.servicesSection.thinClients.kioskMode.title'),
      description: t('services.desktopFleet.servicesSection.thinClients.kioskMode.description')
    },
    {
      title: t('services.desktopFleet.servicesSection.thinClients.rapidProvisioning.title'),
      description: t(
        'services.desktopFleet.servicesSection.thinClients.rapidProvisioning.description'
      )
    },
    {
      title: t('services.desktopFleet.servicesSection.thinClients.energyEfficient.title'),
      description: t(
        'services.desktopFleet.servicesSection.thinClients.energyEfficient.description'
      )
    }
  ];

  const linuxDevItems = [
    t('services.desktopFleet.servicesSection.linuxEnterprise.developer.preConfigured'),
    t('services.desktopFleet.servicesSection.linuxEnterprise.developer.ides'),
    t('services.desktopFleet.servicesSection.linuxEnterprise.developer.git'),
    t('services.desktopFleet.servicesSection.linuxEnterprise.developer.kubernetes')
  ];

  const linuxAiItems = [
    t('services.desktopFleet.servicesSection.linuxEnterprise.ai.cuda'),
    t('services.desktopFleet.servicesSection.linuxEnterprise.ai.llm'),
    t('services.desktopFleet.servicesSection.linuxEnterprise.ai.frameworks'),
    t('services.desktopFleet.servicesSection.linuxEnterprise.ai.compliance')
  ];

  const remoteControlItems = [
    {
      title: t('services.desktopFleet.servicesSection.centralizedRemote.onPremises.title'),
      description: t(
        'services.desktopFleet.servicesSection.centralizedRemote.onPremises.description'
      )
    },
    {
      title: t('services.desktopFleet.servicesSection.centralizedRemote.sessionRecording.title'),
      description: t(
        'services.desktopFleet.servicesSection.centralizedRemote.sessionRecording.description'
      )
    },
    {
      title: t('services.desktopFleet.servicesSection.centralizedRemote.fileTransfer.title'),
      description: t(
        'services.desktopFleet.servicesSection.centralizedRemote.fileTransfer.description'
      )
    },
    {
      title: t('services.desktopFleet.servicesSection.centralizedRemote.accessControl.title'),
      description: t(
        'services.desktopFleet.servicesSection.centralizedRemote.accessControl.description'
      )
    },
    {
      title: t('services.desktopFleet.servicesSection.centralizedRemote.encrypted.title'),
      description: t(
        'services.desktopFleet.servicesSection.centralizedRemote.encrypted.description'
      )
    },
    {
      title: t('services.desktopFleet.servicesSection.centralizedRemote.compliance.title'),
      description: t(
        'services.desktopFleet.servicesSection.centralizedRemote.compliance.description'
      )
    }
  ];

  const dlpContentItems = [
    t('services.desktopFleet.servicesSection.dlp.contentInspection.patternMatching'),
    t('services.desktopFleet.servicesSection.dlp.contentInspection.dataDiscovery'),
    t('services.desktopFleet.servicesSection.dlp.contentInspection.piiPhiPci'),
    t('services.desktopFleet.servicesSection.dlp.contentInspection.customRules')
  ];

  const dlpResponseItems = [
    t('services.desktopFleet.servicesSection.dlp.preventionResponse.blockQuarantine'),
    t('services.desktopFleet.servicesSection.dlp.preventionResponse.egress'),
    t('services.desktopFleet.servicesSection.dlp.preventionResponse.cloudApp'),
    t('services.desktopFleet.servicesSection.dlp.preventionResponse.incident')
  ];

  const whyChooseUsItems = [
    {
      icon: Shield,
      title: t('services.desktopFleet.whyChooseUs.securityFocused.title'),
      description: t('services.desktopFleet.whyChooseUs.securityFocused.description'),
      iconColor: 'text-blue-600'
    },
    {
      icon: Layers,
      title: t('services.desktopFleet.whyChooseUs.unifiedManagement.title'),
      description: t('services.desktopFleet.whyChooseUs.unifiedManagement.description'),
      iconColor: 'text-green-600'
    },
    {
      icon: Activity,
      title: t('services.desktopFleet.whyChooseUs.proactiveMonitoring.title'),
      description: t('services.desktopFleet.whyChooseUs.proactiveMonitoring.description'),
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Terminal className="mr-2 h-4 w-4" />
            {t('services.desktopFleet.badge')}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t('services.desktopFleet.title')}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t('services.desktopFleet.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              {t('services.desktopFleet.buttons.getStarted')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              {t('services.desktopFleet.buttons.contactUs')}
              <Terminal className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Platform Support */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('services.desktopFleet.platformSupport.title')}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            {t('services.desktopFleet.platformSupport.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Monitor className="h-12 w-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('services.desktopFleet.platformSupport.windows.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.desktopFleet.platformSupport.windows.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Terminal className="h-12 w-12 mb-4 mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('services.desktopFleet.platformSupport.linux.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.desktopFleet.platformSupport.linux.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t('services.desktopFleet.servicesSection.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.desktopFleet.servicesSection.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* RMM Solutions */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-600 rounded-lg flex-shrink-0">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.desktopFleet.servicesSection.rmm.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.desktopFleet.servicesSection.rmm.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {rmmItems.slice(0, 3).map((item, index) => (
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
                  {rmmItems.slice(3).map((item, index) => (
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

            {/* Active Directory Policy Restrictions */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.desktopFleet.servicesSection.adPolicy.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.desktopFleet.servicesSection.adPolicy.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Settings className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.desktopFleet.servicesSection.adPolicy.policyConfig.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {adPolicyConfigItems.map((item, index) => (
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
                      <Shield className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t(
                          'services.desktopFleet.servicesSection.adPolicy.securityHardening.title'
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {adPolicyHardeningItems.map((item, index) => (
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

            {/* Cyber Security Real-Time Monitoring */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-red-600 rounded-lg flex-shrink-0">
                  <ShieldAlert className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.desktopFleet.servicesSection.cyberSecurity.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.desktopFleet.servicesSection.cyberSecurity.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2 mb-2">
                      <FileSearch className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.desktopFleet.servicesSection.cyberSecurity.osquery.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {osqueryItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t(
                          'services.desktopFleet.servicesSection.cyberSecurity.threatSecurity.title'
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {threatSecurityItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Internal NOC or SOC Creation */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.desktopFleet.servicesSection.socNoc.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.desktopFleet.servicesSection.socNoc.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {socNocItems.slice(0, 3).map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-green-200">
                      <div className="flex items-start gap-2">
                        <item.icon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-sm mb-1">{item.title}</div>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {socNocItems.slice(3).map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-green-200">
                      <div className="flex items-start gap-2">
                        <item.icon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
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

            {/* Offline VMs RMM Agents */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-cyan-600 rounded-lg flex-shrink-0">
                  <WifiOff className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.desktopFleet.servicesSection.offlineVMs.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.desktopFleet.servicesSection.offlineVMs.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {offlineVmItems.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {offlineVmItems.slice(3).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Thin Clients & Custom OSes */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-indigo-600 rounded-lg flex-shrink-0">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.desktopFleet.servicesSection.thinClients.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.desktopFleet.servicesSection.thinClients.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {thinClientItems.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {thinClientItems.slice(3).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Linux Enterprise Laptops/Workstations */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-teal-600 rounded-lg flex-shrink-0">
                  <Laptop className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.desktopFleet.servicesSection.linuxEnterprise.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.desktopFleet.servicesSection.linuxEnterprise.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-teal-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Code2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t(
                          'services.desktopFleet.servicesSection.linuxEnterprise.developer.title'
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {linuxDevItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-teal-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-teal-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Cpu className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.desktopFleet.servicesSection.linuxEnterprise.ai.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {linuxAiItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-teal-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Centralized Remote Control */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-amber-600 rounded-lg flex-shrink-0">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.desktopFleet.servicesSection.centralizedRemote.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.desktopFleet.servicesSection.centralizedRemote.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {remoteControlItems.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {remoteControlItems.slice(3).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Leak Prevention */}
            <div className="bg-gradient-to-br from-rose-50 to-red-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-rose-600 rounded-lg flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.desktopFleet.servicesSection.dlp.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.desktopFleet.servicesSection.dlp.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-rose-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Database className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t(
                          'services.desktopFleet.servicesSection.dlp.contentInspection.title'
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {dlpContentItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-rose-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-rose-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Lock className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t(
                          'services.desktopFleet.servicesSection.dlp.preventionResponse.title'
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {dlpResponseItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-rose-600">•</span>
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
              {t('services.desktopFleet.whyChooseUs.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.desktopFleet.whyChooseUs.subtitle')}
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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {t('services.desktopFleet.cta.title')}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {t('services.desktopFleet.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              {t('services.desktopFleet.cta.primaryButton')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              {t('services.desktopFleet.cta.secondaryButton')}
              <ShieldAlert className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
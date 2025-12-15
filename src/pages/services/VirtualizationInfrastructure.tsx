import { Button } from '@/components/ui/button';
import {
  HardDrive,
  ArrowRight,
  Server,
  Boxes,
  Workflow,
  CreditCard,
  Settings,
  Zap,
  CheckCircle,
  Shield,
  TrendingUp,
  Cloud,
  Building2,
  Cpu,
  Network,
  Gauge,
  Lock,
  Users,
  BarChart3
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function VirtualizationInfrastructure() {
  const { t } = useTranslation();

  const carrierGradeItems = [
    {
      title: t(
        'services.virtualization.servicesSection.carrierGrade.serviceProviderSolutions.title'
      ),
      description: t(
        'services.virtualization.servicesSection.carrierGrade.serviceProviderSolutions.description'
      )
    },
    {
      title: t(
        'services.virtualization.servicesSection.carrierGrade.enterprisePrivateCloud.title'
      ),
      description: t(
        'services.virtualization.servicesSection.carrierGrade.enterprisePrivateCloud.description'
      )
    },
    {
      title: t('services.virtualization.servicesSection.carrierGrade.capacityPlanning.title'),
      description: t(
        'services.virtualization.servicesSection.carrierGrade.capacityPlanning.description'
      )
    },
    {
      title: t(
        'services.virtualization.servicesSection.carrierGrade.redundancyResilience.title'
      ),
      description: t(
        'services.virtualization.servicesSection.carrierGrade.redundancyResilience.description'
      )
    },
    {
      title: t('services.virtualization.servicesSection.carrierGrade.networkArchitecture.title'),
      description: t(
        'services.virtualization.servicesSection.carrierGrade.networkArchitecture.description'
      )
    },
    {
      title: t('services.virtualization.servicesSection.carrierGrade.storageSolutions.title'),
      description: t(
        'services.virtualization.servicesSection.carrierGrade.storageSolutions.description'
      )
    }
  ];

  const traditionalVmItems = [
    t('services.virtualization.servicesSection.virtualMachines.traditional.fullOS'),
    t('services.virtualization.servicesSection.virtualMachines.traditional.anyOS'),
    t('services.virtualization.servicesSection.virtualMachines.traditional.hardwareIsolation'),
    t('services.virtualization.servicesSection.virtualMachines.traditional.snapshots')
  ];

  const microVmItems = [
    t('services.virtualization.servicesSection.virtualMachines.microvm.lightweight'),
    t('services.virtualization.servicesSection.virtualMachines.microvm.fastBoot'),
    t('services.virtualization.servicesSection.virtualMachines.microvm.serverless'),
    t('services.virtualization.servicesSection.virtualMachines.microvm.density')
  ];

  const highAvailabilityItems = [
    {
      icon: Shield,
      title: t('services.virtualization.servicesSection.highAvailability.haClusters.title'),
      description: t(
        'services.virtualization.servicesSection.highAvailability.haClusters.description'
      )
    },
    {
      icon: Workflow,
      title: t('services.virtualization.servicesSection.highAvailability.automation.title'),
      description: t(
        'services.virtualization.servicesSection.highAvailability.automation.description'
      )
    },
    {
      icon: TrendingUp,
      title: t('services.virtualization.servicesSection.highAvailability.autoScaling.title'),
      description: t(
        'services.virtualization.servicesSection.highAvailability.autoScaling.description'
      )
    },
    {
      icon: Network,
      title: t('services.virtualization.servicesSection.highAvailability.loadBalancing.title'),
      description: t(
        'services.virtualization.servicesSection.highAvailability.loadBalancing.description'
      )
    },
    {
      icon: Gauge,
      title: t(
        'services.virtualization.servicesSection.highAvailability.performanceMonitoring.title'
      ),
      description: t(
        'services.virtualization.servicesSection.highAvailability.performanceMonitoring.description'
      )
    },
    {
      icon: Lock,
      title: t('services.virtualization.servicesSection.highAvailability.disasterRecovery.title'),
      description: t(
        'services.virtualization.servicesSection.highAvailability.disasterRecovery.description'
      )
    }
  ];

  const billingItems = [
    {
      title: t('services.virtualization.servicesSection.billing.usageBased.title'),
      description: t('services.virtualization.servicesSection.billing.usageBased.description')
    },
    {
      title: t('services.virtualization.servicesSection.billing.automatedInvoicing.title'),
      description: t(
        'services.virtualization.servicesSection.billing.automatedInvoicing.description'
      )
    },
    {
      title: t('services.virtualization.servicesSection.billing.paymentGateway.title'),
      description: t('services.virtualization.servicesSection.billing.paymentGateway.description')
    },
    {
      title: t('services.virtualization.servicesSection.billing.resourceMetering.title'),
      description: t('services.virtualization.servicesSection.billing.resourceMetering.description')
    },
    {
      title: t('services.virtualization.servicesSection.billing.pricingTiers.title'),
      description: t('services.virtualization.servicesSection.billing.pricingTiers.description')
    },
    {
      title: t('services.virtualization.servicesSection.billing.financialReports.title'),
      description: t('services.virtualization.servicesSection.billing.financialReports.description')
    }
  ];

  const customerPortalItems = [
    t('services.virtualization.servicesSection.selfManagement.customerPortal.provisioning'),
    t('services.virtualization.servicesSection.selfManagement.customerPortal.consoleAccess'),
    t('services.virtualization.servicesSection.selfManagement.customerPortal.resourceMonitoring'),
    t('services.virtualization.servicesSection.selfManagement.customerPortal.isoMounting')
  ];

  const adminDashboardItems = [
    t('services.virtualization.servicesSection.selfManagement.adminDashboard.centralized'),
    t('services.virtualization.servicesSection.selfManagement.adminDashboard.userManagement'),
    t('services.virtualization.servicesSection.selfManagement.adminDashboard.healthCapacity'),
    t('services.virtualization.servicesSection.selfManagement.adminDashboard.auditLogs')
  ];

  const whyChooseUsItems = [
    {
      icon: Shield,
      title: t('services.virtualization.whyChooseUs.carrierGradeQuality.title'),
      description: t('services.virtualization.whyChooseUs.carrierGradeQuality.description'),
      iconColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: t('services.virtualization.whyChooseUs.performanceOptimized.title'),
      description: t('services.virtualization.whyChooseUs.performanceOptimized.description'),
      iconColor: 'text-orange-600'
    },
    {
      icon: Settings,
      title: t('services.virtualization.whyChooseUs.fullyAutomated.title'),
      description: t('services.virtualization.whyChooseUs.fullyAutomated.description'),
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <HardDrive className="mr-2 h-4 w-4" />
            {t('services.virtualization.badge')}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t('services.virtualization.title')}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t('services.virtualization.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              {t('services.virtualization.buttons.getStarted')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              {t('services.virtualization.buttons.contactUs')}
              <HardDrive className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Target Audience */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('services.virtualization.targetAudience.title')}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            {t('services.virtualization.targetAudience.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Cloud className="h-12 w-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('services.virtualization.targetAudience.serviceProviders.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.virtualization.targetAudience.serviceProviders.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 mb-4 mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('services.virtualization.targetAudience.enterprise.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.virtualization.targetAudience.enterprise.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Hypervisor Technologies */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('services.virtualization.hypervisors.title')}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            {t('services.virtualization.hypervisors.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-red-100 rounded-lg">
                <Server className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.virtualization.hypervisors.kvm.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.virtualization.hypervisors.kvm.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-blue-100 rounded-lg">
                <Boxes className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.virtualization.hypervisors.hyperv.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.virtualization.hypervisors.hyperv.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-green-100 rounded-lg">
                <Cloud className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.virtualization.hypervisors.vmware.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.virtualization.hypervisors.vmware.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t('services.virtualization.servicesSection.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.virtualization.servicesSection.subtitle')}
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
                    {t('services.virtualization.servicesSection.carrierGrade.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.virtualization.servicesSection.carrierGrade.description')}
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

            {/* Virtual Machines & microVM */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.virtualization.servicesSection.virtualMachines.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.virtualization.servicesSection.virtualMachines.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Server className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t(
                          'services.virtualization.servicesSection.virtualMachines.traditional.title'
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {traditionalVmItems.map((item, index) => (
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
                      <Zap className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.virtualization.servicesSection.virtualMachines.microvm.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {microVmItems.map((item, index) => (
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

            {/* High Availability & Automation */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-600 rounded-lg flex-shrink-0">
                  <Workflow className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.virtualization.servicesSection.highAvailability.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.virtualization.servicesSection.highAvailability.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {highAvailabilityItems.slice(0, 3).map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-orange-200">
                      <div className="flex items-start gap-2">
                        <item.icon className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-sm mb-1">{item.title}</div>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {highAvailabilityItems.slice(3).map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-orange-200">
                      <div className="flex items-start gap-2">
                        <item.icon className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
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

            {/* Billing Solutions */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.virtualization.servicesSection.billing.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.virtualization.servicesSection.billing.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {billingItems.slice(0, 3).map((item, index) => (
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
                  {billingItems.slice(3).map((item, index) => (
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

            {/* Self-Management Panels */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-cyan-600 rounded-lg flex-shrink-0">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.virtualization.servicesSection.selfManagement.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.virtualization.servicesSection.selfManagement.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-cyan-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Users className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t(
                          'services.virtualization.servicesSection.selfManagement.customerPortal.title'
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {customerPortalItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-cyan-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-cyan-200">
                    <div className="flex items-start gap-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t(
                          'services.virtualization.servicesSection.selfManagement.adminDashboard.title'
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {adminDashboardItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-cyan-600">•</span>
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
              {t('services.virtualization.whyChooseUs.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.virtualization.whyChooseUs.subtitle')}
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
          <h2 className="text-3xl font-bold mb-4">{t('services.virtualization.cta.title')}</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {t('services.virtualization.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              {t('services.virtualization.cta.primaryButton')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              {t('services.virtualization.cta.secondaryButton')}
              <HardDrive className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
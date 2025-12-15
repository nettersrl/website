import { Button } from '@/components/ui/button';
import {
  Database,
  ArrowRight,
  Wrench,
  Gauge,
  GraduationCap,
  Server,
  HardDrive,
  Zap,
  CheckCircle,
  GitBranch,
  Shield,
  Globe,
  Layers,
  RefreshCw,
  BarChart3,
  Settings,
  FileText,
  TrendingUp,
  Network,
  Cpu
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function DatabaseAdministration() {
  const { t } = useTranslation();

  const designItems = [
    {
      title: t('services.dba.servicesSection.design.schemaNormalization.title'),
      description: t('services.dba.servicesSection.design.schemaNormalization.description')
    },
    {
      title: t('services.dba.servicesSection.design.documentModeling.title'),
      description: t('services.dba.servicesSection.design.documentModeling.description')
    },
    {
      title: t('services.dba.servicesSection.design.relationships.title'),
      description: t('services.dba.servicesSection.design.relationships.description')
    },
    {
      title: t('services.dba.servicesSection.design.scalability.title'),
      description: t('services.dba.servicesSection.design.scalability.description')
    },
    {
      title: t('services.dba.servicesSection.design.migration.title'),
      description: t('services.dba.servicesSection.design.migration.description')
    },
    {
      title: t('services.dba.servicesSection.design.bestPractices.title'),
      description: t('services.dba.servicesSection.design.bestPractices.description')
    }
  ];

  const maintenanceUtilItems = [
    t('services.dba.servicesSection.maintenance.customUtilities.monitoring'),
    t('services.dba.servicesSection.maintenance.customUtilities.healthCheck'),
    t('services.dba.servicesSection.maintenance.customUtilities.cleanup'),
    t('services.dba.servicesSection.maintenance.customUtilities.configManagement')
  ];

  const backupItems = [
    t('services.dba.servicesSection.maintenance.backup.highSpeed'),
    t('services.dba.servicesSection.maintenance.backup.incremental'),
    t('services.dba.servicesSection.maintenance.backup.pointInTime'),
    t('services.dba.servicesSection.maintenance.backup.validation')
  ];

  const tuningItems = [
    {
      icon: Cpu,
      title: t('services.dba.servicesSection.tuning.engineParams.title'),
      description: t('services.dba.servicesSection.tuning.engineParams.description')
    },
    {
      icon: BarChart3,
      title: t('services.dba.servicesSection.tuning.indexing.title'),
      description: t('services.dba.servicesSection.tuning.indexing.description')
    },
    {
      icon: RefreshCw,
      title: t('services.dba.servicesSection.tuning.clustering.title'),
      description: t('services.dba.servicesSection.tuning.clustering.description')
    },
    {
      icon: Globe,
      title: t('services.dba.servicesSection.tuning.geoReplication.title'),
      description: t('services.dba.servicesSection.tuning.geoReplication.description')
    },
    {
      icon: TrendingUp,
      title: t('services.dba.servicesSection.tuning.autoScaling.title'),
      description: t('services.dba.servicesSection.tuning.autoScaling.description')
    },
    {
      icon: Network,
      title: t('services.dba.servicesSection.tuning.reverseProxies.title'),
      description: t('services.dba.servicesSection.tuning.reverseProxies.description')
    },
    {
      icon: Layers,
      title: t('services.dba.servicesSection.tuning.connectionPooling.title'),
      description: t('services.dba.servicesSection.tuning.connectionPooling.description')
    },
    {
      icon: Zap,
      title: t('services.dba.servicesSection.tuning.caching.title'),
      description: t('services.dba.servicesSection.tuning.caching.description')
    },
    {
      icon: HardDrive,
      title: t('services.dba.servicesSection.tuning.hardwareGaps.title'),
      description: t('services.dba.servicesSection.tuning.hardwareGaps.description')
    },
    {
      icon: FileText,
      title: t('services.dba.servicesSection.tuning.queryOptimization.title'),
      description: t('services.dba.servicesSection.tuning.queryOptimization.description')
    }
  ];

  const trainingItems = [
    {
      title: t('services.dba.servicesSection.training.antiPatterns.title'),
      description: t('services.dba.servicesSection.training.antiPatterns.description')
    },
    {
      title: t('services.dba.servicesSection.training.performanceAnalysis.title'),
      description: t('services.dba.servicesSection.training.performanceAnalysis.description')
    },
    {
      title: t('services.dba.servicesSection.training.migrationBestPractices.title'),
      description: t('services.dba.servicesSection.training.migrationBestPractices.description')
    },
    {
      title: t('services.dba.servicesSection.training.monitoring.title'),
      description: t('services.dba.servicesSection.training.monitoring.description')
    },
    {
      title: t('services.dba.servicesSection.training.handsOnWorkshops.title'),
      description: t('services.dba.servicesSection.training.handsOnWorkshops.description')
    },
    {
      title: t('services.dba.servicesSection.training.customCurriculum.title'),
      description: t('services.dba.servicesSection.training.customCurriculum.description')
    }
  ];

  const whyChooseUsItems = [
    {
      icon: Shield,
      title: t('services.dba.whyChooseUs.dataIntegrity.title'),
      description: t('services.dba.whyChooseUs.dataIntegrity.description'),
      iconColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: t('services.dba.whyChooseUs.performanceObsessed.title'),
      description: t('services.dba.whyChooseUs.performanceObsessed.description'),
      iconColor: 'text-orange-600'
    },
    {
      icon: GraduationCap,
      title: t('services.dba.whyChooseUs.knowledgeTransfer.title'),
      description: t('services.dba.whyChooseUs.knowledgeTransfer.description'),
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Database className="mr-2 h-4 w-4" />
            {t('services.dba.badge')}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t('services.dba.title')}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t('services.dba.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              {t('services.dba.buttons.getStarted')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              {t('services.dba.buttons.contactUs')}
              <Database className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Database Technologies */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('services.dba.expertise.title')}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            {t('services.dba.expertise.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-blue-100 rounded-lg">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.dba.expertise.mysql.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.dba.expertise.mysql.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-indigo-100 rounded-lg">
                <Server className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.dba.expertise.postgresql.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.dba.expertise.postgresql.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-green-100 rounded-lg">
                <Layers className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.dba.expertise.mongodb.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.dba.expertise.mongodb.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-red-100 rounded-lg">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.dba.expertise.redis.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.dba.expertise.redis.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t('services.dba.servicesSection.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.dba.servicesSection.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* Database Design Engineering */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-600 rounded-lg flex-shrink-0">
                  <GitBranch className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.dba.servicesSection.design.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.dba.servicesSection.design.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {designItems.slice(0, 3).map((item, index) => (
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
                  {designItems.slice(3).map((item, index) => (
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

            {/* Database Maintenance & Administrative Tooling */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.dba.servicesSection.maintenance.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.dba.servicesSection.maintenance.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Settings className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.dba.servicesSection.maintenance.customUtilities.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {maintenanceUtilItems.map((item, index) => (
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
                      <HardDrive className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.dba.servicesSection.maintenance.backup.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {backupItems.map((item, index) => (
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

            {/* Database Performance Tuning */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-600 rounded-lg flex-shrink-0">
                  <Gauge className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.dba.servicesSection.tuning.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.dba.servicesSection.tuning.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {tuningItems.slice(0, 5).map((item, index) => (
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
                  {tuningItems.slice(5).map((item, index) => (
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

            {/* Technical Debt Reduction Classrooms */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.dba.servicesSection.training.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.dba.servicesSection.training.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {trainingItems.slice(0, 3).map((item, index) => (
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
                  {trainingItems.slice(3).map((item, index) => (
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
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 p-8 border border-border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t('services.dba.whyChooseUs.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.dba.whyChooseUs.subtitle')}
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
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t('services.dba.cta.title')}</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {t('services.dba.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              {t('services.dba.cta.primaryButton')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              {t('services.dba.cta.secondaryButton')}
              <Database className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Button } from '@/components/ui/button';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Eye,
  GraduationCap,
  Users,
  MessageSquare,
  Globe,
  CheckCircle,
  Zap,
  Shield,
  AlertCircle,
  TrendingUp,
  Clock,
  FileText,
  Layers,
  Settings,
  Database,
  Radio
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ObservabilitySRE() {
  const { t } = useTranslation();

  const openSourceStackItems = [
    t('services.observabilitySRE.servicesSection.logMetricsInfra.openSourceStack.grafana'),
    t('services.observabilitySRE.servicesSection.logMetricsInfra.openSourceStack.loki'),
    t('services.observabilitySRE.servicesSection.logMetricsInfra.openSourceStack.prometheus'),
    t('services.observabilitySRE.servicesSection.logMetricsInfra.openSourceStack.tempo'),
    t('services.observabilitySRE.servicesSection.logMetricsInfra.openSourceStack.opentelemetry')
  ];

  const enterpriseSolutionsItems = [
    t('services.observabilitySRE.servicesSection.logMetricsInfra.enterpriseSolutions.datadog'),
    t('services.observabilitySRE.servicesSection.logMetricsInfra.enterpriseSolutions.retention'),
    t('services.observabilitySRE.servicesSection.logMetricsInfra.enterpriseSolutions.compliance'),
    t('services.observabilitySRE.servicesSection.logMetricsInfra.enterpriseSolutions.ingestion'),
    t('services.observabilitySRE.servicesSection.logMetricsInfra.enterpriseSolutions.multitenancy')
  ];

  const sreTrainingItems = [
    {
      icon: GraduationCap,
      title: t('services.observabilitySRE.servicesSection.srePrinciples.trainingPrograms.title'),
      description: t(
        'services.observabilitySRE.servicesSection.srePrinciples.trainingPrograms.description'
      )
    },
    {
      icon: Clock,
      title: t('services.observabilitySRE.servicesSection.srePrinciples.onCallBestPractices.title'),
      description: t(
        'services.observabilitySRE.servicesSection.srePrinciples.onCallBestPractices.description'
      )
    },
    {
      icon: Layers,
      title: t('services.observabilitySRE.servicesSection.srePrinciples.tieredSupport.title'),
      description: t(
        'services.observabilitySRE.servicesSection.srePrinciples.tieredSupport.description'
      )
    },
    {
      icon: Users,
      title: t('services.observabilitySRE.servicesSection.srePrinciples.customerFacing.title'),
      description: t(
        'services.observabilitySRE.servicesSection.srePrinciples.customerFacing.description'
      )
    },
    {
      icon: MessageSquare,
      title: t('services.observabilitySRE.servicesSection.srePrinciples.internalCooperation.title'),
      description: t(
        'services.observabilitySRE.servicesSection.srePrinciples.internalCooperation.description'
      )
    },
    {
      icon: TrendingUp,
      title: t(
        'services.observabilitySRE.servicesSection.srePrinciples.continuousImprovement.title'
      ),
      description: t(
        'services.observabilitySRE.servicesSection.srePrinciples.continuousImprovement.description'
      )
    }
  ];

  const incidentResponseItems = [
    t('services.observabilitySRE.servicesSection.incidentManagement.incidentResponse.warRoom'),
    t(
      'services.observabilitySRE.servicesSection.incidentManagement.incidentResponse.commanderRole'
    ),
    t(
      'services.observabilitySRE.servicesSection.incidentManagement.incidentResponse.communication'
    ),
    t(
      'services.observabilitySRE.servicesSection.incidentManagement.incidentResponse.severityClassification'
    ),
    t('services.observabilitySRE.servicesSection.incidentManagement.incidentResponse.statusPage')
  ];

  const postIncidentItems = [
    t('services.observabilitySRE.servicesSection.incidentManagement.postIncident.blameless'),
    t('services.observabilitySRE.servicesSection.incidentManagement.postIncident.rca'),
    t('services.observabilitySRE.servicesSection.incidentManagement.postIncident.actionTracking'),
    t('services.observabilitySRE.servicesSection.incidentManagement.postIncident.knowledgeBase'),
    t('services.observabilitySRE.servicesSection.incidentManagement.postIncident.onboarding')
  ];

  const distributedOpsItems = [
    {
      title: t('services.observabilitySRE.servicesSection.distributedOps.multiRegion.title'),
      description: t(
        'services.observabilitySRE.servicesSection.distributedOps.multiRegion.description'
      )
    },
    {
      title: t('services.observabilitySRE.servicesSection.distributedOps.controlPlane.title'),
      description: t(
        'services.observabilitySRE.servicesSection.distributedOps.controlPlane.description'
      )
    },
    {
      title: t('services.observabilitySRE.servicesSection.distributedOps.gitops.title'),
      description: t('services.observabilitySRE.servicesSection.distributedOps.gitops.description')
    },
    {
      title: t('services.observabilitySRE.servicesSection.distributedOps.crossRegion.title'),
      description: t(
        'services.observabilitySRE.servicesSection.distributedOps.crossRegion.description'
      )
    },
    {
      title: t('services.observabilitySRE.servicesSection.distributedOps.edge.title'),
      description: t('services.observabilitySRE.servicesSection.distributedOps.edge.description')
    },
    {
      title: t('services.observabilitySRE.servicesSection.distributedOps.dr.title'),
      description: t('services.observabilitySRE.servicesSection.distributedOps.dr.description')
    }
  ];

  const corePrinciplesItems = [
    {
      icon: TrendingUp,
      title: t('services.observabilitySRE.corePrinciples.errorBudgets.title'),
      description: t('services.observabilitySRE.corePrinciples.errorBudgets.description'),
      iconColor: 'text-blue-600'
    },
    {
      icon: Eye,
      title: t('services.observabilitySRE.corePrinciples.slo.title'),
      description: t('services.observabilitySRE.corePrinciples.slo.description'),
      iconColor: 'text-green-600'
    },
    {
      icon: Zap,
      title: t('services.observabilitySRE.corePrinciples.toilReduction.title'),
      description: t('services.observabilitySRE.corePrinciples.toilReduction.description'),
      iconColor: 'text-orange-600'
    },
    {
      icon: Shield,
      title: t('services.observabilitySRE.corePrinciples.blamelessCulture.title'),
      description: t('services.observabilitySRE.corePrinciples.blamelessCulture.description'),
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Activity className="mr-2 h-4 w-4" />
            {t('services.observabilitySRE.badge')}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t('services.observabilitySRE.title')}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t('services.observabilitySRE.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              {t('services.observabilitySRE.buttons.getStarted')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              {t('services.observabilitySRE.buttons.contactUs')}
              <Activity className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* The Three Pillars */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('services.observabilitySRE.threePillars.title')}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            {t('services.observabilitySRE.threePillars.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('services.observabilitySRE.threePillars.logs.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.observabilitySRE.threePillars.logs.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 mb-4 mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('services.observabilitySRE.threePillars.metrics.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.observabilitySRE.threePillars.metrics.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Radio className="h-12 w-12 mb-4 mx-auto text-purple-600" />
              <h3 className="text-xl font-semibold mb-3">
                {t('services.observabilitySRE.threePillars.traces.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.observabilitySRE.threePillars.traces.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t('services.observabilitySRE.servicesSection.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.observabilitySRE.servicesSection.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* Log, Traces, Metrics Infrastructure */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-600 rounded-lg flex-shrink-0">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.observabilitySRE.servicesSection.logMetricsInfra.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.observabilitySRE.servicesSection.logMetricsInfra.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Layers className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t(
                          'services.observabilitySRE.servicesSection.logMetricsInfra.openSourceStack.title'
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {openSourceStackItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Settings className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t(
                          'services.observabilitySRE.servicesSection.logMetricsInfra.enterpriseSolutions.title'
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {enterpriseSolutionsItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* SRE Principles & Culture */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.observabilitySRE.servicesSection.srePrinciples.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.observabilitySRE.servicesSection.srePrinciples.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {sreTrainingItems.slice(0, 3).map((item, index) => (
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
                  {sreTrainingItems.slice(3).map((item, index) => (
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

            {/* Incident Management */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-red-600 rounded-lg flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.observabilitySRE.servicesSection.incidentManagement.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t(
                      'services.observabilitySRE.servicesSection.incidentManagement.description'
                    )}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2 mb-2">
                      <MessageSquare className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t(
                          'services.observabilitySRE.servicesSection.incidentManagement.incidentResponse.title'
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {incidentResponseItems.map((item, index) => (
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
                      <FileText className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t(
                          'services.observabilitySRE.servicesSection.incidentManagement.postIncident.title'
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {postIncidentItems.map((item, index) => (
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

            {/* Distributed Operations */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.observabilitySRE.servicesSection.distributedOps.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.observabilitySRE.servicesSection.distributedOps.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  {distributedOpsItems.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {distributedOpsItems.slice(3).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
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

        {/* SRE Principles */}
        <div className="bg-gray-50 p-8 border border-border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t('services.observabilitySRE.corePrinciples.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.observabilitySRE.corePrinciples.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {corePrinciplesItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <item.icon className={`h-8 w-8 mb-3 mx-auto ${item.iconColor}`} />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {t('services.observabilitySRE.cta.title')}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {t('services.observabilitySRE.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              {t('services.observabilitySRE.cta.primaryButton')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              {t('services.observabilitySRE.cta.secondaryButton')}
              <FileText className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
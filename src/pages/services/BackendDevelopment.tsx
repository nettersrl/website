import { Button } from '@/components/ui/button';
import {
  Server,
  ArrowRight,
  Code2,
  Users,
  Briefcase,
  GraduationCap,
  FileCode,
  GitBranch,
  Shield,
  Zap,
  CheckCircle,
  Target,
  Lightbulb,
  BookOpen
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function BackendDevelopment() {
  const { t } = useTranslation();

  const technicalDebtItems = [
    t('services.backend.servicesSection.technicalDebt.assessment.codebaseAnalysis'),
    t('services.backend.servicesSection.technicalDebt.assessment.classification'),
    t('services.backend.servicesSection.technicalDebt.assessment.roadmap'),
    t('services.backend.servicesSection.technicalDebt.assessment.metrics')
  ];

  const trainingItems = [
    t('services.backend.servicesSection.technicalDebt.training.curriculum'),
    t('services.backend.servicesSection.technicalDebt.training.inHouseRemote'),
    t('services.backend.servicesSection.technicalDebt.training.bestPractices'),
    t('services.backend.servicesSection.technicalDebt.training.handsOn')
  ];

  const whyChooseUsItems = [
    {
      icon: GitBranch,
      title: t('services.backend.whyChooseUs.modernPractices.title'),
      description: t('services.backend.whyChooseUs.modernPractices.description'),
      iconColor: 'text-blue-600'
    },
    {
      icon: Lightbulb,
      title: t('services.backend.whyChooseUs.innovation.title'),
      description: t('services.backend.whyChooseUs.innovation.description'),
      iconColor: 'text-purple-600'
    },
    {
      icon: Shield,
      title: t('services.backend.whyChooseUs.security.title'),
      description: t('services.backend.whyChooseUs.security.description'),
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Server className="mr-2 h-4 w-4" />
            {t('services.backend.badge')}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t('services.backend.title')}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t('services.backend.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              {t('services.backend.buttons.getStarted')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              {t('services.backend.buttons.contactUs')}
              <Server className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t('services.backend.techStack.title')}
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            {t('services.backend.techStack.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-orange-100 rounded-lg">
                <Code2 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.backend.techStack.rust.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.backend.techStack.rust.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-green-100 rounded-lg">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.backend.techStack.nodejs.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.backend.techStack.nodejs.description')}
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-blue-100 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.backend.techStack.golang.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.backend.techStack.golang.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t('services.backend.servicesSection.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.backend.servicesSection.subtitle')}
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
                    {t('services.backend.servicesSection.ic.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.backend.servicesSection.ic.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        {t('services.backend.servicesSection.ic.seamlessIntegration.title')}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('services.backend.servicesSection.ic.seamlessIntegration.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        {t('services.backend.servicesSection.ic.flexibleEngagement.title')}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('services.backend.servicesSection.ic.flexibleEngagement.description')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        {t('services.backend.servicesSection.ic.rapidOnboarding.title')}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('services.backend.servicesSection.ic.rapidOnboarding.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        {t('services.backend.servicesSection.ic.expertiseOnDemand.title')}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('services.backend.servicesSection.ic.expertiseOnDemand.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.backend.servicesSection.projectManagement.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.backend.servicesSection.projectManagement.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        {t(
                          'services.backend.servicesSection.projectManagement.completeOwnership.title'
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t(
                          'services.backend.servicesSection.projectManagement.completeOwnership.description'
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        {t(
                          'services.backend.servicesSection.projectManagement.architectureDesign.title'
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t(
                          'services.backend.servicesSection.projectManagement.architectureDesign.description'
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        {t(
                          'services.backend.servicesSection.projectManagement.teamCoordination.title'
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t(
                          'services.backend.servicesSection.projectManagement.teamCoordination.description'
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        {t(
                          'services.backend.servicesSection.projectManagement.qualityAssurance.title'
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t(
                          'services.backend.servicesSection.projectManagement.qualityAssurance.description'
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        {t(
                          'services.backend.servicesSection.projectManagement.devopsIntegration.title'
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t(
                          'services.backend.servicesSection.projectManagement.devopsIntegration.description'
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        {t(
                          'services.backend.servicesSection.projectManagement.riskManagement.title'
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t(
                          'services.backend.servicesSection.projectManagement.riskManagement.description'
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Debt & Training */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t('services.backend.servicesSection.technicalDebt.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('services.backend.servicesSection.technicalDebt.description')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <FileCode className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.backend.servicesSection.technicalDebt.assessment.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {technicalDebtItems.map((item, index) => (
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
                      <BookOpen className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">
                        {t('services.backend.servicesSection.technicalDebt.training.title')}
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      {trainingItems.map((item, index) => (
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
              {t('services.backend.whyChooseUs.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {t('services.backend.whyChooseUs.subtitle')}
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
          <h2 className="text-3xl font-bold mb-4">{t('services.backend.cta.title')}</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {t('services.backend.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              {t('services.backend.cta.primaryButton')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              {t('services.backend.cta.secondaryButton')}
              <FileCode className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
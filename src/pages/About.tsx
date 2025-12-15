import {
  Terminal,
  Users,
  Target,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  Mail
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { EmailDisplay } from '@/components/EmailDisplay';

export function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: t('about.values.precision.title'),
      description: t('about.values.precision.description')
    },
    {
      icon: Zap,
      title: t('about.values.efficiency.title'),
      description: t('about.values.efficiency.description')
    },
    {
      icon: Shield,
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description')
    },
    {
      icon: Globe,
      title: t('about.values.scale.title'),
      description: t('about.values.scale.description')
    }
  ];

  const achievements = [
    t('about.achievements.companiesServed'),
    t('about.achievements.uptime'),
    t('about.achievements.projectsDelivered'),
    t('about.achievements.support')
  ];

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Users className="mr-2 h-4 w-4" />
            {t('about.badge')}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t('about.title')} <br />
              <span className="text-muted-foreground">{t('about.titleHighlight')}</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              {t('about.subtitle')}
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 mb-16">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {t('about.mission.heading')}
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              {t('about.mission.paragraph1')}
            </p>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              {t('about.mission.paragraph2')}
            </p>
          </div>
          <div className="bg-muted/30 p-8 border border-border">
            <h3 className="text-xl font-semibold mb-6">{t('about.achievements.heading')}</h3>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              {t('about.values.heading')}
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              {t('about.values.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-muted/30 p-6 border border-border hover:border-border/60 transition-colors duration-200"
              >
                <value.icon className="h-8 w-8 text-muted-foreground mb-4" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-muted/30 p-8 border border-border text-center">
          <Terminal className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            {t('about.cta.heading')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-[500px] mx-auto">
            {t('about.cta.description')}
          </p>
          <div className="flex justify-center items-center space-x-3 text-muted-foreground">
            <Mail className="h-6 w-6" />
            <EmailDisplay className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
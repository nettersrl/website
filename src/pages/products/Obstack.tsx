import { Button } from '@/components/ui/button';
import {
  BarChart3,
  ArrowRight,
  Activity,
  Database,
  Zap,
  CheckCircle,
  Target,
  Lightbulb,
  GraduationCap,
  Settings,
  Globe,
  Code2,
  AlertTriangle,
  Gauge,
  TrendingUp
} from 'lucide-react';

export function Obstack() {

  const coreFeatures = [
    {
      icon: Activity,
      title: 'Logs, Metrics & Traces',
      description: 'Complete telemetry data collection from distributed applications with seamless ingestion and storage.',
      iconColor: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Gauge,
      title: 'Performance Monitoring',
      description: 'Real-time system performance tracking to identify bottlenecks and optimize resource utilization.',
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Resolution',
      description: 'Quickly resolve incidents and reduce downtime with comprehensive visibility into your systems.',
      iconColor: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: TrendingUp,
      title: 'Root Cause Analysis',
      description: 'Accurate diagnosis of issues with correlated logs, metrics, and traces in a single platform.',
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  const services = [
    {
      icon: Settings,
      title: 'Full Setup Support',
      description: 'We handle the complexity of initial setup, ensuring your observability stack is configured correctly from day one.',
      items: [
        'Infrastructure deployment',
        'Component configuration',
        'Storage optimization',
        'Security hardening'
      ]
    },
    {
      icon: Code2,
      title: 'Agent Configuration',
      description: 'Expert configuration of data collection agents for optimal data flow and minimal performance impact.',
      items: [
        'OpenTelemetry integration',
        'Custom instrumentation',
        'Sampling strategies',
        'Data pipeline optimization'
      ]
    },
    {
      icon: Target,
      title: 'Best Practices',
      description: 'Guidance on what to log, what to track, and how to maximize value while minimizing noise.',
      items: [
        'Log structuring standards',
        'Metric naming conventions',
        'Trace context propagation',
        'Alert threshold tuning'
      ]
    },
    {
      icon: Globe,
      title: 'Custom Integrations',
      description: 'Seamless integration with your existing tools and third-party software ecosystems.',
      items: [
        'API integrations',
        'Custom exporters',
        'Dashboard templates',
        'Alerting workflows'
      ]
    }
  ];

  const whyChooseItems = [
    {
      icon: Zap,
      title: 'Built for Scale',
      description: 'Engineered entirely in Golang for exceptional performance and efficiency, handling massive data volumes with ease.',
      iconColor: 'text-red-600'
    },
    {
      icon: Database,
      title: 'Production-Grade',
      description: 'Battle-tested observability stack designed for mission-critical applications and enterprise workloads.',
      iconColor: 'text-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Complete Visibility',
      description: 'End-to-end observability across your entire distributed application stack with unified data visualization.',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <BarChart3 className="mr-2 h-4 w-4" />
            Observability Platform
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Obstack
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Production-grade observability stack engineered to ingest, store, and visualize data from distributed applications
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
              <BarChart3 className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-4 text-center">
              Operational Excellence Through Observability
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-center">
              If you're a software company, you know that storing logs, metrics, and traces is non-negotiable.
              You don't do it for the sake of it—you do it for operational excellence.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center bg-blue-600">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Resolve Incidents Quickly</h3>
                <p className="text-sm text-muted-foreground">Reduce downtime with rapid incident detection and resolution</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center bg-purple-600">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Accurate Root Cause Analysis</h3>
                <p className="text-sm text-muted-foreground">Identify and fix issues at their source with comprehensive data</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 flex items-center justify-center bg-green-600">
                  <Gauge className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Monitor & Optimize</h3>
                <p className="text-sm text-muted-foreground">Track system performance and optimize resource utilization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Built for Modern Infrastructure
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Complete observability solution designed for scale and efficiency, built entirely in Golang
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
                <div className={`h-12 w-12 mb-4 flex items-center justify-center ${feature.bgColor}`}>
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              More Than Just Technology
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Netter offers a complete package—technology plus expert guidance to ensure your success
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-blue-600 flex-shrink-0">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold tracking-tight mb-2">{service.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academy Section */}
        <div className="mb-16 bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 flex items-center justify-center bg-purple-600 flex-shrink-0">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                Coming Soon: Netter Academy
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We're launching an educational hub to help your teams master Grafana, query data effectively,
                and get the most out of your observability stack.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 border border-purple-200">
                  <h3 className="font-semibold mb-2">Grafana Mastery</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn to build powerful dashboards and visualizations
                  </p>
                </div>
                <div className="bg-white p-4 border border-purple-200">
                  <h3 className="font-semibold mb-2">Query Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Master PromQL, LogQL, and other query languages
                  </p>
                </div>
                <div className="bg-white p-4 border border-purple-200">
                  <h3 className="font-semibold mb-2">Best Practices</h3>
                  <p className="text-sm text-muted-foreground">
                    Implement industry-leading observability patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 p-8 border border-border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Why Choose Obstack
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Built with modern technology and backed by expert support
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="bg-white p-6">
                <item.icon className={`h-8 w-8 mb-3 ${item.iconColor}`} />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Visibility?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join forward-thinking software companies that trust Obstack for their observability needs.
            Get started today and transform how you monitor, debug, and optimize your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              View Demo
              <Activity className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

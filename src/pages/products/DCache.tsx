import { Button } from '@/components/ui/button';
import {
  Zap,
  ArrowRight,
  Database,
  Gauge,
  CheckCircle,
  Shield,
  Lightbulb,
  TrendingUp,
  Server,
  Code2,
  BarChart3,
  Clock,
  Layers,
  RefreshCw,
  Lock,
  GitBranch
} from 'lucide-react';

export function DCache() {

  const coreFeatures = [
    {
      icon: Zap,
      title: 'Sub-Millisecond Latency',
      description: 'Accelerate query response times from hundreds of milliseconds to under 15ms with intelligent query result caching.',
      iconColor: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: RefreshCw,
      title: 'Automatic Cache Invalidation',
      description: 'No manual TTL management. DCache automatically refreshes cached results by monitoring database changes in real-time.',
      iconColor: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Code2,
      title: 'Zero Code Changes',
      description: 'Drop-in compatibility with MySQL and PostgreSQL. Simply update your connection string—no application rewrites required.',
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: TrendingUp,
      title: 'Scale Up to 100x',
      description: 'Handle dramatically higher read workloads without adding expensive database replicas or upgrading to larger instances.',
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const keyBenefits = [
    {
      icon: Database,
      title: 'Wire-Compatible Proxy',
      description: 'Works seamlessly as a wire-compatible proxy between your application and database. No driver changes, no ORM modifications, no architectural rewrites.',
      points: [
        'PostgreSQL wire protocol support',
        'MySQL wire protocol support',
        'Compatible with all SQL clients and ORMs',
        'Transparent to application layer'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Intelligent Cache Management',
      description: 'DCache monitors your database replication stream to automatically invalidate and refresh cached query results when underlying data changes.',
      points: [
        'Real-time replication stream monitoring',
        'Automatic cache invalidation on data changes',
        'Incremental cache updates',
        'No stale data with proper consistency guarantees'
      ]
    },
    {
      icon: Gauge,
      title: 'Massive Performance Gains',
      description: 'Transform slow database queries into lightning-fast cached responses, dramatically improving application performance and user experience.',
      points: [
        'Reduce query latency by 90%+',
        'Handle 10-100x more concurrent requests',
        'Eliminate database bottlenecks',
        'Improve application responsiveness'
      ]
    },
    {
      icon: Server,
      title: 'Cost Optimization',
      description: 'Reduce database infrastructure costs by up to 70% by eliminating the need for expensive read replicas and oversized primary databases.',
      points: [
        'Reduce read replica count',
        'Downsize primary database instances',
        'Lower cloud infrastructure costs',
        'Maximize existing hardware utilization'
      ]
    }
  ];

  const useCases = [
    {
      icon: BarChart3,
      title: 'Analytics Dashboards',
      description: 'Speed up dashboard queries that aggregate large datasets, delivering real-time insights without database strain.'
    },
    {
      icon: Code2,
      title: 'API Backends',
      description: 'Accelerate frequently-called API endpoints that read from the database, improving response times and throughput.'
    },
    {
      icon: Layers,
      title: 'E-commerce Platforms',
      description: 'Cache product catalogs, inventory queries, and pricing data to handle high-traffic periods without performance degradation.'
    },
    {
      icon: GitBranch,
      title: 'Multi-Tenant SaaS',
      description: 'Efficiently serve repetitive queries across thousands of tenants while maintaining data consistency and isolation.'
    }
  ];

  const technicalDetails = [
    {
      title: 'Supported Databases',
      items: [
        'PostgreSQL (versions 11, 12, 13, 14, 15, 16)',
        'MySQL (versions 5.7, 8.0)',
        'Amazon RDS for PostgreSQL and MySQL',
        'Amazon Aurora PostgreSQL and MySQL',
        'Google Cloud SQL',
        'Azure Database for PostgreSQL and MySQL'
      ]
    },
    {
      title: 'Deployment Options',
      items: [
        'Self-hosted on-premises deployment',
        'Cloud deployment (AWS, GCP, Azure)',
        'Managed DCache service with SLA',
        'High availability configurations',
        'Multi-region support',
        'VPC and private network deployment'
      ]
    },
    {
      title: 'Security & Compliance',
      items: [
        'TLS/SSL encryption in transit',
        'Encrypted connections to upstream database',
        'Role-based access control',
        'SOC 2 Type II compliance',
        'Audit logging and monitoring',
        'Data residency compliance'
      ]
    }
  ];

  const whyChooseItems = [
    {
      icon: Shield,
      title: 'Production-Ready',
      description: 'Battle-tested caching engine designed for mission-critical production workloads with comprehensive security and reliability features.',
      iconColor: 'text-green-600'
    },
    {
      icon: Lightbulb,
      title: 'Developer-Friendly',
      description: 'Zero learning curve. Works with your existing database tools, ORMs, and application code without any modifications.',
      iconColor: 'text-red-600'
    },
    {
      icon: Lock,
      title: 'Consistency Guaranteed',
      description: 'Unlike traditional caching layers, DCache ensures data consistency by automatically invalidating stale cache entries.',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Zap className="mr-2 h-4 w-4" />
            Database Caching Solution
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              DCache
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              High-performance database caching for MySQL and PostgreSQL with automatic invalidation and zero code changes
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
              <Database className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-4 text-center">
              Accelerate Your Database Without Changing Your Code
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-center">
              DCache is a wire-compatible caching layer that sits between your application and database,
              delivering sub-millisecond query response times while automatically maintaining data consistency.
              Simply update your connection string—no code changes required.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">100x</div>
                <p className="text-sm text-muted-foreground">Scale increase for read workloads</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">70%</div>
                <p className="text-sm text-muted-foreground">Reduction in infrastructure costs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">&lt;15ms</div>
                <p className="text-sm text-muted-foreground">Query response latency</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Powerful Features, Zero Complexity
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              DCache delivers enterprise-grade database caching without the operational overhead of traditional caching solutions
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

        {/* Key Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              How DCache Works
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Intelligent caching that automatically stays in sync with your database
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-blue-600 flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold tracking-tight mb-2">{benefit.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                  {benefit.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Perfect For These Workloads
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              DCache excels at accelerating read-heavy database workloads across various application types
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-red-100 flex-shrink-0">
                    <useCase.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="mb-16 bg-gray-50 p-8 border border-border">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Technical Specifications
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Enterprise-ready deployment with comprehensive database and platform support
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {technicalDetails.map((section, index) => (
              <div key={index} className="bg-white p-6 border border-border">
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Why Choose DCache
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Built for production workloads with enterprise-grade reliability and security
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

        {/* How It Works Diagram */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Simple Architecture, Powerful Results
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground mb-8">
              DCache sits between your application and database as a transparent caching layer
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="h-20 w-20 mx-auto mb-4 flex items-center justify-center bg-purple-600">
                  <Code2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Your Application</h3>
                <p className="text-sm text-muted-foreground">No code changes required</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto mb-4 flex items-center justify-center bg-blue-600">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold mb-2">DCache Layer</h3>
                <p className="text-sm text-muted-foreground">Intelligent query caching</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto mb-4 flex items-center justify-center bg-green-600">
                  <Database className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Your Database</h3>
                <p className="text-sm text-muted-foreground">MySQL or PostgreSQL</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                <Clock className="inline h-4 w-4 mr-1" />
                Queries are cached automatically. Changes trigger instant cache invalidation via replication stream monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Database?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get started with DCache today and experience sub-millisecond query response times
            with zero code changes. Join companies that have scaled their databases 100x while
            reducing infrastructure costs by 70%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              Schedule Demo
              <Database className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

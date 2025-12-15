import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Zap,
  Globe,
  Lock,
  GitBranch,
  Server,
  Cloud,
  Shield,
  Gauge,
  CheckCircle,
  Sparkles,
  Rocket,
  Radio
} from 'lucide-react';

export function Hadron() {

  const coreCapabilities = [
    {
      icon: Zap,
      title: 'Sub-Second Cold Starts',
      description: 'MicroVM technology delivers lightning-fast cold starts under 100ms, eliminating the wait time of traditional serverless platforms.',
      iconColor: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Globe,
      title: 'Deploy Anywhere',
      description: 'Run on-premises, in your own cloud, at the edge, or across multiple regions. True portability without vendor lock-in.',
      iconColor: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Lock,
      title: 'Hardware-Level Isolation',
      description: 'Each function runs in its own microVM with complete isolation, delivering security guarantees beyond containers.',
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Gauge,
      title: 'Extreme Density',
      description: 'Pack thousands of microVMs on a single host with minimal overhead, maximizing resource utilization and reducing costs.',
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  const technicalHighlights = [
    {
      icon: Server,
      title: 'MicroVM Architecture',
      description: 'Built on cutting-edge microVM technology combining the speed of containers with the security of traditional VMs.',
      features: [
        'Firecracker and Cloud Hypervisor support',
        'Minimal memory footprint (< 5MB per instance)',
        'Hardware-enforced isolation boundaries',
        'Instant snapshot and restore capabilities'
      ]
    },
    {
      icon: GitBranch,
      title: 'Multi-Runtime Support',
      description: 'Run functions in any language or runtime without compatibility concerns. Bring your own container or use pre-built runtimes.',
      features: [
        'Node.js, Python, Go, Rust, Java, .NET',
        'Custom container images',
        'WebAssembly (WASM) support',
        'Native binary execution'
      ]
    },
    {
      icon: Radio,
      title: 'Distributed Execution',
      description: 'Orchestrate function execution across globally distributed infrastructure with intelligent routing and load balancing.',
      features: [
        'Geo-aware function placement',
        'Automatic failover and redundancy',
        'Edge computing capabilities',
        'Multi-region coordination'
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Zero-trust architecture with comprehensive security controls designed for regulated industries and sensitive workloads.',
      features: [
        'Encrypted execution environments',
        'Network isolation and microsegmentation',
        'Audit logging and compliance reporting',
        'Role-based access control (RBAC)'
      ]
    }
  ];

  const deploymentOptions = [
    {
      title: 'Self-Hosted',
      description: 'Deploy on your own infrastructure',
      features: [
        'Full control and customization',
        'Data sovereignty compliance',
        'Private network deployment',
        'Custom hardware optimization'
      ],
      icon: Server
    },
    {
      title: 'Managed Cloud',
      description: 'Let us handle the operations',
      features: [
        '99.99% availability SLA',
        'Automatic scaling and updates',
        'Global edge network',
        '24/7 expert support'
      ],
      icon: Cloud
    },
    {
      title: 'Hybrid Model',
      description: 'Best of both worlds',
      features: [
        'On-premises control plane',
        'Cloud burst capabilities',
        'Unified monitoring and billing',
        'Seamless workload migration'
      ],
      icon: GitBranch
    }
  ];

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Sparkles className="mr-2 h-4 w-4" />
            Next-Generation Serverless Platform
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Hadron
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              The serverless platform you can host anywhere. Built on microVM technology,
              Hadron delivers the developer experience of AWS Lambda with the freedom to run
              on your infrastructure—cloud, on-premises, or at the edge.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              Request Early Access
              <Rocket className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Groundbreaking Performance
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              MicroVM technology delivers unmatched performance, security, and flexibility
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCapabilities.map((capability, index) => (
              <div key={index} className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
                <div className={`h-12 w-12 mb-4 flex items-center justify-center ${capability.bgColor}`}>
                  <capability.icon className={`h-6 w-6 ${capability.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Deep Dive */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Built for the Future
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Enterprise-grade architecture designed for maximum flexibility and control
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {technicalHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 border border-border"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-blue-600 flex-shrink-0">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold tracking-tight mb-2">
                      {highlight.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                  {highlight.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Options */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Deploy Your Way
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Choose the deployment model that fits your organization's needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {deploymentOptions.map((option, index) => (
              <div
                key={index}
                className="p-6 border border-border bg-white hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 mb-4 flex items-center justify-center bg-red-100">
                  <option.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Be Among the First</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Hadron is currently in private beta. Join our early access program to get hands-on
            with the future of serverless computing and help shape the platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Early Access
              <Rocket className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

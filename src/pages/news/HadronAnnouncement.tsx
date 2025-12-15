import { Button } from '@/components/ui/button';
import { ArrowLeft, Layers, Calendar, Tag, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HadronAnnouncement() {

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>December 10, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>Announcement</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Hadron: The Future of Serverless Computing
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're excited to announce Hadron, our next-generation serverless platform that brings
            the power of AWS Lambda to your infrastructure—anywhere you want to run it.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border mb-8">
            <Rocket className="h-12 w-12 text-purple-600 mb-4" />
            <p className="text-lg font-semibold mb-2">Breaking Free from Vendor Lock-In</p>
            <p className="text-muted-foreground">
              Serverless computing has revolutionized application development, but it's been locked to
              cloud providers. Hadron changes that by bringing serverless to your infrastructure.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Built on MicroVM Technology</h2>
          <p>
            Hadron leverages cutting-edge microVM technology to deliver sub-second cold starts with
            hardware-level isolation. Each function runs in its own isolated microVM, providing security
            guarantees beyond traditional containers while maintaining incredible performance.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Deploy Anywhere</h2>
          <p>
            Whether you need to run functions on-premises for compliance, at the edge for low latency,
            or across multiple cloud providers for redundancy—Hadron makes it possible. True portability
            without sacrificing the developer experience.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Key Features</h2>
          <ul className="space-y-2 my-4">
            <li><strong>Sub-100ms Cold Starts:</strong> Faster than traditional serverless platforms</li>
            <li><strong>Hardware-Level Isolation:</strong> Security beyond containers</li>
            <li><strong>Extreme Density:</strong> Run 10,000+ functions on a single host</li>
            <li><strong>Multi-Runtime Support:</strong> Any language, any container, WASM, or native binaries</li>
            <li><strong>Zero Vendor Lock-In:</strong> Deploy on any infrastructure</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Private Beta Program</h2>
          <p>
            Hadron is currently in private beta. We're working with select partners to refine the platform
            and ensure it meets the demanding requirements of production workloads. If you're interested in
            being among the first to experience the future of serverless computing, we'd love to hear from you.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white mt-8">
            <h3 className="text-xl font-bold mb-4">Join the Beta Program</h3>
            <p className="mb-4 opacity-90">
              Limited spots available. Request early access to Hadron and help shape the future of serverless.
            </p>
            <Link to="/products/hadron">
              <Button size="lg" variant="secondary">
                Learn More About Hadron
                <Layers className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

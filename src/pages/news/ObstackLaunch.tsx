import { Button } from '@/components/ui/button';
import { ArrowLeft, BarChart3, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ObstackLaunch() {

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
              <span>December 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>Product Launch</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Introducing Obstack: Production-Grade Observability for Modern Infrastructure
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            After months of development, we're thrilled to announce Obstack—a complete observability stack
            built for scale, efficiency, and operational excellence.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border mb-8">
            <BarChart3 className="h-12 w-12 text-red-600 mb-4" />
            <p className="text-lg font-semibold mb-2">The Challenge</p>
            <p className="text-muted-foreground">
              For software companies, storing logs, metrics, and traces isn't optional—it's essential for
              operational excellence. You need to resolve incidents quickly, perform accurate root cause
              analysis, and monitor system performance to optimize resources.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Enter Obstack</h2>
          <p>
            Obstack is a production-grade observability stack engineered to ingest, store, and visualize
            data from distributed applications. Built entirely in Golang, it's designed for scale and efficiency.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">More Than Just Technology</h2>
          <p>
            Technology is only half the equation. Netter offers a complete package to ensure your success:
          </p>
          <ul className="space-y-2 my-4">
            <li><strong>Full Setup Support:</strong> We handle the complexity of the initial setup</li>
            <li><strong>Agent Configuration:</strong> We help you configure agents for optimal data flow</li>
            <li><strong>Best Practices:</strong> We guide you on what to log to maximize value and minimize noise</li>
            <li><strong>Custom Integrations:</strong> We provide opportunities to add integrations towards third-party software</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Coming Soon: The Netter Academy</h2>
          <p>
            We're also launching an educational hub to help your teams master Grafana, query data effectively,
            and get the most out of your observability stack. Our academy will provide hands-on training and
            best practices to empower your teams.
          </p>

          <div className="bg-gray-50 p-6 border border-border mt-8">
            <h3 className="text-xl font-bold mb-4">Ready to Upgrade Your Visibility?</h3>
            <p className="text-muted-foreground mb-4">
              Learn more about Obstack and how it can transform your observability strategy.
            </p>
            <Link to="/products/obstack">
              <Button size="lg">
                Explore Obstack
                <BarChart3 className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

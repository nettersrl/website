import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, Calendar, Tag, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DCacheRelease() {

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
              <span>November 28, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>Product Launch</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            DCache: Accelerate Your Database with Zero Code Changes
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Today we're launching DCache, a high-performance database caching solution that delivers
            sub-millisecond query response times without requiring any application code changes.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border mb-8">
            <Zap className="h-12 w-12 text-green-600 mb-4" />
            <p className="text-lg font-semibold mb-2">The Problem with Traditional Caching</p>
            <p className="text-muted-foreground">
              Traditional caching solutions require significant development effort: you need to identify
              what to cache, manage TTLs, handle cache invalidation, and deal with stale data. It's complex,
              error-prone, and takes valuable engineering time.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">A Revolutionary Approach</h2>
          <p>
            DCache takes a fundamentally different approach. It sits as a wire-compatible proxy between
            your application and database, automatically caching query results and intelligently invalidating
            them when the underlying data changes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Key Benefits</h2>
          <ul className="space-y-2 my-4">
            <li><strong>Zero Code Changes:</strong> Simply update your connection string</li>
            <li><strong>Automatic Cache Invalidation:</strong> No manual TTL management required</li>
            <li><strong>Sub-Millisecond Latency:</strong> Queries that took 250ms+ now return in under 15ms</li>
            <li><strong>100x Scale Increase:</strong> Handle dramatically higher read workloads</li>
            <li><strong>70% Cost Reduction:</strong> Eliminate expensive read replicas</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">How It Works</h2>
          <p>
            DCache monitors your database's replication stream to detect when data changes. When a change
            occurs, it automatically invalidates the relevant cached queries. This means you get the performance
            benefits of caching without the complexity of manual cache management or the risk of serving stale data.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Full Database Compatibility</h2>
          <p>
            DCache works with PostgreSQL and MySQL, including cloud-hosted versions like Amazon RDS, Aurora,
            Google Cloud SQL, and Azure Database. It integrates seamlessly with your existing ORM or database
            driver—no changes required.
          </p>

          <div className="bg-gray-50 p-6 border border-border mt-8">
            <h3 className="text-xl font-bold mb-4">Ready to Accelerate Your Database?</h3>
            <p className="text-muted-foreground mb-4">
              Start your free trial of DCache today and experience the performance boost firsthand.
            </p>
            <Link to="/products/dcache">
              <Button size="lg">
                Explore DCache
                <Database className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

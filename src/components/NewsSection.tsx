import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { newsArticles } from '@/config/news';
import { useTranslation } from 'react-i18next';

export function NewsSection() {
  const { t } = useTranslation();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Latest News
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Stay up to date with our latest product launches, announcements, and company news
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article) => (
            <Link
              key={article.id}
              to={article.href}
              className="group bg-white border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5" />
                    <span>{article.category}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                  {t(article.titleKey)}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {t(article.descriptionKey)}
                </p>

                <div className="flex items-center text-red-600 font-medium group-hover:gap-2 transition-all">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

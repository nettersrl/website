export interface NewsArticle {
  id: string;
  titleKey: string;
  descriptionKey: string;
  href: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'obstack-launch',
    titleKey: 'news.obstackLaunch.title',
    descriptionKey: 'news.obstackLaunch.description',
    href: '/news/obstack-launch',
    date: '2024-12-15',
    category: 'Product Launch'
  },
  {
    id: 'hadron-announcement',
    titleKey: 'news.hadronAnnouncement.title',
    descriptionKey: 'news.hadronAnnouncement.description',
    href: '/news/hadron-announcement',
    date: '2024-12-10',
    category: 'Announcement'
  },
  {
    id: 'dcache-release',
    titleKey: 'news.dcacheRelease.title',
    descriptionKey: 'news.dcacheRelease.description',
    href: '/news/dcache-release',
    date: '2024-11-28',
    category: 'Product Launch'
  }
];

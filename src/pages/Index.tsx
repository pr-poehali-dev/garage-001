import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const newsData = [
  {
    id: 1,
    title: 'Новый электромобиль Tesla Model S обновил рекорд скорости',
    excerpt: 'Tesla представила обновленную версию Model S Plaid с улучшенными характеристиками и рекордной скоростью разгона до 100 км/ч за 1.99 секунды.',
    category: 'Электромобили',
    date: '24 декабря 2025',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'BMW анонсировала линейку гибридных кроссоверов 2026',
    excerpt: 'Немецкий автопроизводитель представил новую серию гибридных SUV с увеличенным запасом хода и инновационной системой рекуперации энергии.',
    category: 'Новинки',
    date: '23 декабря 2025',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'Porsche 911 получил новую спортивную модификацию GT3 RS',
    excerpt: 'Легендарный спорткар Porsche 911 представлен в экстремальной версии GT3 RS с усовершенствованной аэродинамикой и мощностью 525 л.с.',
    category: 'Спорткары',
    date: '22 декабря 2025',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    title: 'Mercedes-Benz EQS: будущее премиум-сегмента уже здесь',
    excerpt: 'Флагманский электрический седан Mercedes-Benz EQS устанавливает новые стандарты роскоши и технологий в автомобильной индустрии.',
    category: 'Премиум',
    date: '21 декабря 2025',
    image: '/placeholder.svg'
  },
  {
    id: 5,
    title: 'Audi представила концепт автопилота следующего поколения',
    excerpt: 'Новая система автономного вождения от Audi обещает революционные возможности для безопасности и комфорта водителя.',
    category: 'Технологии',
    date: '20 декабря 2025',
    image: '/placeholder.svg'
  },
  {
    id: 6,
    title: 'Toyota Supra 2026: возвращение легенды в новом обличье',
    excerpt: 'Японский производитель представил обновленную версию культового спорткара с гибридной силовой установкой и современным дизайном.',
    category: 'Новинки',
    date: '19 декабря 2025',
    image: '/placeholder.svg'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  
  const categories = ['Все', 'Электромобили', 'Новинки', 'Спорткары', 'Премиум', 'Технологии'];
  
  const filteredNews = selectedCategory === 'Все' 
    ? newsData 
    : newsData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Car" size={32} className="text-accent" />
              <h1 className="text-2xl font-bold text-foreground">Garage001</h1>
            </div>
            <nav className="flex gap-8">
              <Link to="/" className="text-foreground hover:text-accent transition-colors font-medium">
                Главная
              </Link>
              <Link to="/contacts" className="text-muted-foreground hover:text-accent transition-colors font-medium">
                Контакты
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">
              Профессиональное сообщество
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Автомобильная индустрия: новости и обсуждения
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Следите за последними новостями автопрома, участвуйте в обсуждениях и делитесь опытом с единомышленниками
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Категории новостей</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="font-medium"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map(article => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video bg-muted">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </div>
                <CardTitle className="text-xl font-bold leading-tight">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {article.excerpt}
                </CardDescription>
                <Button variant="link" className="mt-4 px-0 text-accent">
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <Icon name="Inbox" size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-lg">
              В этой категории пока нет новостей
            </p>
          </div>
        )}
      </main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Car" size={24} className="text-accent" />
              <span className="font-bold text-foreground">Garage001</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 Garage001. Профессиональное автомобильное сообщество
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const forumCategories = [
  {
    id: 1,
    title: 'Общие обсуждения',
    description: 'Общение на любые автомобильные темы',
    topics: 245,
    posts: 1823,
    icon: 'MessageSquare',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Техническая помощь',
    description: 'Помощь в диагностике и ремонте автомобилей',
    topics: 412,
    posts: 3156,
    icon: 'Wrench',
    color: 'bg-orange-500'
  },
  {
    id: 3,
    title: 'Тюнинг и модификации',
    description: 'Обсуждение доработок и улучшений автомобилей',
    topics: 189,
    posts: 1432,
    icon: 'Settings',
    color: 'bg-purple-500'
  },
  {
    id: 4,
    title: 'Покупка и продажа',
    description: 'Объявления о купле-продаже автомобилей и запчастей',
    topics: 567,
    posts: 2145,
    icon: 'ShoppingCart',
    color: 'bg-green-500'
  }
];

const recentTopics = [
  {
    id: 1,
    title: 'Какое масло лучше выбрать для BMW 5 серии?',
    author: 'Александр М.',
    authorInitials: 'АМ',
    category: 'Техническая помощь',
    replies: 23,
    views: 456,
    lastActivity: '5 мин назад',
    isHot: true
  },
  {
    id: 2,
    title: 'Опыт установки турбокита на Subaru WRX',
    author: 'Дмитрий К.',
    authorInitials: 'ДК',
    category: 'Тюнинг и модификации',
    replies: 18,
    views: 289,
    lastActivity: '15 мин назад',
    isHot: false
  },
  {
    id: 3,
    title: 'Продаю Mercedes-Benz E-Class 2020, полная комплектация',
    author: 'Сергей В.',
    authorInitials: 'СВ',
    category: 'Покупка и продажа',
    replies: 12,
    views: 678,
    lastActivity: '1 час назад',
    isHot: false
  },
  {
    id: 4,
    title: 'Сравнение Tesla Model 3 и Polestar 2 - личный опыт',
    author: 'Елена П.',
    authorInitials: 'ЕП',
    category: 'Общие обсуждения',
    replies: 34,
    views: 892,
    lastActivity: '2 часа назад',
    isHot: true
  },
  {
    id: 5,
    title: 'Проблема с АКПП Toyota Camry - нужна помощь',
    author: 'Игорь Т.',
    authorInitials: 'ИТ',
    category: 'Техническая помощь',
    replies: 28,
    views: 534,
    lastActivity: '3 часа назад',
    isHot: true
  }
];

export default function Forum() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все темы');

  const filteredTopics = selectedCategory === 'Все темы'
    ? recentTopics
    : recentTopics.filter(topic => topic.category === selectedCategory);

  const categoryOptions = ['Все темы', ...forumCategories.map(cat => cat.title)];

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
              <Link to="/" className="text-muted-foreground hover:text-accent transition-colors font-medium">
                Главная
              </Link>
              <Link to="/forum" className="text-foreground hover:text-accent transition-colors font-medium">
                Форум
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
              Сообщество
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Форум автолюбителей
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Обсуждайте автомобили, делитесь опытом и получайте советы от профессионалов
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">Последние обсуждения</h3>
              <Button className="bg-accent hover:bg-accent/90">
                <Icon name="Plus" size={20} className="mr-2" />
                Создать тему
              </Button>
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category)}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredTopics.map(topic => (
                <Card key={topic.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {topic.isHot && (
                            <Badge variant="destructive" className="text-xs">
                              <Icon name="Flame" size={12} className="mr-1" />
                              Горячая
                            </Badge>
                          )}
                          <Badge variant="secondary" className="text-xs">
                            {topic.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight hover:text-accent cursor-pointer transition-colors">
                          {topic.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-accent/10 text-accent text-xs">
                            {topic.authorInitials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium text-foreground">{topic.author}</p>
                          <p className="text-muted-foreground text-xs">{topic.lastActivity}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="MessageCircle" size={16} />
                          <span>{topic.replies}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={16} />
                          <span>{topic.views}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTopics.length === 0 && (
              <Card>
                <CardContent className="py-16 text-center">
                  <Icon name="Inbox" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-lg">
                    В этой категории пока нет тем
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Категории форума</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {forumCategories.map(category => (
                  <div 
                    key={category.id} 
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 cursor-pointer transition-colors"
                  >
                    <div className={`p-2 rounded-lg ${category.color}/10`}>
                      <Icon name={category.icon as any} size={20} className={category.color.replace('bg-', 'text-')} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-foreground mb-1">
                        {category.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {category.description}
                      </p>
                      <div className="flex gap-3 text-xs text-muted-foreground">
                        <span>{category.topics} тем</span>
                        <span>·</span>
                        <span>{category.posts} сообщений</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Статистика форума</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="MessageSquare" size={18} />
                    <span className="text-sm">Всего тем</span>
                  </div>
                  <span className="font-bold text-foreground">1,413</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="MessageCircle" size={18} />
                    <span className="text-sm">Всего сообщений</span>
                  </div>
                  <span className="font-bold text-foreground">8,556</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Users" size={18} />
                    <span className="text-sm">Участников</span>
                  </div>
                  <span className="font-bold text-foreground">3,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="UserCheck" size={18} />
                    <span className="text-sm">Онлайн сейчас</span>
                  </div>
                  <span className="font-bold text-accent">127</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
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

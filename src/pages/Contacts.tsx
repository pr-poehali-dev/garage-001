import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Contacts() {
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
              <Link to="/forum" className="text-muted-foreground hover:text-accent transition-colors font-medium">
                Форум
              </Link>
              <Link to="/contacts" className="text-foreground hover:text-accent transition-colors font-medium">
                Контакты
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Мы всегда рады новым участникам сообщества и открыты для сотрудничества
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
              </div>
              <CardTitle className="text-xl">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Напишите нам на электронную почту для общих вопросов и предложений
              </p>
              <a 
                href="mailto:info@garage001.ru" 
                className="text-accent hover:underline font-medium"
              >
                info@garage001.ru
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
              </div>
              <CardTitle className="text-xl">Телефон</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Свяжитесь с нами по телефону в рабочие часы
              </p>
              <a 
                href="tel:+74951234567" 
                className="text-accent hover:underline font-medium"
              >
                +7 (495) 123-45-67
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
              </div>
              <CardTitle className="text-xl">Адрес</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Наш офис расположен в центре Москвы
              </p>
              <p className="font-medium text-foreground">
                г. Москва, ул. Автомобильная, д. 1<br />
                БЦ "Гараж", офис 101
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Icon name="Clock" size={24} className="text-accent" />
                </div>
              </div>
              <CardTitle className="text-xl">Часы работы</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Мы работаем в будние дни
              </p>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Понедельник - Пятница</p>
                <p className="text-foreground">09:00 - 18:00</p>
                <p className="text-muted-foreground mt-2">Суббота, Воскресенье: Выходной</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Присоединяйтесь к сообществу</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Станьте частью профессионального автомобильного сообщества. Делитесь опытом, участвуйте в обсуждениях и будьте в курсе последних новостей индустрии.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-accent hover:bg-accent/90">
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Регистрация
                </Button>
                <Button variant="outline">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Форум
                </Button>
              </div>
            </CardContent>
          </Card>
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
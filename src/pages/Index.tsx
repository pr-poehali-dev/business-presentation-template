import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 0, title: 'Титульный слайд' },
    { id: 1, title: 'О компании' },
    { id: 2, title: 'Услуги' },
    { id: 3, title: 'Контакты' }
  ];

  const services = [
    {
      icon: 'Handshake',
      title: 'Брокеридж и поиск новых клиентов',
      description: 'Профессиональный поиск и привлечение арендаторов для максимальной загрузки объектов',
      featured: true
    },
    {
      icon: 'Settings',
      title: 'Операционное управление',
      description: 'Ежедневное управление объектами, контроль за выполнением договорных обязательств и обеспечение бесперебойной работы',
      featured: true
    },
    {
      icon: 'Wrench',
      title: 'Техническое сопровождение',
      description: 'Техническое обслуживание и ремонт, профилактика и модернизация инженерных систем',
      featured: false
    },
    {
      icon: 'PieChart',
      title: 'Финансовое планирование и отчетность',
      description: 'Оптимизация доходов и расходов, разработка бюджета и финансовых стратегий',
      featured: true
    },
    {
      icon: 'TrendingUp',
      title: 'Повышение посещаемости',
      description: 'Разработка и реализация стратегий для увеличения потока посетителей',
      featured: false
    },
    {
      icon: 'Calculator',
      title: 'Бухгалтерское и налоговое сопровождение',
      description: 'Ведение финансовой отчетности, контроль затрат и подготовка документов',
      featured: false
    },
    {
      icon: 'Scale',
      title: 'Юридическое сопровождение сделок и договоров',
      description: 'Правовая поддержка всех аспектов управления недвижимостью',
      featured: false
    },
    {
      icon: 'Shield',
      title: 'Обеспечение безопасности и управление рисками',
      description: 'Комплексная защита объектов и минимизация потенциальных угроз',
      featured: false
    },
    {
      icon: 'FileSearch',
      title: 'Аудит процессов',
      description: 'Проведение комплексных проверок для повышения эффективности работы объектов и улучшения бизнес-процессов',
      featured: false
    }
  ];

  const additionalServices = [
    {
      icon: 'Users',
      title: 'Подготовка и подбор кадров',
      description: 'Поиск квалифицированных специалистов для эффективного управления'
    },
    {
      icon: 'FileText',
      title: 'Разработка внутренних инструкций и регламентов',
      description: 'Создание стандартов и процедур для оптимизации работы'
    },
    {
      icon: 'Workflow',
      title: 'Выстраивание рабочих процессов и автоматизация управления',
      description: 'Оптимизация бизнес-процессов с использованием современных технологий'
    }
  ];

  const stats = [
    { value: '₽12B+', label: 'Активов под управлением' },
    { value: '95%', label: 'Средняя заполняемость' },
    { value: '+28%', label: 'Рост стоимости за 3 года' },
    { value: '300+', label: 'Реализованных проектов' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="fixed top-8 right-8 z-50 flex gap-2">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(slide.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === slide.id
                ? 'bg-accent w-8'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Слайд ${slide.id + 1}`}
          />
        ))}
      </div>

      {currentSlide === 0 && (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden animate-fade-in">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/11a0fab9-ba09-4f23-8afc-26bbfb4868ad.jpg)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <div className="mb-6">
              <Icon name="Layers" size={80} className="mx-auto mb-6 text-accent" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              REALTY CAPITAL
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light">
              Инвестиционное управление коммерческой недвижимостью
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => setCurrentSlide(1)}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold"
              >
                Узнать больше
              </Button>
              <Button
                onClick={() => setCurrentSlide(3)}
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      )}

      {currentSlide === 1 && (
        <div className="min-h-screen py-20 px-4 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-primary mb-6">Наши преимущества</h2>
              <div className="w-24 h-1 bg-accent mx-auto" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="bg-white p-10 rounded-lg shadow-lg border-l-4 border-accent h-full flex flex-col justify-center">
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Мы предоставляем полный комплекс первоклассных услуг в сфере управления недвижимостью, основанных на уникальном опыте многолетней практики, безупречном профессионализме и высокой квалификации нашей команды.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-8">
                    Используя передовые технологии и инновационные методы, мы не только превосходим ожидания владельцев и резидентов, но и создаем персонализированные решения, идеально адаптированные к потребностям каждого клиента.
                  </p>
                  <div className="p-5 bg-accent/90 rounded-lg">
                    <p className="text-xl font-bold text-white text-center">Ваш успех — наш приоритет!</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="TrendingUp" size={28} className="text-accent" />
                  </div>
                  <span className="text-lg font-semibold text-primary">Максимизация доходов</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="BarChart" size={28} className="text-accent" />
                  </div>
                  <span className="text-lg font-semibold text-primary">Оптимизация расходов</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="Eye" size={28} className="text-accent" />
                  </div>
                  <span className="text-lg font-semibold text-primary">Прозрачность в работе</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="Shield" size={28} className="text-accent" />
                  </div>
                  <span className="text-lg font-semibold text-primary">Снижение рисков</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="Users" size={28} className="text-accent" />
                  </div>
                  <span className="text-lg font-semibold text-primary">Эффективное взаимодействие</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="Lightbulb" size={28} className="text-accent" />
                  </div>
                  <span className="text-lg font-semibold text-primary">Проверенные методы и инновационные решения</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="Heart" size={28} className="text-accent" />
                  </div>
                  <span className="text-lg font-semibold text-primary">Полная свобода и отсутствие беспокойства</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <Button
                onClick={() => setCurrentSlide(0)}
                variant="outline"
                size="lg"
              >
                <Icon name="ChevronLeft" size={20} />
                Назад
              </Button>
              <Button
                onClick={() => setCurrentSlide(2)}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Далее
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {currentSlide === 2 && (
        <div className="min-h-screen py-20 px-4 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-primary mb-4">Наши услуги</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Комплексные решения для управления недвижимостью любого типа
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative"
                >
                  {service.featured && (
                    <div className="absolute -top-3 right-6 bg-accent text-primary px-4 py-1 rounded-full text-sm font-semibold">
                      Популярная услуга
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-lg transition-colors ${
                      service.featured ? 'bg-accent/20 group-hover:bg-accent/30' : 'bg-accent/10 group-hover:bg-accent/20'
                    }`}>
                      <Icon name={service.icon} size={32} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-bold text-primary mb-8 text-center">Дополнительные услуги</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {additionalServices.map((service, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Icon name={service.icon} size={28} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-primary">
                          {service.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-r from-primary to-primary/90 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Нужна консультация?</h3>
                  <p className="text-lg opacity-90">
                    Свяжитесь с нами для обсуждения вашего проекта
                  </p>
                </div>
                <Button
                  onClick={() => setCurrentSlide(3)}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary font-semibold"
                >
                  Связаться
                  <Icon name="ArrowRight" size={20} />
                </Button>
              </div>
            </Card>

            <div className="flex justify-center gap-4 mt-12">
              <Button
                onClick={() => setCurrentSlide(2)}
                variant="outline"
                size="lg"
              >
                <Icon name="ChevronLeft" size={20} />
                Назад
              </Button>
              <Button
                onClick={() => setCurrentSlide(3)}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Далее
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {currentSlide === 3 && (
        <div className="min-h-screen py-20 px-4 animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-primary mb-4">Контакты</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-xl text-muted-foreground">
                Свяжитесь с нами удобным для вас способом
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@premiumrealty.ru</p>
                    <p className="text-muted-foreground">sales@premiumrealty.ru</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">
                      Москва, ул. Тверская, д. 1<br />
                      БЦ "Премиум", офис 501
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="Clock" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Режим работы</h4>
                    <p className="text-muted-foreground">
                      Пн-Пт: 9:00 - 19:00<br />
                      Сб-Вс: 10:00 - 16:00
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <Button
                onClick={() => setCurrentSlide(2)}
                variant="outline"
                size="lg"
              >
                <Icon name="ChevronLeft" size={20} />
                Назад
              </Button>
              <Button
                onClick={() => setCurrentSlide(0)}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                В начало
                <Icon name="Home" size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
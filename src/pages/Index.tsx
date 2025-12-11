import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: 'Handshake',
      title: 'Брокеридж и поиск новых клиентов',
      description: 'Профессиональный поиск и привлечение арендаторов для максимальной загрузки объектов'
    },
    {
      icon: 'Settings',
      title: 'Операционное управление',
      description: 'Ежедневное управление объектами, контроль за выполнением договорных обязательств и обеспечение бесперебойной работы'
    },
    {
      icon: 'Wrench',
      title: 'Техническое сопровождение',
      description: 'Техническое обслуживание и ремонт, профилактика и модернизация инженерных систем'
    },
    {
      icon: 'PieChart',
      title: 'Финансовое планирование и отчетность',
      description: 'Оптимизация доходов и расходов, разработка бюджета и финансовых стратегий'
    },
    {
      icon: 'TrendingUp',
      title: 'Повышение посещаемости',
      description: 'Разработка и реализация стратегий для увеличения потока посетителей'
    },
    {
      icon: 'Calculator',
      title: 'Бухгалтерское и налоговое сопровождение',
      description: 'Ведение финансовой отчетности, контроль затрат и подготовка документов'
    },
    {
      icon: 'Scale',
      title: 'Юридическое сопровождение сделок и договоров',
      description: 'Правовая поддержка всех аспектов управления недвижимостью'
    },
    {
      icon: 'Shield',
      title: 'Обеспечение безопасности и управление рисками',
      description: 'Комплексная защита объектов и минимизация потенциальных угроз'
    },
    {
      icon: 'Users',
      title: 'Подготовка и подбор кадров',
      description: 'Профессиональный рекрутинг и обучение персонала для эффективной работы объектов'
    }
  ];

  const additionalServices = [
    {
      icon: 'FileSearch',
      title: 'Аудит процессов',
      description: 'Проведение комплексных проверок для повышения эффективности работы объектов и улучшения бизнес-процессов'
    },
    {
      icon: 'FileText',
      title: 'Разработка внутренних инструкций и регламентов',
      description: 'Создание документации и стандартов работы для оптимизации бизнес-процессов'
    },
    {
      icon: 'Workflow',
      title: 'Выстраивание рабочих процессов и автоматизация управления',
      description: 'Оптимизация операционной деятельности и внедрение современных систем управления'
    }
  ];

  const stats = [
    { icon: 'DollarSign', value: '100 млн $', label: 'Объем активов под управлением' },
    { icon: 'Users', value: '12 млн', label: 'Посетителей в год' },
    { icon: 'Building2', value: '20+', label: 'Торговых объектов' },
    { icon: 'Award', value: '10 лет', label: 'На рынке' }
  ];

  const achievements = [
    { icon: 'Home', title: 'Более 10 объектов в управлении' },
    { icon: 'Award', title: '20 лет успешного бизнеса' },
    { icon: 'ShoppingBag', title: '12 лет в ритейле' },
    { icon: 'TrendingUp', title: '10 лет на рынке' },
    { icon: 'Users', title: 'Эффективная команда и проверенные эксперты' }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-accent/20 z-50">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-accent/90 rounded">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-wide">ПРЕМИУМ УПРАВЛЕНИЕ</span>
            </div>
            <div className="flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wider">
                О компании
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wider">
                Услуги
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wider">
                Контакты
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/image-07-12-25-10-47.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <div className="backdrop-blur-md rounded-xl border border-accent/30 shadow-2xl max-w-3xl mx-auto py-8 px-8 bg-transparent">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-1.5 bg-accent/90 rounded">
                <Icon name="Building2" size={32} className="text-white" />
              </div>
              <h1 className="text-5xl font-bold leading-none tracking-tight">
                ПРЕМИУМ<br />УПРАВЛЕНИЕ
              </h1>
            </div>
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mb-4" />
            <p className="text-lg font-medium tracking-widest uppercase text-white/90">
              Эффективность · Надежность · Результат
            </p>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <Icon name="ChevronDown" size={48} />
        </button>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-full">
                    <Icon name={stat.icon} size={48} />
                  </div>
                </div>
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-lg font-semibold opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all hover:-translate-y-1">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Icon name={achievement.icon} size={24} className="text-white" />
                  </div>
                  <span className="text-sm font-semibold text-white leading-tight">{achievement.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-6">О компании</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-12">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-xl text-foreground leading-relaxed">
                    Мы предоставляем полный комплекс первоклассных услуг в сфере управления недвижимостью, основанных на уникальном опыте многолетней практики, безупречном профессионализме и высокой квалификации нашей команды.
                  </p>
                </div>
                
                <div>
                  <p className="text-xl text-foreground leading-relaxed">
                    Используя передовые технологии и инновационные методы, мы не только превосходим ожидания владельцев и резидентов, но и создаем персонализированные решения, идеально адаптированные к потребностям каждого клиента.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Icon name="TrendingUp" size={28} className="text-accent" />
                  </div>
                  <span className="text-base font-semibold text-primary">Максимизация доходов</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Icon name="BarChart" size={28} className="text-accent" />
                  </div>
                  <span className="text-base font-semibold text-primary">Оптимизация расходов</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Icon name="Eye" size={28} className="text-accent" />
                  </div>
                  <span className="text-base font-semibold text-primary">Прозрачность в работе</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Icon name="ShieldCheck" size={28} className="text-accent" />
                  </div>
                  <span className="text-base font-semibold text-primary">Снижение рисков</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Icon name="Users" size={28} className="text-accent" />
                  </div>
                  <span className="text-base font-semibold text-primary">Эффективное взаимодействие</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Icon name="Lightbulb" size={28} className="text-accent" />
                  </div>
                  <span className="text-base font-semibold text-primary">Проверенные методы и инновационные решения</span>
                </div>
              </div>

              <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Icon name="Shield" size={28} className="text-accent" />
                  </div>
                  <span className="text-base font-semibold text-primary">Полная свобода и одновременно отсутствие беспокойства за свой актив</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-6">Основные услуги</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon name={service.icon} size={32} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-primary leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-6">Дополнительные услуги</h3>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon name={service.icon} size={32} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-primary leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-6">Контакты</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Icon name="MapPin" size={32} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Адрес</h4>
                  <p className="text-muted-foreground">
                    Москва, Вернадского проспект, д. 6<br />
                    БЦ "Капитолий"
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Icon name="Clock" size={32} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Режим работы</h4>
                  <p className="text-muted-foreground">
                    Пн-Пт: 9:00 - 18:00<br />
                    Сб-Вс: выходной
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Icon name="Mail" size={32} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Email</h4>
                  <p className="text-muted-foreground">ALL@veterok.local</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Phone" size={24} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 bg-accent rounded-lg">
              <Icon name="Building2" size={32} />
            </div>
            <span className="text-2xl font-black">ПРЕМИУМ УПРАВЛЕНИЕ</span>
          </div>
          <p className="text-lg opacity-90">Эффективность · Надежность · Результат</p>
          <p className="text-sm opacity-75 mt-6">© 2024 Премиум Управление. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
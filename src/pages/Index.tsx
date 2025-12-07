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
      icon: 'DollarSign',
      title: 'Объем активов под управлением — 100 млн $'
    },
    {
      icon: 'Users',
      title: '12 миллионов посетителей в год'
    },
    {
      icon: 'Building2',
      title: '20 торговых объектов'
    },
    {
      icon: 'Home',
      title: 'Более 10 объектов в управлении'
    },
    {
      icon: 'Award',
      title: '20 лет успешного бизнеса'
    },
    {
      icon: 'ShoppingBag',
      title: '12 лет в ритейле'
    },
    {
      icon: 'TrendingUp',
      title: '10 лет на рынке'
    },
    {
      icon: 'Users',
      title: 'Эффективная команда и проверенные эксперты'
    }
  ];

  const stats = [
    { value: '10 лет', label: 'На рынке' },
    { value: 'Эффективная команда и', label: 'проверенные эксперты' },
    { value: 'Более 10 объектов', label: 'в управлении' },
    { value: 'Объем активов под', label: 'управлением 100млн. $' }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
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
        <div className="w-[297mm] h-[210mm] bg-white shadow-2xl animate-fade-in relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://cdn.poehali.dev/files/image-07-12-25-10-47.jpeg)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
          </div>
          
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-12">
            <div className="bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-lg px-24 py-20 rounded-3xl border-4 border-accent/80 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-center gap-10 mb-10">
                <div className="p-4 bg-accent/20 rounded-2xl">
                  <Icon name="Building2" size={96} className="text-accent drop-shadow-2xl" />
                </div>
                <h1 className="text-[7rem] font-black leading-none drop-shadow-2xl tracking-tight" style={{ textShadow: '0 0 40px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.8)' }}>
                  ПРЕМИУМ<br />УПРАВЛЕНИЕ
                </h1>
              </div>
              <div className="h-2 w-80 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8 rounded-full" />
              <p className="text-5xl font-bold tracking-widest drop-shadow-2xl uppercase" style={{ textShadow: '0 0 30px rgba(0,0,0,0.9)' }}>
                Эффективность · Надежность · Результат
              </p>
            </div>
          </div>
        </div>
      )}

      {currentSlide === 1 && (
        <div className="w-[297mm] h-[210mm] bg-white shadow-2xl animate-fade-in overflow-auto">
          <div className="h-full py-16 px-12">
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
                  <span className="text-lg font-semibold text-primary">Полная свобода и одновременно отсутствие беспокойства за свой актив</span>
                </div>
              </div>
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
        <div className="w-[297mm] h-[210mm] bg-white shadow-2xl animate-fade-in overflow-hidden">
          <div className="h-full py-8 px-12">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold text-primary mb-2">Наши достижения</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </div>

            <div className="grid grid-cols-4 gap-3 mb-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="p-3 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center gap-1.5">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon name={service.icon} size={18} className="text-accent" />
                    </div>
                    <h4 className="text-[10px] font-semibold text-primary leading-tight">{service.title}</h4>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-bold text-primary mb-3 text-center">Наши услуги</h3>
              <div className="grid grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon name={service.icon} size={24} className="text-accent" />
                      </div>
                      <h3 className="text-sm font-semibold text-primary">{service.title}</h3>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
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
        <div className="w-[297mm] h-[210mm] bg-white shadow-2xl animate-fade-in overflow-hidden">
          <div className="h-full py-8 px-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">Контакты</h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6 max-w-4xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">
                      Москва, Вернадского проспект, д. 6<br />
                      БЦ "Капитолий"
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
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб-Вс: выходной
                    </p>
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
                    <p className="text-muted-foreground">ALL@veterok.local</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex justify-center gap-4 mt-6">
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
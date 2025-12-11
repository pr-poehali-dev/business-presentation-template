import Icon from '@/components/ui/icon';

const HeroFinal = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center p-6">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/IMG_7855.JPG)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-transparent backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="max-w-4xl">
            <div className="text-left space-y-6">
              <div className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-md border border-accent/40 rounded-full">
                <p className="text-amber-100 text-sm font-medium tracking-wider uppercase">
                  Профессиональное управление
                </p>
              </div>
              <h1 className="text-7xl md:text-8xl font-bold text-white leading-none drop-shadow-2xl">
                ПРЕМИУМ<br/>УПРАВЛЕНИЕ
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-amber-300"></div>
              <p className="text-2xl text-amber-50 font-light max-w-2xl drop-shadow-lg">
                Эффективные решения для вашего бизнеса.<br/>Надежность. Результат. Доверие.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('content')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce hover:scale-110 transition-transform"
        >
          <Icon name="ChevronDown" size={48} />
        </button>
      </section>

      <div id="content" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Премиум управление недвижимостью
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Комплексный подход к управлению коммерческой недвижимостью. 
              Мы обеспечиваем максимальную эффективность и доходность ваших активов.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 bg-slate-50 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Эффективность</h3>
              <p className="text-muted-foreground">
                Оптимизация всех процессов для достижения максимальных результатов
              </p>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Надежность</h3>
              <p className="text-muted-foreground">
                Проверенные решения и стабильная работа на протяжении многих лет
              </p>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Результат</h3>
              <p className="text-muted-foreground">
                Измеримые показатели роста и увеличения стоимости активов
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Готовы начать работу?</h2>
            <p className="text-xl text-white/80 mb-8">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
            <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-xl">
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFinal;

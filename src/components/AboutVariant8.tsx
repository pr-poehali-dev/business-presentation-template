import Icon from '@/components/ui/icon';

const AboutVariant8 = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-amber-500 to-accent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-6">О компании</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-2xl text-foreground leading-relaxed mb-8 max-w-4xl mx-auto">
              Мы предоставляем полный комплекс первоклассных услуг в сфере управления недвижимостью, основанных на уникальном опыте многолетней практики, безупречном профессионализме и высокой квалификации нашей команды.
            </p>
            <p className="text-2xl text-foreground leading-relaxed max-w-4xl mx-auto">
              Используя передовые технологии и инновационные методы, мы не только превосходим ожидания владельцев и резидентов, но и создаем персонализированные решения, идеально адаптированные к потребностям каждого клиента.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent to-accent/50 -translate-x-1/2 hidden lg:block" />
            
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-6">
              <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-lg hover:bg-accent/5 transition-colors">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Icon name="TrendingUp" size={28} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary">Максимизация доходов</span>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-lg hover:bg-accent/5 transition-colors">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Icon name="BarChart" size={28} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary">Оптимизация расходов</span>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-lg hover:bg-accent/5 transition-colors">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Icon name="Eye" size={28} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary">Прозрачность в работе</span>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-lg hover:bg-accent/5 transition-colors">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Icon name="ShieldCheck" size={28} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary">Снижение рисков</span>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-lg hover:bg-accent/5 transition-colors">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Icon name="Users" size={28} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary">Эффективное взаимодействие</span>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-lg hover:bg-accent/5 transition-colors">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Icon name="Lightbulb" size={28} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary">Проверенные методы и инновационные решения</span>
              </div>

              <div className="lg:col-span-2 flex items-center gap-4 bg-slate-50 p-5 rounded-lg hover:bg-accent/5 transition-colors">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Icon name="Shield" size={28} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary">Полная свобода и одновременно отсутствие беспокойства за свой актив</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVariant8;

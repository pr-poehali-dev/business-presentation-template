import Icon from '@/components/ui/icon';

const AboutVariant9 = () => {
  return (
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
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                    <Icon name="Building2" size={40} className="text-accent" />
                  </div>
                  <p className="text-xl text-foreground leading-relaxed">
                    Мы предоставляем полный комплекс первоклассных услуг в сфере управления недвижимостью, основанных на уникальном опыте многолетней практики, безупречном профессионализме и высокой квалификации нашей команды.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                    <Icon name="Sparkles" size={40} className="text-accent" />
                  </div>
                  <p className="text-xl text-foreground leading-relaxed">
                    Используя передовые технологии и инновационные методы, мы не только превосходим ожидания владельцев и резидентов, но и создаем персонализированные решения, идеально адаптированные к потребностям каждого клиента.
                  </p>
                </div>
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
  );
};

export default AboutVariant9;

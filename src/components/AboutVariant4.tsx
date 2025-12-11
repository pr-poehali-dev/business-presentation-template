import Icon from '@/components/ui/icon';

const AboutVariant4 = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-6">О компании</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white p-12 rounded-2xl shadow-xl border border-slate-200 mb-12">
            <p className="text-xl text-foreground leading-relaxed mb-6">
              Мы предоставляем полный комплекс первоклассных услуг в сфере управления недвижимостью, основанных на уникальном опыте многолетней практики, безупречном профессионализме и высокой квалификации нашей команды.
            </p>
            <p className="text-xl text-foreground leading-relaxed">
              Используя передовые технологии и инновационные методы, мы не только превосходим ожидания владельцев и резидентов, но и создаем персонализированные решения, идеально адаптированные к потребностям каждого клиента.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-slate-100">
              <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                <Icon name="TrendingUp" size={32} className="text-accent" />
              </div>
              <span className="text-xl font-semibold text-primary">Максимизация доходов</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-slate-100">
              <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                <Icon name="BarChart" size={32} className="text-accent" />
              </div>
              <span className="text-xl font-semibold text-primary">Оптимизация расходов</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-slate-100">
              <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                <Icon name="Eye" size={32} className="text-accent" />
              </div>
              <span className="text-xl font-semibold text-primary">Прозрачность в работе</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-slate-100">
              <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                <Icon name="ShieldCheck" size={32} className="text-accent" />
              </div>
              <span className="text-xl font-semibold text-primary">Снижение рисков</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-slate-100">
              <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                <Icon name="Users" size={32} className="text-accent" />
              </div>
              <span className="text-xl font-semibold text-primary">Эффективное взаимодействие</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-slate-100">
              <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                <Icon name="Lightbulb" size={32} className="text-accent" />
              </div>
              <span className="text-xl font-semibold text-primary">Проверенные методы и инновационные решения</span>
            </div>

            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-slate-100">
              <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                <Icon name="Shield" size={32} className="text-accent" />
              </div>
              <span className="text-xl font-semibold text-primary">Полная свобода и одновременно отсутствие беспокойства за свой актив</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVariant4;

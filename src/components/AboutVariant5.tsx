import Icon from '@/components/ui/icon';

const AboutVariant5 = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-6">О компании</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <p className="text-xl text-foreground leading-relaxed">
                Мы предоставляем полный комплекс первоклассных услуг в сфере управления недвижимостью, основанных на уникальном опыте многолетней практики, безупречном профессионализме и высокой квалификации нашей команды.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <p className="text-xl text-foreground leading-relaxed">
                Используя передовые технологии и инновационные методы, мы не только превосходим ожидания владельцев и резидентов, но и создаем персонализированные решения, идеально адаптированные к потребностям каждого клиента.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-5 p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Icon name="TrendingUp" size={28} className="text-accent" />
              </div>
              <span className="text-lg font-semibold text-primary">Максимизация доходов</span>
            </div>

            <div className="flex items-center gap-5 p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Icon name="BarChart" size={28} className="text-accent" />
              </div>
              <span className="text-lg font-semibold text-primary">Оптимизация расходов</span>
            </div>

            <div className="flex items-center gap-5 p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Icon name="Eye" size={28} className="text-accent" />
              </div>
              <span className="text-lg font-semibold text-primary">Прозрачность в работе</span>
            </div>

            <div className="flex items-center gap-5 p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Icon name="ShieldCheck" size={28} className="text-accent" />
              </div>
              <span className="text-lg font-semibold text-primary">Снижение рисков</span>
            </div>

            <div className="flex items-center gap-5 p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Icon name="Users" size={28} className="text-accent" />
              </div>
              <span className="text-lg font-semibold text-primary">Эффективное взаимодействие</span>
            </div>

            <div className="flex items-center gap-5 p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Icon name="Lightbulb" size={28} className="text-accent" />
              </div>
              <span className="text-lg font-semibold text-primary">Проверенные методы и инновационные решения</span>
            </div>

            <div className="flex items-center gap-5 p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Icon name="Shield" size={28} className="text-accent" />
              </div>
              <span className="text-lg font-semibold text-primary">Полная свобода и одновременно отсутствие беспокойства за свой актив</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVariant5;

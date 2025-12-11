import Icon from '@/components/ui/icon';

const AboutVariant7 = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-6">О компании</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 bg-white p-10 rounded-2xl shadow-xl">
              <p className="text-xl text-foreground leading-relaxed mb-6">
                Мы предоставляем полный комплекс первоклассных услуг в сфере управления недвижимостью, основанных на уникальном опыте многолетней практики, безупречном профессионализме и высокой квалификации нашей команды.
              </p>
              <p className="text-xl text-foreground leading-relaxed">
                Используя передовые технологии и инновационные методы, мы не только превосходим ожидания владельцев и резидентов, но и создаем персонализированные решения, идеально адаптированные к потребностям каждого клиента.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full mb-3">
                  <Icon name="TrendingUp" size={32} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary">Максимизация доходов</span>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full mb-3">
                  <Icon name="BarChart" size={32} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary">Оптимизация расходов</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <div className="p-4 bg-accent/10 rounded-full mb-3">
                <Icon name="Eye" size={32} className="text-accent" />
              </div>
              <span className="text-lg font-semibold text-primary">Прозрачность в работе</span>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <div className="p-4 bg-accent/10 rounded-full mb-3">
                <Icon name="ShieldCheck" size={32} className="text-accent" />
              </div>
              <span className="text-lg font-semibold text-primary">Снижение рисков</span>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <div className="p-4 bg-accent/10 rounded-full mb-3">
                <Icon name="Users" size={32} className="text-accent" />
              </div>
              <span className="text-lg font-semibold text-primary">Эффективное взаимодействие</span>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <div className="p-4 bg-accent/10 rounded-full mb-3">
                <Icon name="Lightbulb" size={32} className="text-accent" />
              </div>
              <span className="text-lg font-semibold text-primary">Проверенные методы и инновационные решения</span>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <div className="p-4 bg-accent/10 rounded-full mb-3">
                <Icon name="Shield" size={32} className="text-accent" />
              </div>
              <span className="text-lg font-semibold text-primary">Полная свобода и одновременно отсутствие беспокойства за свой актив</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVariant7;

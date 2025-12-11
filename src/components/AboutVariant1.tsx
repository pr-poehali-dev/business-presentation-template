import Icon from '@/components/ui/icon';

const AboutVariant1 = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-6">О компании</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-12 rounded-3xl shadow-xl mb-12">
            <p className="text-xl text-foreground leading-relaxed mb-6">
              Мы предоставляем полный комплекс первоклассных услуг в сфере управления недвижимостью, основанных на уникальном опыте многолетней практики, безупречном профессионализме и высокой квалификации нашей команды.
            </p>
            <p className="text-xl text-foreground leading-relaxed">
              Используя передовые технологии и инновационные методы, мы не только превосходим ожидания владельцев и резидентов, но и создаем персонализированные решения, идеально адаптированные к потребностям каждого клиента.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-accent">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Icon name="TrendingUp" size={36} className="text-accent" />
                </div>
              </div>
              <p className="text-center text-lg font-semibold text-primary">Максимизация доходов</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-accent">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Icon name="BarChart" size={36} className="text-accent" />
                </div>
              </div>
              <p className="text-center text-lg font-semibold text-primary">Оптимизация расходов</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-accent">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Icon name="Eye" size={36} className="text-accent" />
                </div>
              </div>
              <p className="text-center text-lg font-semibold text-primary">Прозрачность в работе</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-accent">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Icon name="ShieldCheck" size={36} className="text-accent" />
                </div>
              </div>
              <p className="text-center text-lg font-semibold text-primary">Снижение рисков</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-accent">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Icon name="Users" size={36} className="text-accent" />
                </div>
              </div>
              <p className="text-center text-lg font-semibold text-primary">Эффективное взаимодействие</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-accent">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Icon name="Lightbulb" size={36} className="text-accent" />
                </div>
              </div>
              <p className="text-center text-lg font-semibold text-primary">Проверенные методы и инновационные решения</p>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-accent to-amber-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white/20 rounded-full">
                  <Icon name="Shield" size={36} className="text-white" />
                </div>
              </div>
              <p className="text-center text-lg font-semibold text-white">Полная свобода и одновременно отсутствие беспокойства за свой актив</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVariant1;

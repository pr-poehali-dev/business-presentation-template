import Icon from '@/components/ui/icon';

const AboutVariant3 = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">О компании</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-2xl mb-12">
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Мы предоставляем полный комплекс первоклассных услуг в сфере управления недвижимостью, основанных на уникальном опыте многолетней практики, безупречном профессионализме и высокой квалификации нашей команды.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              Используя передовые технологии и инновационные методы, мы не только превосходим ожидания владельцев и резидентов, но и создаем персонализированные решения, идеально адаптированные к потребностям каждого клиента.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-accent/20 rounded-full">
                  <Icon name="TrendingUp" size={32} className="text-accent" />
                </div>
                <p className="text-lg font-semibold">Максимизация доходов</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-accent/20 rounded-full">
                  <Icon name="BarChart" size={32} className="text-accent" />
                </div>
                <p className="text-lg font-semibold">Оптимизация расходов</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-accent/20 rounded-full">
                  <Icon name="Eye" size={32} className="text-accent" />
                </div>
                <p className="text-lg font-semibold">Прозрачность в работе</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-accent/20 rounded-full">
                  <Icon name="ShieldCheck" size={32} className="text-accent" />
                </div>
                <p className="text-lg font-semibold">Снижение рисков</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-accent/20 rounded-full">
                  <Icon name="Users" size={32} className="text-accent" />
                </div>
                <p className="text-lg font-semibold">Эффективное взаимодействие</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-accent/20 rounded-full">
                  <Icon name="Lightbulb" size={32} className="text-accent" />
                </div>
                <p className="text-lg font-semibold">Проверенные методы и инновационные решения</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent to-amber-500 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/20 rounded-full flex-shrink-0">
                <Icon name="Shield" size={40} className="text-white" />
              </div>
              <p className="text-2xl font-bold text-white">Полная свобода и одновременно отсутствие беспокойства за свой актив</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVariant3;

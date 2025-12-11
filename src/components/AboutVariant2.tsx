import Icon from '@/components/ui/icon';

const AboutVariant2 = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-6">О компании</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-amber-500" />
                <p className="text-xl text-foreground leading-relaxed pl-6">
                  Мы предоставляем полный комплекс первоклассных услуг в сфере управления недвижимостью, основанных на уникальном опыте многолетней практики, безупречном профессионализме и высокой квалификации нашей команды.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-accent" />
                <p className="text-xl text-foreground leading-relaxed pl-6">
                  Используя передовые технологии и инновационные методы, мы не только превосходим ожидания владельцев и резидентов, но и создаем персонализированные решения, идеально адаптированные к потребностям каждого клиента.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid md:grid-cols-2 gap-4">
            <div className="group cursor-default">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-accent/5 transition-all duration-300 h-full border-l-4 border-transparent hover:border-accent">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Icon name="TrendingUp" size={28} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary pt-2">Максимизация доходов</span>
              </div>
            </div>

            <div className="group cursor-default">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-accent/5 transition-all duration-300 h-full border-l-4 border-transparent hover:border-accent">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Icon name="BarChart" size={28} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary pt-2">Оптимизация расходов</span>
              </div>
            </div>

            <div className="group cursor-default">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-accent/5 transition-all duration-300 h-full border-l-4 border-transparent hover:border-accent">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Icon name="Eye" size={28} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary pt-2">Прозрачность в работе</span>
              </div>
            </div>

            <div className="group cursor-default">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-accent/5 transition-all duration-300 h-full border-l-4 border-transparent hover:border-accent">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Icon name="ShieldCheck" size={28} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary pt-2">Снижение рисков</span>
              </div>
            </div>

            <div className="group cursor-default">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-accent/5 transition-all duration-300 h-full border-l-4 border-transparent hover:border-accent">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Icon name="Users" size={28} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary pt-2">Эффективное взаимодействие</span>
              </div>
            </div>

            <div className="group cursor-default">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-accent/5 transition-all duration-300 h-full border-l-4 border-transparent hover:border-accent">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Icon name="Lightbulb" size={28} className="text-accent" />
                </div>
                <span className="text-lg font-semibold text-primary pt-2">Проверенные методы и инновационные решения</span>
              </div>
            </div>

            <div className="md:col-span-2 group cursor-default">
              <div className="flex items-start gap-4 p-6 rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300 h-full">
                <div className="p-3 bg-white/10 rounded-lg group-hover:scale-110 transition-transform">
                  <Icon name="Shield" size={28} className="text-white" />
                </div>
                <span className="text-lg font-semibold text-white pt-2">Полная свобода и одновременно отсутствие беспокойства за свой актив</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVariant2;

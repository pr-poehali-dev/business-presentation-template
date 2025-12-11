import Icon from '@/components/ui/icon';

const AboutVariant6 = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-6">О компании</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-2xl text-foreground leading-relaxed mb-8">
              Мы предоставляем полный комплекс первоклассных услуг в сфере управления недвижимостью, основанных на уникальном опыте многолетней практики, безупречном профессионализме и высокой квалификации нашей команды.
            </p>
            <p className="text-2xl text-foreground leading-relaxed">
              Используя передовые технологии и инновационные методы, мы не только превосходим ожидания владельцев и резидентов, но и создаем персонализированные решения, идеально адаптированные к потребностям каждого клиента.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg mt-1 flex-shrink-0">
                <Icon name="TrendingUp" size={24} className="text-accent" />
              </div>
              <div>
                <span className="text-lg font-semibold text-primary">Максимизация доходов</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg mt-1 flex-shrink-0">
                <Icon name="BarChart" size={24} className="text-accent" />
              </div>
              <div>
                <span className="text-lg font-semibold text-primary">Оптимизация расходов</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg mt-1 flex-shrink-0">
                <Icon name="Eye" size={24} className="text-accent" />
              </div>
              <div>
                <span className="text-lg font-semibold text-primary">Прозрачность в работе</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg mt-1 flex-shrink-0">
                <Icon name="ShieldCheck" size={24} className="text-accent" />
              </div>
              <div>
                <span className="text-lg font-semibold text-primary">Снижение рисков</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg mt-1 flex-shrink-0">
                <Icon name="Users" size={24} className="text-accent" />
              </div>
              <div>
                <span className="text-lg font-semibold text-primary">Эффективное взаимодействие</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg mt-1 flex-shrink-0">
                <Icon name="Lightbulb" size={24} className="text-accent" />
              </div>
              <div>
                <span className="text-lg font-semibold text-primary">Проверенные методы и инновационные решения</span>
              </div>
            </div>

            <div className="md:col-span-2 flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg mt-1 flex-shrink-0">
                <Icon name="Shield" size={24} className="text-accent" />
              </div>
              <div>
                <span className="text-lg font-semibold text-primary">Полная свобода и одновременно отсутствие беспокойства за свой актив</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVariant6;

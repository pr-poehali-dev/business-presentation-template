import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const StatsVariants = () => {
  const [activeVariant, setActiveVariant] = useState(1);

  const stats = [
    { icon: 'DollarSign', value: '100 млн $', label: 'Объем активов под управлением' },
    { icon: 'Users', value: '12 млн', label: 'Посетителей в год' },
    { icon: 'Building2', value: '20+', label: 'Торговых объектов' },
    { icon: 'Award', value: '10 лет', label: 'На рынке' }
  ];

  const achievements = [
    { icon: 'Home', title: 'Более 10 объектов в управлении' },
    { icon: 'Award', title: '20 лет успешного бизнеса' },
    { icon: 'ShoppingBag', title: '12 лет в ритейле' },
    { icon: 'TrendingUp', title: '10 лет на рынке' },
    { icon: 'Users', title: 'Эффективная команда и проверенные эксперты' }
  ];

  const variants = [
    {
      id: 1,
      name: 'Две колонки - цифры слева',
      component: (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className="flex-shrink-0 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name={stat.icon} size={40} className="text-white" />
                      </div>
                      <div>
                        <div className="text-6xl font-black text-primary mb-1">{stat.value}</div>
                        <div className="text-base text-muted-foreground font-medium">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary mb-6">Наши достижения</h3>
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-accent/10 transition-colors">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={achievement.icon} size={24} className="text-white" />
                      </div>
                      <span className="text-base font-semibold text-primary">{achievement.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: 2,
      name: 'Одна линия - минимализм',
      component: (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="flex flex-wrap justify-between items-end gap-8 border-b-2 border-accent pb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-6xl font-black text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium max-w-[200px]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {achievements.map((achievement, index) => (
                  <div key={index} className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow border border-slate-200">
                    <Icon name={achievement.icon} size={18} className="text-accent" />
                    <span className="text-sm font-semibold text-primary">{achievement.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: 3,
      name: 'Сетка без рамок',
      component: (
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                      <Icon name={stat.icon} size={40} className="text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-5xl font-black text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-accent rounded-full group-hover:w-3 group-hover:h-3 transition-all"></div>
                    <span className="text-base font-semibold text-primary group-hover:text-accent transition-colors">{achievement.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: 4,
      name: 'Большие числа - акцент',
      component: (
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="relative overflow-hidden rounded-3xl bg-slate-800 p-10 group hover:bg-slate-750 transition-colors">
                    <div className="relative z-10">
                      <Icon name={stat.icon} size={48} className="text-accent mb-6" />
                      <div className="text-7xl font-black text-white mb-3">{stat.value}</div>
                      <div className="text-lg text-slate-300 font-medium">{stat.label}</div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full translate-x-20 translate-y-20 group-hover:scale-150 transition-transform"></div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800 rounded-3xl p-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon name={achievement.icon} size={24} className="text-accent flex-shrink-0 mt-1" />
                      <span className="text-base font-semibold text-white leading-tight">{achievement.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: 5,
      name: 'Асимметричный современный',
      component: (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2 bg-accent rounded-3xl p-12 text-white">
                  <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                    {stats.map((stat, index) => (
                      <div key={index}>
                        <div className="flex items-center gap-3 mb-4">
                          <Icon name={stat.icon} size={32} className="text-white/80" />
                          <div className="h-px flex-1 bg-white/30"></div>
                        </div>
                        <div className="text-6xl font-black mb-2">{stat.value}</div>
                        <div className="text-base font-medium text-white/90">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-primary mb-6">Достижения</h3>
                  <div className="space-y-3">
                    {achievements.slice(0, 3).map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-white" />
                        </div>
                        <span className="text-sm font-semibold text-primary leading-tight">{achievement.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                {achievements.slice(3).map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full">
                    <Icon name={achievement.icon} size={20} className="text-accent" />
                    <span className="text-sm font-semibold text-primary">{achievement.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: 6,
      name: 'Горизонтальные полосы',
      component: (
        <section className="py-20 bg-gradient-to-br from-slate-100 via-white to-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name={stat.icon} size={32} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</div>
                        <div className="text-5xl font-black text-primary">{stat.value}</div>
                      </div>
                    </div>
                    <Icon name="TrendingUp" size={40} className="text-accent/20" />
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-2xl p-8 shadow-lg mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-accent/5 transition-colors">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={achievement.icon} size={20} className="text-white" />
                      </div>
                      <span className="text-sm font-semibold text-primary leading-tight">{achievement.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  ];

  const currentVariant = variants.find(v => v.id === activeVariant) || variants[0];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold text-primary">Варианты дизайна блока статистики</h1>
              <p className="text-sm text-muted-foreground mt-1">
                {currentVariant.name}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {variants.map(variant => (
                <Button
                  key={variant.id}
                  variant={activeVariant === variant.id ? 'default' : 'outline'}
                  onClick={() => setActiveVariant(variant.id)}
                  size="sm"
                >
                  {variant.id}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24">
        <div className="transition-all duration-500">
          {currentVariant.component}
        </div>

        <div className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center">Описание вариантов</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { id: 1, name: 'Две колонки - цифры слева', desc: 'Крупные цифры с иконками слева, достижения в отдельной колонке справа. Удобно читается.' },
                  { id: 2, name: 'Одна линия - минимализм', desc: 'Все цифры в одну строку, достижения как бейджи. Максимально компактно и современно.' },
                  { id: 3, name: 'Сетка без рамок', desc: 'Чистая сетка без карточек, иконки с hover-эффектом. Воздушный и легкий дизайн.' },
                  { id: 4, name: 'Большие числа - акцент', desc: 'Темный фон, огромные цифры, максимальный акцент на числах. Премиум-стиль.' },
                  { id: 5, name: 'Асимметричный современный', desc: 'Желтый блок на 2/3 экрана с цифрами, боковая панель с достижениями. Необычная компоновка.' },
                  { id: 6, name: 'Горизонтальные полосы', desc: 'Каждая цифра - отдельная горизонтальная полоса. Легко сканируется взглядом сверху вниз.' }
                ].map(item => (
                  <div 
                    key={item.id}
                    className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                      activeVariant === item.id 
                        ? 'bg-accent border-accent' 
                        : 'bg-slate-800 border-slate-700 hover:border-accent/50'
                    }`}
                    onClick={() => {
                      setActiveVariant(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                        activeVariant === item.id ? 'bg-white text-accent' : 'bg-accent text-white'
                      }`}>
                        {item.id}
                      </div>
                      <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
                    </div>
                    <p className={`text-sm leading-relaxed ${activeVariant === item.id ? 'text-white' : 'text-slate-400'}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsVariants;

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
      name: 'Текущий дизайн',
      component: (
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white/20 rounded-full">
                      <Icon name={stat.icon} size={48} />
                    </div>
                  </div>
                  <div className="text-4xl font-black mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Icon name={achievement.icon} size={24} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white leading-tight">{achievement.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    },
    {
      id: 2,
      name: 'Белые карточки на желтом',
      component: (
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent rounded-full">
                      <Icon name={stat.icon} size={48} className="text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-base font-semibold text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-accent rounded-lg">
                      <Icon name={achievement.icon} size={24} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-primary leading-tight">{achievement.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    },
    {
      id: 3,
      name: 'Светлый фон',
      component: (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent rounded-full">
                      <Icon name={stat.icon} size={48} className="text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-base font-semibold text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-accent rounded-lg">
                      <Icon name={achievement.icon} size={24} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-primary leading-tight">{achievement.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    },
    {
      id: 4,
      name: 'Желтые карточки на белом',
      component: (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-accent rounded-2xl p-8 text-center text-white hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white/20 rounded-full">
                      <Icon name={stat.icon} size={48} />
                    </div>
                  </div>
                  <div className="text-4xl font-black mb-2">{stat.value}</div>
                  <div className="text-base font-semibold opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-5 hover:bg-accent/10 transition-all hover:-translate-y-1 border border-slate-200">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-accent rounded-lg">
                      <Icon name={achievement.icon} size={24} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-primary leading-tight">{achievement.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    },
    {
      id: 5,
      name: 'Темный фон премиум',
      component: (
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-accent rounded-2xl p-8 text-center text-white hover:shadow-2xl hover:shadow-accent/20 transition-all hover:-translate-y-2">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white/20 rounded-full">
                      <Icon name={stat.icon} size={48} />
                    </div>
                  </div>
                  <div className="text-4xl font-black mb-2">{stat.value}</div>
                  <div className="text-base font-semibold opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-5 hover:bg-slate-700 transition-all hover:-translate-y-1 border border-slate-700">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-accent rounded-lg">
                      <Icon name={achievement.icon} size={24} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white leading-tight">{achievement.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    },
    {
      id: 6,
      name: 'Без карточек - крупно',
      component: (
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <Icon name={stat.icon} size={56} className="mx-auto mb-4 opacity-90" />
                  <div className="text-5xl font-black mb-3">{stat.value}</div>
                  <div className="text-base font-semibold opacity-90 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Icon name={achievement.icon} size={24} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white leading-tight">{achievement.title}</span>
                  </div>
                </div>
              ))}
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
              <h1 className="text-2xl font-bold text-primary">Варианты блока статистики</h1>
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
        {currentVariant.component}

        <div className="bg-slate-100 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-primary mb-8 text-center">Описание вариантов</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white">1</div>
                    <h4 className="font-bold text-primary">Текущий дизайн</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Желтый фон, прозрачные круги с иконками. Как сейчас на сайте.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white">2</div>
                    <h4 className="font-bold text-primary">Белые карточки</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Желтый фон с белыми карточками. Больше контраста и структуры.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white">3</div>
                    <h4 className="font-bold text-primary">Светлый фон</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Светло-серый фон с белыми карточками. Мягче для глаз.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white">4</div>
                    <h4 className="font-bold text-primary">Желтые карточки</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Белый фон, желтые карточки. Обратная схема от текущей.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white">5</div>
                    <h4 className="font-bold text-primary">Темный премиум</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Темный фон с желтыми карточками. Премиум-стиль.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white">6</div>
                    <h4 className="font-bold text-primary">Крупные цифры</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Без карточек, крупнее иконки. Максимум внимания на числах.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsVariants;

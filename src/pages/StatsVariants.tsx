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
      name: 'Желтый фон с белыми карточками',
      component: (
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-accent rounded-full">
                      <Icon name={stat.icon} size={48} className="text-white" />
                    </div>
                    <div className="text-5xl font-black text-primary">{stat.value}</div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-accent rounded-lg">
                      <Icon name={achievement.icon} size={28} className="text-white" />
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
      id: 2,
      name: 'Темный фон с градиентом',
      component: (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-amber-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-slate-900 rounded-2xl p-8 border border-accent/30">
                    <div className="flex flex-col items-center text-center gap-4">
                      <Icon name={stat.icon} size={56} className="text-accent" />
                      <div className="text-5xl font-black text-white">{stat.value}</div>
                      <div className="text-sm font-semibold text-amber-100 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:border-accent/50">
                  <div className="flex flex-col items-center text-center gap-3">
                    <Icon name={achievement.icon} size={28} className="text-accent" />
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
      id: 3,
      name: 'Светлый минимализм',
      component: (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 bg-white rounded-3xl overflow-hidden shadow-xl">
                {stats.map((stat, index) => (
                  <div key={index} className="p-10 hover:bg-accent/5 transition-colors group">
                    <div className="flex flex-col items-center text-center gap-4">
                      <Icon name={stat.icon} size={48} className="text-accent group-hover:scale-110 transition-transform" />
                      <div className="text-5xl font-black text-primary">{stat.value}</div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-full px-6 py-4 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200">
                  <div className="flex items-center gap-3">
                    <Icon name={achievement.icon} size={20} className="text-accent" />
                    <span className="text-sm font-semibold text-primary whitespace-nowrap">{achievement.title}</span>
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
      name: 'Крупные цифры с иконками',
      component: (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-6 p-8 bg-slate-50 rounded-2xl hover:bg-accent/10 transition-all group">
                  <div className="p-5 bg-accent rounded-2xl group-hover:scale-110 transition-transform">
                    <Icon name={stat.icon} size={56} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-6xl font-black text-primary mb-2">{stat.value}</div>
                    <div className="text-base font-semibold text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-accent pt-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-accent/5 transition-colors">
                    <div className="p-3 bg-accent rounded-lg flex-shrink-0">
                      <Icon name={achievement.icon} size={24} className="text-white" />
                    </div>
                    <span className="text-base font-semibold text-primary leading-tight pt-2">{achievement.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: 5,
      name: 'Вертикальные карточки',
      component: (
        <section className="py-20 bg-gradient-to-b from-slate-100 to-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform"></div>
                  <div className="relative flex flex-col items-center text-center gap-5">
                    <div className="p-4 bg-accent/10 rounded-2xl">
                      <Icon name={stat.icon} size={48} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-5xl font-black text-primary mb-3">{stat.value}</div>
                      <div className="text-sm font-semibold text-muted-foreground leading-tight">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={achievement.icon} size={32} className="text-white" />
                    </div>
                    <p className="text-sm font-semibold text-primary leading-tight">{achievement.title}</p>
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
      name: 'Компактный горизонтальный',
      component: (
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-accent via-amber-500 to-accent rounded-3xl p-1 mb-12">
              <div className="bg-slate-900 rounded-3xl p-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <Icon name={stat.icon} size={48} className="text-accent mx-auto mb-4" />
                      <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                      <div className="text-sm font-medium text-amber-100/80 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-accent/20 hover:border-accent/50 transition-all hover:bg-slate-800">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon name={achievement.icon} size={24} className="text-accent" />
                    </div>
                    <span className="text-xs font-semibold text-white leading-tight">{achievement.title}</span>
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
                  Вариант {variant.id}
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

        <div className="bg-slate-100 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Описание вариантов</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">Желтый фон с белыми карточками</h4>
                      <p className="text-sm text-muted-foreground">Яркий, привлекающий внимание дизайн. Белые карточки контрастируют с желтым фоном, цифры крупные и читаемые.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">Темный фон с градиентом</h4>
                      <p className="text-sm text-muted-foreground">Премиальный вид с эффектами свечения. Градиенты создают глубину, темный фон подчеркивает серьезность.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">Светлый минимализм</h4>
                      <p className="text-sm text-muted-foreground">Чистый современный дизайн. Все в одной большой белой карточке, достижения в виде таблеток-бейджей.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">Крупные цифры с иконками</h4>
                      <p className="text-sm text-muted-foreground">Горизонтальные карточки с большими цифрами слева от иконок. Акцент на числах, легко сканируется взглядом.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">Вертикальные карточки</h4>
                      <p className="text-sm text-muted-foreground">Элегантные высокие карточки с декоративными элементами. Достижения собраны в одну большую белую карточку внизу.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">6</div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">Компактный горизонтальный</h4>
                      <p className="text-sm text-muted-foreground">Темный фон с золотой рамкой. Компактное расположение, все на темном фоне для создания премиум-атмосферы.</p>
                    </div>
                  </div>
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

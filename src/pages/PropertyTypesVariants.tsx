import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const PropertyTypesVariants = () => {
  const [activeVariant, setActiveVariant] = useState(1);

  const propertyTypes = [
    {
      id: 1,
      title: 'Торговая',
      description: 'Торговые центры, магазины, ритейл',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/19fad273-85b5-4e31-b6ee-b97f86f3d238.jpg',
      icon: 'ShoppingBag'
    },
    {
      id: 2,
      title: 'Складская',
      description: 'Логистические комплексы, склады',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/bcda70e1-6fcc-4429-a6b8-0f2a69d7dd0a.jpg',
      icon: 'Package'
    },
    {
      id: 3,
      title: 'Офисная',
      description: 'Бизнес-центры, офисные здания',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/09513fdd-5273-45bb-820e-eaa9ec2c49cf.jpg',
      icon: 'Briefcase'
    },
    {
      id: 4,
      title: 'Жилая',
      description: 'Жилые комплексы, апартаменты',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/51feef5d-1c27-4960-90dd-a5e7272382cf.jpg',
      icon: 'Home'
    }
  ];

  const variants = [
    {
      id: 1,
      name: 'Сетка с наложением текста',
      component: (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Сфера интересов</h2>
              <p className="text-xl text-muted-foreground">Работаем со всеми типами недвижимости</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {propertyTypes.map((type) => (
                <div key={type.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name={type.icon} size={28} />
                      <h3 className="text-2xl font-bold">{type.title}</h3>
                    </div>
                    <p className="text-white/90 text-sm">{type.description}</p>
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
      name: 'Карточки с верхним изображением',
      component: (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Сфера интересов</h2>
              <p className="text-xl text-muted-foreground">Работаем со всеми типами недвижимости</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {propertyTypes.map((type) => (
                <div key={type.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 p-3 bg-accent rounded-full">
                      <Icon name={type.icon} size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{type.title}</h3>
                    <p className="text-muted-foreground text-sm">{type.description}</p>
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
      name: 'Горизонтальные карточки',
      component: (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Сфера интересов</h2>
              <p className="text-xl text-muted-foreground">Работаем со всеми типами недвижимости</p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {propertyTypes.map((type) => (
                <div key={type.id} className="bg-slate-50 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group flex">
                  <div className="relative w-64 h-48 flex-shrink-0 overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center p-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-accent rounded-full">
                          <Icon name={type.icon} size={24} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">{type.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{type.description}</p>
                    </div>
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
      name: 'Крупная сетка 2x2',
      component: (
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Сфера интересов</h2>
              <p className="text-xl text-white/90">Работаем со всеми типами недвижимости</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {propertyTypes.map((type) => (
                <div key={type.id} className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 h-96 group">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-4 bg-accent rounded-full">
                        <Icon name={type.icon} size={32} className="text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">{type.title}</h3>
                    </div>
                    <p className="text-white/90 text-lg">{type.description}</p>
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
      name: 'Минималистичный с границами',
      component: (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Сфера интересов</h2>
              <p className="text-xl text-muted-foreground">Работаем со всеми типами недвижимости</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {propertyTypes.map((type) => (
                <div key={type.id} className="group border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-accent transition-all">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon name={type.icon} size={20} className="text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">{type.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{type.description}</p>
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
      name: 'Круговые иконки с фото фоном',
      component: (
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Сфера интересов</h2>
              <p className="text-xl text-white/80">Работаем со всеми типами недвижимости</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {propertyTypes.map((type) => (
                <div key={type.id} className="relative group">
                  <div className="relative overflow-hidden rounded-2xl h-80">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover brightness-50 group-hover:brightness-75 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                      <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-4 shadow-xl">
                        <Icon name={type.icon} size={36} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                      <p className="text-white/90 text-sm text-center">{type.description}</p>
                    </div>
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
              <h1 className="text-2xl font-bold text-primary">Варианты блока "Сфера интересов"</h1>
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
                    <h4 className="font-bold text-primary">Сетка с наложением</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">4 карточки в ряд, текст поверх изображения с градиентом. Современный стиль.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white">2</div>
                    <h4 className="font-bold text-primary">Верхнее фото</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Классические карточки: фото сверху, описание снизу. Светлый фон.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white">3</div>
                    <h4 className="font-bold text-primary">Горизонтальные</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Вытянутые карточки, фото слева, текст справа. Удобно для детального описания.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white">4</div>
                    <h4 className="font-bold text-primary">Крупная сетка</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">2x2 крупные блоки на желтом фоне. Акцент на визуалы.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white">5</div>
                    <h4 className="font-bold text-primary">С границами</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Минималистичный дизайн с рамками, белый фон. Строго и аккуратно.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-white">6</div>
                    <h4 className="font-bold text-primary">Круглые иконки</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Темный фон, центрированные иконки в кругах поверх фото.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypesVariants;
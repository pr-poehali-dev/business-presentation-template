import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroStyleVariants = () => {
  const [activeVariant, setActiveVariant] = useState(1);

  const variants = [
    {
      id: 1,
      name: 'Праздничная атмосфера',
      image: 'https://cdn.poehali.dev/files/IMG_7855.JPG',
      style: {
        titleSize: 'text-6xl',
        titleColor: 'text-white',
        titleFont: 'font-black',
        subtitleColor: 'text-amber-200',
        bgOverlay: 'from-red-900/85 via-orange-800/75 to-amber-900/85',
        accentColor: 'bg-amber-400',
        borderStyle: 'border-4 border-red-600/40',
        shadow: 'shadow-2xl shadow-red-900/50'
      },
      description: 'Теплая праздничная палитра с красными и золотыми акцентами'
    },
    {
      id: 2,
      name: 'Современный минимализм',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/ae768c37-351f-4dd6-ae0a-1a3f02c59d29.jpg',
      style: {
        titleSize: 'text-7xl',
        titleColor: 'text-slate-900',
        titleFont: 'font-bold',
        subtitleColor: 'text-slate-700',
        bgOverlay: 'from-white/95 via-slate-50/90 to-white/95',
        accentColor: 'bg-blue-600',
        borderStyle: 'border-l-8 border-blue-600',
        shadow: 'shadow-xl'
      },
      description: 'Чистый современный дизайн со строгими линиями'
    },
    {
      id: 3,
      name: 'Премиум элегантность',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/7290a9fa-e6e2-49b1-9e53-0165fd717ccb.jpg',
      style: {
        titleSize: 'text-6xl',
        titleColor: 'text-amber-50',
        titleFont: 'font-light italic',
        subtitleColor: 'text-amber-100/90',
        bgOverlay: 'from-slate-900/90 via-slate-800/85 to-slate-900/90',
        accentColor: 'bg-gradient-to-r from-amber-400 to-yellow-500',
        borderStyle: 'border-2 border-amber-400/50',
        shadow: 'shadow-2xl shadow-amber-900/30'
      },
      description: 'Изысканный стиль с золотыми деталями и тонкими шрифтами'
    },
    {
      id: 4,
      name: 'Энергичная динамика',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/ae5fd6f9-e89e-49d3-82b0-f8a4ae36430c.jpg',
      style: {
        titleSize: 'text-7xl',
        titleColor: 'text-white',
        titleFont: 'font-black tracking-tight',
        subtitleColor: 'text-lime-200',
        bgOverlay: 'from-green-900/80 via-emerald-800/70 to-teal-900/80',
        accentColor: 'bg-lime-400',
        borderStyle: 'border-4 border-lime-400/60',
        shadow: 'shadow-2xl shadow-green-900/50'
      },
      description: 'Яркие цвета и динамичная типографика'
    },
    {
      id: 5,
      name: 'Традиционный шарм',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/9036925a-8332-4d3e-9186-eb2451f41e45.jpg',
      style: {
        titleSize: 'text-6xl',
        titleColor: 'text-red-50',
        titleFont: 'font-serif font-bold',
        subtitleColor: 'text-red-100/80',
        bgOverlay: 'from-red-950/85 via-rose-900/75 to-red-950/85',
        accentColor: 'bg-red-500',
        borderStyle: 'border-8 border-red-700/30 rounded-lg',
        shadow: 'shadow-2xl shadow-red-950/60'
      },
      description: 'Классический дизайн с традиционными элементами'
    },
    {
      id: 6,
      name: 'Городской стиль',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/127692a1-b9f8-4ed2-89b5-3bf6a2b5c0e4.jpg',
      style: {
        titleSize: 'text-7xl',
        titleColor: 'text-cyan-50',
        titleFont: 'font-extrabold uppercase',
        subtitleColor: 'text-cyan-200',
        bgOverlay: 'from-blue-950/90 via-indigo-900/85 to-blue-950/90',
        accentColor: 'bg-cyan-400',
        borderStyle: 'border-b-8 border-cyan-400',
        shadow: 'shadow-2xl shadow-blue-950/70'
      },
      description: 'Урбанистический стиль с контрастными акцентами'
    }
  ];

  const currentVariant = variants.find(v => v.id === activeVariant) || variants[0];
  const { style } = currentVariant;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold text-primary">Стилистические варианты</h1>
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
        <section className="relative h-screen flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{
              backgroundImage: `url(${currentVariant.image})`,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${style.bgOverlay} transition-all duration-700`} />
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <div className={`bg-black/20 backdrop-blur-xl px-16 py-12 ${style.borderStyle} ${style.shadow} transition-all duration-700`}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className={`p-2 ${style.accentColor} rounded-lg transition-all duration-700`}>
                  <Icon name="Store" size={40} className="text-white" />
                </div>
                <h1 className={`${style.titleSize} ${style.titleColor} ${style.titleFont} leading-tight transition-all duration-700`}>
                  ПРЕМИУМ<br />УПРАВЛЕНИЕ
                </h1>
              </div>
              
              <div className={`h-1 w-64 ${style.accentColor} mx-auto mb-6 transition-all duration-700`} />
              
              <p className={`text-xl ${style.subtitleColor} font-medium tracking-widest uppercase transition-all duration-700`}>
                Эффективность · Надежность · Результат
              </p>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('comparison')}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce"
          >
            <Icon name="ChevronDown" size={48} />
          </button>
        </section>

        <div id="comparison" className="bg-gradient-to-b from-slate-50 to-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">
              Сравнение стилей
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {variants.map(variant => (
                <div 
                  key={variant.id}
                  className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer ${
                    activeVariant === variant.id ? 'ring-4 ring-primary' : ''
                  }`}
                  onClick={() => {
                    setActiveVariant(variant.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="relative h-48">
                    <img 
                      src={variant.image} 
                      alt={variant.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-primary shadow-lg">
                      {variant.id}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {variant.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {variant.description}
                    </p>
                    
                    <Button 
                      className="w-full mt-4"
                      variant={activeVariant === variant.id ? 'default' : 'outline'}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveVariant(variant.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      {activeVariant === variant.id ? 'Выбран' : 'Выбрать'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Особенности каждого стиля
              </h2>
              
              <div className="space-y-6">
                {variants.map(variant => (
                  <div 
                    key={variant.id}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-l-4 border-primary hover:bg-slate-800/70 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        {variant.id}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{variant.name}</h3>
                        <p className="text-slate-300 leading-relaxed">{variant.description}</p>
                      </div>
                    </div>
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

export default HeroStyleVariants;

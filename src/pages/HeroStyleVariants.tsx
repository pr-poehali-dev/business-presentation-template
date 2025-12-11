import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroStyleVariants = () => {
  const [activeVariant, setActiveVariant] = useState(1);

  const variants = [
    {
      id: 1,
      name: 'Классический деловой',
      image: 'https://cdn.poehali.dev/files/IMG_7855.JPG',
      layout: (
        <div className="max-w-4xl">
          <div className="text-left space-y-6">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full">
              <p className="text-white/90 text-sm font-medium tracking-wider uppercase">
                Профессиональное управление
              </p>
            </div>
            <h1 className="text-7xl md:text-8xl font-bold text-white leading-none">
              ПРЕМИУМ<br/>УПРАВЛЕНИЕ
            </h1>
            <div className="w-32 h-1 bg-white"></div>
            <p className="text-2xl text-white/80 font-light max-w-2xl">
              Эффективные решения для вашего бизнеса.<br/>Надежность. Результат. Доверие.
            </p>
          </div>
        </div>
      ),
      overlay: 'bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-transparent'
    },
    {
      id: 2,
      name: 'Минимализм',
      image: 'https://cdn.poehali.dev/files/IMG_7855.JPG',
      layout: (
        <div className="max-w-3xl text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 bg-white px-8 py-6 rounded-2xl shadow-2xl">
              <Icon name="Store" size={48} className="text-slate-900" />
              <div className="text-left">
                <h1 className="text-5xl font-bold text-slate-900 leading-none">
                  ПРЕМИУМ
                </h1>
                <p className="text-xl text-slate-600 font-light tracking-widest">
                  УПРАВЛЕНИЕ
                </p>
              </div>
            </div>
            <p className="text-lg text-white font-medium bg-black/40 backdrop-blur-md px-8 py-4 rounded-full inline-block">
              Эффективность · Надежность · Результат
            </p>
          </div>
        </div>
      ),
      overlay: 'bg-black/30'
    },
    {
      id: 3,
      name: 'Журнальный',
      image: 'https://cdn.poehali.dev/files/IMG_7855.JPG',
      layout: (
        <div className="max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <p className="text-white/60 text-sm tracking-[0.3em] uppercase font-medium">
                  № 01 / 2024
                </p>
                <h1 className="text-6xl font-light text-white leading-tight">
                  Премиум<br/>
                  <span className="font-bold italic">Управление</span>
                </h1>
              </div>
              <div className="h-px w-full bg-white/30"></div>
              <p className="text-lg text-white/90 leading-relaxed">
                Эффективность каждого решения.<br/>
                Надежность проверенная временем.<br/>
                Результат который вы заслуживаете.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl">
                <Icon name="TrendingUp" size={120} className="text-white/80 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      ),
      overlay: 'bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90'
    },
    {
      id: 4,
      name: 'Современный акцент',
      image: 'https://cdn.poehali.dev/files/IMG_7855.JPG',
      layout: (
        <div className="max-w-4xl text-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-1 rounded-2xl">
                <div className="bg-slate-900 px-12 py-8 rounded-2xl">
                  <h1 className="text-7xl font-black text-white tracking-tight leading-none">
                    ПРЕМИУМ<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                      УПРАВЛЕНИЕ
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-amber-400 text-3xl font-bold">01</div>
                <div className="text-white text-sm mt-1">Эффективность</div>
              </div>
              <div className="text-center">
                <div className="text-amber-400 text-3xl font-bold">02</div>
                <div className="text-white text-sm mt-1">Надежность</div>
              </div>
              <div className="text-center">
                <div className="text-amber-400 text-3xl font-bold">03</div>
                <div className="text-white text-sm mt-1">Результат</div>
              </div>
            </div>
          </div>
        </div>
      ),
      overlay: 'bg-black/70'
    },
    {
      id: 5,
      name: 'Элегантный премиум',
      image: 'https://cdn.poehali.dev/files/IMG_7855.JPG',
      layout: (
        <div className="max-w-4xl text-center">
          <div className="bg-white/5 backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-12 shadow-2xl">
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center shadow-xl">
                  <Icon name="Crown" size={40} className="text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-6xl font-serif font-light text-white leading-tight">
                  Премиум Управление
                </h1>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                  <Icon name="Sparkles" size={20} className="text-amber-300" />
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                </div>
                <p className="text-xl text-white/80 font-light italic">
                  Эффективность · Надежность · Результат
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      overlay: 'bg-gradient-to-b from-slate-900/85 via-slate-800/80 to-slate-900/90'
    },
    {
      id: 6,
      name: 'Строгий корпоративный',
      image: 'https://cdn.poehali.dev/files/IMG_7855.JPG',
      layout: (
        <div className="max-w-5xl w-full">
          <div className="bg-slate-900/95 backdrop-blur-sm border-l-8 border-blue-500 p-12 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2 space-y-6 text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-blue-400 text-sm tracking-wider uppercase font-semibold">
                    Профессиональные решения
                  </p>
                </div>
                <h1 className="text-6xl font-bold text-white uppercase tracking-tight leading-none">
                  ПРЕМИУМ<br/>УПРАВЛЕНИЕ
                </h1>
                <div className="flex items-center gap-6 text-white/70 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-blue-500" />
                    <span>Эффективность</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-blue-500" />
                    <span>Надежность</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-blue-500" />
                    <span>Результат</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="w-32 h-32 border-4 border-blue-500 rounded-full flex items-center justify-center">
                  <Icon name="Building2" size={60} className="text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      overlay: 'bg-gradient-to-br from-slate-950/80 via-blue-950/60 to-slate-950/80'
    }
  ];

  const currentVariant = variants.find(v => v.id === activeVariant) || variants[0];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold text-primary">Варианты стилистики</h1>
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

      <div className="pt-20">
        <section className="relative h-screen flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{
              backgroundImage: `url(${currentVariant.image})`,
            }}
          >
            <div className={`absolute inset-0 ${currentVariant.overlay} transition-all duration-700`} />
          </div>
          
          <div className="relative z-10 w-full flex items-center justify-center transition-all duration-700">
            {currentVariant.layout}
          </div>

          <button
            onClick={() => scrollToSection('comparison')}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce hover:scale-110 transition-transform"
          >
            <Icon name="ChevronDown" size={48} />
          </button>
        </section>

        <div id="comparison" className="bg-gradient-to-b from-slate-50 to-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-primary mb-4">
              Выберите стиль
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Каждый вариант создан с учетом современных дизайн-трендов и представляет разный подход к подаче информации
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {variants.map(variant => (
                <div 
                  key={variant.id}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer ${
                    activeVariant === variant.id ? 'ring-4 ring-primary scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => {
                    setActiveVariant(variant.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-110"
                      style={{
                        backgroundImage: `url(${variant.image})`,
                      }}
                    >
                      <div className={`absolute inset-0 ${variant.overlay} flex items-center justify-center p-4`}>
                        <div className="transform scale-50 origin-center">
                          {variant.layout}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg">
                      {variant.id}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {variant.name}
                    </h3>
                    
                    <Button 
                      className="w-full mt-4"
                      variant={activeVariant === variant.id ? 'default' : 'outline'}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveVariant(variant.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      {activeVariant === variant.id ? (
                        <div className="flex items-center gap-2">
                          <Icon name="Check" size={16} />
                          Выбран
                        </div>
                      ) : (
                        'Посмотреть'
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-100 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Icon name="Info" size={28} />
                Описание стилей
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex gap-4">
                  <span className="font-bold text-primary min-w-[80px]">Вариант 1:</span>
                  <p>Классический деловой стиль с акцентом на профессионализм. Текст выровнен влево, крупный заголовок создает впечатление надежности.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-primary min-w-[80px]">Вариант 2:</span>
                  <p>Минималистичный дизайн с белой карточкой в центре. Отлично подходит для современных проектов, где важна чистота и простота.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-primary min-w-[80px]">Вариант 3:</span>
                  <p>Журнальный стиль с двухколоночной версткой. Элегантное сочетание легких и жирных шрифтов создает эффект премиум-издания.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-primary min-w-[80px]">Вариант 4:</span>
                  <p>Современный акцент с яркими золотыми элементами. Нумерованные преимущества и градиентный текст привлекают внимание.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-primary min-w-[80px]">Вариант 5:</span>
                  <p>Элегантный премиум с использованием serif-шрифтов и золотых акцентов. Карточка с размытием создает эффект роскоши.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-primary min-w-[80px]">Вариант 6:</span>
                  <p>Строгий корпоративный с синими акцентами. Четкая структура с иконками-галочками подчеркивает надежность и системность.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStyleVariants;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroVariants = () => {
  const [activeVariant, setActiveVariant] = useState(1);

  const variants = [
    {
      id: 1,
      name: 'Роскошный ТЦ - интерьер',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/a620c1a7-0592-4adb-ae14-4a4cfe34a5bd.jpg',
      gradient: 'from-black/70 via-black/60 to-black/70'
    },
    {
      id: 2,
      name: 'Торговый комплекс - вечер',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/383401df-02cb-4bc9-9253-b268e4ffd0ee.jpg',
      gradient: 'from-black/75 via-black/65 to-black/75'
    },
    {
      id: 3,
      name: 'Премиум маркетплейс',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/059433b3-2ffb-4cad-b961-216eead44101.jpg',
      gradient: 'from-black/65 via-black/55 to-black/65'
    },
    {
      id: 4,
      name: 'Торговый комплекс - аэросъемка',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/6b1229b9-70f3-46ef-b9b0-edab85355604.jpg',
      gradient: 'from-black/70 via-black/60 to-black/70'
    },
    {
      id: 5,
      name: 'Ритейл галерея',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/11ed22ce-2833-4866-a594-653cb2365a36.jpg',
      gradient: 'from-black/75 via-black/65 to-black/75'
    },
    {
      id: 6,
      name: 'Фуд-корт и маркетплейс',
      image: 'https://cdn.poehali.dev/projects/3f3712b0-b632-471e-bd7d-a5a2cc62d4e5/files/632a0529-b50f-4c81-849f-645aaaf15239.jpg',
      gradient: 'from-black/70 via-black/60 to-black/70'
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
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Варианты титульного листа</h1>
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
          <p className="text-sm text-muted-foreground mt-2">
            {currentVariant.name}
          </p>
        </div>
      </div>

      <div className="pt-20">
        <section className="relative h-screen flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500"
            style={{
              backgroundImage: `url(${currentVariant.image})`,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${currentVariant.gradient}`} />
          </div>
          
          <div className="relative z-10 text-center text-white px-6">
            <div className="bg-slate-900/90 backdrop-blur-md px-12 py-8 rounded-xl border border-accent/30 shadow-2xl max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-1.5 bg-accent/90 rounded">
                  <Icon name="Building2" size={32} className="text-white" />
                </div>
                <h1 className="text-5xl font-bold leading-none tracking-tight">
                  ПРЕМИУМ<br />УПРАВЛЕНИЕ
                </h1>
              </div>
              <div className="h-px w-48 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mb-4" />
              <p className="text-lg font-medium tracking-widest uppercase text-white/90">
                Эффективность · Надежность · Результат
              </p>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('description')}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce"
          >
            <Icon name="ChevronDown" size={48} />
          </button>
        </section>

        <div id="description" className="bg-slate-100 py-12">
          <div className="container mx-auto px-6">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-6">Описание вариантов:</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-bold text-primary mb-2">Вариант 1: Роскошный ТЦ - интерьер</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Современный торговый центр с элегантным интерьером, мраморными полами и стеклянной крышей. Показывает премиум-сегмент и профессиональное управление.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-bold text-primary mb-2">Вариант 2: Торговый комплекс - вечер</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Вечерняя атмосфера торгового комплекса с красивой подсветкой. Создает ощущение уюта и премиальности.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-bold text-primary mb-2">Вариант 3: Премиум маркетплейс</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Светлый интерьер с высокой стеклянной крышей в европейском стиле. Демонстрирует открытость и современность.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-bold text-primary mb-2">Вариант 4: Торговый комплекс - аэросъемка</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Масштабный вид с высоты на торговый комплекс. Показывает размах бизнеса и профессионализм управления.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-bold text-primary mb-2">Вариант 5: Ритейл галерея</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Роскошный интерьер с высокими потолками и дизайнерскими магазинами. Акцент на премиум-сегменте и эксклюзивности.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-bold text-primary mb-2">Вариант 6: Фуд-корт и маркетплейс</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Современное пространство с фуд-кортом и торговыми точками. Показывает многофункциональность и комплексный подход.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVariants;

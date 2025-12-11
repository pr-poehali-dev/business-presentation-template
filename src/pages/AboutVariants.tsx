import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AboutVariant1 from '@/components/AboutVariant1';
import AboutVariant2 from '@/components/AboutVariant2';
import AboutVariant3 from '@/components/AboutVariant3';

const AboutVariants = () => {
  const [activeVariant, setActiveVariant] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Варианты дизайна секции "О компании"</h1>
            <div className="flex gap-3">
              <Button
                variant={activeVariant === 1 ? 'default' : 'outline'}
                onClick={() => setActiveVariant(1)}
              >
                Вариант 1
              </Button>
              <Button
                variant={activeVariant === 2 ? 'default' : 'outline'}
                onClick={() => setActiveVariant(2)}
              >
                Вариант 2
              </Button>
              <Button
                variant={activeVariant === 3 ? 'default' : 'outline'}
                onClick={() => setActiveVariant(3)}
              >
                Вариант 3
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {activeVariant === 1 && 'Карточная сетка с верхней акцентной границей'}
            {activeVariant === 2 && 'Асимметричная раскладка с боковой цветной линией'}
            {activeVariant === 3 && 'Темный премиум с градиентными акцентами'}
          </p>
        </div>
      </div>

      <div className="pt-32">
        {activeVariant === 1 && <AboutVariant1 />}
        {activeVariant === 2 && <AboutVariant2 />}
        {activeVariant === 3 && <AboutVariant3 />}
      </div>

      <div className="bg-slate-100 py-12">
        <div className="container mx-auto px-6">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6">Описание вариантов:</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-bold text-primary mb-2">Вариант 1: Карточная сетка</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Текст в большой карточке сверху, преимущества в виде вертикальных карточек с верхней цветной границей. 
                  Последний пункт выделен градиентом и занимает две колонки. Hover-эффекты с подъёмом карточек.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-bold text-primary mb-2">Вариант 2: Асимметричная раскладка</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Текст слева (2 колонки) с вертикальной цветной линией, преимущества справа (3 колонки) в виде горизонтальных карточек. 
                  Минималистичный дизайн с акцентом на левую границу при наведении. Последний пункт на темном фоне.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-bold text-primary mb-2">Вариант 3: Темный премиум</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Темный фон с градиентными размытыми элементами, стеклянные карточки с эффектом blur. 
                  Преимущества в виде центрированных блоков. Последний пункт — крупная горизонтальная карточка с градиентом.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVariants;

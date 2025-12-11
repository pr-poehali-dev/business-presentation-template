import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AboutVariant1 from '@/components/AboutVariant1';
import AboutVariant2 from '@/components/AboutVariant2';
import AboutVariant3 from '@/components/AboutVariant3';
import AboutVariant4 from '@/components/AboutVariant4';
import AboutVariant5 from '@/components/AboutVariant5';
import AboutVariant6 from '@/components/AboutVariant6';

const AboutVariants = () => {
  const [activeVariant, setActiveVariant] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Варианты дизайна секции "О компании"</h1>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={activeVariant === 1 ? 'default' : 'outline'}
                onClick={() => setActiveVariant(1)}
                size="sm"
              >
                Вариант 1
              </Button>
              <Button
                variant={activeVariant === 2 ? 'default' : 'outline'}
                onClick={() => setActiveVariant(2)}
                size="sm"
              >
                Вариант 2
              </Button>
              <Button
                variant={activeVariant === 3 ? 'default' : 'outline'}
                onClick={() => setActiveVariant(3)}
                size="sm"
              >
                Вариант 3
              </Button>
              <Button
                variant={activeVariant === 4 ? 'default' : 'outline'}
                onClick={() => setActiveVariant(4)}
                size="sm"
              >
                Вариант 4
              </Button>
              <Button
                variant={activeVariant === 5 ? 'default' : 'outline'}
                onClick={() => setActiveVariant(5)}
                size="sm"
              >
                Вариант 5
              </Button>
              <Button
                variant={activeVariant === 6 ? 'default' : 'outline'}
                onClick={() => setActiveVariant(6)}
                size="sm"
              >
                Вариант 6
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {activeVariant === 1 && 'Карточная сетка с верхней акцентной границей'}
            {activeVariant === 2 && 'Асимметричная раскладка с боковой цветной линией'}
            {activeVariant === 3 && 'Темный премиум с градиентными акцентами'}
            {activeVariant === 4 && 'Сетка 3 колонки с одинаковыми карточками'}
            {activeVariant === 5 && 'Вертикальный список с текстом в 2 колонках'}
            {activeVariant === 6 && 'Минималистичная сетка 2 колонки без фонов'}
          </p>
        </div>
      </div>

      <div className="pt-32">
        {activeVariant === 1 && <AboutVariant1 />}
        {activeVariant === 2 && <AboutVariant2 />}
        {activeVariant === 3 && <AboutVariant3 />}
        {activeVariant === 4 && <AboutVariant4 />}
        {activeVariant === 5 && <AboutVariant5 />}
        {activeVariant === 6 && <AboutVariant6 />}
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

              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-bold text-primary mb-2">Вариант 4: Сетка 3 колонки</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Текст в крупной карточке сверху. Все преимущества в сетке 3 колонки с одинаковыми горизонтальными карточками. 
                  Последний пункт такой же стилистики, как остальные.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-bold text-primary mb-2">Вариант 5: Вертикальный список</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Текст разбит на 2 отдельные карточки сверху. Все преимущества в виде вертикального списка с одинаковыми карточками. 
                  Компактный дизайн с узкими отступами.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-bold text-primary mb-2">Вариант 6: Минималистичный</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Текст крупно по центру без карточек. Преимущества сеткой 2 колонки без фонов, только иконки и текст. 
                  Максимум воздуха и минимализм. Последний пункт занимает 2 колонки.
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
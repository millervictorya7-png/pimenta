import React from 'react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  { 
    id: '1', 
    name: 'Espetinho de Alcatra', 
    description: 'Cubos de alcatra macia temperados com sal de parrilla.', 
    price: 'R$ 14,00', 
    category: 'Classic',
    imageUrl: 'https://images.unsplash.com/photo-1534177616072-ef7dc12044f9?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: '2', 
    name: 'Espetinho de Frango', 
    description: 'Peito de frango suculento marinado no limão e ervas finas.', 
    price: 'R$ 10,00', 
    category: 'Classic',
    imageUrl: 'https://images.unsplash.com/photo-1625938145744-e38051539994?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: '3', 
    name: 'Medalhão de Queijo', 
    description: 'Queijo coalho envolto em tiras de bacon crocante.', 
    price: 'R$ 16,00', 
    category: 'Premium',
    imageUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: '4', 
    name: 'Picanha Premium', 
    description: 'Picanha importada, macia e com a gordura na medida certa.', 
    price: 'R$ 25,00', 
    category: 'Premium',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: '5', 
    name: 'Jantinha Completa', 
    description: 'Arroz, feijão tropeiro, vinagrete, mandioca e 1 espeto (Clássico).', 
    price: 'R$ 28,00', 
    category: 'Meals',
    imageUrl: 'https://images.unsplash.com/photo-1599321955726-e04842d961e6?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: '6', 
    name: 'Feijão Tropeiro (Porção)', 
    description: 'Receita da família com bacon, calabresa, couve e ovos.', 
    price: 'R$ 15,00', 
    category: 'Meals',
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: '7', 
    name: 'Pão de Alho', 
    description: 'Recheio cremoso da casa, crocante por fora.', 
    price: 'R$ 8,00', 
    category: 'Sides',
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=600&auto=format&fit=crop'
  },
  { 
    id: '8', 
    name: 'Espetinho Veggie', 
    description: 'Abobrinha, pimentão, cebola roxa e queijo coalho.', 
    price: 'R$ 12,00', 
    category: 'Vegetarian',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=600&auto=format&fit=crop'
  },
];

export const Menu: React.FC = () => {
  const categories = ['Meals', 'Premium', 'Classic', 'Sides', 'Vegetarian'];
  
  const categoryLabels: Record<string, string> = {
    'Meals': 'Jantinhas & Pratos',
    'Premium': 'Espetos Premium',
    'Classic': 'Clássicos da Casa',
    'Sides': 'Acompanhamentos',
    'Vegetarian': 'Opções Vegetarianas'
  };

  return (
    <div className="py-16 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-stone-900 uppercase mb-2">
            Nosso Cardápio
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full mb-4"></div>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Do espetinho rápido à janta completa. Tudo preparado na brasa com ingredientes frescos e tempero caseiro.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map(category => (
            <div key={category} className="animate-fade-in-up">
              <h3 className="text-3xl font-display font-bold text-stone-800 mb-8 flex items-center gap-4">
                <span className="text-brand-orange">{categoryLabels[category]}</span>
                <div className="h-px flex-grow bg-stone-200"></div>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {menuItems.filter(item => item.category === category).map(item => (
                  <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-stone-200 group hover:border-brand-orange/50 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl">
                    <div className="h-48 overflow-hidden relative">
                       <img 
                         src={item.imageUrl} 
                         alt={item.name} 
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                       <div className="absolute bottom-3 right-3">
                           <span className="bg-brand-red text-white font-bold px-3 py-1 rounded-lg shadow-md">
                               {item.price}
                           </span>
                       </div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-stone-900 group-hover:text-brand-red transition-colors mb-2">
                        {item.name}
                      </h4>
                      <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-gradient-to-r from-brand-red to-brand-orange rounded-2xl shadow-xl text-center relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase">Leve o Pimenta para sua Festa!</h3>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                    Oferecemos serviço de buffet de espetinhos completo para eventos. 
                    Churrasqueiro, guarnições e todo o sabor que você já conhece.
                </p>
                <button className="bg-white text-brand-red font-bold py-3 px-8 rounded-full hover:bg-stone-100 transition-all shadow-lg hover:scale-105">
                    Solicitar Orçamento
                </button>
            </div>
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-stone-50 overflow-hidden min-h-[85vh] flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:py-20">
          
          {/* Text Content */}
          <div className="flex flex-col items-start text-left animate-fade-in-up">
            
            <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-bold mb-8 border border-brand-red/20">
              <Flame className="h-4 w-4" />
              <span>O Melhor Espetinho da Região</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-stone-900 mb-6 uppercase tracking-tight leading-[0.9]">
              Sabor que <br/>
              <span className="text-brand-red">Fica</span> & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">Vicia</span>
            </h1>

            <p className="mt-4 max-w-xl text-xl text-stone-600 mb-10 leading-relaxed font-light pl-1 border-l-4 border-brand-red">
              Espetinhos artesanais, jantinhas completas e aquele molho de pimenta secreto. 
              O verdadeiro churrasco raiz, feito com paixão e servido com qualidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                to="/menu"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-brand-red hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-brand-red/30 hover:-translate-y-1"
              >
                Ver Cardápio
              </Link>
              <Link 
                to="/blog"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-stone-200 text-lg font-bold rounded-lg text-stone-600 hover:bg-stone-100 hover:border-stone-300 transition-all duration-200 group bg-white"
              >
                Dicas do Mestre
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image Content - Cleaner Look */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end">
             <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-full">
                {/* Blob Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-red/20 rounded-[3rem] rotate-3 transform scale-105"></div>
                
                {/* Main Image - Using a reliable Unsplash ID for Chicken Skewers on Plate */}
                <img 
                  src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1200&auto=format&fit=crop" 
                  alt="Espetinho Delicioso no Prato" 
                  className="relative w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-8 border-white z-10"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3 animate-bounce-slow">
                    <div className="bg-green-100 p-3 rounded-full">
                        <Flame className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                        <p className="text-xs text-stone-500 uppercase font-bold">Qualidade</p>
                        <p className="text-lg font-bold text-stone-900">100% Artesanal</p>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
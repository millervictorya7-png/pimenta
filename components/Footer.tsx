import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-white uppercase">Espetinho do Pimenta</h3>
            <p className="text-stone-400 text-sm max-w-xs">
              O autêntico sabor do churrasco brasileiro, servido com paixão e os melhores acompanhamentos da cidade.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-brand-orange uppercase">Contato</h4>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-red" />
                <span>Rua das Brasas, 123 - Centro Gastronômico</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-red" />
                <span>(11) 99999-8888</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-brand-orange uppercase">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-brand-red transition-colors text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-brand-red transition-colors text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-brand-red transition-colors text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 text-center text-stone-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Espetinho do Pimenta. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
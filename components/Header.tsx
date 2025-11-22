import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const PepperIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.89 2.43C12.6 2.2 12.24 2.1 11.87 2.15C9.93003 2.42 7.75003 3.76 6.19003 5.32C4.10003 7.41 2.94003 10.56 3.10003 12.95C3.15003 13.65 3.36003 14.34 3.73003 14.97L3.11003 15.59C2.06003 16.64 2.06003 18.35 3.11003 19.4C3.64003 19.93 4.33003 20.19 5.02003 20.19C5.71003 20.19 6.40003 19.93 6.93003 19.4L7.55003 18.78C8.18003 19.15 8.87003 19.36 9.57003 19.41C11.96 19.57 15.11 18.41 17.2 16.32C18.76 14.76 20.1 12.58 20.37 10.64C20.42 10.27 20.32 9.91 20.09 9.62C19.78 9.23 19.28 9.06 18.81 9.18C18.13 9.36 17.31 9.4 16.4 9.17C15.12 8.84 14.04 8.09 13.56 7.61C13.08 7.13 12.33 6.05 12 4.77C11.77 3.86 11.81 3.04 11.99 2.36C12.11 1.89 12.5 1.52 12.89 2.43ZM7.91003 6.53C9.13003 5.31 10.8 4.32 12.39 4.05C12.67 5.13 13.33 6.08 13.84 6.59C14.35 7.1 15.3 7.76 16.38 8.04C16.11 9.63 15.12 11.3 13.9 12.52C12.04 14.38 9.36003 15.38 7.33003 15.25C7.23003 14.54 6.96003 13.86 6.54003 13.26C5.94003 12.84 5.26003 12.57 4.55003 12.47C4.42003 10.44 5.42003 7.76 6.81003 6.37L7.91003 6.53Z" />
    <path d="M17.5 2C16.5 2 15.5 2.5 15 3.5C15.5 2.8 16.5 2.5 17.5 2.5C18.5 2.5 19.5 3 20 4L21.5 2.5C20.5 2 19 2 17.5 2Z" fill="currentColor" />
  </svg>
);

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Blog', path: '/blog' },
    { name: 'Criar Post (IA)', path: '/admin' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-red p-1.5 rounded-full group-hover:scale-110 transition-transform duration-300 border-2 border-brand-red">
              <PepperIcon className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider text-stone-900 uppercase leading-none">Espetinho</span>
              <span className="font-display font-bold text-xl tracking-wider text-brand-red uppercase leading-none">Do Pimenta</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-brand-red font-bold'
                    : 'text-stone-600 hover:text-brand-orange'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-brand-red p-2"
            >
              {isOpen ? <X className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-stone-50 text-brand-red'
                    : 'text-stone-600 hover:bg-stone-50 hover:text-brand-orange'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
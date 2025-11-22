import React from 'react';
import { BlogPost } from '../types';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogListProps {
  posts: BlogPost[];
}

export const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-stone-900 uppercase mb-4">
            Blog do Pimenta
          </h2>
          <div className="h-1 w-24 bg-brand-red mx-auto rounded-full"></div>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Receitas, dicas de churrasco e novidades quentes direto da nossa grelha para sua tela.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col bg-white rounded-xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    {post.tags[0]}
                  </span>
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center gap-4 text-stone-500 text-xs mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-3 line-clamp-2 group-hover:text-brand-red transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-stone-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.summary}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                  <div className="flex gap-2 overflow-hidden">
                     {post.tags.slice(1,3).map(tag => (
                         <span key={tag} className="text-xs text-stone-500 flex items-center gap-1 bg-stone-100 px-2 py-1 rounded">
                             <Tag className="h-3 w-3" /> {tag}
                         </span>
                     ))}
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-brand-red font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Ler mais <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
           <div className="text-center py-12">
               <p className="text-stone-500 text-lg">Nenhum post encontrado. Vá até a área administrativa para criar conteúdo com IA!</p>
           </div>
        )}
      </div>
    </div>
  );
};
import React from 'react';
import { BlogPost as BlogPostType } from '../types';
import { Calendar, User, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

interface BlogPostProps {
  posts: BlogPostType[];
}

export const BlogPost: React.FC<BlogPostProps> = ({ posts }) => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-stone-800 font-bold mb-4">Post não encontrado</h2>
          <Link to="/blog" className="text-brand-red hover:underline">Voltar para o Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-stone-50 min-h-screen pb-20">
      {/* Header Image */}
      <div className="w-full h-96 relative">
         <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent z-10"></div>
         <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
         />
         <div className="absolute bottom-0 left-0 w-full z-20 p-4">
             <div className="max-w-4xl mx-auto">
                 <Link to="/blog" className="inline-flex items-center text-stone-300 hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" /> Voltar
                 </Link>
                 <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 shadow-black drop-shadow-lg leading-tight">
                    {post.title}
                 </h1>
                 <div className="flex flex-wrap items-center gap-6 text-stone-200 mb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white font-bold">
                            {post.author.charAt(0)}
                        </div>
                        <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                 </div>
             </div>
         </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
         <div className="bg-white rounded-2xl p-8 md:p-12 -mt-10 relative z-30 shadow-xl border border-stone-200">
            
            <div className="prose prose-lg prose-stone max-w-none">
                {post.content.split('\n').map((paragraph, idx) => (
                    paragraph.trim() !== "" ? <p key={idx} className="mb-4 text-stone-700 leading-relaxed">{paragraph}</p> : <br key={idx}/>
                ))}
            </div>

            <div className="mt-12 pt-8 border-t border-stone-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="bg-stone-100 text-brand-orange px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 border border-stone-200">
                                <Tag className="h-3 w-3" /> {tag}
                            </span>
                        ))}
                    </div>
                    <button className="flex items-center gap-2 text-stone-500 hover:text-brand-red transition-colors">
                        <Share2 className="h-5 w-5" />
                        Compartilhar
                    </button>
                </div>
            </div>

         </div>
      </div>
    </article>
  );
};
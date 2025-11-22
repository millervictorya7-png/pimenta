import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BlogList } from './components/BlogList';
import { BlogPost as BlogPostView } from './components/BlogPost';
import { Menu } from './components/Menu';
import { AIGenerator } from './components/AIGenerator';
import { Footer } from './components/Footer';
import { BlogPost } from './types';
import { ArrowRight } from 'lucide-react';

// Initial mock data with real BBQ images
const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'O Segredo do Tempero Perfeito para Espetinhos',
    summary: 'Descubra quais ervas e especiarias não podem faltar na hora de marinar a carne para garantir suculência e sabor explosivo.',
    content: `O segredo de um bom espetinho começa muito antes de acender o carvão. A marinada é a alma do negócio. 
    
    Aqui no Espetinho do Pimenta, acreditamos que o tempo é o melhor ingrediente. Deixar a carne descansar no tempero por pelo menos 4 horas faz toda a diferença. Mas o que colocar? 
    
    Alho fresco, cebola, um toque de cominho e, claro, nossa pimenta secreta. Para carnes vermelhas, um pouco de vinho tinto ajuda a amaciar as fibras. Já para o frango, limão siciliano e sálvia trazem um frescor incomparável.
    
    Não tenha pressa. Churrasco é ritual, é paciência. E o resultado? Bom, você já conhece: carne derretendo na boca.`,
    author: 'Mestre Pimenta',
    date: '2023-10-15T10:00:00Z',
    tags: ['Dicas', 'Receitas', 'Tempero'],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'A Jantinha Perfeita: Feijão Tropeiro e Vinagrete',
    summary: 'A combinação clássica que faz do espetinho uma refeição completa. Aprenda sobre a tradição da Jantinha.',
    content: `Em Goiás e em várias partes do Brasil, o espetinho não anda sozinho. Ele vem acompanhado da famosa "Jantinha". 
    
    Mas o que faz uma jantinha perfeita? O equilíbrio. O feijão tropeiro precisa ser úmido, com bastante couve e torresmo crocante. O arroz deve ser soltinho. E o vinagrete? Ah, esse tem que ter acidez na medida certa para cortar a gordura da carne.
    
    Aqui no Pimenta, servimos a jantinha tradicional com mandioca cozida derretendo. É comida que abraça, comida de verdade.`,
    author: 'Ana Grelha',
    date: '2023-10-20T14:30:00Z',
    tags: ['Jantinha', 'Tradição', 'Acompanhamentos'],
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop'
  }
];

const App: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);

  const handleAddPost = (newPost: BlogPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-brand-red selection:text-white">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                
                {/* Featured Food Section */}
                <div className="bg-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-brand-orange font-display font-bold tracking-widest uppercase">Experiência Completa</span>
                            <h2 className="text-4xl font-display font-bold text-stone-900 mt-2">Nossas Especialidades</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="group relative rounded-xl overflow-hidden h-80 shadow-md hover:shadow-xl transition-shadow">
                                <img 
                                    src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600&auto=format&fit=crop" 
                                    alt="Espetinhos Variados" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Espetinhos Premium</h3>
                                        <p className="text-stone-200">Cortes nobres selecionados.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative rounded-xl overflow-hidden h-80 shadow-md hover:shadow-xl transition-shadow">
                                <img 
                                    src="https://images.unsplash.com/photo-1599321955726-e04842d961e6?q=80&w=600&auto=format&fit=crop" 
                                    alt="Jantinha Completa" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Jantinha Tradicional</h3>
                                        <p className="text-stone-200">Feijão tropeiro, arroz e vinagrete.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative rounded-xl overflow-hidden h-80 shadow-md hover:shadow-xl transition-shadow">
                                <img 
                                    src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop" 
                                    alt="Fritas e Porções" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Porções e Acompanhamentos</h3>
                                        <p className="text-stone-200">Para compartilhar com a galera.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-10">
                            <Link to="/menu" className="inline-flex items-center text-brand-red hover:text-brand-orange font-bold transition-colors">
                                Ver Menu Completo <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <BlogList posts={posts.slice(0, 3)} />
                
                <div className="bg-brand-red py-16 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-display font-bold text-white mb-6 uppercase">Deu água na boca?</h3>
                        <p className="text-white/90 max-w-xl mx-auto mb-8 text-lg">
                            Venha conhecer nosso espaço e provar o verdadeiro sabor do espetinho com pimenta.
                        </p>
                        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-block bg-white text-brand-red hover:bg-stone-100 font-bold py-3 px-8 rounded-lg cursor-pointer transition-colors shadow-xl">
                            Ver Localização
                        </a>
                    </div>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
                </div>
              </>
            } />
            <Route path="/blog" element={<BlogList posts={posts} />} />
            <Route path="/blog/:id" element={<BlogPostView posts={posts} />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/admin" element={<AIGenerator onAddPost={handleAddPost} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
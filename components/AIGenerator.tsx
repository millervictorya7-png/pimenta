import React, { useState } from 'react';
import { generateBlogContent } from '../services/geminiService';
import { BlogPost, GeneratedPostContent } from '../types';
import { Sparkles, RefreshCw, Save, AlertCircle, Upload, Image as ImageIcon, X } from 'lucide-react';

interface AIGeneratorProps {
  onAddPost: (post: BlogPost) => void;
}

export const AIGenerator: React.FC<AIGeneratorProps> = ({ onAddPost }) => {
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedPostContent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setIsGenerating(true);
    setError(null);
    setGeneratedContent(null);

    try {
      const content = await generateBlogContent(topic);
      setGeneratedContent(content);
    } catch (err) {
      setError('Falha ao gerar conteúdo. Verifique sua API Key ou tente novamente.');
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  const handlePublish = () => {
    if (!generatedContent) return;

    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: generatedContent.title,
      summary: generatedContent.summary,
      content: generatedContent.content,
      author: 'Pimenta Master',
      date: new Date().toISOString(),
      tags: generatedContent.tags,
      // Use uploaded image or fallback to random seed
      imageUrl: imagePreview || `https://picsum.photos/seed/${Date.now()}/800/600`
    };

    onAddPost(newPost);
    
    // Reset form
    setTopic('');
    setGeneratedContent(null);
    setImagePreview(null);
    
    alert('Post publicado com sucesso!');
  };

  return (
    <div className="py-16 bg-stone-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg mb-4">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-display font-bold text-stone-900 uppercase">Estúdio de Criação IA</h2>
          <p className="text-stone-600 mt-2">Crie conteúdo incrível e adicione suas melhores fotos.</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xl mb-8">
            <form onSubmit={handleGenerate} className="space-y-6">
                {/* Image Upload Section */}
                <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Capa do Post (Opcional)</label>
                    
                    {!imagePreview ? (
                        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-stone-300 rounded-xl cursor-pointer bg-stone-50 hover:bg-stone-100 hover:border-brand-orange transition-colors group">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="h-10 w-10 text-stone-400 group-hover:text-brand-orange mb-3 transition-colors" />
                                <p className="mb-1 text-sm text-stone-500"><span className="font-semibold text-stone-700">Clique para enviar</span> ou arraste</p>
                                <p className="text-xs text-stone-400">PNG, JPG ou WebP</p>
                            </div>
                            <input 
                                type="file" 
                                className="hidden" 
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                        </label>
                    ) : (
                        <div className="relative w-full h-64 rounded-xl overflow-hidden border border-stone-200 shadow-sm group">
                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button 
                                    type="button"
                                    onClick={removeImage}
                                    className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors transform hover:scale-110"
                                    title="Remover imagem"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Topic Input Section */}
                <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Tópico do Texto (IA)</label>
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Ex: Dicas para assar pão de alho, Melhores cortes..."
                            className="flex-1 bg-stone-50 border border-stone-300 text-stone-900 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                        />
                        <button 
                            type="submit"
                            disabled={isGenerating || !topic.trim()}
                            className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                        >
                            {isGenerating ? <RefreshCw className="animate-spin h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                            <span className="hidden sm:inline">Gerar Texto</span>
                        </button>
                    </div>
                </div>
            </form>
            
            {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-800">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p>{error}</p>
                </div>
            )}
        </div>

        {generatedContent && (
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden animate-fade-in-up shadow-lg">
                <div className="bg-stone-100 px-6 py-4 border-b border-stone-200 flex justify-between items-center flex-wrap gap-2">
                    <h3 className="font-bold text-stone-800 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-purple-600" /> Preview Final
                    </h3>
                    <button 
                        onClick={handlePublish}
                        className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors ml-auto"
                    >
                        <Save className="h-4 w-4" /> Publicar Post
                    </button>
                </div>
                
                {/* Preview with Image */}
                <div className="relative h-64 w-full bg-stone-200">
                    {imagePreview ? (
                        <img src={imagePreview} alt="Cover Preview" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-stone-400 flex-col gap-2">
                            <ImageIcon className="h-12 w-12" />
                            <span className="text-sm font-medium">Sem imagem (será gerada aleatoriamente)</span>
                        </div>
                    )}
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h2 className="text-3xl font-display font-bold text-white drop-shadow-md">{generatedContent.title}</h2>
                    </div>
                </div>

                <div className="p-8 space-y-6">
                    <div>
                        <span className="text-xs text-stone-500 uppercase font-bold tracking-wider">Resumo</span>
                        <p className="text-stone-600 italic border-l-2 border-brand-orange pl-4 mt-1">{generatedContent.summary}</p>
                    </div>
                    <div>
                        <span className="text-xs text-stone-500 uppercase font-bold tracking-wider">Conteúdo</span>
                        <div className="mt-2 text-stone-700 space-y-4 whitespace-pre-line leading-relaxed">
                            {generatedContent.content}
                        </div>
                    </div>
                    <div>
                        <span className="text-xs text-stone-500 uppercase font-bold tracking-wider">Tags</span>
                        <div className="flex gap-2 mt-2">
                            {generatedContent.tags.map(tag => (
                                <span key={tag} className="bg-stone-100 text-stone-600 px-2 py-1 rounded text-xs border border-stone-200">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )}

        {!generatedContent && !isGenerating && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-600 text-sm">
                <div className="bg-white border border-stone-200 p-4 rounded-lg shadow-sm">
                    <strong className="text-stone-900 block mb-1">💡 Ideia:</strong>
                    Carregue uma foto do "Prato do Dia" e peça para a IA descrever.
                </div>
                <div className="bg-white border border-stone-200 p-4 rounded-lg shadow-sm">
                    <strong className="text-stone-900 block mb-1">💡 Ideia:</strong>
                    Tire foto da churrasqueira cheia e gere um post sobre "Domingo em Família".
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

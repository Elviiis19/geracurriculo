import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Menu, X, ChevronDown, Code, PenTool, Layout as LayoutIcon, BookOpen, Wrench, ExternalLink } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const year = new Date().getFullYear();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownEnter = (category: string) => setActiveDropdown(category);
  const handleDropdownLeave = () => setActiveDropdown(null);

  // Componente para Link Interno (Router)
  const DropdownLink = ({ to, title, desc, icon: Icon }: { to: string, title: string, desc: string, icon: any }) => (
    <Link to={to} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group/item">
      <div className="mt-1 p-1.5 bg-slate-100 text-slate-500 rounded-lg group-hover/item:bg-blue-100 group-hover/item:text-blue-600 transition-colors">
        <Icon size={16} />
      </div>
      <div>
        <div className="font-bold text-slate-800 group-hover/item:text-blue-700 text-sm transition-colors">{title}</div>
        <div className="text-xs text-slate-500 mt-0.5 leading-snug">{desc}</div>
      </div>
    </Link>
  );

  // Componente para Link Externo (Outros Projetos)
  const ExternalDropdownLink = ({ href, title, desc }: { href: string, title: string, desc: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group/item">
      <div className="mt-1 p-1.5 bg-green-50 text-green-600 rounded-lg group-hover/item:bg-green-100 transition-colors">
        <ExternalLink size={16} />
      </div>
      <div>
        <div className="font-bold text-slate-800 group-hover/item:text-green-700 text-sm transition-colors flex items-center gap-1">
            {title}
        </div>
        <div className="text-xs text-slate-500 mt-0.5 leading-snug">{desc}</div>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      
      {/* Top Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-green-500"></div>

      {/* Navbar Profissional */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group mr-8 lg:mr-12">
              <div className="bg-slate-900 text-white p-2.5 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                <FileText size={26} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter leading-none group-hover:text-blue-700 transition-colors">Gera Currículo</h1>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.1em] mt-0.5">Online & Grátis</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 h-full">
              
              {/* 1. CLÁSSICOS */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleDropdownEnter('classic')}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                    className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 
                    ${activeDropdown === 'classic' ? 'bg-slate-100 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                  Clássicos 
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'classic' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-[85%] left-0 w-72 bg-white shadow-2xl rounded-2xl border border-slate-100 p-3 z-50 transform transition-all duration-200 origin-top-left
                    ${activeDropdown === 'classic' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                      <DropdownLink icon={BookOpen} to="/builder?template=vitae" title="Vitae (Acadêmico)" desc="Tradicional e sóbrio." />
                      <div className="h-px bg-slate-100 my-1"></div>
                      <DropdownLink icon={LayoutIcon} to="/builder?template=minimal" title="Executivo Minimal" desc="Limpo e direto." />
                </div>
              </div>

              {/* 2. MODERNOS */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleDropdownEnter('modern')}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                     className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 
                    ${activeDropdown === 'modern' ? 'bg-slate-100 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                  Modernos 
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'modern' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-[85%] left-0 w-72 bg-white shadow-2xl rounded-2xl border border-slate-100 p-3 z-50 transform transition-all duration-200 origin-top-left
                    ${activeDropdown === 'modern' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                      <DropdownLink icon={LayoutIcon} to="/builder?template=modern" title="Corporativo com Foto" desc="Barra lateral colorida." />
                      <DropdownLink icon={PenTool} to="/builder?template=creative" title="Bold Creative" desc="Design & Marketing." />
                </div>
              </div>

              {/* 3. TECH */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleDropdownEnter('tech')}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                     className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 
                    ${activeDropdown === 'tech' ? 'bg-slate-100 text-emerald-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                >
                  Tech 
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'tech' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-[85%] left-0 w-72 bg-white shadow-2xl rounded-2xl border border-slate-100 p-3 z-50 transform transition-all duration-200 origin-top-left
                    ${activeDropdown === 'tech' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                      <DropdownLink icon={Code} to="/builder?template=tech" title="Full Stack Dev" desc="Estilo IDE/Código." />
                </div>
              </div>

               {/* 4. FERRAMENTAS (NOVO) */}
               <div 
                className="relative h-full flex items-center ml-4 border-l border-slate-200 pl-4"
                onMouseEnter={() => handleDropdownEnter('tools')}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                     className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border
                    ${activeDropdown === 'tools' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-white border-slate-200 text-slate-700 hover:border-green-300 hover:text-green-700'}`}
                >
                  <Wrench size={16} className={activeDropdown === 'tools' ? 'text-green-600' : 'text-slate-400'} /> 
                  Ferramentas 
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'tools' ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`absolute top-[85%] right-0 w-80 bg-white shadow-2xl rounded-2xl border border-slate-100 p-3 z-50 transform transition-all duration-200 origin-top-right
                    ${activeDropdown === 'tools' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                      <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Outros Projetos Úteis</div>
                      <ExternalDropdownLink href="https://recibogratis.com.br" title="Recibo Grátis" desc="Gere recibos de pagamento online." />
                      <ExternalDropdownLink href="https://declaracaoonline.com.br" title="Declaração Online" desc="Modelos de declaração prontos." />
                      <ExternalDropdownLink href="https://geracontrato.com.br" title="Gera Contrato" desc="Crie contratos simples e rápidos." />
                </div>
              </div>

            </nav>

            <div className="hidden md:block flex-1"></div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-2xl z-40 max-h-[80vh] overflow-y-auto">
                <div className="p-4 space-y-6">
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                           <BookOpen size={14} /> Modelos
                        </div>
                        <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-slate-100 ml-1">
                            <Link to="/builder?template=vitae" className="py-2 text-sm text-slate-700 font-medium hover:text-blue-600">Vitae (Clássico)</Link>
                            <Link to="/builder?template=minimal" className="py-2 text-sm text-slate-700 font-medium hover:text-blue-600">Executivo</Link>
                            <Link to="/builder?template=modern" className="py-2 text-sm text-slate-700 font-medium hover:text-blue-600">Moderno com Foto</Link>
                            <Link to="/builder?template=tech" className="py-2 text-sm text-slate-700 font-medium hover:text-blue-600">Tech / Dev</Link>
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                           <Wrench size={14} /> Nossas Ferramentas
                        </div>
                        <div className="space-y-3">
                            <a href="https://recibogratis.com.br" target="_blank" rel="noreferrer" className="flex items-center justify-between text-sm font-bold text-slate-700">Recibo Grátis <ExternalLink size={12}/></a>
                            <a href="https://declaracaoonline.com.br" target="_blank" rel="noreferrer" className="flex items-center justify-between text-sm font-bold text-slate-700">Declaração Online <ExternalLink size={12}/></a>
                            <a href="https://geracontrato.com.br" target="_blank" rel="noreferrer" className="flex items-center justify-between text-sm font-bold text-slate-700">Gera Contrato <ExternalLink size={12}/></a>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-4 mt-4 text-center">
                       <Link to="/about" className="inline-block py-2 text-xs font-bold text-slate-400 hover:text-blue-600 uppercase tracking-widest">Quem Somos</Link>
                       <span className="mx-2 text-slate-300">|</span>
                       <Link to="/terms" className="inline-block py-2 text-xs font-bold text-slate-400 hover:text-blue-600 uppercase tracking-widest">Termos</Link>
                    </div>
                </div>
            </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer Minimalista */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-12 print:hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="flex justify-center items-center gap-3 mb-6 opacity-70">
                 <div className="p-2 bg-slate-100 rounded-lg">
                    <FileText size={20} className="text-slate-600"/>
                 </div>
                 <span className="font-bold text-slate-700 text-lg">Gera Currículo</span>
              </div>
              <p className="text-slate-500 max-w-md mx-auto mb-6 text-sm">
                  Parte do ecossistema de ferramentas gratuitas desenvolvidas por Elvis Dias. 
                  Simplificando a burocracia do dia a dia.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-blue-600 mb-8">
                  <a href="https://recibogratis.com.br" target="_blank" rel="noreferrer" className="hover:underline">Recibo Grátis</a>
                  <span className="text-slate-300">•</span>
                  <a href="https://declaracaoonline.com.br" target="_blank" rel="noreferrer" className="hover:underline">Declaração Online</a>
                  <span className="text-slate-300">•</span>
                  <a href="https://geracontrato.com.br" target="_blank" rel="noreferrer" className="hover:underline">Gera Contrato</a>
              </div>

              <div className="text-xs font-medium text-slate-400 border-t border-slate-100 pt-6">
                  &copy; {year} Elvis Dias. Todos os direitos reservados.
              </div>
          </div>
      </footer>
    </div>
  );
};

export default Layout;
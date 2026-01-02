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
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      
      {/* Top Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-green-500"></div>

      {/* Navbar Profissional */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group mr-8 lg:mr-12" aria-label="Gera Currículo - Ir para página inicial">
              <div className="bg-slate-900 text-white p-2.5 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                <FileText size={26} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter leading-none group-hover:text-blue-700 transition-colors">Gera Currículo</h1>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.1em] mt-0.5">Online & Grátis</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 h-full" role="navigation">
              
              {/* 1. CLÁSSICOS */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleDropdownEnter('classic')}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                    className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 
                    ${activeDropdown === 'classic' ? 'bg-slate-100 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                    aria-expanded={activeDropdown === 'classic'}
                >
                  Clássicos 
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'classic' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-[85%] left-0 w-72 bg-white shadow-2xl rounded-2xl border border-slate-100 p-3 z-50 transform transition-all duration-200 origin-top-left
                    ${activeDropdown === 'classic' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                      <DropdownLink icon={BookOpen} to="/modelo/curriculo-vitae-classico" title="Vitae (Acadêmico)" desc="Tradicional e sóbrio." />
                      <div className="h-px bg-slate-100 my-1"></div>
                      <DropdownLink icon={LayoutIcon} to="/modelo/curriculo-executivo-minimal" title="Executivo Minimal" desc="Limpo e direto." />
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
                    aria-expanded={activeDropdown === 'modern'}
                >
                  Modernos 
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'modern' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-[85%] left-0 w-72 bg-white shadow-2xl rounded-2xl border border-slate-100 p-3 z-50 transform transition-all duration-200 origin-top-left
                    ${activeDropdown === 'modern' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                      <DropdownLink icon={LayoutIcon} to="/modelo/curriculo-moderno-com-foto" title="Corporativo com Foto" desc="Barra lateral colorida." />
                      <DropdownLink icon={PenTool} to="/modelo/curriculo-criativo-bold" title="Bold Creative" desc="Design & Marketing." />
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
                    aria-expanded={activeDropdown === 'tech'}
                >
                  Tech 
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'tech' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-[85%] left-0 w-72 bg-white shadow-2xl rounded-2xl border border-slate-100 p-3 z-50 transform transition-all duration-200 origin-top-left
                    ${activeDropdown === 'tech' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                      <DropdownLink icon={Code} to="/modelo/curriculo-programador-tech" title="Full Stack Dev" desc="Estilo IDE/Código." />
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
                    ${activeDropdown === 'tools' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-white border-slate-200 text-slate-600 hover:border-green-300 hover:text-green-700'}`}
                    aria-expanded={activeDropdown === 'tools'}
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
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
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
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                           <BookOpen size={14} /> Modelos
                        </div>
                        <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-slate-100 ml-1">
                            <Link to="/modelo/curriculo-vitae-classico" className="py-2 text-sm text-slate-700 font-medium hover:text-blue-700">Vitae (Clássico)</Link>
                            <Link to="/modelo/curriculo-executivo-minimal" className="py-2 text-sm text-slate-700 font-medium hover:text-blue-700">Executivo</Link>
                            <Link to="/modelo/curriculo-moderno-com-foto" className="py-2 text-sm text-slate-700 font-medium hover:text-blue-700">Moderno com Foto</Link>
                            <Link to="/modelo/curriculo-programador-tech" className="py-2 text-sm text-slate-700 font-medium hover:text-blue-700">Tech / Dev</Link>
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                           <Wrench size={14} /> Nossas Ferramentas
                        </div>
                        <div className="space-y-3">
                            <a href="https://recibogratis.com.br" target="_blank" rel="noreferrer" className="flex items-center justify-between text-sm font-bold text-slate-800">Recibo Grátis <ExternalLink size={12}/></a>
                            <a href="https://declaracaoonline.com.br" target="_blank" rel="noreferrer" className="flex items-center justify-between text-sm font-bold text-slate-800">Declaração Online <ExternalLink size={12}/></a>
                            <a href="https://geracontrato.com.br" target="_blank" rel="noreferrer" className="flex items-center justify-between text-sm font-bold text-slate-800">Gera Contrato <ExternalLink size={12}/></a>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-4 mt-4 text-center grid grid-cols-2 gap-2">
                       <Link to="/about" className="py-2 text-xs font-bold text-slate-500 hover:text-blue-700 uppercase tracking-widest">Quem Somos</Link>
                       <Link to="/terms" className="py-2 text-xs font-bold text-slate-500 hover:text-blue-700 uppercase tracking-widest">Termos</Link>
                       <Link to="/contact" className="py-2 text-xs font-bold text-slate-500 hover:text-blue-700 uppercase tracking-widest">Contato</Link>
                       <Link to="/cookies" className="py-2 text-xs font-bold text-slate-500 hover:text-blue-700 uppercase tracking-widest">Cookies</Link>
                    </div>
                </div>
            </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer Profissional */}
      <footer className="bg-white border-t border-slate-200 mt-auto pt-12 pb-8 print:hidden">
          <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-slate-100 pb-12">
                  
                  {/* Brand Column */}
                  <div className="text-center md:text-left">
                      <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
                         <div className="p-2 bg-slate-900 rounded-lg text-white">
                            <FileText size={20}/>
                         </div>
                         <span className="font-bold text-slate-900 text-xl">Gera Currículo</span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                          Ferramenta gratuita para criação de currículos profissionais em PDF. Simples, rápido e sem cadastro.
                      </p>
                  </div>

                  {/* Internal Links */}
                  <div className="text-center md:text-left">
                      {/* Using div but styled as header to fix hierarchy while keeping look */}
                      <div className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-4">Institucional</div>
                      <ul className="space-y-3 text-sm text-slate-600">
                          <li><Link to="/about" className="hover:text-blue-700 hover:underline">Quem Somos</Link></li>
                          <li><Link to="/contact" className="hover:text-blue-700 hover:underline">Fale Conosco</Link></li>
                          <li><Link to="/privacy" className="hover:text-blue-700 hover:underline">Política de Privacidade</Link></li>
                          <li><Link to="/cookies" className="hover:text-blue-700 hover:underline">Política de Cookies</Link></li>
                          <li><Link to="/terms" className="hover:text-blue-700 hover:underline">Termos de Uso</Link></li>
                      </ul>
                  </div>

                  {/* External Ecosystem */}
                  <div className="text-center md:text-left">
                      <div className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-4">Outros Projetos Úteis</div>
                      <ul className="space-y-3 text-sm text-slate-600">
                          <li>
                              <a href="https://recibogratis.com.br" target="_blank" rel="noreferrer" className="hover:text-green-700 hover:underline flex items-center justify-center md:justify-start gap-2">
                                  Recibo Grátis <ExternalLink size={12} className="opacity-50"/>
                              </a>
                          </li>
                          <li>
                              <a href="https://declaracaoonline.com.br" target="_blank" rel="noreferrer" className="hover:text-green-700 hover:underline flex items-center justify-center md:justify-start gap-2">
                                  Declaração Online <ExternalLink size={12} className="opacity-50"/>
                              </a>
                          </li>
                          <li>
                              <a href="https://geracontrato.com.br" target="_blank" rel="noreferrer" className="hover:text-green-700 hover:underline flex items-center justify-center md:justify-start gap-2">
                                  Gera Contrato <ExternalLink size={12} className="opacity-50"/>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>

              {/* Copyright */}
              <div className="text-center">
                  <div className="text-xs font-medium text-slate-500 mb-2">
                      Desenvolvido por <strong className="text-slate-700">Elvis Dias</strong>
                  </div>
                  <div className="text-[10px] text-slate-400">
                      &copy; {year} Gera Currículo. Todos os direitos reservados.
                  </div>
              </div>
          </div>
      </footer>
    </div>
  );
};

export default Layout;
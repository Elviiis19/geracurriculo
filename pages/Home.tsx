import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { 
  CheckCircle2, 
  Zap,
  Star,
  Download,
  MousePointerClick,
  Palette,
  Layout as LayoutIcon,
  HelpCircle,
  ChevronDown,
  FileText
} from 'lucide-react';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.search.includes('section=modelos')) {
      const element = document.getElementById('modelos');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  // --- VISUAL MINIATURE COMPONENTS ---
  // Added aria-hidden="true" to all miniatures because they are decorative and confuse screen readers
  const MiniVitae = () => (
    <div aria-hidden="true" className="w-full h-full bg-white p-4 flex flex-col items-center border-b border-slate-200 pointer-events-none select-none overflow-hidden">
        <div className="w-3/4 h-2 bg-slate-900 mb-1"></div>
        <div className="w-1/2 h-1 bg-slate-400 mb-2"></div>
        <div className="w-full h-px bg-slate-200 mb-2"></div>
        <div className="w-full space-y-2">
            <div className="w-1/3 h-1 bg-slate-300 mx-auto mb-1"></div>
            <div className="w-full h-12 bg-slate-50 border border-slate-100 rounded p-1">
                <div className="w-full h-1 bg-slate-200 mb-1"></div>
                <div className="w-3/4 h-1 bg-slate-200"></div>
            </div>
             <div className="w-1/3 h-1 bg-slate-300 mx-auto mb-1 mt-2"></div>
            <div className="w-full h-8 bg-slate-50 border border-slate-100 rounded"></div>
        </div>
    </div>
  );

  const MiniMinimal = () => (
    <div aria-hidden="true" className="w-full h-full bg-white p-5 flex flex-col border-b border-slate-200 pointer-events-none select-none overflow-hidden">
        <div className="w-2/3 h-3 bg-slate-800 mb-1"></div>
        <div className="w-full h-px bg-slate-800 mb-3"></div>
        <div className="w-full space-y-3">
            <div>
                 <div className="w-16 h-1 bg-slate-400 mb-1 uppercase"></div>
                 <div className="w-full h-1 bg-slate-200 mb-1"></div>
                 <div className="w-5/6 h-1 bg-slate-200"></div>
            </div>
            <div>
                 <div className="w-16 h-1 bg-slate-400 mb-1 uppercase"></div>
                 <div className="space-y-1">
                     <div className="w-full flex justify-between"><div className="w-1/3 h-1 bg-slate-300"></div><div className="w-8 h-1 bg-slate-200"></div></div>
                     <div className="w-full h-1 bg-slate-100"></div>
                     <div className="w-full flex justify-between mt-1"><div className="w-1/3 h-1 bg-slate-300"></div><div className="w-8 h-1 bg-slate-200"></div></div>
                 </div>
            </div>
        </div>
    </div>
  );

  const MiniModern = () => (
    <div aria-hidden="true" className="w-full h-full bg-white flex border-b border-slate-200 pointer-events-none select-none overflow-hidden">
        <div className="w-1/3 bg-slate-100 h-full p-2 flex flex-col items-center border-r border-slate-200">
             <div className="w-10 h-10 rounded-full bg-slate-300 mb-2 border-2 border-white"></div>
             <div className="w-full space-y-1 mt-2">
                 <div className="w-full h-1 bg-slate-300"></div>
                 <div className="w-3/4 h-1 bg-slate-300"></div>
             </div>
             <div className="w-full mt-4">
                 <div className="w-1/2 h-1 bg-slate-400 mb-1"></div>
                 <div className="flex flex-wrap gap-1">
                     <div className="w-6 h-2 bg-white border border-slate-200 rounded-sm"></div>
                     <div className="w-6 h-2 bg-white border border-slate-200 rounded-sm"></div>
                 </div>
             </div>
        </div>
        <div className="w-2/3 p-3">
             <div className="w-3/4 h-3 bg-slate-800 mb-1"></div>
             <div className="w-1/2 h-2 bg-blue-500 mb-3"></div>
             <div className="w-full space-y-2">
                 <div className="w-1/3 h-1 bg-blue-500 mb-1"></div>
                 <div className="w-full h-1 bg-slate-200"></div>
                 <div className="w-full h-1 bg-slate-200"></div>
                 <div className="w-5/6 h-1 bg-slate-200"></div>
             </div>
        </div>
    </div>
  );

  const MiniCreative = () => (
    <div aria-hidden="true" className="w-full h-full bg-white flex flex-col border-b border-slate-200 pointer-events-none select-none overflow-hidden">
        <div className="w-full h-16 bg-indigo-600 p-3 flex justify-between items-center relative overflow-hidden">
            <div className="absolute right-0 top-0 w-12 h-12 bg-indigo-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div>
                 <div className="w-20 h-2 bg-white mb-1"></div>
                 <div className="w-12 h-1 bg-indigo-200"></div>
            </div>
             <div className="w-8 h-8 rounded-full bg-indigo-300 border border-white"></div>
        </div>
        <div className="flex-grow p-2 flex gap-2">
            <div className="w-2/3 space-y-2">
                <div className="w-full h-10 bg-slate-50 border border-slate-100 rounded"></div>
                <div className="w-full h-10 bg-slate-50 border border-slate-100 rounded"></div>
            </div>
            <div className="w-1/3 space-y-2">
                 <div className="w-full h-1 bg-indigo-500 mb-1"></div>
                 <div className="w-full h-1 bg-slate-200"></div>
                 <div className="w-full h-1 bg-slate-200"></div>
            </div>
        </div>
    </div>
  );

  const MiniTech = () => (
    <div aria-hidden="true" className="w-full h-full bg-white flex flex-col border-b border-slate-200 pointer-events-none select-none overflow-hidden font-mono">
         <div className="w-full h-12 bg-[#1e1e1e] p-2 flex flex-col justify-center border-b-2 border-[#007acc]">
             <div className="w-24 h-2 bg-[#569cd6] mb-1"></div>
             <div className="w-16 h-1 bg-[#4ec9b0]"></div>
         </div>
         <div className="flex-grow p-2 flex gap-2">
             <div className="w-4 h-full border-r border-slate-100 flex flex-col gap-1 items-end pr-1 pt-1">
                 <div className="w-1 h-1 bg-slate-300"></div>
                 <div className="w-1 h-1 bg-slate-300"></div>
                 <div className="w-1 h-1 bg-slate-300"></div>
             </div>
             <div className="flex-grow pt-1 space-y-2">
                 <div className="w-full p-1 bg-slate-50 border border-slate-100 rounded text-[3px]">
                     <span className="text-blue-500">function</span> work() {'{}'}
                 </div>
                  <div className="w-full p-1 bg-slate-50 border border-slate-100 rounded text-[3px]">
                     <span className="text-purple-500">import</span> skills
                 </div>
             </div>
         </div>
    </div>
  );

  const TemplateCard = ({ title, description, tags, slug, VisualComponent }: any) => (
      <Link 
        to={`/modelo/${slug}`} 
        className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
        aria-label={`Modelo de currículo ${title}. ${description}`}
      >
        <div className="h-56 relative bg-slate-50 group-hover:bg-blue-50/30 transition-colors">
            <VisualComponent />
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white text-slate-900 font-bold px-6 py-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-2 text-sm border border-slate-100">
                    Editar Modelo <MousePointerClick size={16} className="text-blue-600" />
                </span>
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow relative z-10 bg-white">
            <div className="flex gap-2 mb-3" aria-label="Tags do modelo">
                {tags.map((tag: string) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md border border-slate-200">
                        {tag}
                    </span>
                ))}
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{title}</h3>
            <p className="text-sm text-slate-600 mb-4 flex-grow leading-relaxed">{description}</p>
        </div>
      </Link>
  );

  // FAQ Component
  const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
    <details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
      <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
        {question}
        <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
      </summary>
      <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
        {answer}
      </div>
    </details>
  );

  return (
    <Layout>
      {/* Hero Section - Optimized H1 for SEO and LCP */}
      <div className="bg-white pt-16 pb-20 relative overflow-hidden">
        {/* Performance Optimization: Hidden on mobile to save GPU, visible on lg screens */}
        <div className="hidden lg:block absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="hidden lg:block absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-white text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full mb-8 border border-blue-100 shadow-sm">
            <Star size={12} fill="currentColor" /> Gera Currículo Online
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tighter font-black text-slate-900 mb-8 max-w-5xl mx-auto leading-[1.05]">
            Gera Currículo <span className="text-blue-600">Grátis</span> e Baixe em <span className="text-indigo-600">PDF</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700 mb-12 leading-relaxed font-medium">
            O melhor gerador de Curriculum Vitae online do Brasil. Escolha modelos profissionais, preencha no celular ou PC e baixe na hora. Sem cadastro.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/builder" aria-label="Começar a criar currículo agora" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-slate-900 hover:bg-black shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <Zap size={20} className="mr-2 text-yellow-400" /> Fazer Meu Currículo
            </Link>
            <a href="#modelos" aria-label="Ver modelos de currículo disponíveis" className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-lg font-bold rounded-2xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all duration-300">
              <LayoutIcon size={20} className="mr-2 text-slate-500" /> Ver Modelos Prontos
            </a>
          </div>
          
          <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap justify-center gap-x-8 gap-y-4">
             <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <CheckCircle2 size={16} className="text-emerald-600"/> 100% Gratuito
             </div>
             <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <CheckCircle2 size={16} className="text-emerald-600"/> Sem Cadastro
             </div>
             <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <CheckCircle2 size={16} className="text-emerald-600"/> Pronto para Imprimir
             </div>
             <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <CheckCircle2 size={16} className="text-emerald-600"/> Formatação Automática
             </div>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Como usar o Gera Currículo?</h2>
                <p className="text-slate-600">Siga nosso passo-a-passo simples. Seu documento estará pronto em menos de 5 minutos.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
                 {/* Connector Line (Desktop) - Aria hidden since it is decorative */}
                 <div aria-hidden="true" className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

                 <div className="flex flex-col items-center text-center group">
                     <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center mb-6 border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                         <MousePointerClick size={40} className="text-blue-600" />
                     </div>
                     <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Passo 1</span>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Escolha o Modelo</h3>
                     <p className="text-slate-600 text-sm leading-relaxed px-4">Navegue por nossa galeria de templates (Clássico, Moderno, Criativo) e selecione o ideal para sua área.</p>
                 </div>

                 <div className="flex flex-col items-center text-center group">
                     <div className="w-24 h-24 bg-indigo-50 rounded-3xl flex items-center justify-center mb-6 border border-indigo-100 group-hover:scale-110 transition-transform duration-300">
                         <FileText size={40} className="text-indigo-600" />
                     </div>
                     <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Passo 2</span>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Preencha seus Dados</h3>
                     <p className="text-slate-600 text-sm leading-relaxed px-4">Insira suas informações, experiências e habilidades no nosso formulário fácil. Veja a prévia em tempo real.</p>
                 </div>

                 <div className="flex flex-col items-center text-center group">
                     <div className="w-24 h-24 bg-emerald-50 rounded-3xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
                         <Download size={40} className="text-emerald-600" />
                     </div>
                     <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Passo 3</span>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Baixe em PDF</h3>
                     <p className="text-slate-600 text-sm leading-relaxed px-4">Finalizou? Clique no botão de download e salve seu currículo em PDF de alta qualidade. Pronto para enviar!</p>
                 </div>
            </div>
        </div>
      </section>

      {/* Models Showcase Section */}
      <div id="modelos" className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-4">
                <Palette size={32} className="text-blue-600" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Modelos de Currículo Prontos</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
               Templates otimizados para passar nos softwares de recrutamento (ATS) e impressionar recrutadores humanos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <TemplateCard 
                title="Clássico Vitae"
                description="O padrão ouro. Ideal para áreas jurídicas, acadêmicas e administrativas."
                tags={['Formal', 'Seguro']}
                slug="curriculo-vitae-classico"
                VisualComponent={MiniVitae}
              />
              <TemplateCard 
                title="Executivo Minimal"
                description="Sem foto, foco em resultados. Preferido por grandes multinacionais."
                tags={['Sênior', 'Limpo']}
                slug="curriculo-executivo-minimal"
                VisualComponent={MiniMinimal}
              />
              <TemplateCard 
                title="Moderno Corp"
                description="Visual equilibrado com foto. Ótimo para vendas e atendimento."
                tags={['Com Foto', 'Vendas']}
                slug="curriculo-moderno-com-foto"
                VisualComponent={MiniModern}
              />
              <TemplateCard 
                title="Bold Creative"
                description="Destaque-se na multidão. Para designers, marketing e publicidade."
                tags={['Design', 'Cor']}
                slug="curriculo-criativo-bold"
                VisualComponent={MiniCreative}
              />
              <TemplateCard 
                title="Full Stack Dev"
                description="Mostre seu código. Um currículo feito para devs e profissionais de TI."
                tags={['TI', 'Tech']}
                slug="curriculo-programador-tech"
                VisualComponent={MiniTech}
              />
          </div>
        </div>
      </div>

      {/* FAQ Section (Crucial for SEO) */}
      <section className="bg-white py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-xs mb-3">
                      <HelpCircle size={16} /> Dúvidas
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Perguntas Frequentes</h2>
              </div>
              
              <div className="space-y-4">
                  <FAQItem 
                    question="O Gera Currículo é realmente gratuito?" 
                    answer="Sim! O Gera Currículo é uma ferramenta 100% gratuita. Você pode criar, editar e baixar quantos currículos quiser sem pagar nada e sem marcas d'água."
                  />
                  <FAQItem 
                    question="Preciso fazer cadastro para usar?" 
                    answer="Não. Acreditamos na privacidade e agilidade. Você não precisa criar conta, fazer login ou fornecer seu e-mail para começar a usar o gerador."
                  />
                  <FAQItem 
                    question="Meus dados ficam salvos no site?" 
                    answer="Não armazenamos seus dados pessoais em nossos servidores. Tudo é processado localmente no seu navegador para garantir sua segurança. Recomendamos salvar seu PDF assim que terminar."
                  />
                  <FAQItem 
                    question="Os modelos funcionam no celular?" 
                    answer="Sim, nosso site é totalmente responsivo (mobile-friendly). Você pode preencher e gerar seu currículo diretamente pelo smartphone (Android ou iPhone)."
                  />
                  <FAQItem 
                    question="Qual o melhor modelo para Primeiro Emprego?" 
                    answer="Para primeiro emprego, recomendamos o modelo 'Executivo Minimal' ou 'Clássico Vitae'. Eles focam na sua formação e habilidades, já que você ainda não tem muita experiência profissional."
                  />
              </div>
          </div>
      </section>

      {/* SEO Rich Content Section */}
      <div className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Dicas para um Currículo Campeão</h2>
                
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="font-bold text-slate-800 text-xl mb-3">O que colocar no currículo?</h3>
                        <p className="text-base text-slate-600">
                            Um bom curriculum vitae deve ser conciso e relevante. Inclua sempre:
                        </p>
                        <ul className="text-base text-slate-600 list-disc pl-5 space-y-1 mt-2">
                            <li><strong>Dados Pessoais:</strong> Nome, telefone, e-mail e LinkedIn. Não coloque CPF ou endereço completo.</li>
                            <li><strong>Resumo Profissional:</strong> 3 a 4 linhas descrevendo seus objetivos.</li>
                            <li><strong>Experiência:</strong> Da mais recente para a mais antiga.</li>
                            <li><strong>Formação:</strong> Cursos relevantes para a vaga.</li>
                        </ul>
                    </div>
                    <div>
                         <h3 className="font-bold text-slate-800 text-xl mb-3">Erros comuns para evitar</h3>
                         <p className="text-base text-slate-600">
                            Recrutadores gastam em média 6 segundos por currículo. Evite:
                        </p>
                        <ul className="text-base text-slate-600 list-disc pl-5 space-y-1 mt-2">
                            <li><strong>Erros de português:</strong> Revise duas vezes.</li>
                            <li><strong>Fotos informais:</strong> Se usar foto, use uma profissional.</li>
                            <li><strong>Design exagerado:</strong> Menos é mais. ATS não leem gráficos complexos.</li>
                            <li><strong>Informações irrelevantes:</strong> Não coloque hobbies se não agregam à vaga.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                    <p className="font-medium text-slate-800 mb-4">
                        "O Gera Currículo foi desenvolvido para ajudar brasileiros a conquistarem sua vaga no mercado de trabalho. 
                        Usamos tecnologia para remover barreiras de design e formatação."
                    </p>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">- Elvis Dias, Desenvolvedor</div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Final CTA */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Comece sua carreira agora</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">Junte-se a milhares de profissionais que criaram seus currículos com o Gera Currículo.</p>
          <Link to="/builder" aria-label="Criar currículo grátis agora" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl px-12 py-5 rounded-2xl shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
            Criar Currículo Grátis
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
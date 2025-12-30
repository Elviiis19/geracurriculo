import React from 'react';
import Layout from '../components/Layout';
import { ExternalLink, Code, Heart, Shield, Cookie, Mail, MessageSquare } from 'lucide-react';

export const About: React.FC = () => (
  <Layout>
    <div className="bg-white pt-16 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-black text-slate-900 mb-4">Quem Somos</h1>
                <p className="text-lg text-slate-600">Conheça a história por trás do Gera Currículo.</p>
            </div>

            <div className="prose prose-lg prose-slate mx-auto text-slate-600">
                <p>
                O <strong>Gera Currículo</strong> nasceu com uma missão clara: eliminar a barreira técnica que impede ótimos profissionais de conseguirem boas entrevistas. Acreditamos que a formatação de um documento não deve ser um obstáculo para quem busca emprego.
                </p>

                <h3 className="flex items-center gap-2 text-slate-900 mt-8"><Code className="text-blue-600"/> O Desenvolvedor</h3>
                <p>
                Este projeto foi idealizado e desenvolvido por <strong>Elvis Dias</strong>, programador apaixonado por criar soluções que facilitam a vida das pessoas. O objetivo é fornecer ferramentas gratuitas, rápidas e sem burocracia.
                </p>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-8">
                    <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                        <Heart className="text-red-500" size={20} fill="currentColor" /> Outros Projetos da Família
                    </h4>
                    <p className="text-sm mb-4">
                        O Gera Currículo faz parte de um ecossistema de utilitários online mantidos por Elvis Dias:
                    </p>
                    <ul className="space-y-3 not-prose">
                        <li>
                            <a href="https://recibogratis.com.br" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-blue-600 hover:underline">
                                <ExternalLink size={16} /> recibogratis.com.br
                            </a>
                            <span className="text-sm text-slate-500 block ml-6">Gerador de recibos de pagamento simples e comercial.</span>
                        </li>
                        <li>
                            <a href="https://declaracaoonline.com.br" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-blue-600 hover:underline">
                                <ExternalLink size={16} /> declaracaoonline.com.br
                            </a>
                            <span className="text-sm text-slate-500 block ml-6">Crie declarações de residência, trabalho e renda.</span>
                        </li>
                        <li>
                            <a href="https://geracontrato.com.br" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-blue-600 hover:underline">
                                <ExternalLink size={16} /> geracontrato.com.br
                            </a>
                            <span className="text-sm text-slate-500 block ml-6">Minutas de contrato de aluguel e prestação de serviços.</span>
                        </li>
                    </ul>
                </div>

                <p>
                Ao utilizar nossas ferramentas, você apoia o desenvolvimento de software livre e acessível no Brasil. Se você tiver sugestões ou encontrar algum erro, entre em contato.
                </p>
            </div>
        </div>
    </div>
  </Layout>
);

export const Privacy: React.FC = () => (
  <Layout>
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-center gap-2 mb-6">
          <Shield className="text-emerald-500" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">Política de Privacidade</h1>
      </div>
      
      <div className="prose prose-blue text-gray-600 space-y-4">
        <p>Última atualização: {new Date().toLocaleDateString()}</p>
        <p>
          Sua privacidade é nossa prioridade absoluta. No <strong>Gera Currículo</strong>, operamos sob uma política de dados mínimos e transparência total.
        </p>
        <h3 className="text-xl font-bold text-gray-800">1. Coleta e Processamento</h3>
        <p>
          Nós <strong>não exigimos cadastro</strong> (login/senha) para utilizar a ferramenta. Diferente de outros sites, os dados que você digita no formulário do currículo são processados localmente no seu navegador (Client-Side).
        </p>
        <h3 className="text-xl font-bold text-gray-800">2. Inteligência Artificial</h3>
        <p>
          Ao utilizar a funcionalidade opcional "Melhorar com IA", apenas o fragmento de texto específico selecionado é enviado para processamento. Esse dado é transitório e não é armazenado.
        </p>
        <h3 className="text-xl font-bold text-gray-800">3. Armazenamento de Dados</h3>
        <p>
            Nós <strong>não salvamos seus currículos</strong> em nossos servidores. Uma vez que você fecha a aba do navegador, os dados são perdidos. Por isso, recomendamos fortemente que você baixe o PDF gerado imediatamente.
        </p>
      </div>
    </div>
  </Layout>
);

export const Terms: React.FC = () => (
  <Layout>
     <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Termos de Uso</h1>
      <div className="prose prose-blue text-gray-600 space-y-4">
        <p>
          Bem-vindo ao <strong>Gera Currículo</strong>. Ao utilizar nossa plataforma, você concorda com os seguintes termos:
        </p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Gratuidade:</strong> A ferramenta é fornecida de forma gratuita. Não cobramos para baixar o PDF.</li>
            <li><strong>Responsabilidade:</strong> Você é inteiramente responsável pela veracidade das informações inseridas no seu currículo. O Gera Currículo não valida dados.</li>
            <li><strong>Sem Garantias:</strong> O Gera Currículo é uma ferramenta de formatação e design. Não garantimos emprego, entrevistas ou recolocação no mercado aos usuários.</li>
            <li><strong>Uso Aceitável:</strong> É proibido utilizar a plataforma para gerar conteúdo ofensivo, discriminatório ou ilegal.</li>
            <li><strong>Desenvolvimento:</strong> Este site é um projeto independente de Elvis Dias e pode sofrer atualizações sem aviso prévio.</li>
        </ul>
      </div>
    </div>
  </Layout>
);

export const Cookies: React.FC = () => (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="flex items-center gap-2 mb-6">
            <Cookie className="text-amber-500" size={32} />
            <h1 className="text-3xl font-bold text-gray-900">Política de Cookies</h1>
        </div>
        
        <div className="prose prose-blue text-gray-600 space-y-4">
          <p>
            O <strong>Gera Currículo</strong> utiliza cookies e tecnologias similares para melhorar a sua experiência de navegação e garantir o funcionamento correto da ferramenta.
          </p>
          
          <h3 className="text-xl font-bold text-gray-800">1. O que são Cookies?</h3>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles servem para lembrar suas preferências e auxiliar na navegação.
          </p>
  
          <h3 className="text-xl font-bold text-gray-800">2. Cookies que utilizamos</h3>
          <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cookies Essenciais:</strong> Necessários para que o site funcione corretamente (ex: navegação entre páginas).</li>
              <li><strong>Armazenamento Local (LocalStorage):</strong> Utilizamos o armazenamento do seu navegador para guardar temporariamente os dados do currículo enquanto você o edita, evitando perda de dados caso a página seja recarregada acidentalmente.</li>
              <li><strong>Analytics:</strong> Podemos utilizar ferramentas anônimas para entender como os usuários interagem com o site, visando melhorias futuras.</li>
          </ul>
  
          <h3 className="text-xl font-bold text-gray-800">3. Gerenciamento</h3>
          <p>
             Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar o funcionamento de algumas partes do editor de currículos.
          </p>
        </div>
      </div>
    </Layout>
  );

  export const Contact: React.FC = () => (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="flex items-center gap-2 mb-8">
            <MessageSquare className="text-blue-500" size={32} />
            <h1 className="text-3xl font-bold text-gray-900">Fale Conosco</h1>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <p className="text-lg text-slate-600 mb-6">
                Tem alguma dúvida sobre como usar o editor? Encontrou algum erro ou tem uma sugestão de melhoria? Entre em contato diretamente com o desenvolvedor.
            </p>
            
            <div className="flex flex-col gap-6">
                <a href="mailto:contato@elvisdias.com.br" className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">E-mail para contato</div>
                        <div className="text-lg font-bold text-slate-900">contato@elvisdias.com.br</div>
                    </div>
                </a>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                    <strong>Nota:</strong> Como esta é uma ferramenta gratuita, o suporte é realizado conforme disponibilidade. Não oferecemos consultoria de carreira ou revisão de currículos, apenas suporte técnico da ferramenta.
                </p>
            </div>
        </div>
      </div>
    </Layout>
  );
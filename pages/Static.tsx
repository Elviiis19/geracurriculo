import React from 'react';
import Layout from '../components/Layout';
import { ExternalLink, Code, Heart, Shield } from 'lucide-react';

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
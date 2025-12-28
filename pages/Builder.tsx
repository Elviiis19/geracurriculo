import React, { useState, useRef, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import { INITIAL_DATA, ResumeData, TemplateType } from '../types';
import { Printer, ChevronRight } from 'lucide-react';

const Builder: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<ResumeData>(INITIAL_DATA);
  const [template, setTemplate] = useState<TemplateType>(TemplateType.VITAE);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const templateParam = searchParams.get('template');
    if (templateParam) {
      if (Object.values(TemplateType).includes(templateParam as TemplateType)) {
          setTemplate(templateParam as TemplateType);
      }
    }
  }, [searchParams]);

  const handlePrint = () => {
    window.print();
  };

  const TemplateOption = ({ type, label, visual }: { type: TemplateType, label: string, visual: React.ReactNode }) => (
    <button 
        className={`relative group p-3 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2 ${template === type ? 'bg-blue-50 border-blue-600 shadow-sm' : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50'}`}
        onClick={() => setTemplate(type)}
    >
        <div className="w-full h-16 bg-white border border-slate-200 rounded shadow-sm overflow-hidden pointer-events-none relative">
            {visual}
        </div>
        <span className={`text-xs font-bold ${template === type ? 'text-blue-700' : 'text-slate-600'}`}>{label}</span>
        {template === type && (
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-600"></div>
        )}
    </button>
  );

  return (
    <Layout>
      <div className="max-w-[1920px] mx-auto h-[calc(100vh-80px)] overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Side: Form (Scrollable) */}
        <div className="w-full lg:w-1/2 xl:w-5/12 h-full overflow-y-auto bg-white border-r border-slate-200 print:hidden custom-scrollbar">
            <div className="p-6 pb-24">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 mb-1">Editor de Currículo</h1>
                    <p className="text-sm text-slate-500 mb-4">Preencha seus dados e escolha o design.</p>
                    
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Modelo Selecionado</label>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                             <TemplateOption 
                                type={TemplateType.VITAE} 
                                label="Clássico"
                                visual={
                                    <div className="w-full h-full p-1 flex flex-col items-center">
                                        <div className="w-3/4 h-1 bg-slate-800 mb-1"></div>
                                        <div className="w-full h-px bg-slate-300 mb-0.5"></div>
                                        <div className="w-full h-px bg-slate-300 mb-0.5"></div>
                                    </div>
                                }
                             />
                             <TemplateOption 
                                type={TemplateType.MINIMAL} 
                                label="Executivo"
                                visual={
                                    <div className="w-full h-full p-1 flex flex-col">
                                        <div className="w-1/2 h-1.5 bg-slate-900 mb-1"></div>
                                        <div className="w-full h-px bg-slate-300 mb-0.5"></div>
                                        <div className="w-2/3 h-px bg-slate-300 mb-0.5"></div>
                                    </div>
                                }
                             />
                             <TemplateOption 
                                type={TemplateType.MODERN} 
                                label="Com Foto"
                                visual={
                                    <div className="w-full h-full flex">
                                        <div className="w-1/3 h-full bg-slate-800"></div>
                                        <div className="w-2/3 p-1">
                                            <div className="w-full h-1 bg-slate-300 mb-1"></div>
                                            <div className="w-full h-1 bg-slate-300"></div>
                                        </div>
                                    </div>
                                }
                             />
                             <TemplateOption 
                                type={TemplateType.CREATIVE} 
                                label="Criativo"
                                visual={
                                    <div className="w-full h-full flex flex-col">
                                        <div className="w-full h-1/3 bg-indigo-500"></div>
                                        <div className="p-1 flex gap-1">
                                             <div className="w-2/3 h-full bg-slate-100"></div>
                                             <div className="w-1/3 h-full bg-slate-200"></div>
                                        </div>
                                    </div>
                                }
                             />
                              <TemplateOption 
                                type={TemplateType.TECH} 
                                label="Tech"
                                visual={
                                    <div className="w-full h-full p-1 font-mono text-[4px] leading-none">
                                        <div className="border-b border-emerald-500 mb-1">..</div>
                                        <div className="flex gap-1">
                                            <div className="w-2/3">...</div>
                                            <div className="w-1/3 text-emerald-600">..</div>
                                        </div>
                                    </div>
                                }
                             />
                        </div>
                    </div>
                </div>
                <ResumeForm data={data} onChange={setData} />
            </div>
        </div>

        {/* Right Side: Preview (Sticky/Fixed) */}
        <div className="w-full lg:w-1/2 xl:w-7/12 h-full bg-slate-100 overflow-y-auto p-4 md:p-8 flex justify-center print:w-full print:p-0 print:overflow-visible custom-scrollbar">
            <div className="w-full max-w-[21cm] relative">
                {/* Floating Action Bar */}
                <div className="sticky top-4 z-10 flex justify-end gap-2 mb-4 print:hidden">
                    <button 
                        onClick={handlePrint}
                        className="bg-slate-900 text-white px-6 py-3 rounded-full shadow-xl hover:bg-black transition-all flex items-center gap-2 font-bold tracking-wide transform hover:scale-105 active:scale-95"
                    >
                        <Printer size={18} />
                        Baixar PDF
                    </button>
                </div>

                <div ref={printRef} className="print:w-full min-h-[29.7cm] bg-white shadow-2xl transition-all duration-300">
                    <ResumePreview data={data} template={template} />
                </div>
                
                <div className="mt-8 text-center text-sm text-slate-400 print:hidden pb-8">
                    Visualização em tempo real. O PDF final terá qualidade máxima.
                </div>
            </div>
        </div>

      </div>
    </Layout>
  );
};

export default Builder;
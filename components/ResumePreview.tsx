import React from 'react';
import { ResumeData, TemplateType } from '../types';
import { MapPin, Mail, Phone, Linkedin, Globe, Github, ExternalLink, Terminal } from 'lucide-react';

interface ResumePreviewProps {
  data: ResumeData;
  template: TemplateType;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, template }) => {
  const formatDate = (dateStr: string) => dateStr;

  // =========================================================================
  // 1. VITAE (ACADÊMICO / CLÁSSICO)
  // Estilo: Times New Roman, Centralizado, Linhas Horizontais Finas
  // =========================================================================
  const renderVitae = () => (
    <div className="bg-white p-12 h-full text-black font-serif leading-relaxed" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold uppercase tracking-wide mb-2">{data.fullName}</h1>
        {data.jobTitle && <p className="text-lg italic mb-4">{data.jobTitle}</p>}
        
        <div className="flex flex-wrap justify-center gap-3 text-sm border-t border-b border-black py-2 mt-2">
             {data.email && <span>{data.email}</span>}
             {data.phone && <span>• {data.phone}</span>}
             {data.location && <span>• {data.location}</span>}
             {data.linkedin && <span>• {data.linkedin}</span>}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
          {data.summary && (
            <section>
              <h3 className="text-center font-bold uppercase text-sm tracking-widest mb-3">Resumo Profissional</h3>
              <p className="text-justify text-sm leading-6">{data.summary}</p>
            </section>
          )}

          {data.experience.length > 0 && (
            <section>
              <h3 className="text-center font-bold uppercase text-sm tracking-widest mb-4 bg-gray-100 py-1">Experiência Profissional</h3>
              <div className="space-y-5">
                {data.experience.map(exp => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline font-bold">
                      <span className="text-lg">{exp.company}</span>
                      <span className="text-sm font-normal">
                        {formatDate(exp.startDate)} – {exp.current ? 'Presente' : formatDate(exp.endDate)}
                      </span>
                    </div>
                    <div className="italic text-base mb-1">{exp.role}</div>
                    <p className="text-sm text-justify whitespace-pre-line mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.education.length > 0 && (
            <section>
              <h3 className="text-center font-bold uppercase text-sm tracking-widest mb-4 bg-gray-100 py-1">Formação Acadêmica</h3>
              <div className="space-y-3">
                {data.education.map(edu => (
                  <div key={edu.id} className="flex justify-between items-baseline">
                     <div>
                        <div className="font-bold">{edu.institution}</div>
                        <div className="italic text-sm">{edu.degree}</div>
                     </div>
                     <div className="text-sm">{edu.current ? 'Cursando' : formatDate(edu.endDate)}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
           {data.skills.length > 0 && (
            <section>
               <h3 className="text-center font-bold uppercase text-sm tracking-widest mb-3 bg-gray-100 py-1">Habilidades</h3>
               <div className="text-center text-sm">
                   {data.skills.map(s => s.name).join(' • ')}
               </div>
            </section>
          )}
      </div>
    </div>
  );

  // =========================================================================
  // 2. MINIMAL (EXECUTIVO / HARVARD STYLE)
  // Estilo: Arial/Helvetica, Alinhado à esquerda, denso, headers em negrito
  // =========================================================================
  const renderMinimal = () => (
    <div className="bg-white p-10 h-full text-gray-900 font-sans text-[11pt]" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
        
        <div className="border-b border-gray-900 pb-4 mb-6">
            <h1 className="text-3xl font-bold uppercase text-gray-900">{data.fullName}</h1>
            <div className="flex flex-wrap gap-x-4 text-sm mt-2 text-gray-700">
                {data.location && <span>{data.location}</span>}
                {data.phone && <span>{data.phone}</span>}
                {data.email && <span>{data.email}</span>}
                {data.linkedin && <span className="text-blue-800 underline">{data.linkedin}</span>}
            </div>
        </div>

        {data.summary && (
            <div className="mb-6">
                <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-2 pb-1">Perfil</h2>
                <p className="leading-snug">{data.summary}</p>
            </div>
        )}

        {data.experience.length > 0 && (
            <div className="mb-6">
                <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 pb-1">Experiência Profissional</h2>
                <div className="space-y-4">
                    {data.experience.map(exp => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline">
                                <span className="font-bold text-base">{exp.company}</span>
                                <span className="text-sm font-medium">{formatDate(exp.startDate)} - {exp.current ? 'Presente' : formatDate(exp.endDate)}</span>
                            </div>
                            <div className="font-semibold italic mb-1">{exp.role}</div>
                            <p className="text-sm whitespace-pre-line leading-tight text-gray-800">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {data.education.length > 0 && (
            <div className="mb-6">
                <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 pb-1">Educação</h2>
                <div className="space-y-2">
                    {data.education.map(edu => (
                        <div key={edu.id}>
                            <div className="flex justify-between items-baseline">
                                <span className="font-bold">{edu.institution}</span>
                                <span className="text-sm">{edu.current ? 'Em andamento' : formatDate(edu.endDate)}</span>
                            </div>
                            <div className="text-sm">{edu.degree}</div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {data.skills.length > 0 && (
            <div>
                 <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-2 pb-1">Habilidades Técnicas</h2>
                 <p className="text-sm">{data.skills.map(s => s.name).join(', ')}.</p>
            </div>
        )}
    </div>
  );

  // =========================================================================
  // 3. MODERN (CORPORATIVO COM FOTO)
  // Estilo: Sidebar colorida (Esquerda), Layout 2 Colunas
  // =========================================================================
  const renderModern = () => (
    <div className="bg-white h-full flex flex-row font-sans text-slate-800">
      {/* Sidebar */}
      <div className="w-[32%] bg-slate-100 flex flex-col p-6 border-r border-slate-200">
         {/* Photo */}
         <div className="mb-6 flex justify-center">
            {data.photoUrl ? (
                <img src={data.photoUrl} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" />
            ) : (
                <div className="w-32 h-32 rounded-full bg-slate-300 flex items-center justify-center text-slate-500 font-bold border-4 border-white shadow-md">
                    FOTO
                </div>
            )}
         </div>

         {/* Contact Info */}
         <div className="space-y-4 text-xs mb-8">
            <h3 className="font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Contato</h3>
            {data.email && <div className="flex items-center gap-2 break-all"><Mail size={14}/> {data.email}</div>}
            {data.phone && <div className="flex items-center gap-2"><Phone size={14}/> {data.phone}</div>}
            {data.location && <div className="flex items-center gap-2"><MapPin size={14}/> {data.location}</div>}
            {data.linkedin && <div className="flex items-center gap-2 break-all"><Linkedin size={14}/> {data.linkedin}</div>}
         </div>

         {/* Education (Moved to sidebar for Modern look) */}
         {data.education.length > 0 && (
            <div className="mb-8">
                 <h3 className="font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 text-xs">Formação</h3>
                 <div className="space-y-4">
                    {data.education.map(edu => (
                        <div key={edu.id}>
                            <div className="font-bold text-sm leading-tight">{edu.degree}</div>
                            <div className="text-xs text-slate-600 mt-1">{edu.institution}</div>
                            <div className="text-[10px] text-slate-500 mt-0.5">{edu.current ? 'Cursando' : formatDate(edu.endDate)}</div>
                        </div>
                    ))}
                 </div>
            </div>
         )}

         {/* Skills (Chips in sidebar) */}
         {data.skills.length > 0 && (
             <div>
                <h3 className="font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 text-xs">Competências</h3>
                <div className="flex flex-wrap gap-1.5">
                    {data.skills.map(s => (
                        <span key={s.id} className="bg-white border border-slate-300 px-2 py-1 rounded text-[10px] font-medium text-slate-700">
                            {s.name}
                        </span>
                    ))}
                </div>
             </div>
         )}
      </div>

      {/* Main Content */}
      <div className="w-[68%] p-8 pt-10">
          <div className="mb-10">
              <h1 className="text-4xl font-extrabold text-slate-900 uppercase leading-none mb-2">{data.fullName}</h1>
              <p className="text-xl text-blue-600 font-medium tracking-wide">{data.jobTitle}</p>
          </div>

          {data.summary && (
              <div className="mb-8">
                  <h3 className="font-bold text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2 text-sm">
                      <span className="w-4 h-1 bg-blue-600"></span> Sobre Mim
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{data.summary}</p>
              </div>
          )}

          {data.experience.length > 0 && (
              <div>
                  <h3 className="font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2 text-sm">
                      <span className="w-4 h-1 bg-blue-600"></span> Experiência Profissional
                  </h3>
                  <div className="space-y-8 border-l-2 border-slate-100 ml-2 pl-6">
                      {data.experience.map(exp => (
                          <div key={exp.id} className="relative">
                              <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-sm"></div>
                              <h4 className="text-lg font-bold text-slate-800">{exp.role}</h4>
                              <div className="text-blue-600 font-medium text-sm mb-1">{exp.company}</div>
                              <div className="text-xs text-slate-400 mb-2 uppercase tracking-wide font-semibold">
                                  {formatDate(exp.startDate)} — {exp.current ? 'Atual' : formatDate(exp.endDate)}
                              </div>
                              <p className="text-sm text-slate-600 whitespace-pre-line">{exp.description}</p>
                          </div>
                      ))}
                  </div>
              </div>
          )}
      </div>
    </div>
  );

  // =========================================================================
  // 4. CREATIVE (DESIGNER / MARKETING)
  // Estilo: Header colorido (full width), Nome Gigante, Grid Layout
  // =========================================================================
  const renderCreative = () => (
     <div className="bg-white h-full font-sans">
        {/* Header Block */}
        <div className="bg-indigo-600 text-white p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
             
             <div className="relative z-10 flex justify-between items-center">
                 <div className="w-2/3">
                    <h1 className="text-5xl font-black mb-2 leading-tight">{data.fullName}</h1>
                    <p className="text-indigo-200 text-2xl font-light tracking-wider">{data.jobTitle}</p>
                 </div>
                 {data.photoUrl && (
                     <img src={data.photoUrl} className="w-32 h-32 rounded-full border-4 border-indigo-300 shadow-xl object-cover" alt="Profile" />
                 )}
             </div>
        </div>

        {/* Contact Strip */}
        <div className="bg-indigo-900 text-indigo-100 p-4 px-12 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-wider justify-center">
             {data.email && <span>{data.email}</span>}
             {data.phone && <span>{data.phone}</span>}
             {data.linkedin && <span>{data.linkedin}</span>}
             {data.website && <span>{data.website}</span>}
        </div>

        <div className="p-12 grid grid-cols-12 gap-10">
            {/* Main Column */}
            <div className="col-span-8 space-y-8">
                 {data.summary && (
                     <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                         <h3 className="text-indigo-600 font-black text-xl mb-3"># PERFIL</h3>
                         <p className="text-slate-600 leading-relaxed">{data.summary}</p>
                     </div>
                 )}

                 {data.experience.length > 0 && (
                     <div>
                         <h3 className="text-indigo-600 font-black text-xl mb-6"># EXPERIÊNCIA</h3>
                         <div className="space-y-8">
                             {data.experience.map(exp => (
                                 <div key={exp.id}>
                                     <h4 className="text-xl font-bold text-slate-800">{exp.role}</h4>
                                     <div className="flex justify-between items-center mb-2">
                                         <span className="text-indigo-500 font-bold">{exp.company}</span>
                                         <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded font-bold">
                                             {formatDate(exp.startDate)} - {exp.current ? 'Atual' : formatDate(exp.endDate)}
                                         </span>
                                     </div>
                                     <p className="text-slate-600 text-sm whitespace-pre-line border-l-4 border-indigo-100 pl-4">{exp.description}</p>
                                 </div>
                             ))}
                         </div>
                     </div>
                 )}
            </div>

            {/* Sidebar Column */}
            <div className="col-span-4 space-y-8">
                 {data.education.length > 0 && (
                     <div>
                         <h3 className="text-indigo-600 font-black text-xl mb-4"># EDUCAÇÃO</h3>
                         <div className="space-y-4">
                             {data.education.map(edu => (
                                 <div key={edu.id} className="bg-white border-b-2 border-slate-100 pb-2">
                                     <div className="font-bold text-slate-800 leading-tight">{edu.degree}</div>
                                     <div className="text-sm text-slate-500 mt-1">{edu.institution}</div>
                                 </div>
                             ))}
                         </div>
                     </div>
                 )}

                 {data.skills.length > 0 && (
                     <div>
                         <h3 className="text-indigo-600 font-black text-xl mb-4"># SKILLS</h3>
                         <div className="flex flex-wrap gap-2">
                             {data.skills.map(s => (
                                 <span key={s.id} className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-bold border border-indigo-100">
                                     {s.name}
                                 </span>
                             ))}
                         </div>
                     </div>
                 )}
            </div>
        </div>
     </div>
  );

  // =========================================================================
  // 5. TECH (DEV / PROGRAMADOR)
  // Estilo: IDE / Código, Dark Header, Monospaced Font
  // =========================================================================
  const renderTech = () => (
      <div className="bg-white h-full font-mono text-slate-800">
          {/* Header IDE Style */}
          <div className="bg-[#1e1e1e] text-[#d4d4d4] p-8 pb-10 border-b-4 border-[#007acc]">
              <div className="flex items-center gap-2 mb-4 text-xs text-[#6a9955]">
                  <Terminal size={14} /> <span>~/career/{data.fullName.toLowerCase().replace(/\s/g, '_')}</span>
              </div>
              <h1 className="text-4xl font-bold text-[#569cd6] mb-2"><span className="text-[#ce9178]">const</span> {data.fullName}</h1>
              <p className="text-xl text-[#4ec9b0] mb-6"><span className="text-[#d4d4d4]">=</span> "{data.jobTitle}";</p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium">
                  {data.email && <div className="flex items-center gap-1"><span className="text-[#569cd6]">email:</span> "{data.email}"</div>}
                  {data.linkedin && <div className="flex items-center gap-1"><span className="text-[#569cd6]">linkedin:</span> "{data.linkedin}"</div>}
                  {data.location && <div className="flex items-center gap-1"><span className="text-[#569cd6]">loc:</span> "{data.location}"</div>}
              </div>
          </div>

          <div className="p-10 grid grid-cols-12 gap-8">
              {/* Line Numbers Fake Column */}
              <div className="col-span-1 text-right text-slate-300 text-xs select-none pt-1 space-y-4 font-mono hidden md:block border-r border-slate-100 pr-2">
                  {Array.from({length: 20}).map((_, i) => <div key={i}>{i * 5 + 1}</div>)}
              </div>

              <div className="col-span-12 md:col-span-11 space-y-10">
                  {data.summary && (
                      <div>
                          <h3 className="text-sm font-bold text-[#007acc] mb-2">
                              <span className="text-slate-400">//</span> SUMMARY
                          </h3>
                          <div className="bg-slate-50 p-4 rounded border border-slate-200 text-sm text-slate-700">
                              <span className="text-purple-600">return</span> (<br/>
                              &nbsp;&nbsp;"{data.summary}"<br/>
                              );
                          </div>
                      </div>
                  )}

                  {data.skills.length > 0 && (
                      <div>
                          <h3 className="text-sm font-bold text-[#007acc] mb-2">
                              <span className="text-slate-400">//</span> STACK
                          </h3>
                          <div className="flex flex-wrap gap-2 text-xs">
                              {data.skills.map(s => (
                                  <span key={s.id} className="bg-[#f0f0f0] text-[#e06c75] px-2 py-1 rounded border border-slate-300 font-bold">
                                      {s.name}
                                  </span>
                              ))}
                          </div>
                      </div>
                  )}

                  {data.experience.length > 0 && (
                      <div>
                          <h3 className="text-sm font-bold text-[#007acc] mb-4">
                              <span className="text-slate-400">//</span> EXPERIENCE_LOG
                          </h3>
                          <div className="space-y-8">
                              {data.experience.map((exp, idx) => (
                                  <div key={exp.id} className="relative pl-4 border-l-2 border-slate-200">
                                      <div className="text-base font-bold text-slate-800">
                                          function <span className="text-[#dcdcaa]">{exp.company.replace(/\s/g, '')}</span>() {'{'}
                                      </div>
                                      <div className="pl-4 mt-1">
                                          <div className="text-xs text-slate-500 mb-1">
                                              <span className="text-purple-600">const</span> role = "{exp.role}";
                                          </div>
                                          <div className="text-xs text-slate-500 mb-2">
                                              <span className="text-purple-600">const</span> period = "{formatDate(exp.startDate)} - {exp.current ? 'NOW' : formatDate(exp.endDate)}";
                                          </div>
                                          <p className="text-sm text-slate-600 whitespace-pre-line mt-2 font-sans border-l-2 border-[#ce9178] pl-2 opacity-90">
                                              {exp.description}
                                          </p>
                                      </div>
                                      <div className="mt-1 font-bold text-slate-800">{'}'}</div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  )}

                   {data.education.length > 0 && (
                      <div>
                          <h3 className="text-sm font-bold text-[#007acc] mb-4">
                              <span className="text-slate-400">//</span> EDUCATION
                          </h3>
                          <div className="space-y-4">
                              {data.education.map(edu => (
                                  <div key={edu.id} className="text-sm">
                                      <span className="text-purple-600">import</span> {'{'} {edu.degree} {'}'} <span className="text-purple-600">from</span> "{edu.institution}";
                                      <span className="text-slate-400 text-xs ml-2">// {edu.current ? 'Loading...' : formatDate(edu.endDate)}</span>
                                  </div>
                              ))}
                          </div>
                      </div>
                  )}
              </div>
          </div>
      </div>
  );

  return (
    <div id="resume-preview" className="shadow-2xl print:shadow-none w-full bg-white min-h-[29.7cm] print:min-h-0 overflow-hidden">
      {template === TemplateType.VITAE && renderVitae()}
      {template === TemplateType.MINIMAL && renderMinimal()}
      {template === TemplateType.MODERN && renderModern()}
      {template === TemplateType.CREATIVE && renderCreative()}
      {template === TemplateType.TECH && renderTech()}
    </div>
  );
};

export default ResumePreview;
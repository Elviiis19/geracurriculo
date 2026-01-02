import React, { useState } from 'react';
import { ResumeData, Experience, Education, Skill } from '../types';
import { Plus, Trash2, Wand2, Upload, X, Calendar } from 'lucide-react';
import { improveText } from '../services/geminiService';

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ data, onChange }) => {
  const [isImproving, setIsImproving] = useState(false);

  const handleChange = (field: keyof ResumeData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const handleImprove = async (field: keyof ResumeData, context: string) => {
    const text = data[field] as string;
    if (!text) return;
    
    setIsImproving(true);
    const improved = await improveText(text, context);
    handleChange(field, improved);
    setIsImproving(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange('photoUrl', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Experience Helpers
  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    handleChange('experience', [...data.experience, newExp]);
  };

  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    const updated = data.experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp);
    handleChange('experience', updated);
  };

  const removeExperience = (id: string) => {
    handleChange('experience', data.experience.filter(exp => exp.id !== id));
  };

  // Education Helpers
  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      current: false
    };
    handleChange('education', [...data.education, newEdu]);
  };

  const updateEducation = (id: string, field: keyof Education, value: any) => {
    const updated = data.education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu);
    handleChange('education', updated);
  };

  const removeEducation = (id: string) => {
    handleChange('education', data.education.filter(edu => edu.id !== id));
  };

  // Skill Helpers
  const addSkill = (type: 'skills' | 'languages') => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 'Intermediário'
    };
    handleChange(type, [...data[type], newSkill]);
  };

  const updateSkill = (type: 'skills' | 'languages', id: string, field: keyof Skill, value: any) => {
    const updated = data[type].map(s => s.id === id ? { ...s, [field]: value } : s);
    handleChange(type, updated);
  };

  const removeSkill = (type: 'skills' | 'languages', id: string) => {
    handleChange(type, data[type].filter(s => s.id !== id));
  };

  return (
    <div className="space-y-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      
      {/* Personal Info */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Dados Pessoais</h2>
        
        <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0 mx-auto md:mx-0">
                <label className="block text-sm font-medium text-gray-700 mb-2 text-center md:text-left">Foto (Para modelo Moderno)</label>
                <div className="relative group">
                    {data.photoUrl ? (
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm mx-auto">
                            <img src={data.photoUrl} alt="Preview" className="w-full h-full object-cover" />
                            <button 
                                onClick={() => handleChange('photoUrl', null)}
                                className="absolute inset-0 bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                aria-label="Remover foto"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    ) : (
                        <label className="w-32 h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-full cursor-pointer hover:border-primary hover:bg-blue-50 transition-colors mx-auto bg-gray-50" aria-label="Carregar foto">
                            <Upload size={24} className="text-gray-400" />
                            <span className="text-xs text-gray-500 mt-1">Carregar Foto</span>
                            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow w-full">
            <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
                <input
                type="text"
                value={data.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base p-2 border"
                placeholder="Ex: João Silva"
                />
            </div>
            <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Título Profissional / Cargo Alvo</label>
                <input
                type="text"
                value={data.jobTitle}
                onChange={(e) => handleChange('jobTitle', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base p-2 border"
                placeholder="Ex: Analista Financeiro Sênior"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                type="email"
                value={data.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base p-2 border"
                placeholder="exemplo@email.com"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                <input
                type="tel"
                value={data.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base p-2 border"
                placeholder="(00) 00000-0000"
                />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700">Cidade e Estado</label>
                <input
                type="text"
                value={data.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base p-2 border"
                placeholder="São Paulo, SP"
                />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700">LinkedIn / Portfólio</label>
                <input
                type="text"
                value={data.linkedin}
                onChange={(e) => handleChange('linkedin', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base p-2 border"
                placeholder="linkedin.com/in/seu-perfil"
                />
            </div>
            </div>
        </div>

        <div>
            <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">Resumo Profissional</label>
                <button
                onClick={() => handleImprove('summary', 'Resumo profissional para vaga de ' + data.jobTitle)}
                disabled={isImproving || !data.summary}
                className="text-xs flex items-center gap-1 text-primary hover:text-secondary disabled:opacity-50 font-medium px-2 py-1 rounded bg-blue-50"
                aria-label="Melhorar resumo com inteligência artificial"
                >
                <Wand2 size={12} />
                {isImproving ? 'Gerando...' : 'Melhorar com IA'}
                </button>
            </div>
            <textarea
                value={data.summary}
                onChange={(e) => handleChange('summary', e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-base p-3 border"
                placeholder="Escreva um breve resumo sobre suas qualificações, objetivos e principais conquistas..."
            />
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Experiência Profissional</h2>
        <div className="space-y-6">
        {data.experience.map((exp, index) => (
          <div key={exp.id} className="bg-gray-50 p-5 rounded-lg border border-gray-200 relative group transition-all hover:shadow-md">
             <div className="absolute top-4 right-4 flex gap-2">
                 <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">#{index + 1}</span>
                 <button
                  onClick={() => removeExperience(exp.id)}
                  className="text-red-400 hover:text-red-600 transition-colors p-1"
                  title="Remover experiência"
                  aria-label="Remover esta experiência"
                >
                  <Trash2 size={18} />
                </button>
             </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-2">
              <div className="col-span-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Cargo</label>
                  <input
                    type="text"
                    value={exp.role}
                    onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                    placeholder="Ex: Gerente de Vendas"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm p-2.5 border"
                  />
              </div>
              <div className="col-span-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Empresa</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    placeholder="Nome da Empresa"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm p-2.5 border"
                  />
              </div>
              
              <div className="col-span-1 md:col-span-2">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Período</label>
                  <div className="flex gap-4 items-center flex-wrap">
                      <div className="relative flex-grow max-w-[200px]">
                        <Calendar className="absolute left-2.5 top-2.5 text-gray-400" size={16} />
                        <input
                            type="text"
                            value={exp.startDate}
                            onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                            placeholder="MM/AAAA"
                            className="w-full pl-9 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm p-2.5 border"
                        />
                      </div>
                      <span className="text-gray-400 text-sm">até</span>
                      <div className="relative flex-grow max-w-[200px]">
                         <Calendar className="absolute left-2.5 top-2.5 text-gray-400" size={16} />
                         <input
                            type="text"
                            value={exp.endDate}
                            disabled={exp.current}
                            onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                            placeholder={exp.current ? "Presente" : "MM/AAAA"}
                            className="w-full pl-9 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm p-2.5 border disabled:bg-gray-100 disabled:text-gray-400"
                        />
                      </div>
                       <label className="flex items-center cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={exp.current}
                            onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                            className="rounded text-primary focus:ring-primary w-4 h-4"
                        />
                        <span className="ml-2 text-sm text-gray-700">Trabalho atual</span>
                        </label>
                  </div>
              </div>
            </div>
            
            <div>
                 <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-medium text-gray-500">Descrição das Atividades</label>
                    <button
                        onClick={() => handleImprove(`experience`, `Descreva de forma profissional as atividades de um ${exp.role} na empresa ${exp.company}: ${exp.description}`)}
                        // Note: complex handleImprove for array items would require refactoring handleImprove to accept value setter, sticking to simple field for now or manual edit
                        className="hidden text-xs text-primary hover:underline" 
                        aria-label="Melhorar descrição da experiência com IA"
                    >
                        Melhorar texto
                    </button>
                 </div>
                <textarea
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                placeholder="• Responsável por gerir equipe de 10 pessoas&#10;• Aumentou as vendas em 20%&#10;• Implementou novos processos de qualidade"
                rows={4}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm p-3 border"
                />
            </div>
          </div>
        ))}
        </div>
        <button
          onClick={addExperience}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:border-primary hover:text-primary hover:bg-blue-50 transition-all"
        >
          <Plus size={16} /> Adicionar Nova Experiência
        </button>
      </section>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Formação Acadêmica</h2>
        <div className="space-y-4">
        {data.education.map((edu, index) => (
          <div key={edu.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative group">
            <div className="absolute top-2 right-2">
                 <button
                  onClick={() => removeEducation(edu.id)}
                  className="text-red-400 hover:text-red-600 p-1"
                  aria-label="Remover formação"
                >
                  <Trash2 size={16} />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Curso / Grau</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    placeholder="Ex: Bacharelado em Administração"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm p-2 border"
                  />
              </div>
              <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Instituição</label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    placeholder="Nome da Faculdade/Escola"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm p-2 border"
                  />
              </div>
               <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Ano de Conclusão (ou Previsão)</label>
                  <div className="flex gap-4 items-center">
                    <div className="relative w-full md:w-1/2">
                         <Calendar className="absolute left-2.5 top-2.5 text-gray-400" size={16} />
                         <input
                            type="text"
                            value={edu.endDate}
                            onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                            placeholder="MM/AAAA"
                            className="w-full pl-9 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm p-2.5 border"
                        />
                    </div>
                     <label className="flex items-center cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={edu.current}
                            onChange={(e) => updateEducation(edu.id, 'current', e.target.checked)}
                            className="rounded text-primary focus:ring-primary w-4 h-4"
                        />
                        <span className="ml-2 text-sm text-gray-700">Cursando</span>
                     </label>
                  </div>
              </div>
            </div>
          </div>
        ))}
        </div>
        <button
          onClick={addEducation}
          className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:border-primary hover:text-primary hover:bg-blue-50 transition-all"
        >
          <Plus size={16} /> Adicionar Formação
        </button>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Habilidades e Competências</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.skills.map((skill) => (
                <div key={skill.id} className="flex gap-2 items-center bg-gray-50 p-2 rounded border border-gray-200">
                    <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => updateSkill('skills', skill.id, 'name', e.target.value)}
                        placeholder="Ex: Microsoft Excel Avançado"
                        className="flex-grow bg-transparent border-none focus:ring-0 text-sm p-1"
                    />
                     <button onClick={() => removeSkill('skills', skill.id)} className="text-gray-400 hover:text-red-500 p-1" aria-label="Remover habilidade">
                        <X size={16} />
                    </button>
                </div>
            ))}
        </div>
        <button
          onClick={() => addSkill('skills')}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary mt-2"
        >
          <Plus size={16} /> Adicionar Habilidade
        </button>
      </section>
    </div>
  );
};

export default ResumeForm;
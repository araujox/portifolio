/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';

interface FormState {
  nome: string;
  empresa: string;
  servico: string;
  descricao: string;
  investimento: string;
  prazo: string;
}

interface FormErrors {
  nome?: string;
  servico?: string;
  descricao?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    nome: '',
    empresa: '',
    servico: '',
    descricao: '',
    investimento: '',
    prazo: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const servicesOptions = [
    'Landing Page Estratégica',
    'Catálogo Inteligente de Roupas',
    'E-commerce Completo',
    'Sistema de Delivery Próprio',
    'Projeto Web Personalizado / Outra Ideia'
  ];

  const budgetOptions = [
    'Até R$ 1.500',
    'R$ 1.500 a R$ 3.000',
    'R$ 3.000 a R$ 5.000',
    'Acima de R$ 5.000',
    'Não definido / Gostaria de alinhar'
  ];

  const deadlineOptions = [
    'Urgente (menos de 15 dias)',
    'Moderado (até 30 dias)',
    'Flexível / Sem pressa'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.nome.trim()) {
      tempErrors.nome = 'Por favor, informe seu nome.';
    }
    if (!formData.servico) {
      tempErrors.servico = 'Por favor, selecione o tipo de serviço que deseja.';
    }
    if (!formData.descricao.trim()) {
      tempErrors.descricao = 'Por favor, conte um pouco sobre o projeto ou a sua ideia.';
    } else if (formData.descricao.trim().length < 10) {
      tempErrors.descricao = 'Por favor, inclua mais detalhes na descrição (mínimo 10 caracteres).';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Construct highly organized professional WA message payload
    let message = `Olá, Matheus! Meu nome é ${formData.nome}. `;
    if (formData.empresa.trim()) {
      message += `Represento a empresa/projeto: ${formData.empresa}. `;
    }
    message += `Tenho interesse em: *${formData.servico}*. `;
    message += `\n\n*Descrição do meu projeto:* ${formData.descricao}`;
    
    if (formData.investimento) {
      message += `\n*Investimento planejado:* ${formData.investimento}`;
    }
    if (formData.prazo) {
      message += `\n*Prazo ideal:* ${formData.prazo}`;
    }

    message += `\n\n_Enviado através do formulário do seu portfólio._`;

    // Encode URL properly
    const whatsappUrl = `https://wa.me/5581998520781?text=${encodeURIComponent(message)}`;
    
    setSubmitSuccess(true);
    
    // Smoothly redirect
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setSubmitSuccess(false);
      // Reset form on complete action
      setFormData({
        nome: '',
        empresa: '',
        servico: '',
        descricao: '',
        investimento: '',
        prazo: ''
      });
    }, 1200);
  };

  const whatsAppDirectUrl = "https://wa.me/5581998520781?text=Olá,%20Matheus!%20Conheci%20seu%20trabalho%20através%20do%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

  return (
    <section id="contato" className="relative py-20 sm:py-28 bg-dark-graphite border-t border-dark-gray overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[5%] w-96 h-96 rounded-full radial-glow-corner pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[10%] w-112 h-112 rounded-full radial-glow pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 text-left space-y-6">
            
            <div className="flex items-center space-x-2">
              <span className="w-4 h-[1px] bg-red-dark"></span>
              <span className="font-mono text-xs tracking-widest text-[#9E1B32] font-semibold uppercase">
                INICIAR DESENVOLVIMENTO
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-light-white">
              Vamos tirar sua ideia do papel?
            </h2>

            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
              Conte um pouco sobre o seu projeto, negócio ou ideia no formulário ao lado. 
              Ao enviar, você será direcionado para o meu WhatsApp com as informações já pré-formatadas para iniciarmos o alinhamento imediatamente.
            </p>

            {/* Practical Contact highlights */}
            <div className="space-y-4 pt-4 border-t border-dark-gray/60">
              <div className="flex items-center space-x-3 text-sm text-text-muted">
                <CheckCircle2 className="w-4 h-4 text-red-live shrink-0" />
                <span>Atendimento próximo e pessoal</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-text-muted">
                <CheckCircle2 className="w-4 h-4 text-red-live shrink-0" />
                <span>Sem compromisso financeiro inicial</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-text-muted">
                <CheckCircle2 className="w-4 h-4 text-red-live shrink-0" />
                <span>Formatado especial de retorno rápido</span>
              </div>
            </div>

            {/* Action Direct buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsAppDirectUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center space-x-2.5 bg-dark-deep border border-dark-gray hover:border-red-dark/40 text-light-white px-5 py-4 rounded-sm font-mono text-xs tracking-wider transition-colors glow-sm hover:scale-[1.01]"
              >
                <MessageSquare className="w-4 h-4 fill-current text-red-live" />
                <span>CHAMAR DIRETO NO WHATSAPP</span>
              </a>
            </div>

          </div>

          {/* Right Lead collection form column */}
          <div className="lg:col-span-7">
            <div className="bg-dark-deep border border-dark-gray p-6 sm:p-8 rounded-sm shadow-2xl relative">
              
              <div className="absolute top-4 right-4 text-[9px] font-mono text-[#D2D2D2]/35 uppercase tracking-widest hidden sm:block select-none">
                FORM_ID: ENCRYPTED_LEAD
              </div>

              {submitSuccess ? (
                <div className="py-12 flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-dark/10 border border-red-dark flex items-center justify-center text-red-live select-none">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-light-white">
                    Formulário Validado!
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-text-muted max-w-sm">
                    Redirecionando você de forma segura para o WhatsApp de Matheus Araújo...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="nome" className="block font-mono text-[10px] uppercase text-text-muted tracking-widest">
                      Seu Nome completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      placeholder="Ex: Matheus Araújo"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className={`w-full bg-dark-graphite text-light-white border ${
                        errors.nome ? 'border-red-live' : 'border-dark-gray hover:border-red-dark/20'
                      } px-4 py-3 text-sm focus:border-red-live focus:outline-none rounded-sm transition-colors`}
                    />
                    {errors.nome && (
                      <p className="text-red-live text-[11px] font-mono flex items-center space-x-1.5 pt-0.5">
                        <AlertTriangle className="w-3 h-3" />
                        <span>{errors.nome}</span>
                      </p>
                    )}
                  </div>

                  {/* Company/Project Input (Optional) */}
                  <div className="space-y-2">
                    <label htmlFor="empresa" className="block font-mono text-[10px] uppercase text-text-muted tracking-widest">
                      Nome da Empresa ou Projeto (Opcional)
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      placeholder="Ex: Minha Boutique Surubim"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full bg-dark-graphite text-light-white border border-dark-gray hover:border-red-dark/20 px-4 py-3 text-sm focus:border-red-live focus:outline-none rounded-sm transition-colors"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="servico" className="block font-mono text-[10px] uppercase text-text-muted tracking-widest">
                      Tipo de Serviço que Deseja *
                    </label>
                    <div className="relative">
                      <select
                        id="servico"
                        name="servico"
                        required
                        value={formData.servico}
                        onChange={handleInputChange}
                        className={`w-full bg-dark-graphite text-light-white border ${
                          errors.servico ? 'border-red-live' : 'border-dark-gray hover:border-red-dark/20'
                        } px-4 py-3 text-sm focus:border-red-live focus:outline-none rounded-sm transition-colors appearance-none cursor-pointer`}
                      >
                        <option value="">Selecione uma opção...</option>
                        {servicesOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-dark-deep text-light-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-text-muted">
                        <span className="text-xs">▼</span>
                      </div>
                    </div>
                    {errors.servico && (
                      <p className="text-red-live text-[11px] font-mono flex items-center space-x-1.5 pt-0.5">
                        <AlertTriangle className="w-3 h-3" />
                        <span>{errors.servico}</span>
                      </p>
                    )}
                  </div>

                  {/* Optional Metadata Double Row (Budget & Timeline) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Budget level selection */}
                    <div className="space-y-2">
                      <label htmlFor="investimento" className="block font-mono text-[10px] uppercase text-text-muted tracking-widest">
                        Planejamento de Investimento
                      </label>
                      <div className="relative">
                        <select
                          id="investimento"
                          name="investimento"
                          value={formData.investimento}
                          onChange={handleInputChange}
                          className="w-full bg-dark-graphite text-light-white border border-dark-gray hover:border-red-dark/20 px-4 py-3 text-sm focus:border-red-live focus:outline-none rounded-sm appearance-none cursor-pointer"
                        >
                          <option value="">Selecione se já definiu...</option>
                          {budgetOptions.map((opt, i) => (
                            <option key={i} value={opt} className="bg-dark-deep text-light-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-text-muted">
                          <span className="text-xs">▼</span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline deadline selection */}
                    <div className="space-y-2">
                      <label htmlFor="prazo" className="block font-mono text-[10px] uppercase text-text-muted tracking-widest">
                        Prazo Desejado de Lançamento
                      </label>
                      <div className="relative">
                        <select
                          id="prazo"
                          name="prazo"
                          value={formData.prazo}
                          onChange={handleInputChange}
                          className="w-full bg-dark-graphite text-light-white border border-dark-gray hover:border-red-dark/20 px-4 py-3 text-sm focus:border-red-live focus:outline-none rounded-sm appearance-none cursor-pointer"
                        >
                          <option value="">Selecione...</option>
                          {deadlineOptions.map((opt, i) => (
                            <option key={i} value={opt} className="bg-dark-deep text-light-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-text-muted">
                          <span className="text-xs">▼</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Project description Input */}
                  <div className="space-y-2">
                    <label htmlFor="descricao" className="block font-mono text-[10px] uppercase text-text-muted tracking-widest">
                      Fale um pouco sobre a sua ideia / projeto *
                    </label>
                    <textarea
                      id="descricao"
                      name="descricao"
                      required
                      rows={4}
                      placeholder="Ex: Preciso de um catálogo inteligente para a minha loja de roupas com categorias para moda praia e tamanhos p, m e g. Gostaria de integrar os pedidos com meu WhatsApp de atendimento."
                      value={formData.descricao}
                      onChange={handleInputChange}
                      className={`w-full bg-dark-graphite text-light-white border ${
                        errors.descricao ? 'border-red-live' : 'border-dark-gray hover:border-red-dark/20'
                      } px-4 py-3 text-sm focus:border-red-live focus:outline-none rounded-sm transition-colors`}
                    />
                    {errors.descricao && (
                      <p className="text-red-live text-[11px] font-mono flex items-center space-x-1.5 pt-0.5">
                        <AlertTriangle className="w-3 h-3" />
                        <span>{errors.descricao}</span>
                      </p>
                    )}
                  </div>

                  {/* Custom Privacy Warning */}
                  <div className="pt-2 text-[11px] text-text-muted flex items-start space-x-2">
                    <HelpCircle className="w-3.5 h-3.5 text-red-live shrink-0 mt-0.5" />
                    <span>
                      Seus dados não são armazenados em servidores de banco de dados ou compartilhados. 
                      Eles são processados localmente apenas para gerar a mensagem e iniciar sua conversa de forma segura.
                    </span>
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 bg-red-dark hover:bg-red-live text-light-white font-mono text-xs tracking-wider py-4 rounded-sm transition-colors cursor-pointer glow-sm"
                    >
                      <span>ENVIAR MINHA IDEIA DE PROJETO</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

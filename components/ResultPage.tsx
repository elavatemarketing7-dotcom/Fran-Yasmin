
import React from 'react';
import { IMAGES, EXPERT_NAME, WHATSAPP_LINK } from '../constants';
import { CheckCircle2, MessageSquare, Globe, Send, Phone } from 'lucide-react';

interface ResultPageProps {
  answers: string[];
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ answers, onContinue }) => {
  const whatsappMsg = `Olá Dra. Franciany! Acabei de realizar a avaliação no seu site. Meus objetivos são: ${answers.join(', ')}. Sou a paciente ideal? Gostaria de saber mais sobre o seu método!`;
  const encodedMsg = encodeURIComponent(whatsappMsg);
  const sendEvaluationLink = `${WHATSAPP_LINK}&text=${encodedMsg}`;

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] flex flex-col p-4 items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-50/50 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-sm flex flex-col animate-fade-in-up">
        {/* Header Headline */}
        <div className="text-center mb-6">
          <h2 className="font-serif text-3xl mb-2 leading-tight">Perfil Compatível.</h2>
          <p className="text-[#d4af37] font-bold text-lg uppercase tracking-widest">Você é a Paciente ideal.</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden mb-6 border border-gray-100">
          <div className="relative h-72 overflow-hidden">
            <img src={IMAGES.main} alt={EXPERT_NAME} className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-gray-100">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[#1a1a1a] text-[10px] font-black uppercase tracking-widest">Método Validado</span>
            </div>
          </div>
          <div className="p-6 text-center">
            <p className="text-gray-600 text-sm leading-relaxed italic">
              "Com base nas suas respostas, o Método da <span className="text-[#1a1a1a] font-bold underline decoration-[#d4af37]">{EXPERT_NAME}</span> consegue entregar exatamente a naturalidade e segurança que você procura."
            </p>
          </div>
        </div>

        <div className="space-y-3 w-full">
          <a 
            href={sendEvaluationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-full py-5 bg-[#1a1a1a] text-white rounded-2xl font-black text-sm shadow-xl active:scale-95 transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 gold-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="flex items-center gap-2 mb-1">
               <Send className="w-5 h-5 text-[#d4af37]" />
               <span>1- ENVIAR MINHA AVALIAÇÃO À DRA.</span>
            </div>
            <span className="text-[10px] font-normal opacity-60">Falar diretamente com a Franciany</span>
          </a>

          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 border-2 border-[#d4af37] text-[#1a1a1a] rounded-2xl font-bold text-sm active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5 text-[#d4af37]" />
            2- CHAMAR NO WHATSAPP SEM COMPROMISSO
          </a>

          <button 
            onClick={onContinue}
            className="flex items-center justify-center gap-2 w-full py-4 bg-gray-100 text-gray-500 rounded-2xl font-bold text-sm hover:bg-gray-200 transition-colors"
          >
            <Globe className="w-5 h-5" />
            3- NÃO ENVIAR E CONTINUAR NO SITE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;


import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  UserRoundCheck, 
  Heart, 
  CalendarCheck, 
  MessageCircle 
} from 'lucide-react';

export const EXPERT_NAME = "Franciany Yasmin da Silva";
export const EXPERT_TITLE = "Injetáveis | Botox | Preenchimento | Íntima | Laser | Drenagem | Glúteo";
export const WHATSAPP_LINK = "https://api.whatsapp.com/message/CIAM546444ECN1?autoload=1&app_absent=0&utm_source=ig";
export const INSTAGRAM_LINK = "https://www.instagram.com/clinicafranyasminreserva/";
export const MAPS_LINK = "https://www.google.com/maps?q=R.+Jacarezinho,+1459+-+Merc%C3%AAs,+Curitiba+-+PR,+80810-130";

export const IMAGES = {
  main: "https://i.imgur.com/LdDW0VF.jpeg",
  expert2: "https://i.imgur.com/XHFLshy.png",
  expert3: "https://i.imgur.com/1d5NqtR.png",
  videoUrl: "https://i.imgur.com/6zbQPsR.mp4",
  gallery: [
    "https://i.imgur.com/47LA5Tp.png",
    "https://i.imgur.com/D1CbEwR.png",
    "https://i.imgur.com/dBMsVZQ.png",
    "https://i.imgur.com/p3tmICH.png",
    "https://i.imgur.com/6H8306y.png",
    "https://i.imgur.com/oFHJVGJ.png",
    "https://i.imgur.com/667KSsZ.png"
  ],
  results: [
    "https://i.imgur.com/JTl58vI.png",
    "https://i.imgur.com/3ujsOBQ.png",
    "https://i.imgur.com/K3VKBMr.png",
    "https://i.imgur.com/zj0hjKA.png",
    "https://i.imgur.com/oFHJVGJ.png",
    "https://i.imgur.com/Hsm4Aqx.png",
    "https://i.imgur.com/dzOnOp7.png",
    "https://i.imgur.com/ZTQbBAM.png"
  ],
  testimonials: [
    "https://i.imgur.com/g2cCQPu.png",
    "https://i.imgur.com/6qCWVJ2.png",
    "https://i.imgur.com/bwRkYAH.png",
    "https://i.imgur.com/nF5XPc6.png",
    "https://i.imgur.com/9GFhL3K.png",
    "https://i.imgur.com/GP0bIDl.png",
    "https://i.imgur.com/syqj4Ss.png"
  ]
};

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    text: "Qual é o seu principal objetivo hoje?",
    options: ["Rejuvenescimento Facial", "Contorno Corporal", "Estética Íntima", "Melhorar a Autoestima"]
  },
  {
    id: 2,
    text: "O que você mais valoriza em um procedimento?",
    options: ["Naturalidade total", "Resultados rápidos", "Segurança absoluta", "Atendimento exclusivo"]
  },
  {
    id: 3,
    text: "Já realizou algum procedimento estético anteriormente?",
    options: ["Sim, e gosto dos resultados", "Sim, mas não tive boa experiência", "Nunca realizari nenhum", "Estou pesquisando pela primeira vez"]
  },
  {
    id: 4,
    text: "Qual área do seu corpo você gostaria de cuidar primeiro?",
    options: ["Rosto (Rugas/Linhas)", "Lábios", "Glúteo/Corpo", "Região Íntima"]
  }
];

export const TRUST_CARDS = [
  {
    icon: <Sparkles className="w-6 h-6 text-[#d4af37]" />,
    title: "Avaliação Honesta",
    desc: "Não indico o que você não precisa. Minha ética vem antes de qualquer protocolo."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />,
    title: "Segurança Absoluta",
    desc: "Produtos de alta gama e técnicas validadas para sua total tranquilidade."
  },
  {
    icon: <UserRoundCheck className="w-6 h-6 text-[#d4af37]" />,
    title: "Atendimento Comigo",
    desc: "Todo o processo, do planejamento à execução, é feito pessoalmente por mim."
  },
  {
    icon: <Heart className="w-6 h-6 text-[#d4af37]" />,
    title: "Foco na Naturalidade",
    desc: "Realço sua beleza sem transformar você em outra pessoa."
  }
];

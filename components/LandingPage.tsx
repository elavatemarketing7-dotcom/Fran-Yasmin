
import React, { useState, useRef } from 'react';
import { 
  EXPERT_NAME, 
  EXPERT_TITLE, 
  IMAGES, 
  WHATSAPP_LINK, 
  INSTAGRAM_LINK, 
  MAPS_LINK,
  TRUST_CARDS 
} from '../constants';
import { 
  Play, 
  Instagram, 
  MapPin, 
  ChevronRight, 
  ArrowRight,
  Maximize2,
  X,
  MessageCircle,
  CheckCircle2,
  Pause,
  Star
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openLightbox = (url: string) => setSelectedImage(url);
  const closeLightbox = () => setSelectedImage(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-end p-6 overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.main} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-xl mx-auto mb-10 animate-fade-in-up">
          <div className="flex flex-col mb-6">
            <span className="text-[#d4af37] font-bold text-xs uppercase tracking-[0.3em] mb-2">Bem-vinda à Exclusividade</span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#1a1a1a] mb-4 leading-[1.1] font-bold">
              Eu sou Franciany Yasmin.
            </h1>
            <p className="text-gray-700 text-lg md:text-2xl mb-8 leading-relaxed max-w-lg">
              Especialista em realçar sua beleza natural com técnica, sensibilidade e um método que prioriza sua segurança.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <a 
              href={WHATSAPP_LINK}
              className="w-full py-6 gold-gradient text-[#1a1a1a] rounded-2xl font-black text-lg text-center shadow-[0_10px_30px_rgba(212,175,55,0.3)] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              AGENDAR CONSULTA NO WHATSAPP
              <ChevronRight className="w-5 h-5" />
            </a>
            <p className="text-center text-gray-400 text-[10px] font-bold uppercase tracking-widest italic">
              Atendimento exclusivo e personalizado
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO HIGHLIGHT - IMMEDIATELY AFTER HERO, HIGHLY PROMINENT */}
      <section className="px-6 py-20 bg-white border-b border-gray-50">
        <div className="max-w-6xl mx-auto">
           <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-3/5 relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] group cursor-pointer border-8 border-white">
                <video 
                  ref={videoRef}
                  src={IMAGES.videoUrl} 
                  className="w-full h-full object-cover"
                  playsInline
                  onClick={toggleVideo}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/50"
                    onClick={toggleVideo}
                  >
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/50 shadow-2xl transition-transform group-hover:scale-110">
                      <Play className="w-12 h-12 text-white fill-white ml-2" />
                    </div>
                  </div>
                )}
                {isPlaying && (
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-xl p-3 rounded-full border border-white/30" onClick={toggleVideo}>
                      <Pause className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full lg:w-2/5 text-left">
                <div className="inline-block px-4 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-[10px] font-black uppercase tracking-widest mb-6">
                  Apresentação do Método
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8 leading-tight font-bold italic">Sinta a Diferença de ser Cuidada</h2>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 border-l-4 border-[#d4af37] pl-6 py-2">
                  descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito.
                  resultado naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única, e merece atenção especial.
                </p>
                <div className="flex items-center gap-6">
                   <span className="font-signature text-5xl text-[#d4af37] -rotate-3">Dra. Frany</span>
                   <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 2. BLOCO QUEM SOU EU (Autoridade) */}
      <section className="px-6 py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6 font-bold">Minha Jornada, Seu Resultado.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Acredito que a estética de alta performance deve ser humana. Minha abordagem foge do "clínico" frio para abraçar o cuidado detalhista e a conexão real com cada paciente.
            </p>
            <div className="space-y-6 mb-10">
              {[
                { title: "Personalização", desc: "Cada face é uma obra de arte única." },
                { title: "Tecnologia", desc: "Equipamentos e injetáveis de padrão ouro." },
                { title: "Segurança", desc: "Rigor técnico em cada aplicação." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full gold-gradient flex-shrink-0 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a]">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a 
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#1a1a1a] font-black uppercase tracking-widest text-xs border-2 border-gray-200 px-6 py-4 rounded-xl hover:border-[#d4af37] transition-all"
            >
              <Instagram className="w-5 h-5 text-[#d4af37]" />
              Conheça os Bastidores
            </a>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src={IMAGES.expert3} 
                alt="Franciany Yasmin" 
                className="w-full rounded-[4rem] shadow-2xl relative z-10"
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-5 -left-5 bg-white p-8 rounded-[2rem] shadow-2xl z-20 border border-gray-50">
                <p className="font-serif text-4xl font-bold text-[#1a1a1a]">Elite</p>
                <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest">Estética de Luxo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BLOCO RESULTADOS REAIS */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="text-[#d4af37] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Portfólio</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 font-bold">Resultados Reais</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto italic">"A arte de realçar sem transformar em outra pessoa. Apenas a sua melhor versão."</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {IMAGES.results.map((url, i) => (
            <div 
              key={i} 
              className="relative aspect-square rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer border border-gray-100"
              onClick={() => openLightbox(url)}
            >
              <img src={url} alt={`Resultado ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="w-10 h-10 text-white" />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-300 text-[10px] uppercase tracking-widest font-bold">
          As imagens são ilustrativas. Os resultados podem variar conforme cada organismo.
        </p>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_CARDS.map((card, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-white shadow-sm hover:shadow-2xl transition-all border border-white hover:border-gray-100">
              <div className="mb-8 p-4 w-fit rounded-2xl bg-gray-50 text-[#d4af37]">
                {card.icon}
              </div>
              <h4 className="font-serif text-xl mb-4 text-[#1a1a1a] font-bold">{card.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center bg-[#1a1a1a] p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4af37] opacity-10 rounded-full blur-3xl"></div>
          <h2 className="font-serif text-3xl text-white mb-4 italic">Ficou com alguma dúvida?</h2>
          <p className="text-gray-400 mb-8">Nossa equipe e a Dra. Franciany estão prontas para te ouvir e orientar sem pressa.</p>
          <a 
            href={WHATSAPP_LINK}
            className="inline-flex items-center gap-4 px-12 py-5 gold-gradient text-[#1a1a1a] rounded-2xl font-black text-lg shadow-2xl active:scale-95 transition-all"
          >
            FALAR NO WHATSAPP
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* 6. COMO FUNCIONA A CONSULTA */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-4 font-bold">Como funciona a primeira consulta?</h2>
            <p className="text-gray-400">Um processo fluido, focado em entender você.</p>
          </div>
          <div className="space-y-16">
            {[
              { title: "Agendamento Ágil", desc: "No WhatsApp, escolhemos o melhor horário para você." },
              { title: "Avaliação 360º", desc: "Analisamos cada detalhe da sua face/corpo e ouvimos seus desejos." },
              { title: "Protocolo Exclusivo", desc: "Criamos um plano de tratamento único para seu perfil." }
            ].map((item, i) => (
              <div key={i} className="flex gap-10 items-start group">
                <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#d4af37] font-serif text-2xl font-black group-hover:bg-[#d4af37] group-hover:text-white group-hover:border-[#d4af37] transition-all duration-500">
                  {i + 1}
                </div>
                <div className="pt-2">
                  <h4 className="text-xl font-black mb-3 text-[#1a1a1a] uppercase tracking-tight">{item.title}</h4>
                  <p className="text-gray-500 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - AREA DE COMENTARIOS */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(s => <Star key={s} size={20} className="text-[#d4af37] fill-[#d4af37]" />)}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">O que dizem as pacientes</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">A satisfação de quem viveu a experiência e o método exclusivo Franciany Yasmin.</p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 max-w-7xl mx-auto">
          {IMAGES.testimonials.map((url, i) => (
            <div 
              key={i} 
              className="relative break-inside-avoid rounded-3xl overflow-hidden shadow-xl border border-white hover:scale-[1.02] transition-transform cursor-pointer group"
              onClick={() => openLightbox(url)}
            >
              <img src={url} alt={`Comentário ${i+1}`} className="w-full h-auto block" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                    <Maximize2 className="w-6 h-6 text-white" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MAIS PROVAS - BASTIDORES */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto mb-16 flex justify-between items-end">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Experiência Franciany</h2>
            <p className="text-gray-400">Ambiente de exclusividade e cuidado em Curitiba.</p>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-10 snap-x no-scrollbar">
          {IMAGES.gallery.map((url, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[400px] aspect-[3/4] rounded-[3rem] overflow-hidden snap-center shadow-2xl border-8 border-white bg-gray-100">
              <img src={url} alt={`Ambiente ${i+1}`} className="w-full h-full object-cover transition-transform hover:scale-105" />
            </div>
          ))}
          {/* PLACEHOLDER FOR MORE LINKS */}
          <div className="min-w-[300px] flex items-center justify-center border-4 border-dashed border-gray-200 rounded-[3rem]">
             <span className="text-gray-300 font-bold uppercase tracking-widest text-xs">Mais em breve</span>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="px-6 py-32 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-28 h-28 rounded-full border-4 border-[#d4af37] p-1 mx-auto mb-10 shadow-2xl">
            <img src={IMAGES.main} alt="Dra. Franciany" className="w-full h-full object-cover rounded-full" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 font-bold leading-tight">Pronta para viver essa transformação?</h2>
          <p className="text-gray-400 text-xl mb-12">O agendamento da sua primeira consulta é o primeiro passo para o novo capítulo da sua autoestima.</p>
          <a 
            href={WHATSAPP_LINK}
            className="w-full md:w-auto inline-flex items-center justify-center gap-4 px-16 py-7 bg-[#1a1a1a] text-white rounded-[2rem] font-black text-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-all"
          >
            QUERO SABER MAIS E AGENDAR
            <ArrowRight className="w-6 h-6 text-[#d4af37]" />
          </a>
          <p className="mt-6 text-gray-400 text-sm font-bold uppercase tracking-widest italic">Horários limitados para este mês</p>
        </div>
      </section>

      {/* 9. RODAPÉ E MAPA */}
      <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 mb-20 items-center">
          <div>
            <span className="text-[#d4af37] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Localização</span>
            <h3 className="font-serif text-4xl mb-8 font-bold text-[#1a1a1a]">Visite nossa Clínica</h3>
            <div className="flex items-start gap-4 mb-10">
              <div className="p-3 rounded-xl bg-gray-50 text-[#d4af37]">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-gray-500 text-lg leading-relaxed pt-2">
                R. Jacarezinho, 1459 - Mercês,<br />
                Curitiba - PR, 80810-130
              </p>
            </div>
            <a 
              href={MAPS_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-100 text-[#1a1a1a] rounded-xl font-bold hover:bg-gray-200 transition-all"
            >
              COMO CHEGAR
              <ChevronRight size={18} />
            </a>
          </div>
          <div className="h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-gray-50">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.551670980072!2d-49.3005888!3d-25.4198282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce15623065bed%3A0x90009b3232a94408!2sR.%20Jacarezinho%2C%201459%20-%20Merc%C3%AAs%2C%20Curitiba%20-%20PR%2C%2080810-130!5e0!3m2!1spt-BR!2sbr!4v1711200000000!5m2!1spt-BR!2sbr" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
             ></iframe>
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="w-16 h-px bg-gray-200 mb-12"></div>
          <p className="font-signature text-6xl text-[#d4af37] mb-4">{EXPERT_NAME}</p>
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest text-center mb-8">{EXPERT_TITLE}</p>
          
          <div className="flex gap-8 mb-16">
            <a href={INSTAGRAM_LINK} className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"><Instagram size={20} /></a>
            <a href={WHATSAPP_LINK} className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#25d366] hover:border-[#25d366] transition-all"><MessageCircle size={20} /></a>
          </div>
          
          <p className="text-gray-300 text-[10px] uppercase tracking-widest text-center font-bold">
            &copy; 2024 Franciany Yasmin. Estética Premium.
          </p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 animate-fade-in" onClick={closeLightbox}>
          <button className="absolute top-8 right-8 text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all border border-white/20"><X size={32} /></button>
          <img src={selectedImage} alt="Resultado Ampliado" className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border-4 border-white/10" />
        </div>
      )}

      {/* STICKY WHATSAPP FAB */}
      <a 
        href={WHATSAPP_LINK}
        className="fixed bottom-8 right-8 z-[90] w-18 h-18 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all p-4 border-4 border-white/20"
      >
        <MessageCircle size={36} />
      </a>

      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;

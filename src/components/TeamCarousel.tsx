import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import gerenteImage from "@/assets/gerente-regional.png";
import lucasImage from "@/assets/lucas-consultor.png";
import nailtonImage from "@/assets/nailton-consultor.png";
import thatyImage from "@/assets/thaty-secretaria.png";

const teamMembers = [
  {
    id: 1,
    name: "Anthony Silas dos Santos Sena",
    role: "Gerente Regional",
    location: "Valença, Bahia",
    image: gerenteImage,
    description: [
      "Sou o Gerente Regional da FACILITE e Fique Seguro de Valença, Bahia, e tenho o orgulho de liderar uma equipe comprometida em oferecer a melhor proteção veicular da região.",
      "Com anos de experiência no mercado de proteção veicular, minha missão é garantir que cada associado receba um atendimento personalizado, transparente e eficaz.",
      "Estou à disposição para esclarecer todas as suas dúvidas e ajudá-lo a encontrar o plano de proteção ideal para o seu veículo."
    ],
    phone: "(75) 99921-3338",
    email: "btclucasbarreto@gmail.com"
  },
  {
    id: 2,
    name: "Lucas dos Santos Barreto",
    role: "Consultor Autorizado",
    location: "Valença, Bahia",
    image: lucasImage,
    description: [
      "Sou Consultor Autorizado da FACILITE e Fique Seguro em Valença, Bahia, pronto para ajudar você a encontrar a melhor proteção para o seu veículo.",
      "Meu compromisso é oferecer um atendimento próximo e personalizado, garantindo que você tenha todas as informações necessárias para tomar a melhor decisão.",
      "Entre em contato comigo para conhecer nossos planos e descobrir como podemos proteger o que é seu."
    ],
    phone: "(75) 99921-3338",
    email: "btclucasbarreto@gmail.com"
  },
  {
    id: 3,
    name: "Nailton",
    role: "Consultor Autorizado",
    location: "Taperoá, Bahia",
    image: nailtonImage,
    description: [
      "Sou Consultor Autorizado da FACILITE e Fique Seguro em Taperoá, Bahia, dedicado a oferecer as melhores soluções em proteção veicular para você.",
      "Estou sempre disponível para atender e esclarecer suas dúvidas sobre nossos planos de proteção.",
      "Entre em contato e descubra como podemos proteger seu veículo com segurança e confiança."
    ],
    phone: "(75) 99921-3338",
    email: "btclucasbarreto@gmail.com"
  },
  {
    id: 4,
    name: "Thaty Alves",
    role: "Secretária",
    location: "Valença, Bahia",
    image: thatyImage,
    description: [
      "Sou a Secretária da FACILITE e Fique Seguro, responsável por garantir que você tenha o melhor atendimento desde o primeiro contato.",
      "Estou aqui para auxiliar em todos os processos administrativos e garantir que sua experiência seja a melhor possível.",
      "Conte comigo para qualquer suporte que precisar!"
    ],
    phone: "(75) 99921-3338",
    email: "btclucasbarreto@gmail.com"
  }
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const member = teamMembers[currentIndex];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#001c48' }}>
            Conheça Nossa <span style={{ color: '#e14e06' }}>Equipe</span>
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-3 rounded-full shadow-lg transition-all hover:scale-110"
            style={{ backgroundColor: '#001c48' }}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-3 rounded-full shadow-lg transition-all hover:scale-110"
            style={{ backgroundColor: '#001c48' }}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div 
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-20" 
                  style={{ backgroundColor: '#1b4d9b' }}
                />
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="relative rounded-2xl shadow-2xl w-[350px] h-[350px] object-cover object-center"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#001c48' }}>
                  {member.name}
                </h3>
                <p className="text-xl font-semibold mb-6" style={{ color: '#e14e06' }}>
                  {member.role} - {member.location}
                </p>
              </div>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                {member.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="rounded-xl p-6 space-y-4" style={{ backgroundColor: '#001c48' }}>
                <h4 className="text-xl font-bold text-white mb-4">Entre em Contato Direto</h4>
                
                <div className="flex items-center gap-3 text-white">
                  <Phone className="h-5 w-5" style={{ color: '#e14e06' }} />
                  <div>
                    <p className="font-medium">{member.phone}</p>
                    <p className="text-sm text-gray-300">WhatsApp e Ligações</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-white">
                  <Mail className="h-5 w-5" style={{ color: '#e14e06' }} />
                  <div>
                    <p className="font-medium">{member.email}</p>
                    <p className="text-sm text-gray-300">Atendimento personalizado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'w-8' : ''
                }`}
                style={{ 
                  backgroundColor: index === currentIndex ? '#e14e06' : '#001c48',
                  opacity: index === currentIndex ? 1 : 0.4
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;


import { Button } from "@/components/ui/button";
import { Phone, Star } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative text-white py-20 px-6 min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(/lovable-uploads/fd28e427-e241-4bff-83bd-c9fa6ddb3525.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay com gradiente personalizado */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(to right, #1b4d9b, #001c48)'
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/lovable-uploads/6f18010b-5078-41ce-9007-5f5fca7103b3.png" 
                alt="FACILITE Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Garantir o Bem do Cliente 
              <span style={{ color: '#e14e06' }}> 100%</span> com 
              <span style={{ color: '#e14e06' }}> Total Cobertura</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              Proteja seu veículo com o seguro automotivo mais completo do mercado. 
              Cobertura total, atendimento 24h e tranquilidade garantida.
            </p>
            
            <div className="flex items-center gap-4 text-lg">
              <div className="flex" style={{ color: '#e14e06' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span>Mais de 50.000 clientes satisfeitos</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all hover:opacity-90"
                style={{ 
                  backgroundColor: '#e14e06'
                }}
              >
                QUERO MEU SEGURO AGORA
              </Button>
              
              <div className="flex items-center gap-2" style={{ color: '#e14e06' }}>
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(11) 9999-9999</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Cotação Grátis em 2 Minutos</h3>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span>✓ Cobertura Total</span>
                    <span className="font-bold" style={{ color: '#e14e06' }}>100%</span>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span>✓ Atendimento 24h</span>
                    <span className="text-green-400 font-bold">ATIVO</span>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span>✓ Melhor Preço</span>
                    <span className="font-bold" style={{ color: '#e14e06' }}>GARANTIDO</span>
                  </div>
                </div>
                <Button 
                  onClick={scrollToForm}
                  className="w-full text-white font-bold py-3 hover:opacity-90 transition-opacity"
                  style={{ 
                    backgroundColor: '#e14e06'
                  }}
                >
                  COMEÇAR COTAÇÃO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

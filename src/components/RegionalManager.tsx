import { Phone, Mail } from "lucide-react";
import gerenteImage from "@/assets/gerente-regional.png";

const RegionalManager = () => {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#001c48' }}>
            Conheça Nosso <span style={{ color: '#e14e06' }}>Gerente Regional</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-2xl blur-2xl opacity-20" 
                style={{ backgroundColor: '#1b4d9b' }}
              />
              <img
                src={gerenteImage}
                alt="Anthony Silas dos Santos Sena - Gerente Regional FACILITE"
                className="relative rounded-2xl shadow-2xl w-full max-w-md"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#001c48' }}>
                Anthony Silas dos Santos Sena
              </h3>
              <p className="text-xl font-semibold mb-6" style={{ color: '#e14e06' }}>
                Gerente Regional - Valença, Bahia
              </p>
            </div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Sou o <strong>Gerente Regional da FACILITE e Fique Seguro de Valença, Bahia</strong>, 
                e tenho o orgulho de liderar uma equipe comprometida em oferecer a melhor proteção 
                veicular da região.
              </p>
              
              <p>
                Com anos de experiência no mercado de proteção veicular, minha missão é garantir que 
                cada associado receba um <strong style={{ color: '#e14e06' }}>atendimento personalizado, 
                transparente e eficaz</strong>. Acredito que nosso diferencial está na proximidade 
                com o cliente e no compromisso genuíno com sua segurança e tranquilidade.
              </p>
              
              <p>
                Estou à disposição para esclarecer todas as suas dúvidas e ajudá-lo a encontrar o 
                plano de proteção ideal para o seu veículo. Aqui na FACILITE, você não é apenas um 
                número - você é parte da nossa família.
              </p>
            </div>

            <div className="rounded-xl p-6 space-y-4" style={{ backgroundColor: '#001c48' }}>
              <h4 className="text-xl font-bold text-white mb-4">Entre em Contato Direto</h4>
              
              <div className="flex items-center gap-3 text-white">
                <Phone className="h-5 w-5" style={{ color: '#e14e06' }} />
                <div>
                  <p className="font-medium">(75) 99921-3338</p>
                  <p className="text-sm text-gray-300">WhatsApp e Ligações</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-white">
                <Mail className="h-5 w-5" style={{ color: '#e14e06' }} />
                <div>
                  <p className="font-medium">btclucasbarreto@gmail.com</p>
                  <p className="text-sm text-gray-300">Atendimento personalizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalManager;

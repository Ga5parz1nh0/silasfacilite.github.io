
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white py-16 px-6" style={{ backgroundColor: '#001c48' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Coluna 1 - Logo e Descrição */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/6f18010b-5078-41ce-9007-5f5fca7103b3.png" 
                alt="FACILITE Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Especialistas em seguro automotivo há mais de 15 anos. 
              Garantindo o bem do cliente 100% com total cobertura.
            </p>
            <div className="flex items-center gap-2" style={{ color: '#e14e06' }}>
              <span className="text-2xl">⭐</span>
              <span className="font-bold">4.9/5 - Mais de 10.000 avaliações</span>
            </div>
          </div>
          
          {/* Coluna 2 - Contatos */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold" style={{ color: '#e14e06' }}>Fale Conosco</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" style={{ color: '#1b4d9b' }} />
                <div>
                  <p className="font-medium">(11) 9999-9999</p>
                  <p className="text-sm text-gray-400">WhatsApp e Ligações</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" style={{ color: '#1b4d9b' }} />
                <div>
                  <p className="font-medium">contato@facilite.com.br</p>
                  <p className="text-sm text-gray-400">Atendimento por email</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5" style={{ color: '#1b4d9b' }} />
                <div>
                  <p className="font-medium">Atendimento 24h/7dias</p>
                  <p className="text-sm text-gray-400">Emergências e sinistros</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coluna 3 - Serviços */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold" style={{ color: '#e14e06' }}>Nossos Serviços</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Seguro Auto Completo</li>
              <li>• Proteção contra Roubo e Furto</li>
              <li>• Cobertura de Colisão</li>
              <li>• Assistência 24 horas</li>
              <li>• Carro Reserva Gratuito</li>
              <li>• Guincho e Chaveiro</li>
              <li>• Vidros e Faróis</li>
              <li>• Fenômenos Naturais</li>
            </ul>
          </div>
          
          {/* Coluna 4 - Localização */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold" style={{ color: '#e14e06' }}>Onde Estamos</h3>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1" style={{ color: '#1b4d9b' }} />
              <div>
                <p className="font-medium">Matriz São Paulo</p>
                <p className="text-gray-300 text-sm">
                  Av. Paulista, 1000<br />
                  Bela Vista - São Paulo/SP<br />
                  CEP: 01310-100
                </p>
              </div>
            </div>
            
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#e14e06' }}>
              <p className="font-bold text-lg mb-2">🏆 Certificações</p>
              <div className="text-sm space-y-1">
                <p>• SUSEP Autorizada</p>
                <p>• ISO 9001:2015</p>
                <p>• Selo de Confiança E-bit</p>
                <p>• Certificado Google</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Linha de separação */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 FACILITE Seguros. Todos os direitos reservados. | CNPJ: 12.345.678/0001-90
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">Política de Privacidade</button>
              <button className="hover:text-white transition-colors">Termos de Uso</button>
              <button className="hover:text-white transition-colors">Regulamento</button>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>
              FACILITE Seguros atua como correspondente de seguros autorizado pela SUSEP. 
              Todas as coberturas estão sujeitas à análise e aprovação da seguradora parceira.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Shield, Clock, DollarSign, Phone, Car, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Cobertura 100% Completa",
      description: "Proteção total contra roubo, furto, colisão, incêndio e fenômenos naturais. Seu patrimônio sempre protegido."
    },
    {
      icon: Clock,
      title: "Atendimento 24h/7dias",
      description: "Suporte especializado a qualquer hora, em qualquer lugar. Nossa equipe está sempre pronta para ajudar."
    },
    {
      icon: DollarSign,
      title: "Melhor Custo-Benefício",
      description: "Preços competitivos com máxima cobertura. Compare e comprove: oferecemos o melhor valor do mercado."
    },
    {
      icon: Car,
      title: "Carro Reserva Gratuito",
      description: "Em caso de sinistro, disponibilizamos um veículo reserva sem custo adicional enquanto o seu está na oficina."
    },
    {
      icon: Users,
      title: "Rede Credenciada Nacional",
      description: "Mais de 5.000 oficinas e prestadores credenciados em todo o Brasil. Atendimento próximo onde você estiver."
    },
    {
      icon: Phone,
      title: "Processo 100% Digital",
      description: "Contratação online, renovação automática e acionamento pelo app. Tudo simples e na palma da sua mão."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Por que escolher a <span className="text-blue-600">FACILITE?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas em proteção veicular há mais de 15 anos, oferecendo as melhores condições e atendimento diferenciado para nossos clientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

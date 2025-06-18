
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo - SP",
      rating: 5,
      text: "Excelente atendimento! Quando meu carro foi roubado, a FACILITE resolveu tudo rapidamente. Recebi a indenização em apenas 15 dias. Super recomendo!",
      avatar: "MS"
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro - RJ",
      rating: 5,
      text: "Melhor seguro que já tive. Preço justo, cobertura completa e atendimento nota 10. Já renovo há 3 anos consecutivos!",
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte - MG",
      rating: 5,
      text: "Processo super fácil e rápido. Fiz a cotação online e em 2 minutos já tinha minha proposta. Contratei na hora e não me arrependo!",
      avatar: "AC"
    }
  ];

  const stats = [
    { number: "50.000+", label: "Clientes Atendidos" },
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "15+", label: "Anos de Experiência" },
    { number: "24h", label: "Atendimento Disponível" }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Mais de 50.000 brasileiros já confiam na FACILITE para proteger seus veículos
          </p>
        </div>
        
        {/* Estatísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Depoimentos */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 relative">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              <div className="flex text-yellow-500 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarFallback className="bg-blue-600 text-white font-bold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

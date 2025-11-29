import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Arlindo",
      location: "Valença - BA",
      rating: 5,
      text: "ENTREGARAM MEU VEÍCULO SUPER RÁPIDO.",
      avatar: "AR"
    },
    {
      name: "Max",
      location: "Valença - BA",
      rating: 5,
      text: "EXCELENTE SERVIÇO, ATENDIMENTO SURREAL.",
      avatar: "MX"
    },
    {
      name: "Pitoco",
      location: "Valença - BA",
      rating: 5,
      text: "EU NÃO FUI PELO PREÇO, FUI PELA QUALIDADE.",
      avatar: "PT"
    },
    {
      name: "Milena",
      location: "Valença - BA",
      rating: 5,
      text: "Nossa, Superou Minhas expectativas",
      avatar: "ML"
    },
    {
      name: "Edy",
      location: "Valença - BA",
      rating: 5,
      text: "Oh Silas, Minha moto ficou nova, parece que saiu da Loja",
      avatar: "ED"
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
        
        {/* Depoimentos em Carrossel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-gray-50 rounded-xl p-8 relative h-full flex flex-col">
                  <Quote className="h-8 w-8 text-blue-600 mb-4" />
                  
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow">"{testimonial.text}"</p>
                  
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default SocialProof;

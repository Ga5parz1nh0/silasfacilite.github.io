
import { Award, Users, Clock, MapPin } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "3 Anos de Mercado",
      description: "Construindo confiança com transparência e compromisso"
    },
    {
      icon: Users,
      title: "Centenas de Clientes",
      description: "Associados satisfeitos com atendimento humanizado"
    },
    {
      icon: Clock,
      title: "Zero Reclamações",
      description: "Histórico limpo e confiável desde nossa fundação"
    },
    {
      icon: MapPin,
      title: "Atendimento Eficaz",
      description: "Sinistros atendidos com responsabilidade e rapidez"
    }
  ];

  return (
    <section className="py-20 px-6 text-white" style={{ backgroundColor: '#001c48' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Sobre <span style={{ color: '#e14e06' }}>Nós</span>
            </h2>
            
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#1b4d9b' }}>
              Confiança que se constrói com transparência e compromisso
            </h3>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Há <strong className="text-white">3 anos no mercado</strong>, a FACILITE Proteção Veicular vem 
                conquistando a confiança de centenas de clientes com um modelo 
                de <strong style={{ color: '#e14e06' }}>atendimento 100% humanizado e eficaz</strong>. 
                Nosso diferencial está na transparência, agilidade e compromisso com cada associado.
              </p>
              
              <p>
                Contamos com uma <strong className="text-white">equipe de consultores capacitados</strong>, 
                preparados para oferecer soluções personalizadas e esclarecer 
                todas as dúvidas com clareza e respeito. Além disso, temos orgulho 
                em afirmar que até hoje <strong style={{ color: '#e14e06' }}>não possuímos nenhuma reclamação 
                registrada</strong>, mantendo um histórico limpo e confiável.
              </p>
              
              <p>
                Todos os sinistros são atendidos com <strong className="text-white">responsabilidade e rapidez</strong>, 
                garantindo que nossos associados tenham tranquilidade e 
                segurança nos momentos mais difíceis. Ser FACILITE é ter a certeza 
                de estar bem amparado, com uma equipe que realmente se importa 
                com você.
              </p>
            </div>
            
            <div className="mt-8 rounded-lg p-6" style={{ backgroundColor: '#1b4d9b' }}>
              <h3 className="text-xl font-bold mb-3">🎯 Nossa Promessa</h3>
              <p className="text-blue-100">
                "Oferecer proteção veicular com atendimento humanizado, transparência total 
                e compromisso genuíno com cada associado, garantindo tranquilidade e segurança."
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-center">Por que Somos Referência?</h3>
            
            {achievements.map((achievement, index) => (
              <div key={index} className="rounded-xl p-6 border hover:border-opacity-50 transition-colors" style={{ backgroundColor: '#1b4d9b', borderColor: '#e14e06' }}>
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 flex-shrink-0" style={{ backgroundColor: '#e14e06' }}>
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{achievement.title}</h4>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-black rounded-xl p-6 text-center" style={{ backgroundColor: '#e14e06' }}>
              <h4 className="text-xl font-bold mb-2">🏆 Nossos Diferenciais</h4>
              <p className="font-medium">
                Atendimento 100% Humanizado • Zero Reclamações • Transparência Total • 
                Consultores Especializados • Sinistros Ágeis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

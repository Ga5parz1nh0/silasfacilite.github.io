
import { Award, Users, Clock, MapPin } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "15+ Anos de Mercado",
      description: "Experiência consolidada em proteção veicular"
    },
    {
      icon: Users,
      title: "50.000+ Clientes",
      description: "Brasileiros que confiam na nossa proteção"
    },
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Suporte disponível todos os dias do ano"
    },
    {
      icon: MapPin,
      title: "Cobertura Nacional",
      description: "Atendemos em todo território brasileiro"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Sobre a <span className="text-blue-400">FACILITE</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                A <strong className="text-white">FACILITE Seguros</strong> nasceu em 2008 com um objetivo claro: 
                simplificar e democratizar o acesso ao seguro automotivo no Brasil. 
                O que começou como uma pequena corretora hoje é referência nacional em proteção veicular.
              </p>
              
              <p>
                Nossa missão vai além de vender seguros. Queremos <strong className="text-blue-400">garantir o bem 
                do cliente 100% com total cobertura</strong>, oferecendo não apenas proteção financeira, 
                mas principalmente tranquilidade e segurança para você e sua família.
              </p>
              
              <p>
                Ao longo dos anos, construímos uma reputação sólida baseada em três pilares fundamentais: 
                <strong className="text-white"> transparência, agilidade e atendimento humanizado</strong>. 
                Cada cliente é único e merece um atendimento personalizado.
              </p>
            </div>
            
            <div className="mt-8 bg-blue-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🎯 Nossa Promessa</h3>
              <p className="text-blue-100">
                "Transformar a experiência com seguro automotivo, tornando-a simples, 
                rápida e confiável, para que nossos clientes possam dirigir com total tranquilidade."
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-center">Por que Somos Referência?</h3>
            
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 rounded-full p-3 flex-shrink-0">
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-blue-400">{achievement.title}</h4>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold mb-2">🏆 Prêmios e Reconhecimentos</h4>
              <p className="font-medium">
                Top 10 Seguradoras do Brasil • Prêmio Excelência em Atendimento 2023 • 
                Certificação ISO 9001 • Selo de Confiança E-bit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

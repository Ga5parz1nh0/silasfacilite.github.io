
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "Como funciona a cotação gratuita?",
      answer: "Nossa cotação é 100% gratuita e sem compromisso. Você preenche seus dados no formulário, nossa equipe especializada analisa seu perf e em até 2 minutos você recebe uma proposta personalizada com o melhor preço do mercado. Não há cobrança nem obrigação de contratar."
    },
    {
      question: "Quanto tempo demora para ativar meu seguro?",
      answer: "Após a aprovação da proposta e confirmação do pagamento, seu seguro é ativado automaticamente em até 24 horas. Em casos urgentes, conseguimos ativar em até 2 horas durante horário comercial. Você recebe toda a documentação por email e WhatsApp."
    },
    {
      question: "O que está incluso na cobertura total?",
      answer: "Nossa cobertura 100% inclui: roubo e furto, colisão, incêndio, fenômenos naturais, danos elétricos, vidros, faróis, lanternas, carro reserva gratuito, assistência 24h, guincho, chaveiro, pane seca e elétrica. Tudo sem franquia para roubo e furto."
    },
    {
      question: "Como acionar o seguro em caso de sinistro?",
      answer: "Você pode acionar seu seguro de 3 formas: pelo telefone 24h (11) 9999-9999, pelo nosso app FACILITE ou pelo WhatsApp. Nossa equipe especializada te orienta em todos os procedimentos e acompanha seu caso até a resolução final."
    },
    {
      question: "Posso cancelar o seguro quando quiser?",
      answer: "Sim! Você tem total liberdade para cancelar seu seguro quando desejar. Inclusive, oferecemos 30 dias de garantia: se não ficar satisfeito, cancelamos e devolvemos 100% do valor pago, sem burocracia nem perguntas difíceis."
    },
    {
      question: "Vocês atendem em todo o Brasil?",
      answer: "Sim, atendemos em todos os estados brasileiros! Temos uma rede credenciada com mais de 5.000 oficinas e prestadores de serviço em todo território nacional. Onde você estiver, terá atendimento FACILITE por perto."
    },
    {
      question: "Qual a diferença para outras seguradoras?",
      answer: "Nossa diferença está no atendimento humanizado, processo 100% digital, preços competitivos e resolução rápida. Não somos apenas uma seguradora, somos seus parceiros de confiança. Além disso, oferecemos garantias únicas como satisfação total em 30 dias."
    },
    {
      question: "Como é calculado o valor do meu seguro?",
      answer: "O valor é calculado com base no seu perfil (idade, estado civil, tempo de habilitação), características do veículo (marca, modelo, ano), região onde circula e coberturas escolhidas. Sempre buscamos o melhor custo-benefício para cada cliente."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecemos as principais dúvidas sobre nossos serviços
          </p>
        </div>
        
        <div className="mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-blue-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
          <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
          <p className="text-xl text-blue-100 mb-6">
            Nossa equipe especializada está pronta para esclarecer todas as suas questões!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToForm}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3"
            >
              FALAR COM ESPECIALISTA
            </Button>
            
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-md transition-colors inline-flex items-center justify-center"
            >
              WhatsApp: (11) 9999-9999
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

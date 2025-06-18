
import { Shield, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Guarantee = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Shield className="h-20 w-20 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Garantia de <span className="text-yellow-400">Satisfação Total</span>
          </h2>
          <p className="text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
            Estamos tão confiantes na qualidade do nosso serviço que oferecemos uma garantia única no mercado
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <CheckCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">30 Dias para Desistir</h3>
            <p className="text-green-100">
              Se não ficar satisfeito, cancele em até 30 dias e receba 100% do seu dinheiro de volta
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Atendimento Garantido</h3>
            <p className="text-green-100">
              Resposta em até 24h para qualquer solicitação ou seu próximo mês é gratuito
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <Shield className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Melhor Preço</h3>
            <p className="text-green-100">
              Encontrou mais barato? Igualamos o preço ou devolvemos a diferença
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-400 text-black rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">🏆 Por que podemos garantir tudo isso?</h3>
          <p className="text-lg mb-4">
            Porque temos mais de 15 anos de experiência, mais de 50.000 clientes atendidos 
            e 98% de satisfação. Nossa reputação fala por si só!
          </p>
          <div className="text-sm font-medium">
            ⭐ Nota 4.9/5 no Google | 📱 Mais de 10.000 avaliações positivas
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">
            Não perca tempo! Sua tranquilidade não pode esperar.
          </h3>
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-12 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all"
          >
            GARANTIR MINHA PROTEÇÃO AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;

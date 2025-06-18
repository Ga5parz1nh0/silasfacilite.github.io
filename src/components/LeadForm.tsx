
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Shield, Gift } from "lucide-react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    carBrand: "",
    carModel: "",
    carYear: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    toast.success("Cotação enviada! Entraremos em contato em até 30 minutos.", {
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      carBrand: "",
      carModel: "",
      carYear: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const carBrands = [
    "Chevrolet", "Volkswagen", "Fiat", "Ford", "Honda", 
    "Toyota", "Nissan", "Renault", "Hyundai", "Jeep", "Outro"
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  return (
    <section id="formulario" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Incentivos */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Faça sua Cotação <span className="text-yellow-400">Gratuita</span> Agora!
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Preencha os dados ao lado e receba sua cotação personalizada em até 2 minutos. 
                Sem compromisso e com o melhor preço garantido!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                <Gift className="h-8 w-8 text-yellow-400" />
                <div>
                  <h3 className="font-bold text-lg">OFERTA ESPECIAL</h3>
                  <p className="text-gray-200">30% de desconto para novos clientes</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                <Shield className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="font-bold text-lg">GARANTIA TOTAL</h3>
                  <p className="text-gray-200">Satisfação garantida ou seu dinheiro de volta</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-400 text-black rounded-lg p-6 text-center">
              <p className="font-bold text-lg">⏰ ATENÇÃO: Oferta válida apenas hoje!</p>
              <p>Garante já o seu desconto exclusivo</p>
            </div>
          </div>
          
          {/* Lado direito - Formulário */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Cotação Expressa</h3>
              <p className="text-gray-600">Preencha os dados e receba sua proposta</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Nome Completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="mt-1"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-1"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="city" className="text-gray-700 font-medium">Cidade *</Label>
                  <Input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="mt-1"
                    placeholder="Sua cidade"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-gray-700 font-medium">Marca do Veículo *</Label>
                  <Select onValueChange={(value) => handleInputChange("carBrand", value)} required>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {carBrands.map((brand) => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="carModel" className="text-gray-700 font-medium">Modelo *</Label>
                  <Input
                    id="carModel"
                    type="text"
                    value={formData.carModel}
                    onChange={(e) => handleInputChange("carModel", e.target.value)}
                    className="mt-1"
                    placeholder="Ex: Civic"
                    required
                  />
                </div>
                
                <div>
                  <Label className="text-gray-700 font-medium">Ano *</Label>
                  <Select onValueChange={(value) => handleInputChange("carYear", value)} required>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Ano" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all"
              >
                RECEBER COTAÇÃO GRÁTIS
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Ao enviar seus dados, você concorda em receber contato comercial por telefone, e-mail e WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;

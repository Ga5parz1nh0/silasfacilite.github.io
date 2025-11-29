import { MapPin, Phone, Clock } from "lucide-react";

const Location = () => {
  return (
    <section className="py-20 px-6 text-white" style={{ backgroundColor: '#001c48' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Venha nos <span style={{ color: '#e14e06' }}>Visitar</span>
          </h2>
          <p className="text-xl text-gray-300">
            Estamos prontos para te atender pessoalmente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <div className="rounded-xl p-6" style={{ backgroundColor: '#1b4d9b' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#e14e06' }}>
                Nossa Localização
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 flex-shrink-0" style={{ color: '#e14e06' }} />
                  <div>
                    <p className="font-bold text-lg mb-1">Endereço</p>
                    <p className="text-gray-200">
                      Av. Antonio Carlos Magalhães<br />
                      São Felix - Valença/BA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 flex-shrink-0" style={{ color: '#e14e06' }} />
                  <div>
                    <p className="font-bold text-lg mb-1">Telefone / WhatsApp</p>
                    <p className="text-gray-200">(75) 99921-3338</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 flex-shrink-0" style={{ color: '#e14e06' }} />
                  <div>
                    <p className="font-bold text-lg mb-1">Horário de Atendimento</p>
                    <p className="text-gray-200">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 text-center" style={{ backgroundColor: '#e14e06' }}>
              <p className="text-xl font-bold mb-2">
                📍 Venha fazer uma visita!
              </p>
              <p className="text-black">
                Nossa equipe está pronta para te receber e esclarecer todas as suas dúvidas pessoalmente.
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-xl overflow-hidden shadow-2xl h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1732905000000!6m8!1m7!1sRFzxpl_zTsP47OY6o7jT1g!2m2!1d-13.3552444!2d-39.0624084!3f302.98!4f-0.29!5f0.7525749891599186"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização FACILITE - Valença, Bahia"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

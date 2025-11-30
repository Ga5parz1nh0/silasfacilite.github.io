import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5575999213338"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-75 group-hover:opacity-100"></div>
        <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;

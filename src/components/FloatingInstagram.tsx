import { Instagram } from "lucide-react";

const FloatingInstagram = () => {
  return (
    <a
      href="https://instagram.com/silas_facilite"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Siga-nos no Instagram"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-75 group-hover:opacity-100"></div>
        <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <Instagram className="w-6 h-6" />
        </div>
      </div>
    </a>
  );
};

export default FloatingInstagram;

import logoMoveis from "@/assets/logo-moveis-passos.png";

const Logo = () => {
  return (
    <div className="inline-flex p-3 bg-white/80 backdrop-blur-sm border border-brand-purple-light/20 rounded-lg shadow-sm">
      <img 
        src={logoMoveis} 
        alt="Móveis Passos - Móveis sob medida para salões e estúdios" 
        className="h-12 md:h-16 w-auto"
      />
    </div>
  );
};

export default Logo;
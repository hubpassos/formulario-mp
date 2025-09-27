import logoMoveis from "@/assets/logo-moveis-passos.png";

const Logo = () => {
  return (
    <div className="flex justify-center">
      <img 
        src={logoMoveis} 
        alt="Móveis Passos - Móveis sob medida para salões e estúdios" 
        className="h-12 md:h-16 w-auto"
      />
    </div>
  );
};

export default Logo;
import logoIcon from "@/assets/logo-icon.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Móveis Passos
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Móveis para salão
        </p>
      </div>
      <div className="p-3 bg-white/80 backdrop-blur-sm border border-brand-purple-light/20 rounded-lg shadow-sm">
        <img 
          src={logoIcon} 
          alt="Móveis Passos - Logo" 
          className="h-10 md:h-12 w-auto"
        />
      </div>
    </div>
  );
};

export default Logo;
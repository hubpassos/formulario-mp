const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-gradient-primary w-10 h-10 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">M</span>
      </div>
      <div className="text-left">
        <div className="text-xl font-semibold text-primary">Móveis Passos</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wide">Premium Design</div>
      </div>
    </div>
  );
};

export default Logo;
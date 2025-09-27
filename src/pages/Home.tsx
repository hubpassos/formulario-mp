import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { HeroButton } from "@/components/ui/hero-button";
import { ChevronRight, Star, Award, Palette } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary/30 to-brand-silver/20">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <Logo />
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-brand-purple-light/20 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-brand-purple-light" />
            <span className="text-sm text-brand-purple-dark font-medium">Móveis Premium para Profissionais</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Solicite seu orçamento de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              móveis sob medida
            </span>{" "}
            para salões e estúdios
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforme seu espaço profissional com a qualidade e design exclusivo da Móveis Passos. 
            Criamos peças únicas que elevam sua marca e encantam seus clientes.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <Link to="/orcamento">
              <HeroButton size="lg" className="group">
                Solicitar Orçamento Agora
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </HeroButton>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-brand-purple-light/10 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Qualidade Premium</h3>
              <p className="text-muted-foreground text-sm">
                Materiais selecionados e acabamento impecável para durar por anos
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-brand-purple-light/10 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Design Exclusivo</h3>
              <p className="text-muted-foreground text-sm">
                Projetos personalizados que refletem a identidade do seu negócio
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-brand-purple-light/10 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Atendimento Especializado</h3>
              <p className="text-muted-foreground text-sm">
                Consultoria completa desde o projeto até a instalação
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-border/50">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Móveis Passos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
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
        <div data-sb-object-id="pagina-home" className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-brand-purple-light/20 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-brand-purple-light" />
            <span className="text-sm text-brand-purple-dark font-medium">Móveis Premium para Profissionais</span>
          </div>

          {/* Main Headline */}
          <h1 data-sb-field-path="title" className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Solicite seu{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              orçamento exclusivo
            </span>
          </h1>

          {/* Subheadline */}
          <p data-sb-field-path="body" className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforme seu espaço com móveis que unem conforto, design e durabilidade. Na Móveis Passos, cada detalhe é pensado para valorizar sua marca e encantar seus clientes.
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
                Durabilidade e acabamento impecável que valorizam seu espaço.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-brand-purple-light/10 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Design Exclusivo</h3>
              <p className="text-muted-foreground text-sm">
                Peças que refletem a identidade e o estilo do seu negócio.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-brand-purple-light/10 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Atendimento Humanizado</h3>
              <p className="text-muted-foreground text-sm">
                Cuidado e atenção em cada detalhe da sua jornada.
              </p>
            </div>
          </div>

          {/* Second CTA Button */}
          <div className="mt-16">
            <Link to="/orcamento">
              <HeroButton size="default" variant="secondary" className="group">
                Solicitar Orçamento Agora
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </HeroButton>
            </Link>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/10 to-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Nossos Produtos
              </h2>
              <p className="text-xl text-muted-foreground">
                Móveis que transformam espaços e elevam experiências
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Product 1 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-elegant hover:shadow-glow transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/src/assets/cadeira-nature-new.jpg" 
                    alt="Cadeira Nature"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Cadeira Nature</h3>
                  <p className="text-muted-foreground italic">
                    Conforto e ergonomia que elevam o nível de cada atendimento.
                  </p>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-elegant hover:shadow-glow transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/src/assets/cadeira-lisboa.jpg" 
                    alt="Cadeira Lisboa"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Cadeira Lisboa</h3>
                  <p className="text-muted-foreground italic">
                    Elegância e funcionalidade que transformam qualquer ambiente.
                  </p>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-elegant hover:shadow-glow transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/src/assets/lavatorio-vogue.jpg" 
                    alt="Lavatório Vogue"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Lavatório Vogue</h3>
                  <p className="text-muted-foreground italic">
                    Modernidade e praticidade que encantam a cada lavagem.
                  </p>
                </div>
              </div>
            </div>

            {/* Second CTA Button After Products */}
            <div className="text-center mt-16">
              <Link to="/orcamento">
                <HeroButton size="lg" className="group">
                  Solicitar Orçamento Agora
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </HeroButton>
              </Link>
            </div>
          </div>
        </section>
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

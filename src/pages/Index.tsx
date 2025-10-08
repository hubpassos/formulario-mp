import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  Check,
  Phone, 
  Mail,
  MapPin, 
  Award,
  Star,
  Sparkles,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";
import Logo from "@/components/Logo";

// Import product images
import cadeiraNature from "@/assets/cadeira-nature.jpg";
import cadeiraLisboa from "@/assets/cadeira-lisboa.jpg";
import bancadaElegance from "@/assets/bancada-elegance.jpg";
import estacaoPremium from "@/assets/estacao-premium.jpg";
import lavatorioVogue from "@/assets/lavatorio-vogue.jpg";

const Index = () => {
  const produtos = [
    {
      id: 1,
      nome: "Cadeira Nature Premium",
      imagem: cadeiraNature,
      descricao: "Design ergonômico com acabamento em couro sintético de alta qualidade",
      preco: "R$ 2.850",
      categoria: "Cadeiras"
    },
    {
      id: 2,
      nome: "Cadeira Lisboa Elegance",
      imagem: cadeiraLisboa,
      descricao: "Sistema hidráulico premium com base cromada ultra resistente",
      preco: "R$ 3.200",
      categoria: "Cadeiras"
    },
    {
      id: 3,
      nome: "Bancada Elegance",
      imagem: bancadaElegance,
      descricao: "Espelho LED integrado e gavetas com fechamento suave",
      preco: "R$ 4.500",
      categoria: "Bancadas"
    },
    {
      id: 4,
      nome: "Estação Premium Complete",
      imagem: estacaoPremium,
      descricao: "Solução completa: bancada, espelho, cadeira e lavatório",
      preco: "R$ 8.900",
      categoria: "Estações"
    },
    {
      id: 5,
      nome: "Lavatório Vogue",
      imagem: lavatorioVogue,
      descricao: "Sistema de massagem integrado com acabamento premium",
      preco: "R$ 3.800",
      categoria: "Lavatórios"
    }
  ];

  const stats = [
    { value: "5000+", label: "Salões Atendidos" },
    { value: "15", label: "Anos de Experiência" },
    { value: "98%", label: "Satisfação" },
    { value: "2 Anos", label: "Garantia" }
  ];

  const beneficios = [
    {
      icon: <Shield className="h-6 w-6" />,
      titulo: "Qualidade Garantida",
      descricao: "2 anos de garantia total em todos os produtos"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      titulo: "Entrega Ágil",
      descricao: "Logística especializada para todo o Brasil"
    },
    {
      icon: <Award className="h-6 w-6" />,
      titulo: "Design Exclusivo",
      descricao: "Móveis sob medida para o seu espaço"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      titulo: "Valorização",
      descricao: "Eleve o padrão do seu estabelecimento"
    }
  ];

  const testimonials = [
    {
      nome: "Maria Silva",
      salao: "Studio Bella",
      depoimento: "A qualidade dos móveis superou todas as minhas expectativas. Meus clientes sempre elogiam o conforto!",
      rating: 5
    },
    {
      nome: "Carlos Mendes", 
      salao: "Hair & Beauty",
      depoimento: "Investimento que vale cada centavo. O design moderno transformou completamente o ambiente.",
      rating: 5
    },
    {
      nome: "Ana Costa",
      salao: "Espaço Glamour",
      depoimento: "Atendimento impecável e entrega no prazo. Já estou planejando expandir com mais peças!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            <Logo />
            <nav className="hidden md:flex items-center gap-8">
              <a href="#produtos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Produtos
              </a>
              <a href="#beneficios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Benefícios
              </a>
              <a href="#sobre" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </a>
              <Link to="/orcamento">
                <Button className="bg-primary hover:bg-primary/90 shadow-soft">
                  Fazer Orçamento
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Modern Minimalist */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-mesh">
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple-light border-0 text-primary">
              <Sparkles className="h-4 w-4" />
              Móveis Premium para Salão de Beleza
            </Badge>
            
            <h1 className="text-balance">
              Transforme seu Salão em uma
              <span className="block bg-gradient-purple bg-clip-text text-transparent mt-2">
                Experiência Única
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Design sofisticado, conforto excepcional e durabilidade incomparável. 
              Móveis que elevam seu negócio a outro nível.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/orcamento">
                <Button size="lg" className="px-10 py-6 text-base shadow-medium hover:shadow-large bg-primary hover:bg-primary/90">
                  Solicitar Orçamento Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-6 text-base border-2 hover:bg-secondary"
              >
                <Phone className="mr-2 h-5 w-5" />
                (11) 99999-9999
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-purple bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Clean Grid */}
      <section id="beneficios" className="section-spacing bg-brand-purple-subtle/30">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="mb-6">Por que Escolher a Móveis Passos?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Excelência em cada detalhe, do projeto à entrega
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((item, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift bg-card">
                <CardContent className="pt-10 pb-8 px-8 text-center">
                  <div className="w-14 h-14 bg-gradient-purple rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.titulo}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.descricao}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase - Modern Cards */}
      <section id="produtos" className="section-spacing">
        <div className="section-container">
          <div className="text-center mb-20">
            <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple-light border-0 text-primary mb-6">
              Coleção Premium
            </Badge>
            <h2 className="mb-6">Móveis que Fazem a Diferença</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada peça é projetada para proporcionar conforto e sofisticação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {produtos.slice(0, 6).map((produto) => (
              <Card 
                key={produto.id} 
                className="group overflow-hidden border-0 shadow-soft hover-lift bg-card"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Badge className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-foreground border-0">
                    {produto.categoria}
                  </Badge>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{produto.nome}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {produto.descricao}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                    <div className="text-2xl font-bold text-foreground">{produto.preco}</div>
                    <div className="text-sm text-muted-foreground">a partir de</div>
                  </div>
                  
                  <Link to="/orcamento" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 shadow-soft">
                      Ver Detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/orcamento">
              <Button size="lg" variant="outline" className="px-12 py-6 text-base border-2">
                Ver Catálogo Completo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="sobre" className="section-spacing bg-gradient-purple-soft">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-white border-0 text-primary mb-6">
                <Award className="h-4 w-4" />
                Nossa História
              </Badge>
              
              <h2 className="mb-6">
                15 Anos Transformando
                <span className="block text-primary mt-2">Salões de Beleza</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Desde 2009, somos referência em móveis premium para salões de beleza. 
                Nossa missão é criar ambientes únicos que elevam a experiência dos seus 
                clientes e fortalecem a identidade do seu negócio.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-lg">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Materiais Premium</div>
                    <div className="text-sm text-muted-foreground">
                      Componentes importados e nacionais de primeira linha
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-lg">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Personalização Total</div>
                    <div className="text-sm text-muted-foreground">
                      Projetos sob medida para refletir a identidade da sua marca
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-lg">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Suporte Completo</div>
                    <div className="text-sm text-muted-foreground">
                      Da montagem à assistência técnica especializada
                    </div>
                  </div>
                </li>
              </ul>

              <Link to="/orcamento">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-medium">
                  Solicitar Orçamento Personalizado
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-large">
                <img 
                  src={estacaoPremium} 
                  alt="Estação Premium"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Clean Cards */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="mb-6">O que Dizem Nossos Clientes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mais de 5000 profissionais confiam na nossa qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift bg-card">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{item.depoimento}"
                  </p>
                  
                  <div className="pt-6 border-t border-border">
                    <div className="font-semibold">{item.nome}</div>
                    <div className="text-sm text-primary">{item.salao}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Background */}
      <section className="section-spacing bg-gradient-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        
        <div className="section-container relative z-10 text-center">
          <h2 className="text-white mb-6">
            Pronto para Transformar seu Salão?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            Solicite um orçamento gratuito e descubra como podemos criar 
            o ambiente perfeito para o seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/orcamento">
              <Button 
                size="lg" 
                className="px-12 py-6 text-base bg-white text-primary hover:bg-white/90 shadow-large"
              >
                Fazer Orçamento Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="px-12 py-6 text-base border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist */}
      <footer className="py-16 bg-muted border-t border-border">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <Logo />
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
                Transformando salões de beleza com móveis premium e design 
                sofisticado há mais de 15 anos.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Contato</h4>
              <div className="space-y-4 text-sm text-muted-foreground">
                <a href="tel:11999999999" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  (11) 99999-9999
                </a>
                <a href="mailto:contato@moveispassos.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  contato@moveispassos.com
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  São Paulo, SP
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Links</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div><a href="#produtos" className="hover:text-primary transition-colors">Produtos</a></div>
                <div><a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a></div>
                <div><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></div>
                <div><Link to="/orcamento" className="hover:text-primary transition-colors">Orçamento</Link></div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Móveis Passos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

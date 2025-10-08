import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Star, 
  Shield, 
  Truck, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  Users,
  Award,
  Scissors,
  Sparkles,
  Heart
} from "lucide-react";
import Logo from "@/components/Logo";
import { HeroButton } from "@/components/ui/hero-button";

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
      descricao: "Cadeira reclinável com design ergonômico e acabamento em couro sintético premium",
      preco: "R$ 2.850,00",
      valorAvista: "R$ 2.422,50 à vista",
      parcelas: "Ou em 18x de R$ 158,33",
      categoria: "Cadeiras"
    },
    {
      id: 2,
      nome: "Cadeira Lisboa Elegance",
      imagem: cadeiraLisboa,
      descricao: "Cadeira hidráulica com sistema de elevação premium e base cromada resistente",
      preco: "R$ 3.200,00",
      valorAvista: "R$ 2.720,00 à vista",
      parcelas: "Ou em 18x de R$ 177,78",
      categoria: "Cadeiras"
    },
    {
      id: 3,
      nome: "Bancada Elegance",
      imagem: bancadaElegance,
      descricao: "Bancada com espelho LED e gavetas deslizantes com sistema de fechamento suave",
      preco: "R$ 4.500,00",
      valorAvista: "R$ 3.825,00 à vista",
      parcelas: "Ou em 18x de R$ 250,00",
      categoria: "Bancadas"
    },
    {
      id: 4,
      nome: "Estação Premium Complete",
      imagem: estacaoPremium,
      descricao: "Estação completa com bancada, espelho, cadeira e lavatório integrado",
      preco: "R$ 8.900,00",
      valorAvista: "R$ 7.565,00 à vista",
      parcelas: "Ou em 18x de R$ 494,44",
      categoria: "Estações"
    },
    {
      id: 5,
      nome: "Lavatório Vogue",
      imagem: lavatorioVogue,
      descricao: "Lavatório reclinável com sistema de massagem e acabamento premium",
      preco: "R$ 3.800,00",
      valorAvista: "R$ 3.230,00 à vista",
      parcelas: "Ou em 18x de R$ 211,11",
      categoria: "Lavatórios"
    }
  ];

  const beneficios = [
    {
      icon: <Award className="h-6 w-6" />,
      titulo: "15 Anos de Experiência",
      descricao: "Especialistas em móveis para salão de beleza desde 2009"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      titulo: "Garantia de 2 Anos",
      descricao: "Cobertura completa em todos os nossos produtos"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      titulo: "Entrega em Todo Brasil",
      descricao: "Logística especializada e montagem inclusa"
    },
    {
      icon: <Users className="h-6 w-6" />,
      titulo: "+5000 Salões Atendidos",
      descricao: "Referência nacional em móveis para beleza"
    }
  ];

  const depoimentos = [
    {
      nome: "Maria Silva",
      salao: "Studio Bella",
      depoimento: "Os móveis transformaram completamente meu salão. Qualidade excepcional e atendimento impecável!",
      rating: 5
    },
    {
      nome: "Carlos Mendes",
      salao: "Hair & Beauty",
      depoimento: "Excelente custo-benefício. Já indiquei para vários colegas do ramo.",
      rating: 5
    },
    {
      nome: "Ana Costa",
      salao: "Espaço Glamour",
      depoimento: "Entrega no prazo, montagem perfeita. Recomendo de olhos fechados!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Sophisticated */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm">
        <div className="container-wide py-5">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex items-center gap-8">
              <a href="#produtos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Produtos
              </a>
              <a href="#sobre" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="#depoimentos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Depoimentos
              </a>
              <Link to="/orcamento">
                <Button className="bg-primary hover:bg-primary/90 text-brand-dark shadow-gold">
                  Fazer Orçamento
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Sophisticated */}
      <section className="relative min-h-screen flex items-center bg-gradient-primary overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container-wide text-white z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="luxury-badge border-primary text-primary">
              <Sparkles className="h-4 w-4" />
              Excelência em Móveis para Salão de Beleza
            </Badge>
            
            <h1 className="font-serif leading-tight">
              <span className="block text-white/90">Eleve seu Salão ao</span>
              <span className="block bg-gradient-gold bg-clip-text text-transparent mt-2">
                Mais Alto Padrão
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
              Móveis premium sob medida que combinam design sofisticado, 
              conforto excepcional e durabilidade incomparável.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/orcamento">
                <Button size="lg" className="px-10 py-6 text-lg font-medium bg-primary hover:bg-primary/90 text-brand-dark shadow-gold transition-all duration-300 hover:shadow-glow hover:scale-105">
                  <Heart className="h-5 w-5 mr-2" />
                  Solicitar Orçamento
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-6 text-lg font-medium border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                (11) 99999-9999
              </Button>
            </div>
            
            <div className="pt-12 flex flex-wrap justify-center gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Entrega em Todo Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Montagem Profissional</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Garantia Estendida</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Benefícios - Sophisticated Cards */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => (
              <Card 
                key={index} 
                className="text-center border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center text-brand-dark mb-6 shadow-gold">
                    {beneficio.icon}
                  </div>
                  <h3 className="font-serif font-semibold mb-3 text-lg">{beneficio.titulo}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{beneficio.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque - Premium Showcase */}
      <section id="produtos" className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-20">
            <Badge className="luxury-badge mb-6">
              <Scissors className="h-4 w-4" />
              Coleção Premium
            </Badge>
            <h2 className="font-serif mb-6">
              Móveis que Transformam
              <span className="block text-primary mt-2">Experiências</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Cada peça é cuidadosamente projetada para oferecer conforto excepcional 
              e estética sofisticada ao seu salão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {produtos.map((produto) => (
              <Card 
                key={produto.id} 
                className="overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group bg-card"
              >
                <div className="relative overflow-hidden bg-secondary/30">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-6 left-6 bg-primary/90 backdrop-blur-sm text-brand-dark border-0 shadow-gold">
                    {produto.categoria}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-semibold mb-3">{produto.nome}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{produto.descricao}</p>
                  
                  <div className="space-y-2 mb-6 pb-6 border-b border-border">
                    <div className="text-3xl font-serif font-bold text-foreground">{produto.preco}</div>
                    <div className="text-sm text-primary font-medium">{produto.valorAvista}</div>
                    <div className="text-sm text-muted-foreground">{produto.parcelas}</div>
                  </div>
                  
                  <Link to="/orcamento" className="w-full block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-brand-dark shadow-gold hover:shadow-glow transition-all duration-300">
                      Solicitar Orçamento
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/orcamento">
              <Button size="lg" variant="outline" className="px-12 py-6 text-lg border-2 hover:bg-secondary">
                Ver Catálogo Completo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Nós - Sophisticated About */}
      <section id="sobre" className="section-padding bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="luxury-badge mb-6 border-primary/30 bg-primary/10 text-primary">
                <Award className="h-4 w-4" />
                Nossa Excelência
              </Badge>
              <h2 className="font-serif mb-6 text-white">
                15 Anos Transformando
                <span className="block text-primary mt-2">Salões de Beleza</span>
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Desde 2009, somos referência nacional em móveis premium para salões de beleza. 
                Nossa missão é criar ambientes únicos que elevam a experiência dos seus clientes 
                e fortalecem a identidade do seu negócio.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">5000+</div>
                  <div className="text-white/70 text-sm">Salões Atendidos</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">15</div>
                  <div className="text-white/70 text-sm">Anos de Experiência</div>
                </div>
              </div>
              
              <Link to="/orcamento">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-brand-dark shadow-gold">
                  Solicitar Orçamento Personalizado
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-glow">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-white">Por que Escolher a Móveis Passos?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 group">
                    <div className="mt-1 p-2 bg-primary/20 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">Materiais Premium</div>
                      <div className="text-white/70 text-sm">Componentes importados e nacionais de primeira linha</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="mt-1 p-2 bg-primary/20 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">Design Exclusivo</div>
                      <div className="text-white/70 text-sm">Personalização completa para refletir sua marca</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="mt-1 p-2 bg-primary/20 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">Entrega Nacional</div>
                      <div className="text-white/70 text-sm">Logística especializada e montagem profissional</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="mt-1 p-2 bg-primary/20 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">Suporte Dedicado</div>
                      <div className="text-white/70 text-sm">Garantia estendida e assistência técnica especializada</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos - Elegant Testimonials */}
      <section id="depoimentos" className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="text-center mb-20">
            <Badge className="luxury-badge mb-6">
              <Star className="h-4 w-4" />
              Depoimentos
            </Badge>
            <h2 className="font-serif mb-6">
              A Confiança de
              <span className="block text-primary mt-2">Mais de 5000 Salões</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Profissionais que escolheram excelência e transformaram seus espaços.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card"
              >
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(depoimento.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed text-lg">
                    "{depoimento.depoimento}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-serif font-semibold text-lg">{depoimento.nome}</div>
                    <div className="text-sm text-primary">{depoimento.salao}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Premium Call to Action */}
      <section className="section-padding bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-wide text-center relative z-10">
          <h2 className="font-serif mb-6 text-white">
            Pronto para Elevar seu
            <span className="block text-primary mt-2">Salão ao Próximo Nível?</span>
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/80 leading-relaxed">
            Solicite seu orçamento personalizado e gratuito. Nossa equipe de especialistas 
            está pronta para criar a solução perfeita para o seu espaço.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/orcamento">
              <Button size="lg" className="px-12 py-6 text-lg bg-primary hover:bg-primary/90 text-brand-dark shadow-gold hover:shadow-glow transition-all duration-300">
                <Heart className="h-5 w-5 mr-2" />
                Solicitar Orçamento Grátis
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-6 text-lg border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-brand-dark transition-all duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              (11) 99999-9999
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Sophisticated */}
      <footer className="py-16 bg-brand-dark text-white border-t border-white/10">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <Logo />
              <p className="mt-6 text-white/60 leading-relaxed">
                Transformando salões de beleza com móveis premium e design sofisticado há mais de 15 anos.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif font-semibold text-lg mb-6 text-primary">Contato</h3>
              <div className="space-y-4 text-white/70">
                <div className="flex items-center gap-3 hover:text-primary transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3 hover:text-primary transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span>São Paulo, SP</span>
                </div>
                <div className="flex items-center gap-3 hover:text-primary transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <span>Seg-Sex: 8h às 18h</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif font-semibold text-lg mb-6 text-primary">Links Úteis</h3>
              <div className="space-y-3 text-white/70">
                <div><a href="#produtos" className="hover:text-primary transition-colors">Produtos</a></div>
                <div><a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a></div>
                <div><Link to="/orcamento" className="hover:text-primary transition-colors">Orçamento</Link></div>
                <div><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 text-sm">&copy; 2024 Móveis Passos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

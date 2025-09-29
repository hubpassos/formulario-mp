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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex items-center gap-6">
              <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">
                Produtos
              </a>
              <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
                Depoimentos
              </a>
              <Link to="/orcamento">
                <Button>Fazer Orçamento</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            <Sparkles className="h-4 w-4 mr-2" />
            Móveis Premium para Salão de Beleza
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transforme seu 
            <span className="block bg-gradient-to-r from-white to-brand-silver bg-clip-text text-transparent">
              Salão dos Sonhos
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Móveis premium com design inovador, conforto excepcional e durabilidade garantida. 
            Eleve o padrão do seu salão e encante seus clientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/orcamento">
              <HeroButton size="lg" className="px-12 py-4">
                <Heart className="h-5 w-5 mr-2" />
                Fazer Orçamento Grátis
              </HeroButton>
            </Link>
            <HeroButton variant="secondary" size="lg" className="px-12 py-4">
              <Phone className="h-5 w-5 mr-2" />
              (11) 99999-9999
            </HeroButton>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Entrega Grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Montagem Inclusa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Garantia 2 Anos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4">
                    {beneficio.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{beneficio.titulo}</h3>
                  <p className="text-muted-foreground text-sm">{beneficio.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section id="produtos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              <Scissors className="h-4 w-4 mr-2" />
              Produtos em Destaque
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Móveis que Fazem a Diferença
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra nossa coleção premium de móveis para salão de beleza, 
              projetados para máximo conforto e estilo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto) => (
              <Card key={produto.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {produto.categoria}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{produto.nome}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{produto.descricao}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-2xl font-bold text-primary">{produto.preco}</div>
                    <div className="text-sm text-green-600">{produto.valorAvista}</div>
                    <div className="text-sm text-muted-foreground">{produto.parcelas}</div>
                  </div>
                  
                  <Link to="/orcamento" className="w-full">
                    <Button className="w-full">
                      Solicitar Orçamento
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/orcamento">
              <HeroButton size="lg">
                Ver Todos os Produtos
              </HeroButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">
                <Award className="h-4 w-4 mr-2" />
                Nossa História
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                15 Anos Transformando Salões de Beleza
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Desde 2009, a Móveis Passos é referência em móveis premium para salões de beleza. 
                Nossa missão é transformar espaços em ambientes únicos, proporcionando conforto 
                e elegância que seus clientes merecem.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-muted-foreground">Salões Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-muted-foreground">Anos de Experiência</div>
                </div>
              </div>
              
              <Link to="/orcamento">
                <HeroButton>
                  Conhecer Mais Produtos
                </HeroButton>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Por que escolher a Móveis Passos?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Materiais premium importados e nacionais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Design exclusivo e personalização disponível</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Entrega e montagem em todo o Brasil</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Garantia estendida e suporte técnico</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              <Star className="h-4 w-4 mr-2" />
              Depoimentos
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mais de 5000 salões de beleza confiam na qualidade dos nossos móveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(depoimento.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{depoimento.depoimento}"
                  </p>
                  <div>
                    <div className="font-semibold">{depoimento.nome}</div>
                    <div className="text-sm text-muted-foreground">{depoimento.salao}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para Transformar seu Salão?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicite seu orçamento gratuito e descubra como nossos móveis premium 
            podem elevar o padrão do seu salão de beleza.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/orcamento">
              <HeroButton variant="secondary" size="lg" className="px-12 py-4">
                <Heart className="h-5 w-5 mr-2" />
                Fazer Orçamento Agora
              </HeroButton>
            </Link>
            <HeroButton variant="outline" size="lg" className="px-12 py-4 border-white text-white hover:bg-white hover:text-primary">
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora: (11) 99999-9999
            </HeroButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Logo />
              <p className="mt-4 text-primary-foreground/80">
                Móveis premium para salão de beleza há mais de 15 anos.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>São Paulo, SP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Seg-Sex: 8h às 18h</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Links Úteis</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <div><a href="#produtos" className="hover:text-white transition-colors">Produtos</a></div>
                <div><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></div>
                <div><Link to="/orcamento" className="hover:text-white transition-colors">Orçamento</Link></div>
                <div><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Móveis Passos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

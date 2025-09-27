import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { HeroButton } from "@/components/ui/hero-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MessageCircle, Home, Clock } from "lucide-react";

const Confirmacao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary/30 to-brand-silver/20">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <Logo />
      </header>

      {/* Confirmation Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-sm border-brand-purple-light/20 shadow-elegant">
            <CardHeader className="pb-6">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-primary">Solicitação Recebida!</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Obrigado por escolher a Móveis Passos
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="bg-gradient-secondary/10 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Recebemos sua solicitação!
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Em breve uma especialista da Móveis Passos entrará em contato 
                  para criar seu orçamento personalizado e discutir todos os detalhes 
                  do seu projeto.
                </p>
              </div>

              {/* Next Steps */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Próximos Passos
                </h4>
                
                <div className="grid gap-4">
                  <div className="flex items-start gap-3 bg-white/60 rounded-lg p-4 border border-brand-purple-light/10">
                    <div className="w-8 h-8 bg-brand-purple-light/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-semibold text-brand-purple-dark">1</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-primary">Análise da Solicitação</h5>
                      <p className="text-sm text-muted-foreground">
                        Nossa equipe analisará suas necessidades em até 24 horas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/60 rounded-lg p-4 border border-brand-purple-light/10">
                    <div className="w-8 h-8 bg-brand-purple-light/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-semibold text-brand-purple-dark">2</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-primary">Contato Personalizado</h5>
                      <p className="text-sm text-muted-foreground">
                        Uma especialista entrará em contato via WhatsApp
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/60 rounded-lg p-4 border border-brand-purple-light/10">
                    <div className="w-8 h-8 bg-brand-purple-light/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-semibold text-brand-purple-dark">3</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-primary">Orçamento Detalhado</h5>
                      <p className="text-sm text-muted-foreground">
                        Receberá um orçamento completo com todas as especificações
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-4">
                <Link to="/">
                  <HeroButton size="lg" className="w-full">
                    <Home className="w-5 h-5 mr-2" />
                    Voltar ao Início
                  </HeroButton>
                </Link>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Tem alguma dúvida? Fale conosco agora:
                  </p>
                  <HeroButton 
                    variant="secondary" 
                    size="default"
                    onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </HeroButton>
                </div>
              </div>
            </CardContent>
          </Card>
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

export default Confirmacao;
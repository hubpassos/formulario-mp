import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { HeroButton } from "@/components/ui/hero-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, MapPin, Package, Calculator, Calendar, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  nomeCompleto: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  whatsapp: z.string().min(10, "WhatsApp deve ter pelo menos 10 dígitos").max(15, "WhatsApp inválido"),
  cidade: z.string().min(2, "Cidade deve ter pelo menos 2 caracteres").max(100, "Cidade muito longa"),
  estado: z.string().min(2, "Estado deve ter pelo menos 2 caracteres").max(50, "Estado muito longo"),
  produtos: z.array(z.string()).min(1, "Selecione pelo menos um produto"),
  quantidade: z.string().min(1, "Selecione a quantidade"),
  orcamento: z.string().min(1, "Selecione a faixa de orçamento"),
  prazo: z.string().min(1, "Selecione o prazo de compra"),
  informacaoAdicional: z.string().max(500, "Informação adicional muito longa").optional(),
});

type FormData = z.infer<typeof formSchema>;

const Orcamento = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      produtos: [],
      quantidade: "",
      orcamento: "",
      prazo: "",
      informacaoAdicional: "",
    },
  });

  const watchedProdutos = watch("produtos");

  const handleProdutoChange = (produto: string, checked: boolean) => {
    const currentProdutos = watchedProdutos || [];
    if (checked) {
      setValue("produtos", [...currentProdutos, produto]);
    } else {
      setValue("produtos", currentProdutos.filter(p => p !== produto));
    }
    trigger("produtos");
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simula envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Dados do formulário:", data);
    
    toast({
      title: "Solicitação enviada!",
      description: "Recebemos sua solicitação. Em breve entraremos em contato.",
    });
    
    setIsSubmitting(false);
    navigate("/confirmacao");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary/30 to-brand-silver/20">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <Logo />
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </div>
      </header>

      {/* Form Section */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-brand-purple-light/20 shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Solicitar Orçamento</CardTitle>
              <CardDescription className="text-muted-foreground">
                Preencha os dados abaixo para receber seu orçamento personalizado
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Dados Pessoais */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                    <Phone className="w-5 h-5" />
                    Dados de Contato
                  </h3>
                  
                  <div>
                    <Label htmlFor="nomeCompleto">Nome Completo</Label>
                    <Input
                      id="nomeCompleto"
                      {...register("nomeCompleto")}
                      placeholder="Seu nome completo"
                      className="mt-1"
                    />
                    {errors.nomeCompleto && (
                      <p className="text-destructive text-sm mt-1">{errors.nomeCompleto.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      {...register("whatsapp")}
                      placeholder="(11) 99999-9999"
                      className="mt-1"
                    />
                    {errors.whatsapp && (
                      <p className="text-destructive text-sm mt-1">{errors.whatsapp.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cidade">Cidade</Label>
                      <Input
                        id="cidade"
                        {...register("cidade")}
                        placeholder="Sua cidade"
                        className="mt-1"
                      />
                      {errors.cidade && (
                        <p className="text-destructive text-sm mt-1">{errors.cidade.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="estado">Estado</Label>
                      <Input
                        id="estado"
                        {...register("estado")}
                        placeholder="Seu estado"
                        className="mt-1"
                      />
                      {errors.estado && (
                        <p className="text-destructive text-sm mt-1">{errors.estado.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Produtos */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                    <Package className="w-5 h-5" />
                    Produtos de Interesse
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {["Cadeiras", "Lavatórios", "Poltronas", "Macas"].map((produto) => (
                      <div key={produto} className="flex items-center space-x-2 bg-white/60 rounded-lg p-3 border border-brand-purple-light/10">
                        <Checkbox
                          id={produto}
                          checked={watchedProdutos?.includes(produto) || false}
                          onCheckedChange={(checked) => handleProdutoChange(produto, checked as boolean)}
                        />
                        <Label htmlFor={produto} className="font-medium">{produto}</Label>
                      </div>
                    ))}
                  </div>
                  {errors.produtos && (
                    <p className="text-destructive text-sm">{errors.produtos.message}</p>
                  )}
                </div>

                {/* Quantidade */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                    <Calculator className="w-5 h-5" />
                    Quantidade Aproximada
                  </h3>
                  
                  <RadioGroup
                    value={watch("quantidade")}
                    onValueChange={(value) => setValue("quantidade", value)}
                  >
                    <div className="grid md:grid-cols-2 gap-3">
                      {["1-2 peças", "3-5 peças", "6-10 peças", "Mais de 10 peças"].map((qtd) => (
                        <div key={qtd} className="flex items-center space-x-2 bg-white/60 rounded-lg p-3 border border-brand-purple-light/10">
                          <RadioGroupItem value={qtd} id={qtd} />
                          <Label htmlFor={qtd} className="font-medium">{qtd}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  {errors.quantidade && (
                    <p className="text-destructive text-sm">{errors.quantidade.message}</p>
                  )}
                </div>

                {/* Orçamento */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                    <Calculator className="w-5 h-5" />
                    Faixa de Orçamento Disponível
                  </h3>
                  
                  <RadioGroup
                    value={watch("orcamento")}
                    onValueChange={(value) => setValue("orcamento", value)}
                  >
                    <div className="space-y-3">
                      {["Até R$ 5.000", "R$ 5.000 a R$ 10.000", "Acima de R$ 10.000"].map((valor) => (
                        <div key={valor} className="flex items-center space-x-2 bg-white/60 rounded-lg p-3 border border-brand-purple-light/10">
                          <RadioGroupItem value={valor} id={valor} />
                          <Label htmlFor={valor} className="font-medium">{valor}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  {errors.orcamento && (
                    <p className="text-destructive text-sm">{errors.orcamento.message}</p>
                  )}
                </div>

                {/* Prazo */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                    <Calendar className="w-5 h-5" />
                    Prazo de Compra
                  </h3>
                  
                  <RadioGroup
                    value={watch("prazo")}
                    onValueChange={(value) => setValue("prazo", value)}
                  >
                    <div className="grid md:grid-cols-2 gap-3">
                      {["Até 30 dias", "Até 3 meses"].map((prazo) => (
                        <div key={prazo} className="flex items-center space-x-2 bg-white/60 rounded-lg p-3 border border-brand-purple-light/10">
                          <RadioGroupItem value={prazo} id={prazo} />
                          <Label htmlFor={prazo} className="font-medium">{prazo}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  {errors.prazo && (
                    <p className="text-destructive text-sm">{errors.prazo.message}</p>
                  )}
                </div>

                {/* Informações Adicionais */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                    <MessageSquare className="w-5 h-5" />
                    Informações Adicionais
                  </h3>
                  
                  <div>
                    <Textarea
                      {...register("informacaoAdicional")}
                      placeholder="Descreva detalhes específicos sobre seu projeto, estilo desejado, dimensões do espaço, etc."
                      className="min-h-[100px]"
                    />
                    {errors.informacaoAdicional && (
                      <p className="text-destructive text-sm mt-1">{errors.informacaoAdicional.message}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <HeroButton
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                  </HeroButton>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Orcamento;
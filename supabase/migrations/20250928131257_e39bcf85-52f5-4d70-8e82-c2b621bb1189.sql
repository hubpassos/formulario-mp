-- Create table for budget requests
CREATE TABLE public.solicitacoes_orcamento (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome_completo TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  estado TEXT NOT NULL,
  produtos TEXT[] NOT NULL,
  outros_produtos TEXT,
  quantidade TEXT NOT NULL,
  orcamento TEXT NOT NULL,
  prazo TEXT NOT NULL,
  informacao_adicional TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.solicitacoes_orcamento ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert budget requests (public form)
CREATE POLICY "Anyone can insert budget requests" 
ON public.solicitacoes_orcamento 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading own requests (if we add auth later)
CREATE POLICY "Users can view all budget requests" 
ON public.solicitacoes_orcamento 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_solicitacoes_orcamento_updated_at
BEFORE UPDATE ON public.solicitacoes_orcamento
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
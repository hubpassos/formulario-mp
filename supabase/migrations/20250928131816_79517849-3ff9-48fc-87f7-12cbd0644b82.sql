-- Enable RLS on all tables that don't have it yet
-- These tables appear to be missing RLS based on the linter results

-- Enable RLS on cadeira_mister table
ALTER TABLE public.cadeira_mister ENABLE ROW LEVEL SECURITY;

-- Enable RLS on cliente_bling_kixiki table  
ALTER TABLE public.cliente_bling_kixiki ENABLE ROW LEVEL SECURITY;

-- Enable RLS on cliente_negociacao table
ALTER TABLE public.cliente_negociacao ENABLE ROW LEVEL SECURITY;

-- Enable RLS on pedido_terrasanta table
ALTER TABLE public.pedido_terrasanta ENABLE ROW LEVEL SECURITY;

-- Enable RLS on pedido_terrasanta_itens table
ALTER TABLE public.pedido_terrasanta_itens ENABLE ROW LEVEL SECURITY;

-- Enable RLS on prospeccao_google_maps table
ALTER TABLE public.prospeccao_google_maps ENABLE ROW LEVEL SECURITY;

-- Enable RLS on transportadoras_por_estado table
ALTER TABLE public.transportadoras_por_estado ENABLE ROW LEVEL SECURITY;

-- Enable RLS on vendas table
ALTER TABLE public.vendas ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access on reference/catalog tables
-- These appear to be product/reference data that should be publicly readable

-- Policies for cadeira_mister (product catalog)
CREATE POLICY "Public read access for cadeira_mister" 
ON public.cadeira_mister 
FOR SELECT 
USING (true);

-- Policies for transportadoras_por_estado (reference data)
CREATE POLICY "Public read access for transportadoras_por_estado" 
ON public.transportadoras_por_estado 
FOR SELECT 
USING (true);

-- Restrictive policies for sensitive business data
-- These tables contain customer/business data and should be restricted

-- Policies for cliente_bling_kixiki (customer data - read only for authenticated users)
CREATE POLICY "Authenticated users can read cliente_bling_kixiki" 
ON public.cliente_bling_kixiki 
FOR SELECT 
TO authenticated
USING (true);

-- Policies for cliente_negociacao (customer negotiation data - read only for authenticated users)
CREATE POLICY "Authenticated users can read cliente_negociacao" 
ON public.cliente_negociacao 
FOR SELECT 
TO authenticated
USING (true);

-- Policies for pedido_terrasanta (order data - read only for authenticated users)
CREATE POLICY "Authenticated users can read pedido_terrasanta" 
ON public.pedido_terrasanta 
FOR SELECT 
TO authenticated
USING (true);

-- Policies for pedido_terrasanta_itens (order items - read only for authenticated users)
CREATE POLICY "Authenticated users can read pedido_terrasanta_itens" 
ON public.pedido_terrasanta_itens 
FOR SELECT 
TO authenticated
USING (true);

-- Policies for prospeccao_google_maps (prospecting data - read only for authenticated users)
CREATE POLICY "Authenticated users can read prospeccao_google_maps" 
ON public.prospeccao_google_maps 
FOR SELECT 
TO authenticated
USING (true);

-- Policies for vendas (sales data - read only for authenticated users)
CREATE POLICY "Authenticated users can read vendas" 
ON public.vendas 
FOR SELECT 
TO authenticated
USING (true);
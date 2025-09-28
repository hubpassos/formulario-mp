export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      cadeira_mister: {
        Row: {
          de_valor_cartao: string | null
          descricao: string | null
          id: number
          nome: string | null
          parcelas: string | null
          por_valor_avista: string | null
        }
        Insert: {
          de_valor_cartao?: string | null
          descricao?: string | null
          id?: number
          nome?: string | null
          parcelas?: string | null
          por_valor_avista?: string | null
        }
        Update: {
          de_valor_cartao?: string | null
          descricao?: string | null
          id?: number
          nome?: string | null
          parcelas?: string | null
          por_valor_avista?: string | null
        }
        Relationships: []
      }
      cliente_bling_kixiki: {
        Row: {
          data_criacao: string
          id: number
          id_contato: string | null
          id_loja: string | null
          id_pedido: string
          nome_cliente: string | null
          previsão: string | null
          previsao_enviada: string | null
          telefone: string | null
        }
        Insert: {
          data_criacao: string
          id?: number
          id_contato?: string | null
          id_loja?: string | null
          id_pedido: string
          nome_cliente?: string | null
          previsão?: string | null
          previsao_enviada?: string | null
          telefone?: string | null
        }
        Update: {
          data_criacao?: string
          id?: number
          id_contato?: string | null
          id_loja?: string | null
          id_pedido?: string
          nome_cliente?: string | null
          previsão?: string | null
          previsao_enviada?: string | null
          telefone?: string | null
        }
        Relationships: []
      }
      cliente_moveispassos: {
        Row: {
          anuncio: string | null
          data_criacao: string
          id: number
          nome: string
          tel_cliente: string
        }
        Insert: {
          anuncio?: string | null
          data_criacao?: string
          id?: number
          nome: string
          tel_cliente: string
        }
        Update: {
          anuncio?: string | null
          data_criacao?: string
          id?: number
          nome?: string
          tel_cliente?: string
        }
        Relationships: []
      }
      cliente_negociacao: {
        Row: {
          atendente: string | null
          dias_sem_resposta: number | null
          empresa: string | null
          id_lead: string
          telefone: string | null
          ultima_enviada: string | null
          ultima_recebida: string | null
          valor: number | null
        }
        Insert: {
          atendente?: string | null
          dias_sem_resposta?: number | null
          empresa?: string | null
          id_lead: string
          telefone?: string | null
          ultima_enviada?: string | null
          ultima_recebida?: string | null
          valor?: number | null
        }
        Update: {
          atendente?: string | null
          dias_sem_resposta?: number | null
          empresa?: string | null
          id_lead?: string
          telefone?: string | null
          ultima_enviada?: string | null
          ultima_recebida?: string | null
          valor?: number | null
        }
        Relationships: []
      }
      pedido_terrasanta: {
        Row: {
          cpf: string
          data_pedido: string
          empresa: string | null
          endereco: string | null
          id_cliente: string
          id_pedido: string
          nome_cliente: string
          telefone: string
        }
        Insert: {
          cpf: string
          data_pedido?: string
          empresa?: string | null
          endereco?: string | null
          id_cliente: string
          id_pedido: string
          nome_cliente: string
          telefone: string
        }
        Update: {
          cpf?: string
          data_pedido?: string
          empresa?: string | null
          endereco?: string | null
          id_cliente?: string
          id_pedido?: string
          nome_cliente?: string
          telefone?: string
        }
        Relationships: []
      }
      pedido_terrasanta_itens: {
        Row: {
          created_at_local: string | null
          id_item: string
          id_pedido: string
          medidas: string | null
          nome_produto: string
          peso_bruto: string | null
          volume: string
        }
        Insert: {
          created_at_local?: string | null
          id_item: string
          id_pedido: string
          medidas?: string | null
          nome_produto: string
          peso_bruto?: string | null
          volume: string
        }
        Update: {
          created_at_local?: string | null
          id_item?: string
          id_pedido?: string
          medidas?: string | null
          nome_produto?: string
          peso_bruto?: string | null
          volume?: string
        }
        Relationships: [
          {
            foreignKeyName: "itens_pedido_terra_santa_id_pedido_fkey"
            columns: ["id_pedido"]
            isOneToOne: false
            referencedRelation: "pedido_terrasanta"
            referencedColumns: ["id_pedido"]
          },
        ]
      }
      prospeccao_google_maps: {
        Row: {
          created_at: string
          endereço: string | null
          id: number
          nicho: string | null
          nome_empresa: string | null
          telefone: string | null
        }
        Insert: {
          created_at?: string
          endereço?: string | null
          id?: number
          nicho?: string | null
          nome_empresa?: string | null
          telefone?: string | null
        }
        Update: {
          created_at?: string
          endereço?: string | null
          id?: number
          nicho?: string | null
          nome_empresa?: string | null
          telefone?: string | null
        }
        Relationships: []
      }
      solicitacoes_orcamento: {
        Row: {
          created_at: string
          estado: string
          id: string
          informacao_adicional: string | null
          nome_completo: string
          orcamento: string
          outros_produtos: string | null
          prazo: string
          produtos: string[]
          quantidade: string
          updated_at: string
          whatsapp: string
        }
        Insert: {
          created_at?: string
          estado: string
          id?: string
          informacao_adicional?: string | null
          nome_completo: string
          orcamento: string
          outros_produtos?: string | null
          prazo: string
          produtos: string[]
          quantidade: string
          updated_at?: string
          whatsapp: string
        }
        Update: {
          created_at?: string
          estado?: string
          id?: string
          informacao_adicional?: string | null
          nome_completo?: string
          orcamento?: string
          outros_produtos?: string | null
          prazo?: string
          produtos?: string[]
          quantidade?: string
          updated_at?: string
          whatsapp?: string
        }
        Relationships: []
      }
      transportadoras_por_estado: {
        Row: {
          estado: string
          id: number
          nome_transportadora: string
          telefone: string
        }
        Insert: {
          estado: string
          id?: number
          nome_transportadora: string
          telefone: string
        }
        Update: {
          estado?: string
          id?: number
          nome_transportadora?: string
          telefone?: string
        }
        Relationships: []
      }
      vendas: {
        Row: {
          atendente: string | null
          data_compra: string | null
          data_entrada: string | null
          dias_para_compra: number | null
          id: number
          nome: string
          tags: string | null
          valor_compra: string
        }
        Insert: {
          atendente?: string | null
          data_compra?: string | null
          data_entrada?: string | null
          dias_para_compra?: number | null
          id?: number
          nome: string
          tags?: string | null
          valor_compra: string
        }
        Update: {
          atendente?: string | null
          data_compra?: string | null
          data_entrada?: string | null
          dias_para_compra?: number | null
          id?: number
          nome?: string
          tags?: string | null
          valor_compra?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: unknown
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

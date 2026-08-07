/* ══════════════════════════════════════════════════════════
   JPM AUTOMÓVEIS
   ══════════════════════════════════════════════════════════ */

export const OURO = "#B87818";        // dourado do logo
export const OURO_ECRA = "#D89A2A";   // versão para fundo escuro
export const WA_GREEN = "#25D366";

export const STAND = {
  nome: "JPM",
  sub: "Automóveis",
  cidade: "Rio de Mouro",
  whatsapp: "351961978818",
  telefone: "961 978 818",
  email: "jpmautomoveis@gmail.com",
  morada: "Estrada Marquês de Pombal, 75, Rio de Mouro",
  standvirtual: "https://jpmautomoveis.standvirtual.com/inventory",

  manifesto:
    "Trabalhamos por marcação. Quando vem ver um carro, o carro está pronto e o tempo é todo seu.",

  servicos: [
    ["18 meses", "de garantia"],
    ["Até 120 meses", "de financiamento"],
    ["Todo o país", "entregamos onde estiver"],
    ["Compramos", "o seu carro atual"],
  ],

  /* Frase que consta em todos os anúncios deles */
  revisao: "Todas as viaturas são entregues com revisão geral efetuada.",

  /* Aviso legal que eles usam em todos os anúncios */
  aviso: "O equipamento descrito carece de confirmação junto da entidade vendedora.",

  credito: {
    taeg: 0.069,        // confere com os cartazes: 3.450€ a 60 meses ≈ 70€/mês
    prazoMax: 120,
    prazoInicial: 60,
    entradaInicial: 0,
  },
};

/* ══════════════════════════════════════════════════════════
   VIATURAS
   Dados dos anúncios do Standvirtual + cartazes do Instagram.

   `slug`      → endereço da página (ex: /viatura/renault-clio)
   `imgs`      → lista de fotos; para já cada carro tem uma,
                 basta juntar mais ao array quando as tiveres
   `destaque`  → a frase da barra preta do cartaz
   ══════════════════════════════════════════════════════════ */

export const CARROS = [
  {
    id: 1,
    slug: "renault-clio-09-tce",
    marca: "Renault",
    modelo: "Clio",
    versao: "0.9 TCe Look",
    ano: 2014, mes: "09", mesNome: "setembro de 2014",
    km: 143000,
    combustivel: "Gasolina",
    cv: 90,
    caixa: "Manual, 5 velocidades",
    preco: 9450,
    destaque: "Nacional",
    garantia: "18 meses",
    inspecao: "setembro de 2027",
    imgs: ["/carros/clio-2014.jpg"],
    extras: [
      "Ar Condicionado",
      "Direção Assistida",
      "Rádio Touch",
      "Volante Regulável em Altura",
      "Volante e Manete em Pele",
      "Computador de Bordo",
      "Fecho Central",
      "Retrovisores Reguláveis Eletricamente",
      "4 Vidros Elétricos",
      "Apoio de Braço",
    ],
    notas: [],
    tema: { base: "#15171A", glow: OURO_ECRA, texto: "#F0F1F3" },
  },
  {
    id: 2,
    slug: "dacia-logan-mcv-09-tce",
    marca: "Dacia",
    modelo: "Logan MCV",
    versao: "0.9 TCe Bi-Fuel",
    ano: 2016, mes: "11", mesNome: "novembro de 2016",
    km: 215000,
    combustivel: "Gasolina / GPL",
    cv: 90,
    caixa: "Manual, 5 velocidades",
    preco: 5950,
    destaque: "Bi-Fuel",
    garantia: "18 meses",
    inspecao: null,
    imgs: ["/carros/dacia-logan-2016.jpg"],
    extras: [
      "Ar Condicionado",
      "Direção Assistida",
      "Rádio Touch",
      "Fecho Central com Comando",
      "Retrovisores com Regulação Elétrica",
      "Vidros Elétricos",
      "Faróis de Nevoeiro",
      "Jantes de Liga-Leve",
    ],
    notas: [],
    tema: { base: "#0E1420", glow: OURO_ECRA, texto: "#E9EDF4" },
  },
  {
    id: 3,
    slug: "toyota-yaris-13-vvti",
    marca: "Toyota",
    modelo: "Yaris",
    versao: "1.3 VVT-i",
    ano: 2006, mes: "08", mesNome: "agosto de 2006",
    km: 240000,
    combustivel: "Gasolina",
    cv: 87,
    caixa: "Manual, 5 velocidades",
    preco: 4950,
    destaque: "IUC 39€",
    garantia: "18 meses",
    inspecao: null,
    imgs: ["/carros/toyota-yaris-2006.jpg"],
    extras: [
      "Ar Condicionado",
      "Direção Assistida",
      "Rádio",
      "Volante em Pele",
      "Fecho Central com Comando",
      "Retrovisores com Regulação Elétrica",
      "Vidros Elétricos",
      "Jantes de Liga-Leve",
    ],
    notas: ["IUC anual de 39€"],
    tema: { base: "#101012", glow: OURO_ECRA, texto: "#EFEFF1" },
  },
  {
    id: 4,
    slug: "chevrolet-aveo-sedan-12-ls",
    marca: "Chevrolet",
    modelo: "Aveo Sedan",
    versao: "1.2 LS",
    ano: 2011, mes: "01", mesNome: "janeiro de 2011",
    km: 140000,
    combustivel: "Gasolina",
    cv: 86,
    caixa: "Manual, 5 velocidades",
    preco: 4750,
    destaque: "Único dono",
    garantia: "18 meses",
    inspecao: null,
    imgs: ["/carros/chevrolet-aveo-2011.jpg"],
    extras: [
      "Ar Condicionado",
      "Direção Assistida",
      "Rádio",
      "Entrada Aux",
      "Volante Regulável em Altura",
      "Fecho Central com Comando",
      "Retrovisores com Regulação Elétrica",
      "Vidros Elétricos",
      "Jantes de Liga-Leve",
    ],
    notas: [],
    tema: { base: "#16181B", glow: OURO_ECRA, texto: "#F1F2F4" },
  },
  {
    id: 5,
    slug: "peugeot-206-11-look",
    marca: "Peugeot",
    modelo: "206",
    versao: "1.1i Look",
    ano: 2005, mes: "07", mesNome: "julho de 2005",
    km: 176000,   // ⚠️ o cartaz diz 175.000, a descrição diz 176.000 — confirmar
    combustivel: "Gasolina",
    cv: 60,
    caixa: "Manual, 5 velocidades",
    preco: 3450,
    destaque: "Desde 70€/mês",
    garantia: null,   // o anúncio deste não menciona garantia — confirmar
    inspecao: "julho de 2027",
    imgs: ["/carros/peugeot-206-2005.jpg"],
    extras: [
      "Direção Assistida",
      "Rádio",
      "Volante Regulável em Altura",
      "Fecho Central",
      "Vidros Elétricos",
    ],
    notas: [
      "Kit de distribuição substituído aos 171.000 km",
      "IUC válido até julho de 2027",
    ],
    tema: { base: "#141618", glow: OURO_ECRA, texto: "#F0F1F2" },
  },
];

export const porSlug = (slug) => CARROS.find((c) => c.slug === slug);

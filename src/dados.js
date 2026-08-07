/* ══════════════════════════════════════════════════════════
   JPM AUTOMÓVEIS
   ══════════════════════════════════════════════════════════ */

/* ── Cores da marca ──
   Tiradas do logo oficial. O dourado do logo (#B87818) é mais
   escuro do que o dos cartazes; para ecrã usamos uma versão
   ligeiramente mais clara, que lê melhor sobre fundo escuro
   sem deixar de ser a mesma cor. */
export const OURO = "#B87818";        // dourado do logo
export const OURO_ECRA = "#D89A2A";   // versão para fundo escuro

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

  credito: {
    taeg: 0.069,        // confere com os cartazes: 3.450€ a 60 meses ≈ 70€/mês
    prazoMax: 120,
    prazoInicial: 60,   // 60 meses = o prazo que usam na publicidade
    entradaInicial: 0,
  },
};

/* ══════════════════════════════════════════════════════════
   VIATURAS EM DESTAQUE
   Dados retirados dos cartazes do Instagram.

   `destaque`  → a frase que eles põem na barra preta do cartaz
   `garantia`  → só preenchido quando o cartaz o indica
   `cv`/`caixa`→ null quando o cartaz não diz (o site não os mostra)
   ══════════════════════════════════════════════════════════ */

export const CARROS = [
  {
    id: 1,
    marca: "Renault",
    modelo: "Clio",
    versao: "0.9 TCe",
    ano: 2014, mes: "09",
    km: 143000,
    combustivel: "Gasolina",
    cv: null, caixa: null,
    preco: 9450,
    destaque: "Nacional",
    garantia: "18 meses",
    img: "/carros/clio-2014.jpg",
    tema: { base: "#15171A", glow: OURO_ECRA, texto: "#F0F1F3" },
  },
  {
    id: 2,
    marca: "Dacia",
    modelo: "Logan MCV",
    versao: "0.9 TCe",
    ano: 2016, mes: "11",
    km: 215000,
    combustivel: "Gasolina / GPL",
    cv: null, caixa: null,
    preco: 5950,
    destaque: "Bi-Fuel",
    garantia: "18 meses",
    img: "/carros/dacia-logan-2016.jpg",
    tema: { base: "#0E1420", glow: OURO_ECRA, texto: "#E9EDF4" },
  },
  {
    id: 3,
    marca: "Toyota",
    modelo: "Yaris",
    versao: "1.3 VVT-i",
    ano: 2006, mes: "08",
    km: 240000,
    combustivel: "Gasolina",
    cv: null, caixa: null,
    preco: 4950,
    destaque: "IUC 39€",
    garantia: "18 meses",
    img: "/carros/toyota-yaris-2006.jpg",
    tema: { base: "#101012", glow: OURO_ECRA, texto: "#EFEFF1" },
  },
  {
    id: 4,
    marca: "Chevrolet",
    modelo: "Aveo Sedan",
    versao: "1.2 LS",
    ano: 2011, mes: "01",
    km: 140000,
    combustivel: "Gasolina",
    cv: null, caixa: null,
    preco: 4750,
    destaque: "Único dono",
    garantia: "18 meses",
    img: "/carros/chevrolet-aveo-2011.jpg",
    tema: { base: "#16181B", glow: OURO_ECRA, texto: "#F1F2F4" },
  },
  {
    id: 5,
    marca: "Peugeot",
    modelo: "206",
    versao: "1.1 Look",
    ano: 2005, mes: "07",
    km: 175000,
    combustivel: "Gasolina",
    cv: null, caixa: null,
    preco: 3450,
    destaque: "Desde 70€/mês",
    garantia: null,          // o cartaz deste não indica garantia
    img: "/carros/peugeot-206-2005.jpg",
    tema: { base: "#141618", glow: OURO_ECRA, texto: "#F0F1F2" },
  },
];

export const WA_GREEN = "#25D366";

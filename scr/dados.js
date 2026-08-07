/* ══════════════════════════════════════════════════════════
   JPM AUTOMÓVEIS
   ══════════════════════════════════════════════════════════ */

/* Cor da marca — tirada dos cartazes do Instagram deles */
export const LARANJA = "#C67B16";
export const LARANJA_CLARO = "#E09520";

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
    taeg: 0.069,        // ⚠️ CONFIRMAR com o cliente
    prazoMax: 120,
    prazoInicial: 120,
    entradaInicial: 10,
  },
};

/* ══════════════════════════════════════════════════════════
   VIATURAS EM DESTAQUE

   O `glow` é sempre o laranja da marca JPM — mantém a
   identidade consistente com os cartazes do Instagram.
   Só o `base` muda ligeiramente conforme o carro.

   Campos opcionais (cv, caixa, versao, mes): se não souberes,
   deixa `null` — o site não os mostra, em vez de mostrar
   informação inventada.
   ══════════════════════════════════════════════════════════ */

export const CARROS = [
  {
    id: 1,
    marca: "Renault",
    modelo: "Clio",
    versao: "0.9 TCe",
    ano: 2014,
    mes: "09",
    km: 143000,
    combustivel: "Gasolina",
    cv: null,            // ⚠️ confirmar
    caixa: null,         // ⚠️ confirmar
    preco: 9450,
    nacional: true,
    garantia: "18 meses",
    img: "/carros/clio-2014.jpg",
    tema: { base: "#15171A", glow: LARANJA_CLARO, texto: "#F0F1F3" },
  },

  /* ⚠️ EXEMPLOS — substituir por viaturas reais do stock */
  {
    id: 2,
    marca: "Mercedes-Benz",
    modelo: "Classe A",
    versao: "180 d AMG Line Aut.",
    ano: 2019,
    mes: null,
    km: 118000,
    combustivel: "Diesel",
    cv: 116,
    caixa: "Automática",
    preco: 23900,
    nacional: true,
    garantia: "18 meses",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1800&q=90",
    tema: { base: "#121418", glow: LARANJA_CLARO, texto: "#EDEFF3" },
  },
  {
    id: 3,
    marca: "Volkswagen",
    modelo: "Golf",
    versao: "1.6 TDI",
    ano: 2017,
    mes: null,
    km: 156000,
    combustivel: "Diesel",
    cv: 115,
    caixa: "Manual",
    preco: 14750,
    nacional: true,
    garantia: "18 meses",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=90",
    tema: { base: "#16130F", glow: LARANJA_CLARO, texto: "#F5F1EB" },
  },
];

export const WA_GREEN = "#25D366";

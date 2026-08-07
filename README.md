# JPM Automóveis

Site do stand JPM Automóveis, Rio de Mouro.
Feito por [Brothers Code](https://brotherscode.pro).

---

## Correr localmente

```bash
npm install
npm run dev
```

---

## ✅ Dados já confirmados

| Campo | Valor |
|---|---|
| Nome | JPM Automóveis |
| Morada | Estrada Marquês de Pombal, 75, Rio de Mouro |
| Telemóvel / WhatsApp | 961 978 818 |
| Email | jpmautomoveis@gmail.com |
| Stock completo | jpmautomoveis.standvirtual.com |
| Atendimento | Por marcação |
| Serviços | 18 meses de garantia · Financiamento até 120 meses · Entrega em todo o país · Compram viaturas |
| Cor da marca | Laranja `#C67B16` / `#E09520` (tirada dos cartazes do Instagram) |

---

## ⚠️ Falta confirmar com o cliente

- [x] ~~Renault Clio 0.9 TCe — 09/2014, 143.000 km, Gasolina, 9.450€, Nacional~~
- [ ] **Potência e caixa do Clio** — não vinham no cartaz. Estão a `null`,
      por isso o site não os mostra (em vez de inventar). Confirmar e preencher.
- [ ] **Mais 2–3 viaturas** — os carros 2 e 3 em `src/dados.js` são exemplos
- [ ] **Fotos das restantes** — horizontal, mínimo 1600px de largura
- [ ] **TAEG do financiamento** — está a 6.9% em `src/dados.js`.
      Perguntar qual usar, ou tirar a percentagem e deixar só "valor indicativo"
- [ ] **Horário** — sendo por marcação, confirmar se há dias/horas de referência
- [ ] **Imagem de partilha** — `public/og.jpg`, 1200×630 (é o que aparece
      quando o link é enviado no WhatsApp)
- [ ] **Domínio** — jpmautomoveis.pt ou similar

---

## Estratégia de conteúdo

O site mostra **apenas 3–4 viaturas em destaque**, não o catálogo completo.
O stock inteiro fica no Standvirtual, com link no ecrã final.

Assim o cliente não tem de pedir alterações ao site sempre que um carro
entra ou sai — mantém só o Standvirtual, que já usa.

Rever os destaques uma vez por mês é suficiente.

---

## Alterar as viaturas em destaque

Editar `src/dados.js`. Cada carro precisa de um **tema de cor** que pinta
o site inteiro quando esse carro está no ecrã:

```js
tema: {
  base:  "#12151A",  // fundo — versão muito escura da cor do carro
  glow:  "#98A2B3",  // destaque — preço, etiquetas, brilho
  texto: "#EDEFF3",  // quase branco com um toque da mesma cor
}
```

---

## Publicar

```bash
npm i -g vercel
vercel --yes
```

Ou: push para o GitHub → [vercel.com/new](https://vercel.com/new) → importar → Deploy.

---

## Estrutura

```
src/
├── dados.js               ← ÚNICO ficheiro a editar
├── lib.jsx                ← helpers, mensagens de WhatsApp, ícones
├── App.jsx                ← scroll, temas, navegação
└── components/
    ├── CarroEcra.jsx      ← ecrã de cada viatura
    ├── Ficha.jsx          ← ficha + simulador até 120 meses
    ├── Contacto.jsx       ← serviços, Standvirtual, contactos
    └── Ticker.jsx         ← números animados
```

---

## Notas de decisão

**"Marcar visita" em vez de "visite-nos"** — todos os botões e mensagens
pré-preenchidas de WhatsApp assumem marcação, porque é assim que trabalham.

**Simulador abre nos 120 meses com 10% de entrada** — mostra logo a
prestação mais baixa possível, que é o argumento mais forte do stand.

**"Compramos o seu carro" tem CTA próprio** — é um segundo tipo de lead,
com mensagem de WhatsApp diferente.

**Morada não está em destaque** — sendo por marcação e com entrega em
todo o país, a localização não é o argumento principal. Está no rodapé,
com link para o Google Maps, e nos dados estruturados para o Google.

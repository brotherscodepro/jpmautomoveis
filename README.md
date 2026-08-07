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
| Logo | Recebido. Versões em `public/brand/` |
| Cor da marca | Dourado `#B87818` (logo) · `#D89A2A` (versão para ecrã) |

---

## ⚠️ Falta confirmar com o cliente

- [x] ~~5 viaturas com dados completos (specs, extras, inspeção)~~
- [ ] **Quilómetros do Peugeot 206** — o cartaz diz 175.000, a descrição do
      anúncio diz 176.000. Está a 176.000. Confirmar qual é o correto.
- [ ] **Garantia do Peugeot 206** — é o único anúncio que não menciona os
      18 meses. Está `null`, por isso o site não mostra garantia neste carro.
      Se tiver, é só preencher.
- [ ] **Mais fotos por viatura** — cada carro tem 1 foto (a do cartaz).
      O campo `imgs` é uma lista: basta juntar mais e a galeria aparece sozinha.
- [ ] **TAEG do financiamento** — está a 6.9% em `src/dados.js`.
      Perguntar qual usar, ou tirar a percentagem e deixar só "valor indicativo"
- [ ] **Horário** — sendo por marcação, confirmar se há dias/horas de referência
- [x] ~~Imagem de partilha `public/og.jpg`~~ — gerada com o logo + Clio
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


---

## Ficheiros de marca

Em `public/brand/`:

| Ficheiro | Uso |
|---|---|
| `logo-escuro.png` | Logo para fundos escuros (usado no site) |
| `logo-claro.png` | Logo original, fundo transparente, para fundos claros |
| `icon-512.png` | Favicon |
| `icon-180.png` | Ícone iOS (quando guardam o site no telemóvel) |
| `../og.jpg` | Imagem de partilha no WhatsApp / Facebook |

Todos gerados a partir do logo original com o fundo branco removido.
O `logo-escuro` tem os traços do carro invertidos para branco — o dourado
mantém-se igual.


---

## Páginas de viatura

Cada carro tem endereço próprio:

```
/                                    → catálogo (scroll ecrã a ecrã)
/viatura/renault-clio-09-tce         → página da viatura
/viatura/dacia-logan-mcv-09-tce
/viatura/toyota-yaris-13-vvti
/viatura/chevrolet-aveo-sedan-12-ls
/viatura/peugeot-206-11-look
```

Isto permite mandar o link de um carro específico por WhatsApp,
em vez de mandar o site e dizer "é o terceiro a contar de cima".

O endereço vem do campo `slug` em `src/dados.js`. Se mudares o slug de
um carro que já foi partilhado, o link antigo deixa de funcionar — nesse
caso mostra "Esta viatura já não está disponível" com botão para o stock.

O `vercel.json` já tem a regra que faz estes endereços funcionarem
quando alguém abre o link diretamente.

### Galeria de fotos

O campo `imgs` de cada carro é uma lista. Com uma foto mostra só a foto;
com duas ou mais aparecem automaticamente as miniaturas e os pontinhos
de navegação. Clicar na foto abre em ecrã inteiro.

```js
imgs: [
  "/carros/clio-2014.jpg",
  "/carros/clio-2014-interior.jpg",
  "/carros/clio-2014-traseira.jpg",
],
```

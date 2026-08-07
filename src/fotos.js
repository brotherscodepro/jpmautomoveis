/* ══════════════════════════════════════════════════════════
   FOTOS DAS VIATURAS — deteção automática

   Não é preciso editar este ficheiro.

   Para juntar fotos a um carro, basta largá-las na pasta
   correspondente em `src/fotos/`:

     src/fotos/clio/1.jpg
     src/fotos/clio/2.jpg
     src/fotos/clio/3.jpg

   O site apanha-as sozinho e mostra-as pela ordem do nome.
   A foto "1" é a principal (catálogo e partilhas).

   Formatos aceites: .jpg .jpeg .png .webp
   ══════════════════════════════════════════════════════════ */

const ficheiros = import.meta.glob(
  "./fotos/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp}",
  { eager: true, query: "?url", import: "default" }
);

/* Ordena 1, 2, 10 corretamente (e não 1, 10, 2) */
const ordemNatural = new Intl.Collator("pt", {
  numeric: true,
  sensitivity: "base",
}).compare;

const porPasta = {};

for (const [caminho, url] of Object.entries(ficheiros)) {
  // "./fotos/clio/2.jpg" → pasta "clio", ficheiro "2.jpg"
  const partes = caminho.split("/");
  const pasta = partes[2];
  const nome = partes[partes.length - 1];
  if (!pasta || partes.length < 4) continue;
  (porPasta[pasta] ||= []).push({ nome, url });
}

for (const pasta of Object.keys(porPasta)) {
  porPasta[pasta].sort((a, b) => ordemNatural(a.nome, b.nome));
}

/** Devolve as fotos de um carro, já ordenadas. */
export function fotosDe(pasta) {
  return (porPasta[pasta] || []).map((f) => f.url);
}

/** Pastas que têm fotos — usado no aviso de desenvolvimento. */
export const pastasComFotos = Object.keys(porPasta);

import { useEffect } from "react";
import { porSlug, CARROS } from "./dados";
import { useRota } from "./router.jsx";
import Catalogo from "./paginas/Catalogo";
import Viatura from "./paginas/Viatura";

export default function App() {
  const { caminho, irPara, voltar } = useRota();

  const slug = caminho.startsWith("/viatura/")
    ? caminho.replace("/viatura/", "").replace(/\/$/, "")
    : null;
  const car = slug ? porSlug(slug) : null;

  useEffect(() => {
    if (!car) document.title = "JPM Automóveis — Viaturas usadas com garantia em Rio de Mouro";
  }, [car]);

  // endereço /viatura/xxx que não corresponde a nenhuma viatura
  if (slug && !car) {
    const t = CARROS[0].tema;
    return (
      <div style={{
        minHeight: "100vh", background: t.base, color: t.texto,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 18, padding: 24,
      }}>
        <p style={{ fontSize: 15, color: `${t.texto}88`, textAlign: "center" }}>
          Esta viatura já não está disponível.
        </p>
        <button onClick={() => irPara("/")} style={{
          background: t.glow, color: t.base, padding: "13px 26px",
          borderRadius: 99, fontSize: 14.5, fontWeight: 700,
        }}>Ver viaturas em stock</button>
      </div>
    );
  }

  if (car) {
    return <Viatura car={car} voltar={voltar} />;
  }

  return <Catalogo abrirViatura={(c) => irPara(`/viatura/${c.slug}`)} />;
}

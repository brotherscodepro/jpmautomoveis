import { useState, useEffect } from "react";
import { STAND, WA_GREEN } from "../dados";
import { fmt, msgMarcacao, prestacao, WaIcon, PhoneIcon } from "../lib.jsx";

export default function Ficha({ car, onClose }) {
  const { prazoMax, prazoInicial, entradaInicial, taeg } = STAND.credito;
  const [ent, setEnt] = useState(entradaInicial);
  const [mes, setMes] = useState(prazoInicial);
  const t = car.tema;

  const mensal = prestacao(car.preco, ent, mes);
  const financiado = car.preco * (1 - ent / 100);

  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 500,
      background: "rgba(0,0,0,.6)", backdropFilter: "blur(20px)",
      display: "flex", alignItems: "flex-end", justifyContent: "center",
      animation: "fadeIn .3s ease",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: "100%", maxWidth: 620, maxHeight: "92vh", overflowY: "auto",
        background: t.base, border: `1px solid ${t.glow}44`,
        borderRadius: "24px 24px 0 0", padding: "clamp(24px,5vw,40px)",
        animation: "sheetUp .45s cubic-bezier(.16,1,.3,1)",
        boxShadow: `0 -20px 80px ${t.glow}33`,
      }}>
        <div style={{ width: 40, height: 4, borderRadius: 99, background: `${t.texto}33`, margin: "0 auto 26px" }} />

        {/* título */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 10, letterSpacing: ".24em", textTransform: "uppercase", color: t.glow, marginBottom: 8, fontWeight: 700 }}>
            {car.marca}
          </div>
          <h2 style={{
            fontFamily: "'Archivo Black','Arial Black',sans-serif",
            fontSize: "clamp(28px,7vw,42px)", lineHeight: .95,
            color: t.texto, letterSpacing: "-.03em", marginBottom: 8,
          }}>{car.modelo}</h2>
          <p style={{ color: `${t.texto}88`, fontSize: 14 }}>{car.versao}</p>
        </div>

        {/* ficha técnica */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(88px,1fr))",
          gap: 1, background: `${t.texto}12`, borderRadius: 12, overflow: "hidden", marginBottom: 22,
        }}>
          {[
            ["Ano", car.mes ? `${car.mes}/${car.ano}` : car.ano],
            ["Km", fmt(car.km)],
            car.cv ? ["Motor", `${car.cv}cv`] : null,
            ["Comb.", car.combustivel],
            car.caixa ? ["Caixa", car.caixa] : null,
          ].filter(Boolean).map(([l, v]) => (
            <div key={l} style={{ background: t.base, padding: "14px 10px", textAlign: "center" }}>
              <div style={{ fontSize: 9, letterSpacing: ".14em", textTransform: "uppercase", color: `${t.texto}55`, marginBottom: 4 }}>{l}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: t.texto }}>{v}</div>
            </div>
          ))}
        </div>

        {/* serviços incluídos */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 26 }}>
          {[
            car.nacional ? "Nacional" : null,
            car.garantia ? `${car.garantia} de garantia` : "Garantia incluída",
            "Aceitamos retoma",
            "Entrega em todo o país",
          ].filter(Boolean).map((p) => (
            <span key={p} style={{
              border: `1px solid ${t.glow}66`, color: t.glow,
              padding: "6px 14px", borderRadius: 99, fontSize: 11.5, fontWeight: 500,
            }}>{p}</span>
          ))}
        </div>

        {/* simulador */}
        <div style={{ background: `${t.texto}0A`, borderRadius: 16, padding: 22, marginBottom: 22 }}>
          <div style={{ fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: `${t.texto}66`, marginBottom: 4, fontWeight: 700 }}>
            Simulação de crédito
          </div>
          <div style={{ fontSize: 11.5, color: t.glow, marginBottom: 18, fontWeight: 500 }}>
            Financiamento até {prazoMax} meses
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: `${t.texto}99`, marginBottom: 7 }}>
            <span>Entrada {ent}%</span>
            <span>{fmt(Math.round(car.preco * ent / 100))}€</span>
          </div>
          <input type="range" min={0} max={50} step={5} value={ent}
            onChange={(e) => setEnt(+e.target.value)} aria-label="Entrada"
            style={{ width: "100%", marginBottom: 18, color: t.glow }} />

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: `${t.texto}99`, marginBottom: 7 }}>
            <span>Prazo</span>
            <span>{mes} meses · {Math.round(mes / 12)} anos</span>
          </div>
          <input type="range" min={12} max={prazoMax} step={12} value={mes}
            onChange={(e) => setMes(+e.target.value)} aria-label="Prazo"
            style={{ width: "100%", marginBottom: 22, color: t.glow }} />

          <div style={{ textAlign: "center", paddingTop: 18, borderTop: `1px solid ${t.texto}15` }}>
            <div style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: `${t.texto}55`, marginBottom: 4 }}>
              Prestação estimada
            </div>
            <div style={{
              fontFamily: "'Archivo Black','Arial Black',sans-serif",
              fontSize: 40, color: t.glow, lineHeight: 1, letterSpacing: "-.03em",
            }}>
              {Math.round(mensal)}<span style={{ fontSize: 16, color: `${t.texto}66` }}>€/mês</span>
            </div>
            <div style={{ fontSize: 10.5, color: `${t.texto}44`, marginTop: 8, lineHeight: 1.5 }}>
              Financiado {fmt(Math.round(financiado))}€ · TAEG {(taeg * 100).toFixed(1)}%<br />
              Valor indicativo. Condições finais sujeitas a aprovação.
            </div>
          </div>
        </div>

        {/* acções */}
        <a href={`https://wa.me/${STAND.whatsapp}?text=${msgMarcacao(car)}`}
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 9,
            background: WA_GREEN, color: "#fff", padding: "15px",
            borderRadius: 99, fontSize: 15, fontWeight: 700, marginBottom: 10,
          }}>
          <WaIcon /> Marcar visita para ver este
        </a>
        <a href={`tel:+${STAND.whatsapp}`} style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: "14px", borderRadius: 99, border: `1px solid ${t.texto}25`,
          color: t.texto, fontSize: 14, fontWeight: 600,
        }}>
          <PhoneIcon s={16} /> {STAND.telefone}
        </a>

        <button onClick={onClose} style={{
          width: "100%", background: "none", marginTop: 14,
          color: `${t.texto}44`, fontSize: 13, padding: 10,
        }}>Fechar</button>
      </div>
    </div>
  );
}

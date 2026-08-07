import { useState, useRef, useEffect, useCallback } from "react";
import { STAND, CARROS_VISIVEIS as CARROS } from "../dados";
import CarroEcra from "../components/CarroEcra";
import Contacto from "../components/Contacto";

export default function Catalogo({ abrirViatura }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const [idx, setIdx] = useState(0);
  const [scrollP, setScrollP] = useState(0);
  const scrollRef = useRef(null);

  const car = CARROS[Math.min(idx, CARROS.length - 1)];
  const t = car.tema;

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const raw = el.scrollTop / el.clientHeight;
    setScrollP(raw % 1);
    const i = Math.round(raw);
    if (i >= 0 && i <= CARROS.length) setIdx(i);
  }, []);

  const irPara = useCallback((i) => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: i * el.clientHeight, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const h = (e) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault(); irPara(Math.min(idx + 1, CARROS.length));
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault(); irPara(Math.max(idx - 1, 0));
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [idx, irPara]);

  return (
    <div style={{
      position: "relative", height: "100vh", overflow: "hidden",
      background: t.base, transition: "background 1.1s cubic-bezier(.4,0,.2,1)",
    }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
        background: `radial-gradient(ellipse 90% 60% at 70% 45%, ${t.glow}22 0%, transparent 65%)`,
        transition: "background 1.1s cubic-bezier(.4,0,.2,1)",
      }} />

      {/* header */}
      <header style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 40,
        padding: "clamp(14px,3vw,24px) clamp(18px,4vw,40px)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <img
          src="/brand/logo-escuro.png"
          alt="JPM Automóveis"
          style={{
            height: "clamp(52px,7vw,74px)", width: "auto",
            filter: "drop-shadow(0 2px 12px rgba(0,0,0,.5))",
          }}
        />
        <div style={{ textAlign: "right", lineHeight: 1.6 }}>
          <a href={`tel:+${STAND.whatsapp}`} style={{
            display: "block", color: "#fff", fontWeight: 600, fontSize: 13,
            textShadow: "0 1px 8px rgba(0,0,0,.6)",
          }}>{STAND.telefone}</a>
          <div style={{
            fontSize: 9, letterSpacing: ".14em", textTransform: "uppercase",
            color: "rgba(255,255,255,.6)", textShadow: "0 1px 8px rgba(0,0,0,.6)",
          }}>Por marcação</div>
        </div>
      </header>

      {/* rail */}
      <nav aria-label="Viaturas em destaque" style={{
        position: "absolute", left: "clamp(14px,3vw,32px)", top: "50%",
        transform: "translateY(-50%)", zIndex: 40,
        display: "flex", flexDirection: "column", gap: 18, alignItems: "center",
      }}>
        {CARROS.map((c, i) => (
          <button key={c.id} onClick={() => irPara(i)}
            aria-label={`Ir para ${c.marca} ${c.modelo}`}
            style={{ background: "none", display: "flex", alignItems: "center", gap: 10, padding: 0 }}>
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: ".1em",
              fontVariantNumeric: "tabular-nums",
              color: i === idx ? t.texto : `${t.texto}40`, transition: "color .5s",
            }}>{String(i + 1).padStart(2, "0")}</span>
            <span style={{
              width: i === idx ? 34 : 14, height: 2,
              background: i === idx ? t.glow : `${t.texto}30`,
              transition: "all .5s cubic-bezier(.16,1,.3,1)", display: "block",
            }} />
          </button>
        ))}
      </nav>

      {/* scroll */}
      <div ref={scrollRef} onScroll={onScroll} className="snap-scroll"
        style={{
          height: "100vh", overflowY: "scroll",
          scrollSnapType: "y mandatory", position: "relative", zIndex: 10,
        }}>
        {CARROS.map((c, i) => (
          <CarroEcra key={c.id} car={c} activo={i === idx} scrollP={scrollP} onFicha={abrirViatura} />
        ))}
        <Contacto tema={t} />
      </div>

      {/* contador */}
      <div style={{
        position: "absolute", right: "clamp(18px,4vw,40px)", bottom: "clamp(24px,5vh,44px)",
        zIndex: 40, textAlign: "right", pointerEvents: "none",
      }}>
        <div style={{
          fontFamily: "'Archivo Black','Arial Black',sans-serif",
          fontSize: "clamp(30px,5vw,48px)", lineHeight: .85,
          color: t.texto, letterSpacing: "-.04em", fontVariantNumeric: "tabular-nums",
        }}>
          {String(Math.min(idx + 1, CARROS.length)).padStart(2, "0")}
          <span style={{ fontSize: ".42em", color: `${t.texto}44`, verticalAlign: "super" }}>
            /{String(CARROS.length).padStart(2, "0")}
          </span>
        </div>
        <div style={{
          fontSize: 9, letterSpacing: ".24em", textTransform: "uppercase",
          color: `${t.texto}44`, marginTop: 8,
        }}>Em destaque</div>
      </div>
    </div>
  );
}

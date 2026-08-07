import { STAND, WA_GREEN } from "../dados";
import { fmt, msgMarcacao, prestacao, WaIcon } from "../lib.jsx";
import Ticker from "./Ticker";

export default function CarroEcra({ car, activo, scrollP, onFicha }) {
  const t = car.tema;
  const { prazoInicial, entradaInicial } = STAND.credito;
  const desde = Math.round(prestacao(car.preco, entradaInicial, prazoInicial));

  // só mostra os números que existem — nada é inventado
  const numeros = [
    { l: "Ano", v: car.mes ? `${car.mes}/${car.ano}` : car.ano, raw: true },
    { l: "Quilómetros", v: car.km, d: 120 },
    car.cv ? { l: "Potência", v: car.cv, sfx: " cv", d: 240 } : null,
    !car.cv ? { l: "Combustível", v: car.combustivel, raw: true } : null,
  ].filter(Boolean);

  return (
    <section style={{
      height: "100vh", scrollSnapAlign: "start", scrollSnapStop: "always",
      position: "relative", overflow: "hidden",
      display: "flex", alignItems: "flex-end",
    }}>
      {/* foto + parallax */}
      <div style={{
        position: "absolute", inset: 0,
        transform: activo ? `translateY(${scrollP * -60}px) scale(1.04)` : "scale(1.12)",
        transition: activo ? "transform .1s linear" : "transform 1s ease",
      }}>
        <img src={car.img} alt={`${car.marca} ${car.modelo}`}
          loading={activo ? "eager" : "lazy"}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            opacity: .55, filter: "saturate(.85) contrast(1.1)",
          }} />
      </div>

      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to top, ${t.base} 6%, ${t.base}CC 30%, transparent 70%),
                     linear-gradient(to right, ${t.base}DD 0%, transparent 55%)`,
      }} />

      {/* nome gigante */}
      <div style={{ position: "absolute", left: 0, right: 0, top: "clamp(80px,16vh,180px)", pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          fontFamily: "'Archivo Black','Arial Black',sans-serif",
          fontSize: "clamp(72px,19vw,260px)", lineHeight: .78, letterSpacing: "-.055em",
          color: t.texto, opacity: activo ? .13 : 0, whiteSpace: "nowrap",
          marginLeft: "-.05em", paddingLeft: "clamp(12px,3vw,40px)",
          transform: activo ? "translateX(0)" : "translateX(40px)",
          transition: "opacity 1s ease, transform 1.2s cubic-bezier(.16,1,.3,1)",
        }}>{car.modelo.toUpperCase()}</div>
      </div>

      {/* conteúdo */}
      <div style={{
        position: "relative", zIndex: 5, width: "100%",
        padding: "0 clamp(18px,4vw,40px) clamp(70px,12vh,110px) clamp(58px,9vw,110px)",
      }}>
        {/* marca + etiqueta nacional */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12, marginBottom: 12,
          opacity: activo ? 1 : 0, transform: activo ? "none" : "translateY(20px)",
          transition: "all .7s cubic-bezier(.16,1,.3,1) .1s",
        }}>
          <span style={{
            fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase",
            color: t.glow, fontWeight: 700,
          }}>{car.marca}</span>
          {car.destaque && (
            <span style={{
              fontSize: 9, letterSpacing: ".16em", textTransform: "uppercase",
              color: t.base, background: t.glow, fontWeight: 800,
              padding: "3px 9px", borderRadius: 3,
            }}>{car.destaque}</span>
          )}
        </div>

        <h2 style={{
          fontFamily: "'Archivo Black','Arial Black',sans-serif",
          fontSize: "clamp(38px,8vw,88px)", lineHeight: .9,
          letterSpacing: "-.04em", color: t.texto, marginBottom: 6,
          opacity: activo ? 1 : 0, transform: activo ? "none" : "translateY(30px)",
          transition: "all .8s cubic-bezier(.16,1,.3,1) .18s",
        }}>{car.modelo}</h2>

        {car.versao && (
          <p style={{
            fontSize: "clamp(13px,1.6vw,16px)", color: `${t.texto}77`,
            marginBottom: "clamp(24px,4vh,38px)",
            opacity: activo ? 1 : 0, transform: activo ? "none" : "translateY(20px)",
            transition: "all .8s cubic-bezier(.16,1,.3,1) .26s",
          }}>{car.versao}</p>
        )}

        {/* números */}
        <div style={{
          display: "flex", gap: "clamp(20px,4vw,52px)", flexWrap: "wrap",
          paddingTop: "clamp(18px,3vh,26px)", borderTop: `1px solid ${t.texto}1A`,
          marginBottom: "clamp(24px,4vh,34px)", maxWidth: 560,
        }}>
          {numeros.map((s, k) => (
            <div key={s.l} style={{
              opacity: activo ? 1 : 0, transform: activo ? "none" : "translateY(16px)",
              transition: `all .7s cubic-bezier(.16,1,.3,1) ${.34 + k * .08}s`,
            }}>
              <div style={{ fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase", color: `${t.texto}55`, marginBottom: 5 }}>{s.l}</div>
              <div style={{
                fontFamily: "'Archivo Black','Arial Black',sans-serif",
                fontSize: "clamp(20px,3vw,30px)", color: t.texto,
                lineHeight: 1, letterSpacing: "-.03em", fontVariantNumeric: "tabular-nums",
              }}>
                {s.raw ? s.v : <Ticker value={s.v} active={activo} delay={s.d} suffix={s.sfx || ""} />}
              </div>
            </div>
          ))}
        </div>

        {/* preço + acções */}
        <div style={{
          display: "flex", alignItems: "flex-end", gap: "clamp(16px,3vw,32px)", flexWrap: "wrap",
          opacity: activo ? 1 : 0, transform: activo ? "none" : "translateY(20px)",
          transition: "all .8s cubic-bezier(.16,1,.3,1) .58s",
        }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase", color: `${t.texto}55`, marginBottom: 4 }}>
              Preço {car.garantia && `· ${car.garantia} de garantia`}
            </div>
            <div style={{
              fontFamily: "'Archivo Black','Arial Black',sans-serif",
              fontSize: "clamp(30px,5vw,50px)", color: t.glow,
              lineHeight: .95, letterSpacing: "-.04em",
            }}>{fmt(car.preco)}€</div>
            <div style={{ fontSize: 11.5, color: `${t.texto}55`, marginTop: 5 }}>
              ou desde {desde}€/mês em {prazoInicial} meses
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, paddingBottom: 4 }}>
            <button onClick={() => onFicha(car)} style={{
              background: t.texto, color: t.base, padding: "13px 26px",
              borderRadius: 99, fontSize: 14, fontWeight: 700, letterSpacing: "-.01em",
            }}>Ver ficha</button>
            <a href={`https://wa.me/${STAND.whatsapp}?text=${msgMarcacao(car)}`}
              target="_blank" rel="noopener noreferrer"
              aria-label={`Marcar visita para ver ${car.marca} ${car.modelo}`}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 46, height: 46, borderRadius: 99, background: WA_GREEN, color: "#fff",
              }}><WaIcon s={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

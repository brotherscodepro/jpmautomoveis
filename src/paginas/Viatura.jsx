import { useState, useEffect } from "react";
import { STAND, WA_GREEN } from "../dados";
import { fmt, msgMarcacao, prestacao, WaIcon, PhoneIcon } from "../lib.jsx";

export default function Viatura({ car, voltar }) {
  const t = car.tema;
  const { prazoMax, prazoInicial, entradaInicial, taeg } = STAND.credito;
  const [ent, setEnt] = useState(entradaInicial);
  const [mes, setMes] = useState(prazoInicial);
  const [imgIdx, setImgIdx] = useState(0);
  const [zoom, setZoom] = useState(false);

  const mensal = prestacao(car.preco, ent, mes);
  const financiado = car.preco * (1 - ent / 100);

  useEffect(() => {
    document.title = `${car.marca} ${car.modelo} ${car.versao} — JPM Automóveis`;
  }, [car]);

  useEffect(() => {
    const h = (e) => e.key === "Escape" && setZoom(false);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  const Bloco = ({ titulo, children, style }) => (
    <section style={{ marginBottom: 34, ...style }}>
      {titulo && (
        <h2 style={{
          fontSize: 10, letterSpacing: ".26em", textTransform: "uppercase",
          color: t.glow, fontWeight: 700, marginBottom: 14,
        }}>{titulo}</h2>
      )}
      {children}
    </section>
  );

  return (
    <div style={{
      minHeight: "100vh", background: t.base, color: t.texto,
      overflowY: "auto",
    }}>
      {/* lightbox */}
      {zoom && (
        <div onClick={() => setZoom(false)} style={{
          position: "fixed", inset: 0, zIndex: 900,
          background: "rgba(0,0,0,.94)", display: "flex",
          alignItems: "center", justifyContent: "center", padding: 20,
        }}>
          <img src={car.imgs[imgIdx]} alt="" style={{
            maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: 8,
          }} />
        </div>
      )}

      {/* ─── barra superior ─── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: `${t.base}E6`, backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${t.texto}12`,
        padding: "12px clamp(16px,4vw,40px)",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
      }}>
        <button onClick={voltar} style={{
          background: "none", color: `${t.texto}99`, fontSize: 13.5,
          display: "flex", alignItems: "center", gap: 7, padding: "6px 0",
        }}>
          <span style={{ fontSize: 17, lineHeight: 1 }}>←</span> Viaturas
        </button>
        <a href={`https://wa.me/${STAND.whatsapp}?text=${msgMarcacao(car)}`}
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", gap: 7,
            background: WA_GREEN, color: "#fff", padding: "9px 18px",
            borderRadius: 99, fontSize: 13, fontWeight: 700,
          }}>
          <WaIcon s={15} /> Marcar visita
        </a>
      </header>

      {/* ─── foto ─── */}
      <div style={{ position: "relative", background: "#000" }}>
        <img
          src={car.imgs[imgIdx]}
          alt={`${car.marca} ${car.modelo}`}
          onClick={() => setZoom(true)}
          style={{
            width: "100%", maxHeight: "62vh", objectFit: "cover",
            display: "block", cursor: "zoom-in",
          }}
        />
        {car.destaque && (
          <span style={{
            position: "absolute", top: 16, left: "clamp(16px,4vw,40px)",
            background: t.glow, color: "#10120F",
            padding: "5px 13px", borderRadius: 3,
            fontSize: 10.5, fontWeight: 800,
            letterSpacing: ".12em", textTransform: "uppercase",
          }}>{car.destaque}</span>
        )}
        {car.imgs.length > 1 && (
          <div style={{
            position: "absolute", bottom: 14, left: "50%",
            transform: "translateX(-50%)", display: "flex", gap: 7,
          }}>
            {car.imgs.map((_, i) => (
              <button key={i} onClick={() => setImgIdx(i)} style={{
                width: i === imgIdx ? 26 : 9, height: 9, borderRadius: 99,
                background: i === imgIdx ? t.glow : "rgba(255,255,255,.45)",
                transition: "all .3s",
              }} />
            ))}
          </div>
        )}
      </div>

      {/* miniaturas */}
      {car.imgs.length > 1 && (
        <div style={{
          display: "flex", gap: 8, overflowX: "auto",
          padding: "12px clamp(16px,4vw,40px)",
        }}>
          {car.imgs.map((im, i) => (
            <img key={i} src={im} alt="" onClick={() => setImgIdx(i)} style={{
              width: 84, height: 56, objectFit: "cover", borderRadius: 6,
              cursor: "pointer", flexShrink: 0,
              border: i === imgIdx ? `2px solid ${t.glow}` : "2px solid transparent",
              opacity: i === imgIdx ? 1 : .45, transition: "all .2s",
            }} />
          ))}
        </div>
      )}

      {/* ─── corpo ─── */}
      <div style={{
        maxWidth: 780, margin: "0 auto",
        padding: "clamp(26px,5vw,44px) clamp(16px,4vw,40px) 80px",
      }}>
        {/* título + preço */}
        <div style={{ marginBottom: 30 }}>
          <div style={{
            fontSize: 10.5, letterSpacing: ".26em", textTransform: "uppercase",
            color: t.glow, fontWeight: 700, marginBottom: 8,
          }}>{car.marca}</div>
          <h1 style={{
            fontFamily: "'Archivo Black','Arial Black',sans-serif",
            fontSize: "clamp(32px,7vw,52px)", lineHeight: .95,
            letterSpacing: "-.035em", marginBottom: 8,
          }}>{car.modelo}</h1>
          <p style={{ fontSize: 15.5, color: `${t.texto}88`, marginBottom: 22 }}>
            {car.versao}
          </p>

          <div style={{
            display: "flex", alignItems: "flex-end", gap: 20, flexWrap: "wrap",
            paddingTop: 20, borderTop: `1px solid ${t.texto}15`,
          }}>
            <div>
              <div style={{
                fontFamily: "'Archivo Black','Arial Black',sans-serif",
                fontSize: "clamp(34px,6vw,48px)", color: t.glow,
                lineHeight: 1, letterSpacing: "-.04em",
              }}>{fmt(car.preco)}€</div>
              <div style={{ fontSize: 12.5, color: `${t.texto}66`, marginTop: 6 }}>
                ou desde {Math.round(prestacao(car.preco, entradaInicial, prazoInicial))}€/mês
              </div>
            </div>
            {car.garantia && (
              <div style={{
                border: `1px solid ${t.glow}55`, color: t.glow,
                padding: "7px 15px", borderRadius: 99,
                fontSize: 12.5, fontWeight: 600, marginBottom: 4,
              }}>{car.garantia} de garantia</div>
            )}
          </div>
        </div>

        {/* ficha técnica */}
        <Bloco titulo="Ficha técnica">
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
            gap: 1, background: `${t.texto}14`, borderRadius: 12, overflow: "hidden",
          }}>
            {[
              ["Matrícula", `${car.mes}/${car.ano}`],
              ["Quilómetros", `${fmt(car.km)} km`],
              ["Motor", `${car.versao.split(" ")[0]} · ${car.cv} cv`],
              ["Combustível", car.combustivel],
              ["Caixa", car.caixa],
            ].map(([l, v]) => (
              <div key={l} style={{ background: t.base, padding: "16px 14px" }}>
                <div style={{
                  fontSize: 9.5, letterSpacing: ".14em", textTransform: "uppercase",
                  color: `${t.texto}55`, marginBottom: 5,
                }}>{l}</div>
                <div style={{ fontSize: 14.5, fontWeight: 600 }}>{v}</div>
              </div>
            ))}
          </div>
        </Bloco>

        {/* origem e inspeção */}
        <Bloco titulo="Origem">
          <div style={{ fontSize: 14.5, color: `${t.texto}BB`, lineHeight: 1.9 }}>
            <div>Viatura nacional de {car.mesNome}.</div>
            {car.inspecao && <div>Inspeção válida até {car.inspecao}.</div>}
            {car.notas.map((n) => <div key={n}>{n}.</div>)}
            <div style={{ color: `${t.texto}88` }}>{STAND.revisao}</div>
          </div>
        </Bloco>

        {/* extras */}
        <Bloco titulo="Equipamento">
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "9px 18px",
          }}>
            {car.extras.map((e) => (
              <div key={e} style={{
                display: "flex", alignItems: "flex-start", gap: 9,
                fontSize: 14, color: `${t.texto}BB`,
              }}>
                <span style={{ color: t.glow, fontSize: 12, lineHeight: 1.6 }}>▪</span>
                {e}
              </div>
            ))}
          </div>
        </Bloco>

        {/* financiamento */}
        <Bloco titulo="Financiamento">
          <div style={{
            background: `${t.texto}0A`, borderRadius: 16, padding: "24px 22px",
          }}>
            <div style={{ fontSize: 12.5, color: t.glow, marginBottom: 22, fontWeight: 500 }}>
              Até {prazoMax} meses · com ou sem entrada
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, color: `${t.texto}99`, marginBottom: 8 }}>
              <span>Entrada {ent}%</span>
              <span>{fmt(Math.round(car.preco * ent / 100))}€</span>
            </div>
            <input type="range" min={0} max={50} step={5} value={ent}
              onChange={(e) => setEnt(+e.target.value)} aria-label="Entrada"
              style={{ width: "100%", marginBottom: 20, color: t.glow }} />

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, color: `${t.texto}99`, marginBottom: 8 }}>
              <span>Prazo</span>
              <span>{mes} meses</span>
            </div>
            <input type="range" min={12} max={prazoMax} step={12} value={mes}
              onChange={(e) => setMes(+e.target.value)} aria-label="Prazo"
              style={{ width: "100%", marginBottom: 24, color: t.glow }} />

            <div style={{ textAlign: "center", paddingTop: 20, borderTop: `1px solid ${t.texto}15` }}>
              <div style={{
                fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase",
                color: `${t.texto}55`, marginBottom: 6,
              }}>Prestação estimada</div>
              <div style={{
                fontFamily: "'Archivo Black','Arial Black',sans-serif",
                fontSize: 44, color: t.glow, lineHeight: 1, letterSpacing: "-.035em",
              }}>
                {Math.round(mensal)}<span style={{ fontSize: 17, color: `${t.texto}66` }}>€/mês</span>
              </div>
              <div style={{ fontSize: 11, color: `${t.texto}44`, marginTop: 10, lineHeight: 1.6 }}>
                Financiado {fmt(Math.round(financiado))}€ · TAEG {(taeg * 100).toFixed(1)}%<br />
                Valor indicativo. Condições sujeitas a aprovação.
              </div>
            </div>
          </div>
        </Bloco>

        {/* CTA */}
        <div style={{
          border: `1px solid ${t.glow}33`, borderRadius: 16,
          padding: "26px 24px", textAlign: "center", marginBottom: 26,
        }}>
          <div style={{
            fontFamily: "'Archivo Black','Arial Black',sans-serif",
            fontSize: 20, letterSpacing: "-.02em", marginBottom: 6,
          }}>Quer ver este {car.marca}?</div>
          <p style={{ fontSize: 13.5, color: `${t.texto}77`, marginBottom: 22 }}>
            Atendemos por marcação. Diga-nos o dia que lhe dá jeito.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`https://wa.me/${STAND.whatsapp}?text=${msgMarcacao(car)}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                background: WA_GREEN, color: "#fff", padding: "14px 28px",
                borderRadius: 99, fontSize: 15, fontWeight: 700,
              }}><WaIcon s={18} /> Marcar visita</a>
            <a href={`tel:+${STAND.whatsapp}`} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 26px", borderRadius: 99,
              border: `1px solid ${t.texto}28`, color: t.texto,
              fontSize: 15, fontWeight: 600,
            }}><PhoneIcon s={16} /> {STAND.telefone}</a>
          </div>
        </div>

        {/* aviso legal */}
        <p style={{
          fontSize: 11, color: `${t.texto}40`, lineHeight: 1.6, textAlign: "center",
        }}>{STAND.aviso}</p>
      </div>
    </div>
  );
}

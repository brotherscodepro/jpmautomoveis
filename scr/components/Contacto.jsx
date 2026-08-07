import { STAND, WA_GREEN } from "../dados";
import { msgMarcacao, msgVenda, WaIcon, PhoneIcon, ArrowIcon } from "../lib.jsx";

export default function Contacto({ tema: t }) {
  return (
    <section style={{
      minHeight: "100vh", scrollSnapAlign: "start",
      padding: "clamp(80px,13vh,120px) clamp(18px,4vw,40px) 40px clamp(58px,9vw,110px)",
      display: "flex", flexDirection: "column", justifyContent: "center",
    }}>
      <div style={{ maxWidth: 660 }}>
        <div style={{
          fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase",
          color: t.glow, fontWeight: 700, marginBottom: 20,
        }}>Como trabalhamos</div>

        <p style={{
          fontFamily: "'Archivo Black','Arial Black',sans-serif",
          fontSize: "clamp(21px,4.2vw,38px)", lineHeight: 1.15,
          letterSpacing: "-.035em", color: t.texto, marginBottom: 34,
        }}>{STAND.manifesto}</p>

        {/* serviços */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(148px,1fr))",
          gap: 1, background: `${t.texto}12`, borderRadius: 14,
          overflow: "hidden", marginBottom: 18,
        }}>
          {STAND.servicos.map(([a, b]) => (
            <div key={a} style={{ background: t.base, padding: "20px 16px" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: t.texto, marginBottom: 3 }}>{a}</div>
              <div style={{ fontSize: 12, color: `${t.texto}66`, lineHeight: 1.4 }}>{b}</div>
            </div>
          ))}
        </div>

        {/* stock completo */}
        <a href={STAND.standvirtual} target="_blank" rel="noopener noreferrer"
          style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            gap: 16, border: `1px solid ${t.texto}18`, borderRadius: 14,
            padding: "18px 22px", marginBottom: 12,
          }}>
          <div>
            <div style={{ fontSize: 14.5, fontWeight: 700, color: t.texto, marginBottom: 2 }}>
              Ver todo o stock
            </div>
            <div style={{ fontSize: 12.5, color: `${t.texto}66` }}>
              Inventário completo e atualizado no Standvirtual
            </div>
          </div>
          <span style={{ color: t.glow, flexShrink: 0 }}><ArrowIcon s={18} /></span>
        </a>

        {/* vender carro */}
        <div style={{
          border: `1px solid ${t.glow}33`, borderRadius: 14,
          padding: "18px 22px", marginBottom: 30,
          display: "flex", justifyContent: "space-between",
          alignItems: "center", gap: 16, flexWrap: "wrap",
        }}>
          <div>
            <div style={{ fontSize: 14.5, fontWeight: 700, color: t.texto, marginBottom: 2 }}>
              Quer vender o seu carro?
            </div>
            <div style={{ fontSize: 12.5, color: `${t.texto}66` }}>
              Mande as fotos e fazemos proposta.
            </div>
          </div>
          <a href={`https://wa.me/${STAND.whatsapp}?text=${msgVenda}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              background: `${t.texto}12`, color: t.texto,
              padding: "11px 22px", borderRadius: 99,
              fontSize: 13.5, fontWeight: 600, whiteSpace: "nowrap",
            }}>Pedir proposta</a>
        </div>

        {/* CTA principal */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 30 }}>
          <a href={`https://wa.me/${STAND.whatsapp}?text=${msgMarcacao(null)}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              background: WA_GREEN, color: "#fff", padding: "16px 32px",
              borderRadius: 99, fontSize: 15, fontWeight: 700,
            }}>
            <WaIcon s={19} /> Marcar visita
          </a>
          <a href={`tel:+${STAND.whatsapp}`} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "16px 32px", borderRadius: 99,
            border: `1px solid ${t.texto}28`, color: t.texto,
            fontSize: 15, fontWeight: 600,
          }}>
            <PhoneIcon s={17} /> {STAND.telefone}
          </a>
        </div>

        {/* contactos */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: 20, fontSize: 13, color: `${t.texto}66`, lineHeight: 1.7,
        }}>
          <div>
            <div style={{ fontSize: 9.5, letterSpacing: ".2em", textTransform: "uppercase", color: `${t.texto}44`, marginBottom: 6 }}>
              Morada
            </div>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(STAND.morada)}`}
              target="_blank" rel="noopener noreferrer" style={{ color: `${t.texto}88` }}>
              {STAND.morada}
            </a>
          </div>
          <div>
            <div style={{ fontSize: 9.5, letterSpacing: ".2em", textTransform: "uppercase", color: `${t.texto}44`, marginBottom: 6 }}>
              Contactos
            </div>
            <div>
              <a href={`mailto:${STAND.email}`} style={{ color: `${t.texto}88` }}>{STAND.email}</a>
            </div>
            <div style={{ color: `${t.texto}66` }}>Atendimento por marcação</div>
          </div>
        </div>

        <div style={{
          marginTop: 40, paddingTop: 20, borderTop: `1px solid ${t.texto}12`,
          fontSize: 11, color: `${t.texto}44`,
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8,
        }}>
          <span>© {new Date().getFullYear()} JPM Automóveis</span>
          <span>
            Site por{" "}
            <a href="https://brotherscode.pro" target="_blank" rel="noopener noreferrer" style={{ color: t.glow }}>
              Brothers Code
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

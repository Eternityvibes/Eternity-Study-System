import { useState } from "react";

const accent = "#C4956A"; // warm amber-gold
const bg = "#F5F1EB";
const cardBg = "#FFFFFF";
const cardBorder = "rgba(0,0,0,0.06)";
const muted = "#9B8F83";
const dark = "#1C1A17";

export function BentoGrid() {
  const [checked, setChecked] = useState<Set<number>>(new Set([1]));

  return (
    <div style={{ minHeight: "100vh", background: bg, padding: "0 0 96px", fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif" }}>

      {/* Header strip — minimal */}
      <div style={{ padding: "20px 28px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 700, color: dark, letterSpacing: "-0.01em" }}>Eternity<span style={{ color: accent }}>.</span></div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ fontSize: "12px", color: muted }}>Tuesday, June 23</div>
          <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "linear-gradient(135deg, #D4B8A8 0%, #C4956A 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "12px", fontWeight: 600 }}>E</div>
        </div>
      </div>

      {/* Greeting */}
      <div style={{ padding: "20px 28px 24px" }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "30px", fontWeight: 400, color: dark, lineHeight: 1.2, letterSpacing: "-0.02em" }}>Good morning,<br />Eleanor.</div>
      </div>

      {/* Bento grid */}
      <div style={{ padding: "0 16px", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "12px" }}>

        {/* Streak banner — 12 cols wide, short */}
        <div style={{ gridColumn: "1 / 13", background: `linear-gradient(135deg, ${accent}22 0%, #D4B8A830 100%)`, borderRadius: "16px", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-around", border: `1px solid ${accent}30` }}>
          {[
            { v: "12", l: "Day Streak", icon: "🔥" },
            { v: "4", l: "Books Read", icon: "📚" },
            { v: "28", l: "Tasks Done", icon: "✓" },
            { v: "15", l: "Sessions", icon: "⏱" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "11px", marginBottom: "4px" }}>{s.icon}</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 700, color: dark, lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontSize: "10px", color: muted, marginTop: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Today's Focus — 7 cols */}
        <div style={{ gridColumn: "1 / 8", background: cardBg, borderRadius: "16px", padding: "20px", border: `1px solid ${cardBorder}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: muted, marginBottom: "14px" }}>Today's Focus</div>
          {["Read Chapter 4 of 'The Dispossessed'", "Draft thesis statement for Art History", "Review Neuroscience flashcards"].map((task, i) => (
            <div
              key={i}
              onClick={() => setChecked((prev) => { const next = new Set(prev); next.has(i) ? next.delete(i) : next.add(i); return next; })}
              style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0", borderBottom: i < 2 ? `1px solid ${cardBorder}` : "none", cursor: "pointer" }}
            >
              <div style={{ width: "16px", height: "16px", borderRadius: "4px", border: checked.has(i) ? "none" : "1.5px solid #C4BAB0", background: checked.has(i) ? accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                {checked.has(i) && <div style={{ color: "white", fontSize: "9px" }}>✓</div>}
              </div>
              <span style={{ fontSize: "13px", lineHeight: 1.5, color: checked.has(i) ? muted : dark, textDecoration: checked.has(i) ? "line-through" : "none" }}>{task}</span>
            </div>
          ))}
        </div>

        {/* Inspiration — 5 cols */}
        <div style={{ gridColumn: "8 / 13", background: `linear-gradient(135deg, #2C2A27 0%, #3D3830 100%)`, borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "140px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "10px" }}>Inspiration</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "13px", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", fontStyle: "italic" }}>
            "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
          </div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "10px" }}>— Brian Herbert</div>
        </div>

        {/* Weekly chart — 5 cols */}
        <div style={{ gridColumn: "1 / 6", background: cardBg, borderRadius: "16px", padding: "20px", border: `1px solid ${cardBorder}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: muted, marginBottom: "14px" }}>Study Rhythm</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "60px" }}>
            {[3.5, 5, 2, 6, 4.5, 1.5, 3].map((h, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <div style={{ width: "100%", borderRadius: "3px 3px 0 0", background: i === 3 ? accent : "#E5DDD5", height: `${(h / 6) * 100}%` }} />
                <span style={{ fontSize: "9px", color: "#C0B5AC" }}>{["M","T","W","T","F","S","S"][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subjects — 4 cols */}
        <div style={{ gridColumn: "6 / 10", background: cardBg, borderRadius: "16px", padding: "20px", border: `1px solid ${cardBorder}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: muted, marginBottom: "14px" }}>By Subject</div>
          {[
            { name: "Neuroscience", hours: 11, color: "#C4956A" },
            { name: "Art History", hours: 7, color: "#9DB89A" },
            { name: "Literature", hours: 4.5, color: "#A8A8C4" },
            { name: "Philosophy", hours: 3, color: "#C4A8A8" },
          ].map((s) => (
            <div key={s.name} style={{ marginBottom: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", marginBottom: "3px" }}>
                <span style={{ color: dark }}>{s.name}</span>
                <span style={{ color: muted }}>{s.hours}h</span>
              </div>
              <div style={{ height: "3px", background: "#F0EBE4", borderRadius: "99px" }}>
                <div style={{ height: "100%", background: s.color, borderRadius: "99px", width: `${(s.hours / 12) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Active project — 3 cols */}
        <div style={{ gridColumn: "10 / 13", background: cardBg, borderRadius: "16px", padding: "20px", border: `1px solid ${cardBorder}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: muted }}>Active Project</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "14px", fontWeight: 600, color: dark, lineHeight: 1.3 }}>End of Term Neuroscience Paper</div>
          <div style={{ marginTop: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", marginBottom: "4px" }}>
              <span style={{ color: muted }}>Progress</span>
              <span style={{ color: accent, fontWeight: 600 }}>40%</span>
            </div>
            <div style={{ height: "4px", background: "#F0EBE4", borderRadius: "99px" }}>
              <div style={{ height: "100%", background: `linear-gradient(90deg, ${accent}, #D4956A)`, borderRadius: "99px", width: "40%" }} />
            </div>
            <div style={{ fontSize: "10px", color: muted, marginTop: "6px" }}>Due Nov 15</div>
          </div>
        </div>

        {/* Reading — 6 cols */}
        <div style={{ gridColumn: "1 / 7", background: cardBg, borderRadius: "16px", padding: "20px", border: `1px solid ${cardBorder}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: muted, marginBottom: "14px" }}>Reading Vault</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { title: "The Secret History", pct: 65 },
              { title: "Thinking, Fast and Slow", pct: 100 },
              { title: "The Brain That Changes Itself", pct: 30 },
            ].map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "30px", height: "38px", background: i === 0 ? "#D4B8A8" : i === 1 ? "#9DB89A" : "#A8A8C4", borderRadius: "3px", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "12px", fontWeight: 500, color: dark }}>{b.title}</div>
                  <div style={{ height: "2px", background: "#F0EBE4", borderRadius: "99px", marginTop: "6px" }}>
                    <div style={{ height: "100%", background: b.pct === 100 ? "#9DB89A" : accent, borderRadius: "99px", width: `${b.pct}%` }} />
                  </div>
                </div>
                <div style={{ fontSize: "10px", color: muted, flexShrink: 0 }}>{b.pct}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Curiosity — 6 cols */}
        <div style={{ gridColumn: "7 / 13", background: `linear-gradient(135deg, #F0EBE3 0%, #F5F1EB 100%)`, borderRadius: "16px", padding: "20px", border: `1px solid ${cardBorder}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: muted, marginBottom: "14px" }}>Curiosity Inbox</div>
          {[
            { title: "The Architecture of Memory", tag: "Neuroscience", priority: "high" },
            { title: "Grid cells and spatial cognition", tag: "Neuroscience", priority: "high" },
            { title: "Wabi-Sabi in Modern UI", tag: "Design", priority: "medium" },
          ].map((c, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: i < 2 ? `1px solid ${cardBorder}` : "none" }}>
              <div style={{ fontSize: "12px", color: dark, fontWeight: 500 }}>{c.title}</div>
              <div style={{ fontSize: "9px", color: c.priority === "high" ? "#C4956A" : muted, letterSpacing: "0.08em", textTransform: "uppercase", flexShrink: 0, marginLeft: "8px" }}>{c.tag}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom floating dock */}
      <div style={{ position: "fixed", bottom: "24px", left: "50%", transform: "translateX(-50%)", background: "rgba(28, 26, 23, 0.88)", backdropFilter: "blur(20px)", borderRadius: "999px", padding: "10px 24px", display: "flex", gap: "6px", zIndex: 10, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
        {[
          { label: "Dashboard", active: true, emoji: "⊙" },
          { label: "Study", active: false, emoji: "⏱" },
          { label: "Reading", active: false, emoji: "📖" },
          { label: "Curiosity", active: false, emoji: "✦" },
          { label: "Projects", active: false, emoji: "◈" },
          { label: "Research", active: false, emoji: "⬡" },
          { label: "Review", active: false, emoji: "◎" },
        ].map(({ label, active, emoji }) => (
          <div
            key={label}
            style={{ padding: "6px 14px", borderRadius: "999px", background: active ? "rgba(196,149,106,0.25)" : "transparent", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", transition: "all 0.15s" }}
          >
            <span style={{ fontSize: "12px", color: active ? accent : "rgba(255,255,255,0.45)" }}>{emoji}</span>
            <span style={{ fontSize: "11px", color: active ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.45)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

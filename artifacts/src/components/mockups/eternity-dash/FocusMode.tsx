import { useState } from "react";

export function FocusMode() {
  const [checked, setChecked] = useState<Set<number>>(new Set([1]));

  const toggleCheck = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "#F9F6F1", color: "#1A1816", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}
    >
      {/* Floating navigation pill */}
      <div style={{ position: "fixed", top: "24px", left: "50%", transform: "translateX(-50%)", background: "rgba(26,24,22,0.06)", backdropFilter: "blur(12px)", borderRadius: "999px", padding: "8px 20px", display: "flex", gap: "20px", zIndex: 10 }}>
        {["Study", "Reading", "Curiosity", "Projects", "Research"].map((label) => (
          <span key={label} style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B6158", cursor: "pointer", whiteSpace: "nowrap" }}>{label}</span>
        ))}
      </div>

      {/* Content — narrow column */}
      <div style={{ width: "100%", maxWidth: "560px", padding: "104px 24px 80px" }}>

        {/* Wordmark */}
        <div style={{ fontFamily: "Georgia, serif", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9C8875", marginBottom: "72px", textAlign: "center" }}>Eternity.</div>

        {/* Greeting */}
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "42px", lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.02em" }}>
            Good morning,<br />Eleanor.
          </div>
          <div style={{ fontSize: "14px", color: "#9C8875", marginTop: "10px", letterSpacing: "0.02em" }}>Tuesday, 23 June 2026</div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "#E6E0D8", margin: "40px 0" }} />

        {/* Today's focus */}
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9C8875", marginBottom: "24px" }}>Today's Focus</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              "Read Chapter 4 of 'The Dispossessed'",
              "Draft thesis statement for Art History",
              "Review Neuroscience flashcards",
            ].map((task, i) => (
              <div
                key={i}
                onClick={() => toggleCheck(i)}
                style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "14px 0", borderBottom: "1px solid #EDE8E1", cursor: "pointer", userSelect: "none" }}
              >
                <div style={{
                  width: "18px", height: "18px", borderRadius: "50%", marginTop: "1px", flexShrink: 0,
                  border: checked.has(i) ? "none" : "1.5px solid #C4BAB0",
                  background: checked.has(i) ? "#9C8875" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.15s"
                }}>
                  {checked.has(i) && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.8 7L9 1" stroke="#F9F6F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span style={{ fontFamily: "Georgia, serif", fontSize: "16px", lineHeight: 1.5, color: checked.has(i) ? "#9C8875" : "#1A1816", textDecoration: checked.has(i) ? "line-through" : "none", transition: "all 0.15s" }}>
                  {task}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "#E6E0D8", margin: "40px 0" }} />

        {/* Reflection quote */}
        <div style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.7, color: "#6B6158", fontStyle: "italic", paddingLeft: "20px", borderLeft: "2px solid #D4C8BE" }}>
          "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
          <div style={{ fontStyle: "normal", fontSize: "12px", marginTop: "10px", color: "#9C8875", letterSpacing: "0.06em" }}>— Brian Herbert</div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "#E6E0D8", margin: "40px 0" }} />

        {/* Week at a glance — very minimal */}
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9C8875", marginBottom: "20px" }}>Week at a glance</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
            {[
              { value: "25.5h", label: "studied" },
              { value: "12d", label: "streak" },
              { value: "3", label: "reading" },
              { value: "2", label: "active projects" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "0 0 0", borderRight: i < 3 ? "1px solid #E6E0D8" : "none", paddingRight: i < 3 ? "20px" : "0", paddingLeft: i > 0 ? "20px" : "0", textAlign: i === 3 ? "right" : "left" }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "26px", fontWeight: 400, letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ fontSize: "11px", color: "#9C8875", marginTop: "3px", letterSpacing: "0.04em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "#E6E0D8", margin: "40px 0" }} />

        {/* Mini bar chart */}
        <div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9C8875", marginBottom: "16px" }}>Study rhythm</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "48px" }}>
          {[3.5, 5, 2, 6, 4.5, 1.5, 3].map((h, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <div style={{ width: "100%", background: i === 3 ? "#9C8875" : "#D8D0C8", borderRadius: "2px 2px 0 0", height: `${(h / 6) * 100}%` }} />
              <span style={{ fontSize: "9px", color: "#B8AFA8", letterSpacing: "0.04em" }}>{["M","T","W","T","F","S","S"][i]}</span>
            </div>
          ))}
        </div>

        {/* Wordmark footer */}
        <div style={{ marginTop: "72px", textAlign: "center", fontSize: "11px", color: "#C4BAB0", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Eternity · Personal Study Journal
        </div>
      </div>
    </div>
  );
}

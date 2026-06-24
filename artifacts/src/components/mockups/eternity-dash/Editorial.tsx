export function Editorial() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#FAF7F2", fontFamily: "'Georgia', 'Times New Roman', serif", color: "#2C2A27" }}
    >
      {/* Masthead */}
      <header style={{ borderBottom: "2px solid #2C2A27", padding: "0 48px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0 10px" }}>
          <div style={{ display: "flex", gap: "28px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7A7268" }}>
            <span style={{ cursor: "pointer" }}>Study</span>
            <span style={{ cursor: "pointer" }}>Reading</span>
            <span style={{ cursor: "pointer" }}>Curiosity</span>
            <span style={{ cursor: "pointer" }}>Projects</span>
            <span style={{ cursor: "pointer" }}>Research</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>Eternity.</div>
            <div style={{ fontSize: "10px", letterSpacing: "0.18em", color: "#7A7268", textTransform: "uppercase", marginTop: "2px" }}>Personal Academic Record</div>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <span style={{ color: "#7A7268" }}>Tuesday, June 23rd</span>
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#D4B8A8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 600 }}>E</div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #D4C8BE", paddingTop: "10px", paddingBottom: "10px", display: "flex", gap: "28px", fontSize: "11px", color: "#7A7268", letterSpacing: "0.06em" }}>
          <span>12-day streak</span>
          <span style={{ color: "#D4C8BE" }}>|</span>
          <span>4 books read</span>
          <span style={{ color: "#D4C8BE" }}>|</span>
          <span>28 tasks done</span>
          <span style={{ color: "#D4C8BE" }}>|</span>
          <span>15 sessions this week</span>
        </div>
      </header>

      {/* Headline Banner */}
      <div style={{ padding: "40px 48px 0", borderBottom: "1px solid #D4C8BE", paddingBottom: "32px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#A8896E", marginBottom: "12px" }}>Today's Edition</div>
        <h1 style={{ fontSize: "58px", lineHeight: 1.05, fontWeight: 400, maxWidth: "760px", letterSpacing: "-0.02em" }}>
          Good morning,<br />Eleanor.
        </h1>
        <p style={{ fontSize: "17px", color: "#7A7268", marginTop: "16px", maxWidth: "480px", lineHeight: 1.6, fontStyle: "italic" }}>
          "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
        </p>
        <div style={{ fontSize: "12px", color: "#A8896E", marginTop: "8px", letterSpacing: "0.04em" }}>— Brian Herbert</div>
      </div>

      {/* 3-Column Editorial Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2px 1.4fr 2px 1fr", gap: 0, padding: "32px 48px", alignItems: "start" }}>
        {/* Column 1: Today's Focus */}
        <div style={{ paddingRight: "32px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A8896E", marginBottom: "14px", borderBottom: "1px solid #D4C8BE", paddingBottom: "8px" }}>Today's Focus</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { text: "Read Chapter 4 of 'The Dispossessed'", done: false },
              { text: "Draft thesis statement for Art History", done: true },
              { text: "Review Neuroscience flashcards", done: false },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "14px", height: "14px", border: item.done ? "none" : "1px solid #9C8875", borderRadius: "2px", marginTop: "2px", flexShrink: 0, background: item.done ? "#9C8875" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.done && <div style={{ color: "#FAF7F2", fontSize: "9px", fontWeight: 600 }}>✓</div>}
                </div>
                <span style={{ fontSize: "14px", lineHeight: 1.5, textDecoration: item.done ? "line-through" : "none", color: item.done ? "#A8896E" : "#2C2A27" }}>{item.text}</span>
              </div>
            ))}
          </div>

          <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A8896E", margin: "28px 0 14px", borderBottom: "1px solid #D4C8BE", paddingBottom: "8px" }}>This Week</div>
          {[
            { subject: "Neuroscience", hours: 11 },
            { subject: "Art History", hours: 7 },
            { subject: "Literature", hours: 4.5 },
            { subject: "Philosophy", hours: 3 },
          ].map((s) => (
            <div key={s.subject} style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                <span>{s.subject}</span>
                <span style={{ color: "#9C8875" }}>{s.hours}h</span>
              </div>
              <div style={{ height: "2px", background: "#EDE8E1" }}>
                <div style={{ height: "100%", background: "#9C8875", width: `${(s.hours / 12) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Rule */}
        <div style={{ background: "#D4C8BE", alignSelf: "stretch" }} />

        {/* Column 2: Main Story */}
        <div style={{ padding: "0 36px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A8896E", marginBottom: "14px", borderBottom: "1px solid #D4C8BE", paddingBottom: "8px" }}>Recent Sessions</div>
          {[
            { subject: "Neuroscience", topic: "Synaptic plasticity & LTP", duration: "90 min", date: "Today" },
            { subject: "Art History", topic: "Baroque & the Counter-Reformation", duration: "50 min", date: "Today" },
            { subject: "Literature", topic: "The Dispossessed — anarchist themes", duration: "45 min", date: "Yesterday" },
            { subject: "Philosophy", topic: "Kierkegaard — stages of existence", duration: "60 min", date: "Mon" },
          ].map((s, i) => (
            <div key={i} style={{ borderBottom: i < 3 ? "1px solid #EDE8E1" : "none", paddingBottom: "16px", marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "-0.01em" }}>{s.subject}</div>
                  <div style={{ fontSize: "13px", color: "#7A7268", marginTop: "2px", fontStyle: "italic" }}>{s.topic}</div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "12px" }}>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "#9C8875" }}>{s.duration}</div>
                  <div style={{ fontSize: "11px", color: "#A8896E", marginTop: "2px" }}>{s.date}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Bar chart */}
          <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A8896E", marginBottom: "14px", borderBottom: "1px solid #D4C8BE", paddingBottom: "8px", marginTop: "8px" }}>Weekly Study Chart</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "72px" }}>
            {[3.5, 5, 2, 6, 4.5, 1.5, 3].map((h, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <div style={{ width: "100%", background: "#D4B8A8", borderRadius: "2px 2px 0 0", height: `${(h / 6) * 100}%` }} />
                <span style={{ fontSize: "10px", color: "#A8896E" }}>{["M","T","W","T","F","S","S"][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Rule */}
        <div style={{ background: "#D4C8BE", alignSelf: "stretch" }} />

        {/* Column 3: Sidebar stories */}
        <div style={{ paddingLeft: "32px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A8896E", marginBottom: "14px", borderBottom: "1px solid #D4C8BE", paddingBottom: "8px" }}>Currently Reading</div>
          {[
            { title: "The Secret History", author: "Donna Tartt", pct: 65 },
            { title: "Thinking, Fast and Slow", author: "Kahneman", pct: 100 },
            { title: "Synaptic Plasticity (Kandel)", author: "Journal Paper", pct: 55 },
          ].map((b, i) => (
            <div key={i} style={{ marginBottom: "18px" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.3 }}>{b.title}</div>
              <div style={{ fontSize: "12px", color: "#7A7268", fontStyle: "italic", marginTop: "2px" }}>{b.author}</div>
              <div style={{ height: "1px", background: "#EDE8E1", marginTop: "8px" }}>
                <div style={{ height: "100%", background: b.pct === 100 ? "#9C8875" : "#C4A882", width: `${b.pct}%` }} />
              </div>
              <div style={{ fontSize: "10px", color: "#A8896E", marginTop: "3px", textAlign: "right" }}>{b.pct}%</div>
            </div>
          ))}

          <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A8896E", margin: "20px 0 14px", borderBottom: "1px solid #D4C8BE", paddingBottom: "8px" }}>Curiosity Inbox</div>
          {[
            { title: "The Architecture of Memory", tag: "Neuroscience" },
            { title: "Grid cells and spatial cognition", tag: "Neuroscience" },
            { title: "Wigner's Unreasonable Effectiveness", tag: "Mathematics" },
          ].map((c, i) => (
            <div key={i} style={{ marginBottom: "14px" }}>
              <div style={{ fontSize: "13px", lineHeight: 1.4 }}>{c.title}</div>
              <div style={{ fontSize: "10px", color: "#A8896E", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "3px" }}>{c.tag}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer rule */}
      <div style={{ margin: "0 48px", borderTop: "2px solid #2C2A27", padding: "12px 0", display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#A8896E", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        <span>Eternity Personal Academic Record</span>
        <span>Vol. 1, No. 1 · June 23rd 2026</span>
      </div>
    </div>
  );
}

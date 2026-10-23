const linkStyle = { color: '#E9E5DF', textDecoration: 'none', fontWeight: 600 };
const ruleStyle = { width: 1, height: 14, background: 'rgba(233,229,223,0.45)', flex: 'none' };

export default function LegalLinks() {
  return (
    <nav aria-label="Policies" style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a>
      <span aria-hidden="true" style={ruleStyle} />
      <a href="/ai-policy" style={linkStyle}>AI Policy</a>
      <span aria-hidden="true" style={ruleStyle} />
      <a href="/ai-readiness" style={linkStyle}>AI Readiness</a>
    </nav>
  );
}

export default function SectionLabel({ children, color = '#5170ff' }) {
  return (
    <p className="section-label" style={{ color }}>
      {children}
    </p>
  );
}

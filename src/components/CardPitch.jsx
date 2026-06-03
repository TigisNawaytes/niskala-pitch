export default function CardPitch({ children, className = '', accentColor, variant = 'default' }) {
  const elevatedStyle = variant === 'elevated'
    ? {
        boxShadow: accentColor
          ? `0 8px 32px -8px ${accentColor}18, 0 2px 8px -4px rgba(0,0,0,0.04)`
          : '0 8px 32px -8px rgba(0,0,0,0.08), 0 2px 8px -4px rgba(0,0,0,0.03)',
      }
    : {};

  const hoverStyle = accentColor
    ? { '--card-accent': accentColor }
    : {};

  return (
    <div
      className={`card-pitch ${className}`}
      style={{
        ...(accentColor ? { borderLeft: `3px solid ${accentColor}` } : {}),
        ...elevatedStyle,
        ...hoverStyle,
      }}
    >
      {children}
    </div>
  );
}

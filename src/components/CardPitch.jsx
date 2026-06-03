export default function CardPitch({ children, className = '', accentColor, title, subtitle, headerRight }) {
  const shadowColor = accentColor || 'rgba(81,112,255,0.08)';
  const borderColor = accentColor ? accentColor.replace(')', ',0.10)').replace('rgb', 'rgba') : 'rgba(81,112,255,0.10)';
  
  return (
    <div
      className={`relative rounded-xl p-px overflow-hidden h-full ${className}`}
      style={{ boxShadow: `0 0 0 1px ${borderColor}, 0 4px 16px -4px ${shadowColor}` }}
    >
      <div className="relative bg-[var(--card)] rounded-xl text-left overflow-hidden h-full flex flex-col">
        {(title || headerRight) && (
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--border)] bg-[var(--muted)] flex-shrink-0">
            {title && (
              <span className="text-[11px] font-mono text-[var(--muted-foreground)]">{title}</span>
            )}
            {headerRight && (
              <div className="ml-auto">{headerRight}</div>
            )}
          </div>
        )}
        <div className="relative p-5 sm:p-6 flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

import styles from './CalculatorLayout.module.css';

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-success)" aria-hidden>
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
    </svg>
  );
}

function IconWa() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
    </svg>
  );
}

export function CalculatorLayout({
  headerTitle,
  subtitle,
  scope,
  leftContent,
  rightContent,
  whatsappText,
  onShareWhatsApp,
  className = '',
}) {
  return (
    <article className={`${styles.card} ${className}`}>
      <header className={styles.header}>
        {scope && <span className={styles.scope}>{scope}</span>}
        <h1>{headerTitle}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </header>

      <div className={styles.body}>
        <div className={styles.left}>{leftContent}</div>
        <div className={styles.right}>{rightContent}</div>
      </div>

      <footer className={styles.footer}>
        <IconShield />
        <span>Cálculo profesional · Precisión ±2% · Listo para obra</span>
      </footer>
    </article>
  );
}

export function ActionButtons({ onShareWhatsApp, whatsappText, onCopyLink }) {
  return (
    <div className={styles.actions}>
      {onShareWhatsApp && (
        <button type="button" className={styles.btnWa} onClick={onShareWhatsApp}>
          <IconWa />
          Compartir por WhatsApp
        </button>
      )}
      {onCopyLink && (
        <button type="button" className={styles.btnGhost} onClick={onCopyLink}>
          <IconShare />
          {onCopyLink.copied ? '¡Enlace copiado!' : 'Copiar enlace'}
        </button>
      )}
    </div>
  );
}

export function SummaryBar({ items }) {
  return (
    <dl className={styles.summaryBar}>
      {items.map((item, index) => (
        <div key={index} className={styles.summaryCell}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
          {item.sub && <span className={styles.summarySub}>{item.sub}</span>}
        </div>
      ))}
    </dl>
  );
}

export function FormulaBox({ formula, labels }) {
  return (
    <div className={styles.formulaBox}>
      <span className={styles.formulaNums}>{ {formula}</span>
      {labels && (
        <div className={styles.formulaLabels}>
          {labels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export function TipCard({ title, text, badgeText }) {
  return (
    <div className={styles.tipCard}>
      <div className={styles.tipHead}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#ca8a04" aria-hidden>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" />
        </svg>
        <div>
          <strong>{title}</strong>
          <p>{text}</p>
        </div>
      </div>
      {badgeText && (
        <spanspan className={styles.pillIncluded}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          {badge]
        </span>
      )}
    </div>
  );
}

import ubicaciones from '../../data/ubicaciones.json';
import styles from './StoreFooter.module.css';

function IconMapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

const ACCENTS = [
  { bar: '#3b82f6', glow: 'rgba(59,130,246,0.15)', badge: '#3b82f6' },
  { bar: '#10b981', glow: 'rgba(16,185,129,0.15)', badge: '#10b981' },
  { bar: '#f59e0b', glow: 'rgba(245,158,11,0.15)', badge: '#f59e0b' },
];

export function StoreFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.headingIcon}>
            <IconMapPin />
          </span>
          <div>
            <span className={styles.headingTitle}>Visítanos</span>
            <span className={styles.headingSub}>3 tiendas físicas en Chimbote</span>
          </div>
        </div>

        <div className={styles.grid}>
          {ubicaciones.map((tienda, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <div
                key={tienda.id}
                className={styles.card}
                style={{
                  '--accent-bar': accent.bar,
                  '--accent-glow': accent.glow,
                  '--i': i,
                }}
              >
                <div className={styles.cardBar} />
                <div className={styles.cardContent}>
                  <div className={styles.cardTop}>
                    <span className={styles.badge} style={{ background: accent.badge }}>
                      {tienda.ciudad === 'Nuevo Chimbote' ? 'Nvo. Chimbote' : tienda.ciudad}
                    </span>
                    <span className={styles.pin}><IconMapPin /></span>
                  </div>
                  <p className={styles.address}>{tienda.direccion}</p>
                  {tienda.referencia && (
                    <p className={styles.ref}>{tienda.referencia}</p>
                  )}
                  <div className={styles.meta}>
                    <a href={`tel:${tienda.telefono}`} className={styles.metaLink}>
                      <IconPhone /> {tienda.telefono}
                    </a>
                    <span className={styles.metaItem}>
                      <IconClock /> {tienda.horario}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.bottom}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
        <span>© {new Date().getFullYear()} Metal Dryll · Todos los derechos reservados</span>
      </div>
    </footer>
  );
}

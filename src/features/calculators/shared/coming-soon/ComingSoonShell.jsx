import styles from './ComingSoonShell.module.css';

/**
 * @param {{
 *   title: string
 *   scope: string
 *   description: string
 *   bullets: string[]
 * }} props
 */
export function ComingSoonShell({ title, scope, description, bullets }) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <span className={styles.scope}>{scope}</span>
        <h1>{title}</h1>
        <p className={styles.subtitle}>{description}</p>
      </header>
      <div className={styles.body}>
        <div className={styles.panel}>
          <p className={styles.sectionTitle}>En esta herramienta podrás</p>
          <ul className={styles.list}>
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className={styles.badge}>Aquí conectaremos tu lógica de cálculo cuando la tengas lista.</div>
        </div>
        <div className={styles.panelAlt}>
          <p className={styles.sectionTitle}>Área de trabajo</p>
          <div className={styles.placeholderBox}>
            <strong>Detalle del cálculo pendiente</strong>
            <span>
              Los insumos (dimensiones, separación de montantes, tipo de placa, etc.) y el resultado aparecerán
              aquí en la misma línea visual que el resto de la app.
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

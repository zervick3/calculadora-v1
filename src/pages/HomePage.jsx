import { calculatorRoutes } from '../features/calculators/registry';
import styles from './HomePage.module.css';

function IconArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <img src="/logometaldryll.png" alt="Metal Dryll" className={styles.logo} />
        <h1 className={styles.title}>Metal Dryll</h1>
        <p className={styles.subtitle}>Selecciona una calculadora del menú lateral</p>
      </div>
      
      <div className={styles.cards}>
        {calculatorRoutes.slice(0, 3).map((calc) => (
          <div key={calc.id} className={styles.cardPreview}>
            <div className={styles.cardIcon}>
              <IconArrow />
            </div>
            <div className={styles.cardInfo}>
              <span className={styles.cardLabel}>{calc.label}</span>
              <span className={styles.cardSub}>{calc.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
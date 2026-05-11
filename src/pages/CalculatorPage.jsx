import { Navigate, useParams } from 'react-router-dom';
import { calculatorRoutes } from '../features/calculators/registry';
import styles from './CalculatorPage.module.css';

export function CalculatorPage() {
  const { calculatorId } = useParams();
  const entry = calculatorRoutes.find((c) => c.id === calculatorId);

  if (!entry) {
    const fallback = calculatorRoutes[0]?.id ?? 'tabique-estandar';
    return <Navigate to={`/c/${fallback}`} replace />;
  }

  const { Component } = entry;
  return (
    <div key={calculatorId} className={styles.wrapper}>
      <Component />
    </div>
  );
}

import { Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from '../shell/AppShell';
import { CalculatorPage } from '../pages/CalculatorPage';
import { HomePage } from '../pages/HomePage';
import { calculatorRoutes } from '../features/calculators/registry';

export default function App() {
  const defaultId = calculatorRoutes[0]?.id ?? 'tabique-estandar';

  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="c/:calculatorId" element={<CalculatorPage />} />
      </Route>
      <Route path="*" element={<Navigate to={`/c/${defaultId}`} replace />} />
    </Routes>
  );
}
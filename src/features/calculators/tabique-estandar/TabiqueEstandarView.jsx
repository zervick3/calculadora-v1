import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { calcTabiqueEstandar, PLANCHA_FACTOR_M2 } from './calcTabiqueEstandar';
import { TablaResultadoSt } from './TablaResultadoSt';
import { InstallationDiagram } from './InstallationDiagram';
import styles from './TabiqueEstandarView.module.css';

function IconRuler() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20V4l16 16H4z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 4v4M12 4v2M16 4v4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

function IconBulb() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ca8a04" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.93l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
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

/** Ruta: /c/tabique-estandar — tabique estándar interior */
export function TabiqueEstandarView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const areaParam = searchParams.get('area');

  const [area, setArea] = useState(() =>
    areaParam != null && !Number.isNaN(Number(areaParam)) ? Number(areaParam) : 10
  );
  const [wastePct, setWastePct] = useState(10);
  const [copyDone, setCopyDone] = useState(false);

  const results = useMemo(() => calcTabiqueEstandar(area * (1 + wastePct / 100)), [area, wastePct]);

  const shareWhatsApp = () => {
    const divider = '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━';
    const materials = results ? Object.entries(results).map(([k, v]) => `• ${k}: ${v} uds`).join('\n') : 'Sin resultados';
    const text = [
      '📋 CÁLCULO DE MATERIALES - METALDRYLL',
      divider,
      `🏠 Tipo: Tabique Estándar`,
      `📐 Área: ${area} m²`,
      `📊 Desperdicio: ${wastePct}%`,
      divider,
      '📦 MATERIALES:',
      materials,
      divider,
      '✨ Generado con Calculadora MetalDryll',
      'https://drywalll-peru-calculadora.netlify.app/',
    ].join('\n');
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const copyLink = async () => {
    const u = new URL(window.location.href);
    u.searchParams.set('area', String(area));
    u.searchParams.set('waste', String(wastePct));
    try {
      await navigator.clipboard.writeText(u.toString());
      setSearchParams(u.searchParams, { replace: true });
      setCopyDone(true);
      setTimeout(() => setCopyDone(false), 2000);
    } catch {
      setCopyDone(false);
    }
  };

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h1>Tabique estándar</h1>
        <p className={styles.subtitle}>
          <span className={styles.dot} />
          Interior — tabiquería drywall
          <span className={styles.dot} />
        </p>
      </header>

      <div className={styles.body}>
        <div className={styles.left}>
          <p className={styles.stepLabel}>Paso 1 · Ingresa el área del tabique</p>
          <div className={styles.inputsRow}>
            <div className={styles.field}>
              <label htmlFor="tabique-area">Superficie (m²)</label>
              <div className={styles.inputWrap}>
                <IconRuler />
                <input
                  id="tabique-area"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="0.01"
                  value={area || ''}
                  onChange={(e) => setArea(parseFloat(e.target.value) || 0)}
                />
              </div>
            </div>
          </div>
          <div className={styles.badgeLive}>
            <IconCheck />
            Cálculo en tiempo real · Listo para cuando afinemos la lógica
          </div>

          <p className={styles.stepLabel} style={{ marginTop: 22 }}>
            Paso 2 · Confirma el formato
          </p>
          <div className={styles.formatCard}>
            <div className={styles.formatThumb}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="2" fill="#cbd5e1" stroke="#64748b" />
                <path d="M3 9h18M3 15h18M9 3v18M15 3v18" stroke="#64748b" strokeWidth="0.8" />
              </svg>
            </div>
            <div className={styles.formatBody}>
              <h3>Plancha estándar {PLANCHA_FACTOR_M2} m²</h3>
              <span className={styles.tag}>Formato drywall</span>
            </div>
            <span className={styles.checkFmt} aria-hidden>
              <IconCheck />
            </span>
          </div>
          <div className={styles.infoBlue}>
            <span aria-hidden>ⓘ</span>
            <span>Tabiques interiores · estructura metálica con planchas de yeso-cartón estándar</span>
          </div>

          <div className={styles.tipCard}>
            <div className={styles.tipHead}>
              <IconBulb />
              <div>
                <strong>Consejo del ingeniero</strong>
                <p>Incluye un porcentaje de desperdicio por cortes y ajuste al perímetro. Los coeficientes son los de tu implementación previa.</p>
              </div>
            </div>
            <span className={styles.pillIncluded}>
              <IconCheck /> ¡Configurable abajo!
            </span>
          </div>

          <div className={styles.tech}>
            <div className={styles.techTitle}>
              <IconGear /> Parámetros técnicos
            </div>
            <ul>
              <li>Base plancha: <strong>{PLANCHA_FACTOR_M2} m²</strong></li>
              <li>Desperdicio estimado: {wastePct}%</li>
              <li>Coeficientes: parante 0,8×m², riel 0,35×m²</li>
            </ul>
          </div>

          <details className={styles.advanced}>
            <summary>Opciones avanzadas</summary>
            <div className={`${styles.field} ${styles.wasteField}`}>
              <label htmlFor="tabique-waste">Desperdicio (%)</label>
              <div className={styles.inputWrap}>
                <input
                  id="tabique-waste"
                  type="number"
                  min="0"
                  max="50"
                  step="1"
                  value={wastePct}
                  onChange={(e) => setWastePct(parseInt(e.target.value, 10) || 0)}
                />
              </div>
            </div>
          </details>

          <div className={styles.footerBadge}>
            <IconShield />
            Cálculo profesional · Precisión ±2% · Listo para obra
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.previewHead}>Resultado del cálculo (en tiempo real)</p>
          {results ? (
            <TablaResultadoSt {...results} />
          ) : (
            <p className={styles.infoBlue}>Ingresa un área válida para ver los resultados</p>
          )}

          {/* Diagrama de instalación */}
          <InstallationDiagram areaM2={area} />

          <div className={styles.formulaBox}>
            <span className={styles.formulaNums}>
              Área: {area.toFixed(2)} m² + {wastePct}% desperdicio = {(area * (1 + wastePct / 100)).toFixed(2)} m²
            </span>
            <div className={styles.formulaLabels}>
              <span>Área base</span>
              <span>+ desperdicio</span>
              <span>Área total</span>
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.btnWa} onClick={shareWhatsApp}>
              <IconWa />
              Compartir por WhatsApp
            </button>
            <button type="button" className={styles.btnGhost} onClick={copyLink}>
              <IconShare />
              {copyDone ? '¡Enlace copiado!' : 'Copiar enlace'}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

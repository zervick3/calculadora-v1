import styles from './InstallationDiagram.module.css';

const PLANCHAS_ANCHO = 1.22;
const PLANCHAS_ALTO = 2.44;
const PLANCHAS_AREA = PLANCHAS_ANCHO * PLANCHAS_ALTO;

function IconWall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconRuler() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20V4l16 16H4z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 4v4M12 4v2M16 4v4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Calcula las dimensiones sugeridas del muro basadas en el área
 * Asume una proporción razonable para tabiques interiores
 */
function calcularDimensionesMuro(area) {
  if (area <= 0) return { ancho: 0, alto: 2.44 };

  // Para áreas pequeñas, asumir muro de una sola plancha de alto
  if (area <= 3) {
    return { ancho: area / 2.44, alto: 2.44 };
  }

  // Para áreas medianas, asumir muro estándar de 2.44m de alto
  if (area <= 12) {
    return { ancho: area / 2.44, alto: 2.44 };
  }

  // Para áreas grandes, distribuir en proporción más cuadrada
  const ancho = Math.sqrt(area * 1.5);
  const alto = area / ancho;
  return {
    ancho: Math.min(ancho, 12),
    alto: Math.max(alto, 2.44),
  };
}

/**
 * Calcula número de parantes necesarios
 * Separación típica: 0.40m o 0.61m (16" o 24" on-center)
 */
function calcularParantes(anchoMuro) {
  if (anchoMuro <= 0) return [];

  const separacion = anchoMuro <= 4 ? 0.40 : 0.61;
  const numParantes = Math.ceil(anchoMuro / separacion) + 1;
  const parantes = [];

  for (let i = 0; i < numParantes; i++) {
    parantes.push({
      posicion: (i * anchoMuro) / (numParantes - 1),
      index: i,
    });
  }

  return { parantes, separacion, numParantes };
}

/**
 * Calcula distribución de planchas con patrón de ladrillo (trabado)
 * Las planchas se colocan horizontalmente (1.22m ancho x 2.44m alto)
 * Las filas alternas se desplazan 50% para lograr el patrón de ladrillo
 */
function calcularPlanchas(anchoMuro, altoMuro) {
  if (anchoMuro <= 0 || altoMuro <= 0) return [];

  // Plancha acostada: 2.44m de largo x 1.22m de alto (como se instala en obra)
  const planchaLargo = 2.44;
  const planchaAlto = 1.22;

  const filas = Math.ceil(altoMuro / planchaAlto);
  const planchas = [];

  for (let fila = 0; fila < filas; fila++) {
    const yBase = fila * planchaAlto;
    // Desplazamiento de 50% para filas impias (patrón ladrillo)
    const desplazamiento = fila % 2 === 1 ? planchaLargo / 2 : 0;

    // Calcular cuántas planchas necesitamos en esta fila
    const inicio = -desplazamiento;
    const fin = anchoMuro;
    let col = 0;

    for (let x = inicio; x < fin; x += planchaLargo) {
      const xInicio = Math.max(0, x);
      const xFin = Math.min(x + planchaLargo, anchoMuro);
      const w = xFin - xInicio;

      if (w > 0.05) {
        const yInicio = yBase;
        const yFin = Math.min(yBase + planchaAlto, altoMuro);
        const h = yFin - yInicio;

        if (h > 0.05) {
          const esRecorte = w < planchaLargo - 0.05 || h < planchaAlto - 0.05 || x < 0;
          planchas.push({
            x: xInicio,
            y: yInicio,
            w,
            h,
            esRecorte,
            fila,
            col,
            id: `plancha-${fila}-${col}`,
          });
        }
      }
      col++;
    }
  }

  return { planchas, numPlanchas: planchas.length };
}

export function InstallationDiagram({ areaM2 }) {
  const dimensiones = calcularDimensionesMuro(areaM2);
  const { parantes, separacion, numParantes } = calcularParantes(dimensiones.ancho);
  const { planchas, numPlanchas } = calcularPlanchas(dimensiones.ancho, dimensiones.alto);

  // Configuración del SVG
  const VIEW_W = 500;
  const VIEW_H = 320;
  const PAD = 50;
  const WALL_MAX_W = VIEW_W - PAD * 2;
  const WALL_MAX_H = VIEW_H - PAD * 2;

  const aspectRatio = dimensiones.ancho / dimensiones.alto;
  let wallW, wallH;

  if (aspectRatio >= WALL_MAX_W / WALL_MAX_H) {
    wallW = WALL_MAX_W;
    wallH = wallW / aspectRatio;
  } else {
    wallH = WALL_MAX_H;
    wallW = wallH * aspectRatio;
  }

  const wallX = (VIEW_W - wallW) / 2;
  const wallY = (VIEW_H - wallH) / 2;
  const scaleX = wallW / dimensiones.ancho;
  const scaleY = wallH / dimensiones.alto;

  // Si el área es muy pequeña o inválida, mostrar placeholder
  if (areaM2 <= 0 || !Number.isFinite(areaM2)) {
    return (
      <div className={styles.wrap}>
        <div className={styles.placeholder}>
          <IconWall />
          <p>Ingresa un área válida para ver el diagrama de instalación</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <IconRuler />
        <span>
          Diagrama de instalación · {areaM2.toFixed(1)} m²
        </span>
      </div>

      <div className={styles.wrap}>
        <svg className={styles.svg} viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} role="img" aria-label={`Diagrama de instalación para ${areaM2.toFixed(1)} metros cuadrados`}>
          <defs>
            {/* Sombra para parantes */}
            <filter id="studShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* Fondo del área de dibujo */}
          <rect x={wallX - 5} y={wallY - 5} width={wallW + 10} height={wallH + 10} fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" rx="4" />

          {/* Planchas */}
          {planchas.map((p) => (
            <rect
              key={p.id}
              x={wallX + p.x * scaleX}
              y={wallY + p.y * scaleY}
              width={p.w * scaleX}
              height={p.h * scaleY}
              fill={p.esRecorte ? '#e8d5b0' : '#f5f0e1'}
              stroke="#c4b896"
              strokeWidth="1.5"
            />
          ))}

          {/* Rieles (superior e inferior) - perfiles metálicos rojos delgados */}
          <line
            x1={wallX}
            y1={wallY}
            x2={wallX + wallW}
            y2={wallY}
            stroke="#dc2626"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1={wallX}
            y1={wallY + wallH}
            x2={wallX + wallW}
            y2={wallY + wallH}
            stroke="#dc2626"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Parantes - perfiles metálicos color rojo delgados */}
          {parantes.map((par, i) => (
            <g key={i}>
              <line
                x1={wallX + par.posicion * scaleX}
                y1={wallY}
                x2={wallX + par.posicion * scaleX}
                y2={wallY + wallH}
                stroke="#dc2626"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Etiqueta de separación solo para algunos parantes */}
              {i > 0 && i % Math.max(1, Math.floor(numParantes / 4)) === 0 && (
                <text
                  x={wallX + par.posicion * scaleX}
                  y={wallY - 12}
                  textAnchor="middle"
                  className={styles.paranteLabel}
                >
                  @{separacion.toFixed(2)}m
                </text>
              )}
            </g>
          ))}

          {/* Dimensiones */}
          <text x={wallX + wallW / 2} y={VIEW_H - 10} textAnchor="middle" className={styles.dimLabel}>
            {dimensiones.ancho.toFixed(2)} m
          </text>
          <text
            x={wallX - 15}
            y={wallY + wallH / 2}
            textAnchor="middle"
            transform={`rotate(-90, ${wallX - 15}, ${wallY + wallH / 2})`}
            className={styles.dimLabel}
          >
            {dimensiones.alto.toFixed(2)} m
          </text>

          {/* Leyenda de parante */}
          {numParantes > 0 && (
            <g>
              <line
                x1={wallX + parantes[Math.floor(numParantes / 2)].posicion * scaleX - 8}
                y1={wallY + wallH / 2}
                x2={wallX + parantes[Math.floor(numParantes / 2)].posicion * scaleX + 8}
                y2={wallY + wallH / 2}
                stroke="#dc2626"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <text
                x={wallX + parantes[Math.floor(numParantes / 2)].posicion * scaleX}
                y={wallY + wallH / 2 - 10}
                textAnchor="middle"
                fill="#dc2626"
                fontSize="9"
                fontWeight="700"
              >
                Parante
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Resumen de materiales */}
      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <span className={styles.summaryIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" fill="#cbd5e1" stroke="#64748b" />
            </svg>
          </span>
          <div>
            <div className={styles.summaryValue}>{numPlanchas}</div>
            <div className={styles.summaryLabel}>Planchas</div>
          </div>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="10" y="2" width="4" height="20" rx="1" fill="#64748b" />
            </svg>
          </span>
          <div>
            <div className={styles.summaryValue}>{numParantes}</div>
            <div className={styles.summaryLabel}>Parantes</div>
          </div>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="10" width="20" height="4" rx="1" fill="#64748b" />
            </svg>
          </span>
          <div>
            <div className={styles.summaryValue}>2</div>
            <div className={styles.summaryLabel}>Rieles</div>
          </div>
        </div>
      </div>

      {/* Notas de instalación */}
      <div className={styles.notes}>
        <strong>Notas de instalación:</strong>
        <ul>
          <li>Separación de parantes: <strong>{separacion.toFixed(2)} m</strong> (estándar para tabiques)</li>
          <li>Dimensiones sugeridas: <strong>{dimensiones.ancho.toFixed(2)} m × {dimensiones.alto.toFixed(2)} m</strong></li>
          <li>Planchas estándar: <strong>{PLANCHAS_ANCHO} m × {PLANCHAS_ALTO} m</strong> ({PLANCHAS_AREA.toFixed(2)} m² c/u)</li>
          <li>Incluye recortes para ajuste al perímetro</li>
        </ul>
      </div>
    </div>
  );
}

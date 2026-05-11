import styles from './TabiqueEstandarPreviewSvg.module.css';

const VIEW_W = 420;
const VIEW_H = 280;
const PAD = 44;

export function TabiqueEstandarPreviewSvg({ widthM, heightM, areaM2, boardW, boardH, studSpacingM }) {
  const W = Math.max(0.1, widthM || 0.1);
  const H = Math.max(0.1, heightM || 0.1);
  const bW = Math.max(0.2, boardW || 1.22);
  const bH = Math.max(0.2, boardH || 2.44);
  const studStep = Math.max(0.2, studSpacingM || 0.4);

  const aspect = W / H;
  let drawW;
  let drawH;
  if (aspect >= VIEW_W / VIEW_H) {
    drawW = VIEW_W - PAD;
    drawH = drawW / aspect;
  } else {
    drawH = VIEW_H - PAD;
    drawW = drawH * aspect;
  }

  const ox = (VIEW_W - drawW) / 2;
  const oy = (VIEW_H - drawH) / 2;
  const sx = drawW / W;
  const sy = drawH / H;

  const cols = Math.ceil(W / bW);
  const rows = Math.ceil(H / bH);
  const boards = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x0 = c * bW;
      const y0 = r * bH;
      const x1 = Math.min(x0 + bW, W);
      const y1 = Math.min(y0 + bH, H);
      const w = x1 - x0;
      const h = y1 - y0;
      if (w <= 0 || h <= 0) continue;
      const isCut = w < bW - 0.002 || h < bH - 0.002;
      boards.push({
        key: `${r}-${c}`,
        x: ox + x0 * sx,
        y: oy + y0 * sy,
        w: Math.max(0.5, w * sx),
        h: Math.max(0.5, h * sy),
        isCut,
      });
    }
  }

  const studs = [];
  for (let x = 0; x <= W + 0.001; x += studStep) {
    studs.push(ox + Math.min(x, W) * sx);
  }

  return (
    <div className={styles.wrap}>
      <svg className={styles.svg} viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} role="img" aria-label="Vista previa de tabique">
        <defs>
          <pattern id="boardCutHatch" patternUnits="userSpaceOnUse" width="8" height="8">
            <path d="M0,8 L8,0 M-2,2 L2,-2 M6,10 L10,6" stroke="#94a3b8" strokeWidth="0.6" opacity="0.55" />
          </pattern>
        </defs>

        <rect x={ox} y={oy} width={drawW} height={drawH} fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" rx="2" />

        {boards.map((b) => (
          <rect
            key={b.key}
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            fill={b.isCut ? 'url(#boardCutHatch)' : '#e2e8f0'}
            stroke="#94a3b8"
            strokeWidth="1"
          />
        ))}

        {studs.map((x, i) => (
          <line key={i} x1={x} y1={oy} x2={x} y2={oy + drawH} stroke="#334155" strokeWidth="1" opacity="0.65" />
        ))}

        <text x={VIEW_W / 2} y={VIEW_H / 2 + 5} textAnchor="middle" className={styles.centerLabel}>
          {areaM2.toFixed(2)} m²
        </text>
        <text x={VIEW_W / 2} y={VIEW_H / 2 + 22} textAnchor="middle" className={styles.centerSub}>
          Muro estimado
        </text>

        <text x={ox + drawW / 2} y={oy - 10} textAnchor="middle" className={styles.dimTop}>
          {widthM.toFixed(2)} m
        </text>
        <text x={ox - 12} y={oy + drawH / 2} textAnchor="middle" className={styles.dimLeft} transform={`rotate(-90, ${ox - 12}, ${oy + drawH / 2})`}>
          {heightM.toFixed(2)} m
        </text>

        <text x={VIEW_W - 8} y={VIEW_H - 10} textAnchor="end" className={styles.cutsLabel}>
          Parantes + cortes
        </text>
      </svg>
    </div>
  );
}

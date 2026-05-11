import styles from './TechoBaldosaPreviewSvg.module.css';

const VIEW_W = 420;
const VIEW_H = 280;
const PAD = 48;

export function TechoBaldosaPreviewSvg({ lengthM, widthM, netArea, tileLengthM, tileWidthM }) {
  const L = Math.max(0.01, lengthM || 0.01);
  const W = Math.max(0.01, widthM || 0.01);
  const tLen = Math.max(0.01, tileLengthM || 0.6);
  const tWid = Math.max(0.01, tileWidthM || 0.6);
  const aspect = L / W;

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
  const scaleX = drawW / L;
  const scaleY = drawH / W;

  const cols = Math.ceil(L / tLen);
  const rows = Math.ceil(W / tWid);
  const tiles = [];
  const eps = 0.002;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x0 = c * tLen;
      const y0 = r * tWid;
      const x1 = Math.min(x0 + tLen, L);
      const y1 = Math.min(y0 + tWid, W);
      const w = x1 - x0;
      const h = y1 - y0;
      if (w <= 0 || h <= 0) continue;
      const px = ox + x0 * scaleX;
      const py = oy + y0 * scaleY;
      const pw = Math.max(0.5, w * scaleX);
      const ph = Math.max(0.5, h * scaleY);
      const isCut = w < tLen - eps || h < tWid - eps;
      tiles.push({ key: `${r}-${c}`, px, py, pw, ph, isCut });
    }
  }

  const dimLeftX = ox - 12;
  const dimLeftY = oy + drawH / 2;

  return (
    <div className={styles.wrap}>
      <svg
        className={styles.svg}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="img"
        aria-label="Vista previa del techo con baldosa"
      >
        <defs>
          <pattern id="tileHatch" patternUnits="userSpaceOnUse" width="8" height="8">
            <path
              d="M0,8 L8,0 M-2,2 L2,-2 M6,10 L10,6"
              stroke="#94a3b8"
              strokeWidth="0.6"
              opacity="0.5"
            />
          </pattern>
        </defs>

        <rect
          x={ox}
          y={oy}
          width={drawW}
          height={drawH}
          fill="#f1f5f9"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          rx="2"
        />

        {tiles.map((t) => (
          <rect
            key={t.key}
            x={t.px}
            y={t.py}
            width={t.pw}
            height={t.ph}
            fill={t.isCut ? 'url(#tileHatch)' : '#e2e8f0'}
            stroke="#94a3b8"
            strokeWidth="1"
          />
        ))}

        <text x={VIEW_W / 2} y={VIEW_H / 2 + 5} textAnchor="middle" className={styles.centerLabel}>
          {netArea.toFixed(2)} m²
        </text>
        <text x={VIEW_W / 2} y={VIEW_H / 2 + 22} textAnchor="middle" className={styles.centerSub}>
          Área a cubrir
        </text>

        <text x={ox + drawW / 2} y={oy - 10} textAnchor="middle" className={styles.dimTop}>
          {lengthM.toFixed(2)} m
        </text>
        <text
          x={dimLeftX}
          y={dimLeftY}
          textAnchor="middle"
          className={styles.dimLeft}
          transform={`rotate(-90, ${dimLeftX}, ${dimLeftY})`}
        >
          {widthM.toFixed(2)} m
        </text>

        <text x={VIEW_W - 8} y={VIEW_H - 10} textAnchor="end" className={styles.cutsLabel}>
          Cortes y ajustes
        </text>
      </svg>
    </div>
  );
}

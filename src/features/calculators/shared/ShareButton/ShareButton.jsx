import styles from './ShareButton.module.css';

function formatCurrency(val) {
  const n = Number(val) || 0;
  return `S/ ${n.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function ShareButton({ calcName, area, wastePct, results, length, width, netArea }) {
  const handleGeneratePDF = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const rows = results
      ? Object.entries(results).map(
          ([k, v]) =>
            `<tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;font-size:14px;color:#334155">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;font-size:14px;font-weight:600;color:#1e293b;text-align:right">${v}</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;font-size:13px;color:#94a3b8;text-align:center">uds</td></tr>`
        )
      : '';

    const dimensionInfo = length && width
      ? `${length.toFixed(2)}m × ${width.toFixed(2)}m = ${netArea.toFixed(2)} m²`
      : `${area} m²`;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Materiales - Metaldryll</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Inter', sans-serif; background: #f8fafc; padding: 40px; color: #1a1a2e; }
          .sheet { max-width: 800px; margin: 0 auto; background: #fff; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); overflow: hidden; }
          .head { background: linear-gradient(135deg, #0b2447, #1a4b84); color: #fff; padding: 28px 36px; display: flex; align-items: center; gap: 16px; }
          .head img { height: 44px; width: auto; filter: brightness(0) invert(1); }
          .head h1 { font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
          .head p { font-size: 13px; opacity: 0.8; margin-top: 2px; }
          .body { padding: 28px 36px; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px; }
          .info-grid .fld label { font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px; }
          .info-grid .fld .val { font-size: 15px; font-weight: 600; color: #1a1a2e; }
          table { width: 100%; border-collapse: collapse; margin: 16px 0; }
          thead th { padding: 10px 12px; background: #f1f5f9; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; text-align: left; }
          thead th:last-child { text-align: center; }
          .divider { height: 1px; background: #e2e8f0; margin: 24px 0; }
          .footer-text { text-align: center; font-size: 12px; color: #94a3b8; padding: 16px 36px; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="sheet">
          <div class="head">
            <img src="/logometaldryll.png" alt="M" />
            <div>
              <h1>Metaldryll</h1>
              <p>Cálculo de materiales · ${calcName}</p>
            </div>
          </div>
          <div class="body">
            <div class="info-grid">
              <div class="fld"><label>Tipo</label><div class="val">${calcName}</div></div>
              <div class="fld"><label>Dimensión</label><div class="val">${dimensionInfo}</div></div>
              <div class="fld"><label>Desperdicio</label><div class="val">${wastePct}%</div></div>
              <div class="fld"><label>Fecha</label><div class="val">${new Date().toLocaleDateString('es-PE')}</div></div>
            </div>
            <div class="divider"></div>
            <table>
              <thead><tr><th>Material</th><th style="text-align:right">Cantidad</th><th style="text-align:center">Unidad</th></tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
          <div class="footer-text">Generado por Metaldryll · drywalll-peru-calculadora.netlify.app</div>
        </div>
        <script>window.print();</script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <button
      type="button"
      className={styles.btn}
      onClick={handleGeneratePDF}
      title="Generar PDF de materiales"
    >
      <img
        src="/logometaldryll.png"
        alt=""
        className={styles.logo}
        onError={(e) => { e.target.style.display = 'none'; }}
      />
      <span>PDF</span>
    </button>
  );
}

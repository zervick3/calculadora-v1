import { useEffect, useState } from 'react';
import styles from './BudgetModal.module.css';

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

function IconRuler() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 18l20-12" />
      <path d="M6 14l2-2" />
      <path d="M10 12l2-2" />
      <path d="M14 10l2-2" />
      <path d="M18 8l2-2" />
    </svg>
  );
}

function IconDollar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function IconFileText() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconPDF() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
      <path d="M12 9v6" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

const JOB_TYPES = [
  { id: 'drywall-techo', label: 'Drywall techo', icon: 'ceiling' },
  { id: 'drywall-pared', label: 'Drywall pared', icon: 'wall' },
  { id: 'cielo-raso', label: 'Cielo raso', icon: 'grid' },
  { id: 'divisiones', label: 'Divisiones', icon: 'columns' },
  { id: 'pintura', label: 'Pintura', icon: 'paint' },
  { id: 'electrica', label: 'Inst. eléctrica', icon: 'zap' },
  { id: 'piso-laminado', label: 'Piso laminado', icon: 'layers' },
  { id: 'remodelacion', label: 'Remodelación', icon: 'tool' },
  { id: 'otros', label: 'Otros', icon: 'more' },
];

const STATUS_OPTIONS = [
  { id: 'pendiente', label: 'Pendiente', color: '#f59e0b' },
  { id: 'aprobado', label: 'Aprobado', color: '#22c55e' },
  { id: 'en-proceso', label: 'En proceso', color: '#3b82f6' },
];

function JobIcon({ type, active }) {
  const c = active ? '#f8fafc' : '#64748b';
  switch (type) {
    case 'ceiling':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
          <path d="M2 20h20" /><path d="M6 20v-4" /><path d="M10 20v-8" /><path d="M14 20v-6" /><path d="M18 20v-3" />
        </svg>
      );
    case 'wall':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        </svg>
      );
    case 'grid':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 12h18M12 3v18" />
        </svg>
      );
    case 'columns':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
          <rect x="3" y="3" width="7" height="18" rx="1" />
          <rect x="14" y="3" width="7" height="18" rx="1" />
        </svg>
      );
    case 'paint':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case 'zap':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case 'layers':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case 'tool':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      );
  }
}

function StatusIcon({ type }) {
  switch (type) {
    case 'pendiente':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case 'aprobado':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      );
    case 'en-proceso':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
        </svg>
      );
    default:
      return null;
  }
}

function formatCurrency(val) {
  const n = Number(val) || 0;
  return `S/ ${n.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function today() {
  return new Date().toISOString().split('T')[0];
}

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

export function BudgetModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    // Maestro
    maestroNombre: '',
    maestroTelefono: '',
    maestroEmpresa: '',
    // Cliente
    clienteNombre: '',
    clienteDireccion: '',
    fecha: today(),
    fechaValidez: addDays(today(), 15),
    // Trabajo
    tipoTrabajo: '',
    // Detalles
    metrosCuadrados: '',
    costoMateriales: '',
    manoObra: '',
    adelanto: '',
    tiempoEstimado: '',
    descripcion: '',
    // Estado
    estado: 'pendiente',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const update = (field) => (e) => {
    const val = e.target.value;
    setForm((prev) => ({ ...prev, [field]: val }));
  };

  const selectJob = (id) => {
    setForm((prev) => ({ ...prev, tipoTrabajo: prev.tipoTrabajo === id ? '' : id }));
  };

  const selectStatus = (id) => {
    setForm((prev) => ({ ...prev, estado: id }));
  };

  const total = (Number(form.costoMateriales) || 0) + (Number(form.manoObra) || 0);
  const adelantoNum = Number(form.adelanto) || 0;
  const saldo = total - adelantoNum;

  const getJobLabel = (id) => JOB_TYPES.find((j) => j.id === id)?.label || '';

  const getStatusColor = (id) => {
    const s = STATUS_OPTIONS.find((st) => st.id === id);
    return s ? s.color : '#f59e0b';
  };

  const getStatusLabel = (id) => {
    const s = STATUS_OPTIONS.find((st) => st.id === id);
    return s ? s.label : 'Pendiente';
  };

  const handleWhatsApp = () => {
    const phone = form.maestroTelefono.replace(/\D/g, '');
    if (!phone) return;
    const lines = [
      `🧾 *Presupuesto Metaldryll*`,
      ``,
      `👤 *Cliente:* ${form.clienteNombre || '—'}`,
      `📍 *Dirección:* ${form.clienteDireccion || '—'}`,
      `📅 *Fecha:* ${formatDate(form.fecha)}`,
      `⏳ *Válido hasta:* ${formatDate(form.fechaValidez)}`,
      ``,
      `🔨 *Trabajo:* ${getJobLabel(form.tipoTrabajo) || '—'}`,
      `📐 *Área:* ${form.metrosCuadrados || '0'} m²`,
      ``,
      `💰 *Costo materiales:* ${formatCurrency(form.costoMateriales)}`,
      `👷 *Mano de obra:* ${formatCurrency(form.manoObra)}`,
      `━━━━━━━━━━━━━━━━━━`,
      `💵 *TOTAL:* ${formatCurrency(total)}`,
      `💸 *Adelanto:* ${formatCurrency(form.adelanto)}`,
      `📌 *Saldo:* ${formatCurrency(saldo)}`,
      ``,
      `📝 *Descripción:* ${form.descripcion || '—'}`,
      `⏱ *Tiempo estimado:* ${form.tiempoEstimado || '—'}`,
      ``,
      `📊 *Estado:* ${getStatusLabel(form.estado)}`,
      ``,
      `_Generado por Metaldryll_`,
    ];
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleGeneratePDF = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    const statusColor = getStatusColor(form.estado);
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Presupuesto - MetalDryll</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Inter', sans-serif; background: #f8fafc; padding: 40px; color: #1a1a2e; }
          .budget { max-width: 800px; margin: 0 auto; background: #fff; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); overflow: hidden; }
          .header { background: linear-gradient(135deg, #0b2447, #1a4b84); color: #fff; padding: 32px 40px; display: flex; align-items: center; gap: 20px; }
          .header h1 { font-size: 24px; font-weight: 800; letter-spacing: -0.02em; }
          .header p { font-size: 13px; opacity: 0.8; margin-top: 4px; }
          .header .logo { width: 56px; height: 56px; background: rgba(255,255,255,0.15); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 800; }
          .body { padding: 32px 40px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
          .field label { font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px; }
          .field .val { font-size: 15px; font-weight: 600; color: #1a1a2e; }
          .divider { height: 1px; background: #e2e8f0; margin: 24px 0; }
          .total-row { display: flex; justify-content: space-between; align-items: center; padding: 16px 0; }
          .total-row .label { font-size: 14px; color: #64748b; }
          .total-row .amount { font-size: 16px; font-weight: 700; color: #1a1a2e; }
          .total-row.total { border-top: 2px solid #1a4b84; margin-top: 8px; padding-top: 20px; }
          .total-row.total .amount { font-size: 28px; color: #1a4b84; }
          .status-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; color: #fff; background: ${statusColor}; margin-top: 16px; }
          .desc { background: #f1f5f9; border-radius: 12px; padding: 16px; margin-top: 16px; }
          .desc label { font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px; }
          .desc p { font-size: 14px; color: #334155; line-height: 1.6; }
          .footer-text { text-align: center; font-size: 12px; color: #94a3b8; margin-top: 24px; padding: 16px 40px; border-top: 1px solid #e2e8f0; }
          .signature { margin-top: 24px; padding-top: 24px; border-top: 1px solid #e2e8f0; text-align: right; }
          .signature .name { font-weight: 700; font-size: 16px; }
          .signature .title { font-size: 13px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="budget">
          <div class="header">
            <img src="/logometaldryll.png" alt="Metaldryll" style="height:52px;width:auto;filter:brightness(0)invert(1)" />
            <div>
              <h1>Metaldryll</h1>
              <p>Presupuesto profesional · ${getJobLabel(form.tipoTrabajo) || 'Construcción'}</p>
            </div>
          </div>
          <div class="body">
            <div class="grid">
              <div class="field">
                <label>Cliente</label>
                <div class="val">${form.clienteNombre || '—'}</div>
              </div>
              <div class="field">
                <label>Dirección de obra</label>
                <div class="val">${form.clienteDireccion || '—'}</div>
              </div>
              <div class="field">
                <label>Maestro</label>
                <div class="val">${form.maestroNombre || '—'}</div>
              </div>
              <div class="field">
                <label>Empresa</label>
                <div class="val">${form.maestroEmpresa || '—'}</div>
              </div>
              <div class="field">
                <label>Fecha</label>
                <div class="val">${formatDate(form.fecha)}</div>
              </div>
              <div class="field">
                <label>Válido hasta</label>
                <div class="val">${formatDate(form.fechaValidez)}</div>
              </div>
              <div class="field">
                <label>Tipo de trabajo</label>
                <div class="val">${getJobLabel(form.tipoTrabajo) || '—'}</div>
              </div>
              <div class="field">
                <label>Área</label>
                <div class="val">${form.metrosCuadrados || '0'} m²</div>
              </div>
            </div>
            <div class="divider"></div>
            <div class="total-row"><span class="label">Costo materiales</span><span class="amount">${formatCurrency(form.costoMateriales)}</span></div>
            <div class="total-row"><span class="label">Mano de obra</span><span class="amount">${formatCurrency(form.manoObra)}</span></div>
            <div class="total-row total"><span class="label">Total</span><span class="amount">${formatCurrency(total)}</span></div>
            <div class="total-row"><span class="label">Adelanto</span><span class="amount">${formatCurrency(form.adelanto)}</span></div>
            <div class="total-row"><span class="label">Saldo pendiente</span><span class="amount" style="color:#ef4444">${formatCurrency(saldo)}</span></div>
            ${form.descripcion ? `<div class="desc"><label>Descripción</label><p>${form.descripcion}</p></div>` : ''}
            <div class="status-badge">● ${getStatusLabel(form.estado)}</div>
            <div class="signature">
              <div class="name">${form.maestroNombre || 'Maestro de obra'}</div>
              <div class="title">${form.maestroEmpresa || 'Metaldryll'}</div>
            </div>
          </div>
          <div class="footer-text">Generado por MetalDryll · ${formatDate(today())}</div>
        </div>
        <script>window.print();</script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.headerLogo}>
              <img src="/logometaldryll.png" alt="Metaldryll" className={styles.headerLogoImg} />
            </div>
            <div>
              <h2 className={styles.headerTitle}>Generador de Presupuesto</h2>
              <p className={styles.headerSub}>Crea presupuestos profesionales para tus clientes</p>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
            <IconClose />
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.formColumn}>
            {/* Datos del maestro */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <IconUser />
                <span>Datos del maestro</span>
              </div>
              <div className={styles.sectionBody}>
                <div className={styles.inputGroup}>
                  <IconUser />
                  <input
                    type="text"
                    placeholder="Nombre del maestro"
                    className={styles.input}
                    value={form.maestroNombre}
                    onChange={update('maestroNombre')}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <IconPhone />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className={styles.input}
                    value={form.maestroTelefono}
                    onChange={update('maestroTelefono')}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <IconBuilding />
                  <input
                    type="text"
                    placeholder="Empresa (opcional)"
                    className={styles.input}
                    value={form.maestroEmpresa}
                    onChange={update('maestroEmpresa')}
                  />
                </div>
              </div>
            </div>

            {/* Datos del cliente */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <IconBuilding />
                <span>Datos del cliente</span>
              </div>
              <div className={styles.sectionBody}>
                <div className={styles.inputGroup}>
                  <IconUser />
                  <input
                    type="text"
                    placeholder="Nombre del cliente"
                    className={styles.input}
                    value={form.clienteNombre}
                    onChange={update('clienteNombre')}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <IconMapPin />
                  <input
                    type="text"
                    placeholder="Dirección de la obra"
                    className={styles.input}
                    value={form.clienteDireccion}
                    onChange={update('clienteDireccion')}
                  />
                </div>
                <div className={styles.row}>
                  <div className={`${styles.inputGroup} ${styles.half}`}>
                    <IconCalendar />
                    <input
                      type="date"
                      className={styles.input}
                      value={form.fecha}
                      onChange={update('fecha')}
                    />
                  </div>
                  <div className={`${styles.inputGroup} ${styles.half}`}>
                    <IconCalendar />
                    <input
                      type="date"
                      className={styles.input}
                      value={form.fechaValidez}
                      onChange={update('fechaValidez')}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tipo de trabajo */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <IconFileText />
                <span>Tipo de trabajo</span>
              </div>
              <div className={styles.jobGrid}>
                {JOB_TYPES.map((job) => (
                  <button
                    key={job.id}
                    className={`${styles.jobCard} ${form.tipoTrabajo === job.id ? styles.jobCardActive : ''}`}
                    onClick={() => selectJob(job.id)}
                    type="button"
                  >
                    <JobIcon type={job.icon} active={form.tipoTrabajo === job.id} />
                    <span className={styles.jobLabel}>{job.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Detalles del presupuesto */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <IconFileText />
                <span>Detalles del presupuesto</span>
              </div>
              <div className={styles.sectionBody}>
                <div className={styles.row}>
                  <div className={`${styles.inputGroup} ${styles.half}`}>
                    <IconRuler />
                    <input
                      type="number"
                      placeholder="Metros cuadrados"
                      className={styles.input}
                      value={form.metrosCuadrados}
                      onChange={update('metrosCuadrados')}
                    />
                    <span className={styles.inputSuffix}>m²</span>
                  </div>
                  <div className={`${styles.inputGroup} ${styles.half}`}>
                    <IconDollar />
                    <input
                      type="number"
                      placeholder="Costo materiales"
                      className={styles.input}
                      value={form.costoMateriales}
                      onChange={update('costoMateriales')}
                    />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={`${styles.inputGroup} ${styles.half}`}>
                    <IconDollar />
                    <input
                      type="number"
                      placeholder="Mano de obra"
                      className={styles.input}
                      value={form.manoObra}
                      onChange={update('manoObra')}
                    />
                  </div>
                  <div className={`${styles.inputGroup} ${styles.half}`}>
                    <IconDollar />
                    <input
                      type="number"
                      placeholder="Adelanto"
                      className={styles.input}
                      value={form.adelanto}
                      onChange={update('adelanto')}
                    />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <IconClock />
                  <input
                    type="text"
                    placeholder="Tiempo estimado (ej: 5 días)"
                    className={styles.input}
                    value={form.tiempoEstimado}
                    onChange={update('tiempoEstimado')}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <IconFileText />
                  <textarea
                    placeholder="Descripción del trabajo"
                    className={styles.textarea}
                    rows={3}
                    value={form.descripcion}
                    onChange={update('descripcion')}
                  />
                </div>
              </div>
            </div>

            {/* Estado del presupuesto */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <IconCheck />
                <span>Estado del presupuesto</span>
              </div>
              <div className={styles.statusGrid}>
                {STATUS_OPTIONS.map((st) => (
                  <button
                    key={st.id}
                    className={`${styles.statusBtn} ${form.estado === st.id ? styles.statusBtnActive : ''}`}
                    style={{
                      '--status-color': st.color,
                      borderColor: form.estado === st.id ? st.color : 'rgba(255,255,255,0.08)',
                      background: form.estado === st.id ? `${st.color}20` : 'rgba(255,255,255,0.03)',
                    }}
                    onClick={() => selectStatus(st.id)}
                    type="button"
                  >
                    <span className={styles.statusIcon} style={{ color: st.color }}>
                      <StatusIcon type={st.id} />
                    </span>
                    <span className={styles.statusLabel}>{st.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Botones de acción */}
            <div className={styles.actions}>
              <button className={styles.btnPDF} onClick={handleGeneratePDF} type="button">
                <IconPDF />
                <span>Generar PDF</span>
              </button>
              <button className={styles.btnWhatsApp} onClick={handleWhatsApp} type="button">
                <IconWhatsApp />
                <span>Enviar por WhatsApp</span>
              </button>
            </div>
          </div>

          <div className={styles.previewColumn}>
            <div className={styles.previewLabel}>Vista previa</div>
            <div className={styles.previewPaper}>
              <div className={styles.paperHeader}>
                <div className={styles.paperLogo}>
                  <img src="/logometaldryll.png" alt="Metaldryll" className={styles.paperLogoImg} />
                </div>
                <div>
              <h3 className={styles.paperTitle}>Metaldryll</h3>
              <p className={styles.paperSub}>Presupuesto profesional</p>
                </div>
              </div>

              <div className={styles.paperDivider} />

              <div className={styles.paperSection}>
                <div className={styles.paperField}>
                  <span className={styles.paperLabel}>Cliente</span>
                  <span className={styles.paperValue}>{form.clienteNombre || '—'}</span>
                </div>
                <div className={styles.paperField}>
                  <span className={styles.paperLabel}>Dirección</span>
                  <span className={styles.paperValue}>{form.clienteDireccion || '—'}</span>
                </div>
              </div>

              <div className={styles.paperSection}>
                <div className={styles.paperField}>
                  <span className={styles.paperLabel}>Trabajo</span>
                  <span className={styles.paperValue}>{getJobLabel(form.tipoTrabajo) || '—'}</span>
                </div>
                <div className={styles.paperField}>
                  <span className={styles.paperLabel}>Área</span>
                  <span className={styles.paperValue}>{form.metrosCuadrados || '0'} m²</span>
                </div>
              </div>

              <div className={styles.paperSection}>
                <div className={styles.paperField}>
                  <span className={styles.paperLabel}>Fecha</span>
                  <span className={styles.paperValue}>{formatDate(form.fecha)}</span>
                </div>
                <div className={styles.paperField}>
                  <span className={styles.paperLabel}>Válido hasta</span>
                  <span className={styles.paperValue}>{formatDate(form.fechaValidez)}</span>
                </div>
              </div>

              <div className={styles.paperDivider} />

              <div className={styles.paperCosts}>
                <div className={styles.costRow}>
                  <span>Costo materiales</span>
                  <span>{formatCurrency(form.costoMateriales)}</span>
                </div>
                <div className={styles.costRow}>
                  <span>Mano de obra</span>
                  <span>{formatCurrency(form.manoObra)}</span>
                </div>
                <div className={`${styles.costRow} ${styles.costTotal}`}>
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
                <div className={styles.costRow}>
                  <span>Adelanto</span>
                  <span>{formatCurrency(form.adelanto)}</span>
                </div>
                <div className={`${styles.costRow} ${styles.costSaldo}`}>
                  <span>Saldo</span>
                  <span>{formatCurrency(saldo)}</span>
                </div>
              </div>

              {form.descripcion && (
                <>
                  <div className={styles.paperDivider} />
                  <div className={styles.paperDesc}>
                    <span className={styles.paperLabel}>Descripción</span>
                    <p>{form.descripcion}</p>
                  </div>
                </>
              )}

              <div className={styles.paperDivider} />

              <div className={styles.paperStatus}>
                <span className={styles.statusDot} style={{ background: getStatusColor(form.estado) }} />
                <span>{getStatusLabel(form.estado)}</span>
              </div>

              <div className={styles.paperSignature}>
                <div className={styles.signLine} />
                <span className={styles.signName}>{form.maestroNombre || 'Maestro de obra'}</span>
                <span className={styles.signTitle}>{form.maestroEmpresa || 'Drywall Perú'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

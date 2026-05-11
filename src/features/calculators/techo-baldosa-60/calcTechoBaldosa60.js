export function calcTechoBaldosa60(areaM2) {
  const a = Number(areaM2);
  if (!Number.isFinite(a) || a <= 0) return null;

  const baldosa = a * 2.7;
  const principales = a * 0.23;
  const secundario = a * 1.36;
  const terciaria = a * 1.36;
  const angulos = a * 0.27;
  const alambre = a * 0.06;
  const clavo = a * 0.09;
  const fulminante = a * 0.09;
  const clavoAcero = a * 2.18;

  return {
    baldosa: Math.ceil(baldosa),
    principales: Math.ceil(principales),
    secundario: Math.ceil(secundario),
    terciaria: Math.ceil(terciaria),
    angulos: Math.ceil(angulos),
    alambre: Math.ceil(alambre),
    clavo: Math.ceil(clavo),
    fulminante: Math.ceil(fulminante),
    clavoAcero: Math.ceil(clavoAcero),
  };
}
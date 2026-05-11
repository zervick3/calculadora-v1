/** Superficie útil por factor de plancha (m²) — misma base que tu fórmula original */
export const PLANCHA_FACTOR_M2 = 2.9768;

/**
 * @param {number} areaM2 superficie en m²
 * @returns {null | Record<string, number>}
 */
export function calcTabiqueEstandar(areaM2) {
  const a = Number(areaM2);
  if (!Number.isFinite(a) || a <= 0) return null;

  const Planchas = (a / PLANCHA_FACTOR_M2) * 2;
  const Parante = a * 0.8;
  const Riel = a * 0.35;
  const tornillo = a * 0.02;
  const wafer = a * 0.01;
  const clavo = a * 0.02;
  const fulminante = a * 0.02;
  const cintapapel = a * 0.04;
  const masilla = a * 0.06;
  const lija = a * 0.04;

  return {
    Planchas: Math.ceil(Planchas),
    Parante: Math.ceil(Parante),
    Riel: Math.ceil(Riel),
    tornillo: Math.ceil(tornillo),
    wafer: Math.ceil(wafer),
    clavo: Math.ceil(clavo),
    fulminante: Math.ceil(fulminante),
    cintapapel: Math.ceil(cintapapel),
    masilla: Math.ceil(masilla),
    lija: Math.ceil(lija),
  };
}

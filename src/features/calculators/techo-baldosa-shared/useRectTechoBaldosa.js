const JOINT_MM = 3;
const ADHESIVE_KG_PER_M2 = 5;
const PRICE_LOW_PER_M2 = 20;
const PRICE_HIGH_PER_M2 = 30;

/**
 * Superficie techo rectangular + piezas de baldosa (lado apoyado en eje L × eje W del salón).
 */
export function useRectTechoBaldosa(lengthM, widthM, wastePercent, tileLengthM, tileWidthM) {
  const L = Math.max(0, Number(lengthM) || 0);
  const W = Math.max(0, Number(widthM) || 0);
  const tL = Math.max(0.01, Number(tileLengthM) || 0.6);
  const tW = Math.max(0.01, Number(tileWidthM) || 0.6);
  const wasteRaw = Number(wastePercent);
  const waste = Math.max(
    0,
    Math.min(50, Number.isFinite(wasteRaw) ? wasteRaw : 10)
  );

  const tileAreaM2 = tL * tW;
  const netArea = L * W;
  const wasteFactor = 1 + waste / 100;
  const areaWithWaste = netArea * wasteFactor;
  const extraM2 = netArea * (waste / 100);

  const rawTiles =
    areaWithWaste > 0 && tileAreaM2 > 0 ? areaWithWaste / tileAreaM2 : 0;
  const tilesNeeded = rawTiles > 0 ? Math.ceil(rawTiles) : 0;

  const investLow = Math.round(netArea * PRICE_LOW_PER_M2 * wasteFactor);
  const investHigh = Math.round(netArea * PRICE_HIGH_PER_M2 * wasteFactor);

  return {
    L,
    W,
    waste,
    netArea,
    areaWithWaste,
    extraM2,
    tilesNeeded,
    rawTiles,
    investLow,
    investHigh,
    tileLengthM: tL,
    tileWidthM: tW,
    tileAreaM2,
    jointMm: JOINT_MM,
    adhesiveKgPerM2: ADHESIVE_KG_PER_M2,
  };
}

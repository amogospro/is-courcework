export const calcContrast = (i1: number, i2: number) => Math.abs((i1 - i2) / (i1 + i2));

export const calcNoise = (
  variance_i1: number,
  variance_i2: number,
  mean_i1: number,
  mean_i2: number
) => Math.sqrt(variance_i1 + variance_i2) / Math.sqrt(mean_i1 * mean_i1 + mean_i2 * mean_i2);

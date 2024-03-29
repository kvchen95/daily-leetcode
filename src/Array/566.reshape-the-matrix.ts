function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  if (m * n != r * c) {
    return mat;
  }

  const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));
  for (let x = 0; x < m * n; ++x) {
    // TODO
    ans[Math.floor(x / c)][x % c] = mat[Math.floor(x / n)][x % n];
  }
  return ans;
};
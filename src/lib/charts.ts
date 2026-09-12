/**
 * Chart geometry. One hue per chart by design — multiple series become small
 * multiples rather than a second colour, so nothing here takes a palette.
 */

export interface Series {
  line: string;
  area: string;
  points: readonly (readonly [number, number])[];
  /** Top of the value domain after headroom. */
  max: number;
  /** Screen y of the zero baseline. */
  baseY: number;
  /** Screen y of the domain top. */
  topY: number;
  end: readonly [number, number];
}

export interface CurveOptions {
  width: number;
  height: number;
  padTop?: number;
  padBottom?: number;
  x0?: number;
  /** Domain headroom above the peak, so a flat series still reads as flat
   *  instead of hugging the top edge. */
  headroom?: number;
}

const r = (n: number) => Math.round(n * 10) / 10;

/**
 * Zero-baselined curve. The baseline stays at zero so the area fill is
 * honest; `headroom` buys vertical space instead of lifting the floor.
 */
export function curve(values: readonly number[], opts: CurveOptions): Series {
  const { width, height, padTop = 12, padBottom = 18, x0 = 0, headroom = 1.15 } = opts;
  const max = Math.max(...values) * headroom;
  const baseY = height - padBottom;
  const topY = padTop;
  const span = baseY - topY;

  const pts = values.map((v, i) => {
    const x = x0 + (i / (values.length - 1)) * width;
    const y = baseY - (v / max) * span;
    return [r(x), r(y)] as const;
  });

  const line = `M${pts.map((p) => `${p[0]} ${p[1]}`).join(' L')}`;
  const area = `${line} L${r(x0 + width)} ${r(baseY)} L${r(x0)} ${r(baseY)} Z`;

  return { line, area, points: pts, max, baseY: r(baseY), topY: r(topY), end: pts[pts.length - 1]! };
}

/** Evenly spaced horizontal rules with their value labels, top-down. */
export function yTicks(s: Series, count = 4, digits = 1) {
  return Array.from({ length: count }, (_, i) => {
    const y = s.topY + (i / (count - 1)) * (s.baseY - s.topY);
    return { y: r(y), label: (s.max * (1 - i / (count - 1))).toFixed(digits) };
  });
}

/** X positions for categorical tick labels along the plotted width. */
export function xTicks(labels: readonly string[], width: number, x0 = 0) {
  return labels.map((label, i) => ({
    x: r(x0 + (i / (labels.length - 1)) * width),
    label,
  }));
}

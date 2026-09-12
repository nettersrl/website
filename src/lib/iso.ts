/**
 * 2:1 dimetric projection — the one camera every diagram on the site shares.
 *
 *   sx = X + (gx - gy) * U
 *   sy = Y + (gx + gy) * U/2 - z
 *
 * `U` is one grid unit in screen px; `z` is elevation in screen px, so a
 * higher `lift` puts a layer further up the page. Diagrams are built from
 * grid coordinates and rendered to SVG at build time — nothing here runs
 * in the browser.
 */

export interface Camera {
  /** Grid unit in screen pixels. */
  u: number;
  /** Screen-space origin of grid point (0, 0). */
  x: number;
  y: number;
}

export type Point = readonly [number, number];

export interface Face {
  top: string;
  left: string;
  right: string;
  /** Centre of the top face — where a label belongs. */
  cx: number;
  cy: number;
  /** Centre of the base, for connectors dropping to the layer below. */
  bx: number;
  by: number;
  /** Back corner of the top face (grid origin side), for outside labels. */
  backX: number;
  backY: number;
}

export interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const r = (n: number) => Math.round(n * 10) / 10;

export function project(gx: number, gy: number, cam: Camera, lift = 0, z = 0): Point {
  return [cam.x + (gx - gy) * cam.u, cam.y + ((gx + gy) * cam.u) / 2 - lift - z];
}

export function points(pts: readonly Point[]): string {
  return pts.map((p) => `${r(p[0])},${r(p[1])}`).join(' ');
}

/** A flat quad on the grid — one layer of a stack. */
export function plane(
  gx: number,
  gy: number,
  w: number,
  d: number,
  cam: Camera,
  lift = 0,
): string {
  return points([
    project(gx, gy, cam, lift),
    project(gx + w, gy, cam, lift),
    project(gx + w, gy + d, cam, lift),
    project(gx, gy + d, cam, lift),
  ]);
}

/** Grid rules across a plane, every `step` units. */
export function planeGrid(
  gx: number,
  gy: number,
  w: number,
  d: number,
  cam: Camera,
  lift = 0,
  step = 1,
): Line[] {
  const out: Line[] = [];
  for (let i = step; i < w; i += step) {
    const a = project(gx + i, gy, cam, lift);
    const b = project(gx + i, gy + d, cam, lift);
    out.push({ x1: r(a[0]), y1: r(a[1]), x2: r(b[0]), y2: r(b[1]) });
  }
  for (let i = step; i < d; i += step) {
    const a = project(gx, gy + i, cam, lift);
    const b = project(gx + w, gy + i, cam, lift);
    out.push({ x1: r(a[0]), y1: r(a[1]), x2: r(b[0]), y2: r(b[1]) });
  }
  return out;
}

/**
 * An extruded box. Only the two faces turned toward the viewer are emitted —
 * the edges D-C (left-front) and C-B (right-front) in grid order.
 */
export function box(
  gx: number,
  gy: number,
  w: number,
  d: number,
  h: number,
  cam: Camera,
  lift = 0,
): Face {
  const P = (a: number, b: number, z: number) => project(a, b, cam, lift, z);
  // Only the two faces turned toward the viewer are emitted, so the far
  // base corner is never needed.
  const B = P(gx + w, gy, 0);
  const C = P(gx + w, gy + d, 0);
  const D = P(gx, gy + d, 0);
  const At = P(gx, gy, h);
  const Bt = P(gx + w, gy, h);
  const Ct = P(gx + w, gy + d, h);
  const Dt = P(gx, gy + d, h);
  const top = P(gx + w / 2, gy + d / 2, h);
  const base = P(gx + w / 2, gy + d / 2, 0);
  return {
    top: points([At, Bt, Ct, Dt]),
    left: points([D, C, Ct, Dt]),
    right: points([C, B, Bt, Ct]),
    cx: r(top[0]),
    cy: r(top[1]),
    bx: r(base[0]),
    by: r(base[1]),
    backX: r(Dt[0]),
    backY: r(Dt[1]),
  };
}

/** A cube — the square case of `box`, for instance nodes. */
export function cube(
  gx: number,
  gy: number,
  size: number,
  h: number,
  cam: Camera,
  lift = 0,
): Face {
  return box(gx, gy, size, size, h, cam, lift);
}

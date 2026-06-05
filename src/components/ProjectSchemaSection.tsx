import { Link } from "@/i18n/navigation";
import type { ProjectSchema, ProjectSchemaNode } from "@/data/projects/types";

const NODE_W = 160;
const NODE_H = 88;
const COL_GAP = 100;
const ROW_GAP = 52;
const PAD = 24;
const LINE_H = 14;
const ICON_SIZE = 32;
const ICON_SIZE_MAIN = 48;
const ICON_TEXT_GAP = 5;

type ResolvedNode = ProjectSchemaNode & { x: number; y: number; cx: number; cy: number };

function resolveNodes(nodes: ProjectSchemaNode[]): ResolvedNode[] {
  return nodes.map((n) => {
    const x = PAD + n.col * (NODE_W + COL_GAP);
    const y = PAD + n.row * (NODE_H + ROW_GAP);
    return { ...n, x, y, cx: x + NODE_W / 2, cy: y + NODE_H / 2 };
  });
}

function edgeCoords(from: ResolvedNode, to: ResolvedNode) {
  const dx = to.cx - from.cx;
  const dy = to.cy - from.cy;
  const horiz = Math.abs(dx) >= Math.abs(dy);
  let x1, y1, x2, y2;
  if (horiz) {
    y1 = from.cy;
    y2 = to.cy;
    x1 = dx > 0 ? from.x + NODE_W : from.x;
    x2 = dx > 0 ? to.x : to.x + NODE_W;
  } else {
    x1 = from.cx;
    x2 = to.cx;
    y1 = dy > 0 ? from.y + NODE_H : from.y;
    y2 = dy > 0 ? to.y : to.y + NODE_H;
  }
  return { x1, y1, x2, y2, horiz };
}

export function ProjectSchemaSection({ schema }: { schema: ProjectSchema }) {
  const resolved = resolveNodes(schema.nodes);
  const nodeById = Object.fromEntries(resolved.map((n) => [n.id, n]));

  const maxCol = Math.max(...resolved.map((n) => n.col));
  const maxRow = Math.max(...resolved.map((n) => n.row));
  const viewW = PAD + (maxCol + 1) * NODE_W + maxCol * COL_GAP + PAD;
  const viewH = PAD + (maxRow + 1) * NODE_H + maxRow * ROW_GAP + PAD;

  return (
    <section className="mb-8" aria-labelledby="ps-arch-heading">
      <h2
        id="ps-arch-heading"
        className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
      >
        Architecture
      </h2>
      <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
        <svg
          viewBox={`0 0 ${viewW} ${viewH}`}
          className="w-full min-w-[360px]"
          role="img"
          aria-label="Project architecture diagram"
        >
          <defs>
            <style>{`
              .ps-node { fill: #f4f4f5; stroke: #d4d4d8; stroke-width: 1.5; }
              .ps-node-main { fill: #18181b; stroke: #3f3f46; stroke-width: 1.5; }
              .ps-node-ext { fill: #fafafa; stroke: #a1a1aa; stroke-dasharray: 5,3; stroke-width: 1.5; }
              .ps-label { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 12px; font-weight: 600; fill: #27272a; }
              .ps-label-main { fill: #fafafa; }
              .ps-sub { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 9px; fill: #a1a1aa; letter-spacing: 0.06em; }
              .ps-edge { stroke: #a1a1aa; stroke-width: 1.5; fill: none; marker-end: url(#ps-arrow); }
              .ps-edge-lbl { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 9px; fill: #71717a; }
              .ps-node-link { cursor: pointer; }
              .ps-node-link:hover rect { opacity: 0.75; }
              .ps-node-link:hover image { opacity: 0.75; }
              .ps-icon-invert { filter: none; }
              @media (prefers-color-scheme: dark) {
                .ps-icon-invert { filter: invert(1); }
                .ps-node { fill: #27272a; stroke: #52525b; }
                .ps-node-main { fill: #e4e4e7; stroke: #d4d4d8; }
                .ps-node-ext { fill: #1c1c1e; stroke: #71717a; }
                .ps-label { fill: #e4e4e7; }
                .ps-label-main { fill: #18181b; }
                .ps-sub { fill: #71717a; }
                .ps-edge { stroke: #52525b; }
                .ps-edge-lbl { fill: #71717a; }
              }
            `}</style>
            <marker id="ps-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <path d="M0,0 L8,3 L0,6 Z" fill="context-stroke" />
            </marker>
          </defs>

          {resolved.map((node) => {
            const nodeClass =
              node.variant === "main"
                ? "ps-node-main"
                : node.variant === "external"
                  ? "ps-node-ext"
                  : "ps-node";
            const labelClass =
              !node.iconSrc && node.variant === "main" ? "ps-label ps-label-main" : "ps-label";
            const totalLines = node.label.length + (node.sublabel ? 1 : 0);
            const startY = node.cy - ((totalLines - 1) * LINE_H) / 2;

            const inner = node.iconSrc ? (() => {
              const iconSize = node.variant === "main" ? ICON_SIZE_MAIN : ICON_SIZE;
              const totalH = iconSize + ICON_TEXT_GAP + node.label.length * LINE_H;
              const iconY = node.cy - totalH / 2;
              const textFirstY = iconY + iconSize + ICON_TEXT_GAP + LINE_H / 2;
              return (
                <>
                  <image
                    href={node.iconSrc}
                    x={node.cx - iconSize / 2}
                    y={iconY}
                    width={iconSize}
                    height={iconSize}
                    className={node.invertIconInDark ? "ps-icon-invert" : undefined}
                  />
                  {node.label.map((line, i) => (
                    <text
                      key={i}
                      x={node.cx}
                      y={textFirstY + i * LINE_H}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={labelClass}
                    >
                      {line}
                    </text>
                  ))}
                </>
              );
            })() : (
              <>
                <rect x={node.x} y={node.y} width={NODE_W} height={NODE_H} rx={8} className={nodeClass} />
                {node.label.map((line, i) => (
                  <text
                    key={i}
                    x={node.cx}
                    y={startY + i * LINE_H}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={labelClass}
                  >
                    {line}
                  </text>
                ))}
                {node.sublabel && (
                  <text
                    x={node.cx}
                    y={startY + node.label.length * LINE_H}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="ps-sub"
                  >
                    {node.sublabel}
                  </text>
                )}
              </>
            );

            if (node.href) {
              const isExternal = node.href.startsWith("http");
              return (
                <g key={node.id}>
                  {isExternal ? (
                    <a href={node.href} target="_blank" rel="noopener noreferrer" className="ps-node-link">
                      {inner}
                    </a>
                  ) : (
                    <Link href={node.href} className="ps-node-link">
                      {inner}
                    </Link>
                  )}
                </g>
              );
            }

            return <g key={node.id}>{inner}</g>;
          })}

          {schema.edges.map((edge, i) => {
            const from = nodeById[edge.from];
            const to = nodeById[edge.to];
            if (!from || !to) return null;
            const { x1, y1, x2, y2, horiz } = edgeCoords(from, to);
            const mx = (x1 + x2) / 2;
            const my = (y1 + y2) / 2;
            return (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} className="ps-edge" />
                {edge.label && (
                  <text
                    x={horiz ? mx : mx + 8}
                    y={horiz ? my - 8 : my}
                    textAnchor={horiz ? "middle" : "start"}
                    dominantBaseline={horiz ? "auto" : "middle"}
                    className="ps-edge-lbl"
                  >
                    {edge.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}

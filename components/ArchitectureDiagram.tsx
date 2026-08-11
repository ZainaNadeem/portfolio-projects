import type { ComponentType } from "react";
import {
  ArrowDown,
  Boxes,
  Braces,
  CircleCheck,
  Circle,
  Container,
  Cpu,
  Database,
  FileCode,
  Filter,
  Gauge,
  Layers,
  Map,
  Monitor,
  Network,
  Package,
  RotateCcw,
  Search,
  Send,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";
import type {
  ArchitectureDiagram as DiagramModel,
  ArchitectureNode,
} from "@/data/projects";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

// Only these icon names are valid in project data's architecture icon field.
const ICONS: Record<string, IconComponent> = {
  Monitor,
  Server,
  Database,
  Cpu,
  Search,
  Map,
  Filter,
  Container,
  Boxes,
  Layers,
  Network,
  Workflow,
  Braces,
  Gauge,
  Terminal,
  FileCode,
  Package,
  CircleCheck,
  RotateCcw,
  Send,
};

// Static class map so Tailwind can see every column count it may need.
const COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

function NodeCard({ node }: { node: ArchitectureNode }) {
  const Icon = (node.icon && ICONS[node.icon]) || Circle;
  return (
    <div className="h-full rounded-xl border border-border-subtle bg-card p-4 transition-colors hover:border-white/15">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-background text-accent-to">
          <Icon size={18} />
        </span>
        <div className="min-w-0">
          <p className="font-heading text-sm font-semibold text-foreground sm:text-base">
            {node.label}
          </p>
          {node.description && (
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {node.description}
            </p>
          )}
          {node.items && node.items.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {node.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border-subtle bg-background/60 px-2 py-0.5 text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Understated, data-driven architecture diagram. Renders one titled diagram as
 * a stack of layers; a layer with multiple nodes lays them out side-by-side to
 * show parallelism (e.g. replicas). No images, no neon, fully responsive.
 * Nothing about any specific project lives here — it all comes from data.
 */
export default function ArchitectureDiagram({
  diagram,
}: {
  diagram: DiagramModel;
}) {
  return (
    <figure className="mx-auto max-w-2xl">
      <figcaption className="mb-6">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {diagram.title}
        </h3>
        {diagram.description && (
          <p className="mt-1 text-sm text-muted">{diagram.description}</p>
        )}
      </figcaption>

      <ol>
        {diagram.layers.map((layer, i) => (
          <li key={`${i}-${layer.nodes[0]?.label ?? ""}`}>
            {layer.nodes.length === 1 ? (
              <NodeCard node={layer.nodes[0]} />
            ) : (
              <div
                className={`grid grid-cols-1 gap-4 ${
                  COLS[layer.nodes.length] ?? "sm:grid-cols-3"
                }`}
              >
                {layer.nodes.map((node) => (
                  <NodeCard key={node.label} node={node} />
                ))}
              </div>
            )}

            {i < diagram.layers.length - 1 && (
              <div
                className="flex justify-center py-2 text-muted/50"
                aria-hidden
              >
                <ArrowDown size={16} />
              </div>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
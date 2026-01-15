import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
  mode: "home" | "academic" | "industry";
};

export default function ProjectCard({ project, mode }: ProjectCardProps) {
  return (
    <article className="card flex h-full flex-col gap-5 p-6">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {mode === "industry" ? project.industrySummary : project.academicSummary}
        </p>
      </div>
      <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
        <p>
          <span className="font-semibold text-slate-900 dark:text-white">Role:</span> {project.role}
        </p>
        <div>
          <span className="font-semibold text-slate-900 dark:text-white">Methods:</span>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.methods.map((method) => (
              <li key={method} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs dark:border-slate-700">
                {method}
              </li>
            ))}
          </ul>
        </div>
        {mode === "industry" ? (
          <div className="space-y-2">
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">Deliverables:</span>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs">
                {project.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">Impact:</span>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs">
                {project.impactMetrics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
        <div>
          <span className="font-semibold text-slate-900 dark:text-white">Outputs:</span>
          <div className="mt-2 flex flex-wrap gap-3 text-xs font-semibold text-primary">
            {project.outputs.map((output) => (
              <a key={output.label} href={output.url} className="underline-offset-4 hover:underline">
                {output.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

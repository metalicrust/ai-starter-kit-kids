import type { KitProject } from "@/data/projects";

type ProjectCardProps = {
  project: KitProject;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-[8px] ${project.accent} text-lg font-black text-slate-900`}
      >
        {index + 1}
      </div>
      <h3 className="text-xl font-black text-slate-950">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {project.description}
      </p>
      <dl className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-sm">
        <div>
          <dt className="font-bold text-slate-950">Output</dt>
          <dd className="mt-1 leading-6 text-slate-600">{project.output}</dd>
        </div>
        <div>
          <dt className="font-bold text-slate-950">Tools</dt>
          <dd className="mt-1 leading-6 text-slate-600">{project.tools}</dd>
        </div>
      </dl>
    </article>
  );
}

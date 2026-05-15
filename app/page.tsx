import { ProjectCard } from "@/components/ProjectCard";
import { SignupForm } from "@/components/SignupForm";
import { projects } from "@/data/projects";

const parentBenefits = [
  "Learn AI together as a family",
  "Give kids a safe, creative first experience with AI",
  "No coding required",
  "Uses free or easy-to-access tools",
  "Helps kids turn imagination into something they can see, read, and share",
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-5 py-8 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:px-10">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
            AI Starter Kit for Kids and Parents
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
            3 Fun AI Projects You Can Build With Your Child This Weekend
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            A simple mini kit for families to explore AI through creativity,
            storytelling, and imagination. Start with guided projects that feel
            fun for kids and clear for parents.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#start"
              className="inline-flex h-12 items-center justify-center rounded-[8px] bg-slate-950 px-6 text-sm font-black text-white transition hover:bg-slate-800"
            >
              Start the Free Mini Kit
            </a>
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-[8px] border border-slate-300 bg-white px-6 text-sm font-black text-slate-950 shadow-sm transition hover:border-slate-950"
            >
              See the 3 Projects
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-xl">
            <div className="grid gap-3">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="grid grid-cols-[3rem_1fr] gap-4 rounded-[8px] border border-slate-100 bg-slate-50 p-4"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-[8px] ${project.accent} font-black text-slate-950`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-950">
                      {project.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {project.output}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[8px] bg-[#17324d] p-5 text-white">
              <p className="text-sm font-bold text-sky-100">Weekend plan</p>
              <p className="mt-2 text-2xl font-black">One project at a time</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Each activity is designed for a parent and child to complete in
                about half an hour with a free AI chatbot.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/75" id="benefits">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-sky-700">
              Built for families
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              A first AI experience parents can feel good about
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {parentBenefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[8px] border border-slate-200 bg-white p-5 text-sm font-bold leading-6 text-slate-800 shadow-sm"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10" id="projects">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-rose-700">
              The 3 projects
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Creative projects with clear take-home results
            </h2>
          </div>
          <a
            href="#start"
            className="inline-flex h-11 items-center justify-center rounded-[8px] bg-white px-5 text-sm font-black text-slate-950 shadow-sm ring-1 ring-slate-200 transition hover:ring-slate-950"
          >
            Start the Kit
          </a>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-[#17324d] text-white" id="start">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-sky-200">
              Start the kit
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Follow the projects in order, or choose the one your child likes most
            </h2>
          </div>
          <div className="mt-8 space-y-5">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="rounded-[8px] border border-white/15 bg-white p-5 text-slate-950 shadow-sm"
              >
                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <div
                      className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[8px] ${project.accent} font-black`}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-black">{project.title}</h3>
                    <p className="mt-3 text-sm font-bold text-slate-600">
                      Time estimate: {project.time}
                    </p>
                    <dl className="mt-5 space-y-4 text-sm leading-6">
                      <div>
                        <dt className="font-black">What the child will make</dt>
                        <dd className="mt-1 text-slate-600">
                          {project.childMakes}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-black">What the parent helps with</dt>
                        <dd className="mt-1 text-slate-600">
                          {project.parentHelps}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="grid gap-5">
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">
                        Steps
                      </h4>
                      <ol className="mt-3 space-y-3">
                        {project.steps.map((step, stepIndex) => (
                          <li
                            key={step}
                            className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-6 text-slate-700"
                          >
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-black text-slate-950">
                              {stepIndex + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="rounded-[8px] bg-slate-950 p-4 text-white">
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <h4 className="text-sm font-black uppercase tracking-[0.12em] text-slate-300">
                          Starter prompt
                        </h4>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
                          Copy + paste
                        </span>
                      </div>
                      <p className="copyable-prompt max-h-44 overflow-auto whitespace-pre-wrap text-sm leading-6 text-slate-100">
                        {project.prompt}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1fr] lg:px-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.14em] text-emerald-700">
            Parent guidance
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Keep AI creative, safe, and shared
          </h2>
        </div>
        <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
          <ul className="space-y-4 text-base leading-7 text-slate-700">
            <li>Parents should stay involved while kids use AI tools.</li>
            <li>Kids should not enter personal information into AI chatbots.</li>
            <li>AI outputs should be reviewed by an adult before sharing.</li>
            <li>
              The point is creativity and learning, not replacing the parent or
              teacher.
            </li>
          </ul>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white" id="signup">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-sky-700">
              Early access
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Want the full family AI kit when it launches?
            </h2>
          </div>
          <div>
            <p className="text-base leading-7 text-slate-700">
              Join the interest list for printable worksheets, more guided
              prompts, and parent-friendly project ideas. This MVP uses a
              placeholder form only.
            </p>
            <SignupForm />
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-sm text-slate-600 sm:px-8 lg:px-10">
        <p className="font-black text-slate-950">
          AI Starter Kit for Kids and Parents
        </p>
        <p>Creative AI projects families can try together.</p>
        <p>Built for creative family learning.</p>
      </footer>
    </main>
  );
}

import { FeedbackForm } from "@/components/FeedbackForm";
import { ProjectCard } from "@/components/ProjectCard";
import { SignupForm } from "@/components/SignupForm";
import { projects } from "@/data/projects";

const parentBenefits = [
  "A parent-led way to try AI at home",
  "Creative projects kids can see, read, and share",
  "No coding, API keys, or setup headaches",
  "Uses free or easy-to-access tools",
  "Simple prompts that keep adults in the loop",
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-5 py-8 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:px-10">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
            For parents and kids ages 7-13
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
            A Simple AI Starter Kit Families Can Try This Weekend
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Three guided projects help your child create a superhero, bedtime
            story, and comic character using copy-and-paste prompts. Parents
            stay involved, no coding is required, and every activity is built
            around creativity and safety.
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
                    <p className="mb-1 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                      {project.theme}
                    </p>
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
                Each activity takes about half an hour and starts with a prompt
                a parent can paste into a free AI chatbot.
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
              Clear enough for parents. Creative enough for kids.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              The kit gives families a low-pressure way to learn what AI can do
              while keeping the adult in charge of tools, prompts, and final
              results.
            </p>
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
              Three creative wins your child can finish quickly
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Each project ends with something concrete: a hero profile, a
              family story, or a comic character sheet.
            </p>
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
              Start with one prompt, then create together
            </h2>
            <p className="mt-4 text-base leading-7 text-sky-50">
              Copy a starter prompt into a chatbot, answer the AI questions with
              your child, and review the result together before drawing,
              reading, or sharing it.
            </p>
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
          <p className="mt-4 text-base leading-7 text-slate-700">
            The kit is designed for parent-child use, not solo screen time.
          </p>
        </div>
        <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
          <ul className="space-y-4 text-base leading-7 text-slate-700">
            <li>A parent should stay involved while kids use AI tools.</li>
            <li>Children should not enter personal information.</li>
            <li>AI answers should be reviewed by an adult.</li>
            <li>
              The point is creativity and learning, not replacing the parent or
              teacher.
            </li>
            <li>
              Free tools may have age limits or account requirements, so parents
              should set up and supervise the tools.
            </li>
          </ul>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#fff7e6]" id="feedback">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1fr] lg:px-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-rose-700">
              Parent feedback
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Would You Try This With Your Child?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              This MVP is meant to learn what parents actually want before
              adding accounts, payments, or a larger kit.
            </p>
          </div>
          <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
            <FeedbackForm />
          </div>
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
              prompts, parent setup tips, and more family-friendly project
              ideas. This MVP uses a placeholder form only.
            </p>
            <SignupForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-sm text-slate-300 sm:px-8 lg:px-10">
          <p className="font-black text-white">
            AI Starter Kit for Kids and Parents
          </p>
          <p>Three creative AI projects families can try together.</p>
          <p>Built for creative family learning.</p>
        </div>
      </footer>
    </main>
  );
}

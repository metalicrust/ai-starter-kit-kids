"use client";

import { FormEvent, useState } from "react";

export function FeedbackForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Thanks. Your feedback has been saved for review.");
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 grid gap-4"
      aria-label="Parent feedback form"
    >
      <div>
        <label
          htmlFor="would-try"
          className="block text-sm font-black text-slate-950"
        >
          Would you try this with your child?
        </label>
        <select
          id="would-try"
          required
          className="mt-2 h-12 w-full rounded-[8px] border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-sky-100"
          defaultValue=""
        >
          <option value="" disabled>
            Select an answer
          </option>
          <option>Yes</option>
          <option>Maybe</option>
          <option>Not right now</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="favorite-project"
          className="block text-sm font-black text-slate-950"
        >
          Which project sounds most exciting?
        </label>
        <select
          id="favorite-project"
          required
          className="mt-2 h-12 w-full rounded-[8px] border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-sky-100"
          defaultValue=""
        >
          <option value="" disabled>
            Pick one project
          </option>
          <option>Create Your Own Superhero</option>
          <option>Make a Bedtime Story with AI</option>
          <option>Design a Comic Book Character</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="family-useful"
          className="block text-sm font-black text-slate-950"
        >
          What would make this more useful for your family?
        </label>
        <textarea
          id="family-useful"
          rows={4}
          placeholder="Worksheets, videos, more projects, tool setup help..."
          className="mt-2 w-full resize-y rounded-[8px] border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-sky-100"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="h-12 rounded-[8px] bg-slate-950 px-6 text-sm font-black text-white transition hover:bg-slate-800"
        >
          Send Feedback
        </button>
        {message ? (
          <p className="text-sm font-bold text-emerald-700">{message}</p>
        ) : null}
      </div>
    </form>
  );
}

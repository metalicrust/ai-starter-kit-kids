"use client";

import { FormEvent, useState } from "react";

export function SignupForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Thanks. You are on the early access list.");
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-3 sm:flex-row"
      aria-label="Join the early access list"
    >
      <div className="flex-1">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="parent@example.com"
          className="h-12 w-full rounded-[8px] border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-sky-100"
        />
        {message ? (
          <p className="mt-3 text-sm font-bold text-emerald-700">{message}</p>
        ) : null}
      </div>
      <button
        type="submit"
        className="h-12 rounded-[8px] bg-slate-950 px-6 text-sm font-black text-white transition hover:bg-slate-800"
      >
        Join Early Access
      </button>
    </form>
  );
}

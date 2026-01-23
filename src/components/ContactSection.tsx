"use client";

import { Copy, Github, Linkedin, Mail, School } from "lucide-react";
import { useState } from "react";
import type { Profile } from "@/data/site";

type ContactSectionProps = {
  profile: Profile;
  title?: string;
};

export default function ContactSection({ profile, title = "Let’s Collaborate" }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!formState.name || !formState.email || !formState.message) {
      setError("Please fill in name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(`Collaboration inquiry from ${formState.name}`);
    const body = encodeURIComponent(`${formState.message}\n\nFrom: ${formState.name} (${formState.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Contact</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Reach out for research collaborations, advisory roles, or translational strategy partnerships.
            </p>
          </div>
          <div className="card space-y-4 p-6">
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Mail size={16} /> {profile.email}
              </span>
              <button type="button" onClick={copyEmail} className="btn-secondary gap-2">
                <Copy size={14} />
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
              <a href={profile.links.linkedin} className="inline-flex items-center gap-2 hover:text-primary">
                <Linkedin size={16} /> LinkedIn
              </a>
              {profile.links.scholar && (
  <a
    href={profile.links.scholar}
    className="inline-flex items-center gap-2 hover:text-primary"
  >
    <School size={16} /> Scholar
  </a>
)}
              {profile.links.github && (
  <a
    href={profile.links.github}
    className="inline-flex items-center gap-2 hover:text-primary"
  >
    <Github size={16} /> GitHub
  </a>
)}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="card space-y-4 p-6" aria-label="Contact form">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Name
              <input
                value={formState.name}
                onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
                type="text"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Email
              <input
                value={formState.email}
                onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
                type="email"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Message
              <textarea
                value={formState.message}
                onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
                rows={4}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </label>
          </div>
          {error ? <p className="text-xs font-semibold text-red-500">{error}</p> : null}
          <button type="submit" className="btn-primary w-full">
            Send message
          </button>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            This form uses your email client for delivery.
          </p>
        </form>
      </div>
    </section>
  );
}

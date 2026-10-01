"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xreneybk";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-white border border-navy/8 p-8 md:p-10 flex flex-col items-center text-center gap-3">
        <CheckCircle2 size={36} className="text-green" />
        <h3 className="font-display font-semibold text-navy text-xl">
          Message sent
        </h3>
        <p className="text-ink/60 text-sm max-w-sm">
          Thanks for reaching out —someone from GYIC Nigeria will get back to
          you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-green hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white border border-navy/8 p-8 md:p-10"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2">
          <span className="text-xs font-mono uppercase tracking-wide text-ink/50">
            Your name
          </span>
          <input
            type="text"
            name="name"
            required
            placeholder="Jane Doe"
            className="rounded-lg border border-navy/15 px-4 py-3 text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-green/40 focus:border-green"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-mono uppercase tracking-wide text-ink/50">
            Your email
          </span>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@example.com"
            className="rounded-lg border border-navy/15 px-4 py-3 text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-green/40 focus:border-green"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 mt-5">
        <span className="text-xs font-mono uppercase tracking-wide text-ink/50">
          Your message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Talk to us today..."
          className="rounded-lg border border-navy/15 px-4 py-3 text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-green/40 focus:border-green resize-none"
        />
      </label>

      {status === "error" && (
        <p className="mt-4 text-sm text-orange">
          Something went wrong sending your message. Please try again, or
          email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange text-white font-semibold hover:bg-orange/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          "Sending..."
        ) : (
          <>
            Send message
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}
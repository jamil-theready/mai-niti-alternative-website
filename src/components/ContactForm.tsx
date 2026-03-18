"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("bot-field")) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        router.push("/thank-you");
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Connection error. Please try again or email us at info@mainiti.org");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Web3Forms access key - get yours free at web3forms.com */}
      <input type="hidden" name="access_key" value="50f7767f-586d-47cb-a319-ed3ac7f91139" />
      <input type="hidden" name="subject" value="New inquiry from Mai Niti website" />
      <input type="hidden" name="from_name" value="Mai Niti Website" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block font-display text-xs font-semibold tracking-wide text-brown-900 uppercase"
          >
            Name <span className="text-brown-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-brown-200 bg-white px-4 py-3 text-base text-brown-900 outline-none transition-colors placeholder:text-brown-400 focus:border-brown-600 focus:ring-1 focus:ring-brown-600"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block font-display text-xs font-semibold tracking-wide text-brown-900 uppercase"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-2 w-full rounded-xl border border-brown-200 bg-white px-4 py-3 text-base text-brown-900 outline-none transition-colors placeholder:text-brown-400 focus:border-brown-600 focus:ring-1 focus:ring-brown-600"
            placeholder="Your last name"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-display text-xs font-semibold tracking-wide text-brown-900 uppercase"
        >
          Email <span className="text-brown-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 w-full rounded-xl border border-brown-200 bg-white px-4 py-3 text-base text-brown-900 outline-none transition-colors placeholder:text-brown-400 focus:border-brown-600 focus:ring-1 focus:ring-brown-600"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-display text-xs font-semibold tracking-wide text-brown-900 uppercase"
        >
          Message <span className="text-brown-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-brown-200 bg-white px-4 py-3 text-base text-brown-900 outline-none transition-colors placeholder:text-brown-400 focus:border-brown-600 focus:ring-1 focus:ring-brown-600"
          placeholder="Tell us about yourself and what you are looking for..."
        />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-brown-900 px-8 py-4 font-display text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-brown-800 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-forest/20 bg-forest/5 p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest/10">
          <svg
            className="h-7 w-7 text-forest"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-brown-900">
          Message Received
        </h3>
        <p className="mt-3 text-base text-brown-800">
          Thank you for reaching out. We will get back to you within 48 hours.
          Check your email for our response.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      {/* Name */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block font-display text-xs font-semibold tracking-wide text-brown-900 uppercase"
          >
            First Name <span className="text-brown-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="mt-2 w-full rounded-xl border border-brown-200 bg-white px-4 py-3 text-base text-brown-900 outline-none transition-colors placeholder:text-brown-400 focus:border-brown-600 focus:ring-1 focus:ring-brown-600"
            placeholder="Your first name"
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

      {/* Email */}
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

      {/* Interest */}
      <div>
        <label
          htmlFor="interest"
          className="block font-display text-xs font-semibold tracking-wide text-brown-900 uppercase"
        >
          What interests you?
        </label>
        <select
          id="interest"
          name="interest"
          className="mt-2 w-full rounded-xl border border-brown-200 bg-white px-4 py-3 text-base text-brown-900 outline-none transition-colors focus:border-brown-600 focus:ring-1 focus:ring-brown-600"
        >
          <option value="">Select an option</option>
          <option value="ceremony">Sacred Ceremony</option>
          <option value="dieta">Plant Medicine Dieta</option>
          <option value="retreat">Healing Retreat</option>
          <option value="private">Private Ceremony</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block font-display text-xs font-semibold tracking-wide text-brown-900 uppercase"
        >
          Your Message <span className="text-brown-500">*</span>
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

      <button
        type="submit"
        className="w-full rounded-full bg-brown-900 px-8 py-4 font-display text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-brown-800 sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface ContactFormProps {
  services?: string[] | null;
}

export default function ContactForm({ services }: ContactFormProps) {
  const items = services?.length
    ? services
    : ["Purchase Home", "Buying Home", "Lease my Home", "Looking for Rental"];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
    comments: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleCheckbox(service: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up form submission
  }

  const inputClass =
    "w-full border border-silver bg-transparent px-4 py-3 text-sm text-ink placeholder:text-stone/50 focus:border-ink focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-medium uppercase tracking-wide text-stone"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-medium uppercase tracking-wide text-stone"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-xs font-medium uppercase tracking-wide text-stone"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="(000) 000-0000"
          className={inputClass}
        />
      </div>

      {/* Services */}
      <div>
        <span className="mb-3 block text-xs font-medium uppercase tracking-wide text-stone">
          I&apos;m Interested In
        </span>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((service, i) => (
            <label
              key={`service-${i}`}
              className="flex items-center gap-2 text-sm text-ink"
            >
              <input
                type="checkbox"
                checked={form.services.includes(service)}
                onChange={() => handleCheckbox(service)}
                className="h-4 w-4 border-silver accent-warm"
              />
              {service}
            </label>
          ))}
        </div>
      </div>

      {/* Comments */}
      <div>
        <label
          htmlFor="comments"
          className="mb-2 block text-xs font-medium uppercase tracking-wide text-stone"
        >
          Additional Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={5}
          value={form.comments}
          onChange={handleChange}
          placeholder="Tell me about your goals, timeline, or any questions you have..."
          className={inputClass}
        />
      </div>

      {/* Submit */}
      <Button type="submit" variant="accent" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}

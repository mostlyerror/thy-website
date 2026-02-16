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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "921e1c0d-fbc0-4ed0-bd93-c5ea9320612f",
        subject: `New inquiry from ${form.name}`,
        from_name: form.name,
        name: form.name,
        email: form.email,
        phone: form.phone,
        services: form.services.join(", "),
        comments: form.comments,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", services: [], comments: "" });
    } else {
      setStatus("error");
    }
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
      <Button
        type="submit"
        variant="accent"
        className="w-full sm:w-auto"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "sent" && (
        <p className="text-sm text-green-700">
          Thank you! Your message has been sent. I&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or contact me directly.
        </p>
      )}
    </form>
  );
}

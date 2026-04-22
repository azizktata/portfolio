"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const SERVICES = [
  "Website Design & Dev",
  "SEO & Performance",
  "Marketing & Copywriting",
  "Not sure yet",
  // "Site Management",
];

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate() {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Required";
    if (!form.email.trim()) {
      next.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Invalid email";
    }
    if (!form.service) next.service = "Pick a service";
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-3 py-6">
        <CheckCircle className="text-primary" size={28} />
        <p className="text-lg font-bold tracking-tight">Got it.</p>
        <p className="text-sm text-muted-foreground">
          I&apos;ll be in touch soon. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <p className="text-xl font-bold tracking-tight mb-4">Let&apos;s build something.</p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className={cn(
              "w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground",
              "outline-none transition-all focus:ring-2 focus:ring-primary/50 focus:border-primary",
              errors.name && "border-destructive"
            )}
          />
          {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className={cn(
              "w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground",
              "outline-none transition-all focus:ring-2 focus:ring-primary/50 focus:border-primary",
              errors.email && "border-destructive"
            )}
          />
          {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
        </div>

        {/* Service pills */}
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setForm((f) => ({ ...f, service: s }))}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium transition-all",
                  "hover:border-primary hover:text-primary",
                  form.service === s
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground"
                )}
              >
                {s}
              </button>
            ))}
          </div>
          {errors.service && <span className="text-xs text-destructive">{errors.service}</span>}
        </div>

        {/* Message */}
        <textarea
          placeholder="Tell me about your project or goal (optional)"
          value={form.message}
          rows={3}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className={cn(
            "w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground resize-none",
            "outline-none transition-all focus:ring-2 focus:ring-primary/50 focus:border-primary"
          )}
        />

        {status === "error" && (
          <p className="text-xs text-destructive">Something went wrong. Try again.</p>
        )}

        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-primary/80 text-white hover:bg-primary transition-all"
        >
          {status === "loading" ? "Sending…" : "Start the conversation"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          No commitment. Just a conversation.
        </p>
      </form>
    </div>
  );
}

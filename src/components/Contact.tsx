// useState and FormEvent kept for when contact form is re-enabled
// import { useState, type FormEvent } from "react";
// import { Send } from "lucide-react";
import { Mail } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export default function Contact() {
  // Form state — uncomment when contact form is re-enabled
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  //
  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   alert("Thanks for reaching out! (This form isn't wired up to a backend yet.)");
  //   setFormData({ name: "", email: "", message: "" });
  // };

  return (
    <section id="contact" className="angled-top bg-page-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="text-heading text-3xl sm:text-4xl">
            Let's build something together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-tertiary">
            Have a project in mind, a question, or just want to say hi? Drop me a
            message and I'll get back to you.
          </p>
        </AnimatedSection>

        {/* Contact form — hidden for now, uncomment when backend is wired up */}
        {/* <div className="mt-14 grid items-start gap-12 md:grid-cols-5">
          <AnimatedSection className="md:col-span-3" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-secondary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, name: e.target.value }))
                  }
                  className="w-full rounded-xl border border-border bg-raised px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-faint focus:border-accent/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-secondary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, email: e.target.value }))
                  }
                  className="w-full rounded-xl border border-border bg-raised px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-faint focus:border-accent/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-secondary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, message: e.target.value }))
                  }
                  className="w-full resize-none rounded-xl border border-border bg-raised px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-faint focus:border-accent/50"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-heading text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:brightness-110 hover:shadow-accent/40 active:scale-[0.97]"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div> */}

        <div className="mt-14 flex justify-center">
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl card-surface p-6 text-left max-w-md w-full">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
                Connect
              </h3>
              <p className="mt-2 text-sm text-tertiary">
                Find me on these platforms or shoot me an email directly.
              </p>

              <div className="mt-6 space-y-3">
                <SocialLink
                  href="https://github.com/rkdhruv"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  }
                  label="GitHub"
                  handle="@rkdhruv"
                />
                <SocialLink
                  href="https://linkedin.com/in/rkdhruv"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  }
                  label="LinkedIn"
                  handle="/in/rkdhruv"
                />
                <SocialLink
                  href="#"
                  icon={<Mail size={18} />}
                  label="Email"
                  handle="Coming soon"
                />
              </div>
            </div>
          </AnimatedSection>
          </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
  handle,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  handle: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-xl border border-border-subtle bg-highest p-3 transition-colors hover:border-accent/30 hover:text-accent"
      aria-label={label}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
        {icon}
      </span>
      <div>
        <p className="text-sm font-medium text-primary">{label}</p>
        <p className="text-xs text-faint">{handle}</p>
      </div>
    </a>
  );
}

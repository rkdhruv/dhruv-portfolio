import { Briefcase } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

interface Role {
  title: string;
  company: string;
  context: string;
  location: string;
  period: string;
  bullets: string[];
}

const ROLES: Role[] = [
  {
    title: "Software Developer, Undergraduate Researcher",
    company: "DAPPEr CubeSat Mission (NASA-funded)",
    context: "University of Delaware",
    location: "Newark, DE",
    period: "Sept 2025 – Present",
    bullets: [
      "Developing and maintaining mission-critical ground station and flight software in Python and C for a NASA-funded CubeSat mission, enabling real-time satellite communication",
      "Modularized the ground software architecture to improve maintainability and extensibility; implemented command handling and communication workflows to support satellite operations",
      "Debugging and testing communication pipelines and software components to identify and resolve reliability issues during development and integration",
      "Collaborating with electrical and science teams to define software requirements and integrate flight-ready features into mission timelines",
    ],
  },
  {
    title: "Information Technology Intern",
    company: "Sussex Technical High School",
    context: "",
    location: "Georgetown, DE",
    period: "Sept 2022 – Aug 2023",
    bullets: [
      "Deployed and configured 100+ MacBooks and desktop computers across 10 departments, reducing technical disruptions by 30%",
      "Implemented centralized asset tracking system by cataloging 200+ hardware devices, improving retrieval efficiency by 40%",
      "Upgraded network infrastructure by installing 5 Wi-Fi access points and printers across campus",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="angled-top-reverse bg-page">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Experience
          </p>
          <h2 className="text-heading text-3xl sm:text-4xl">
            Where I've worked
          </h2>
        </AnimatedSection>

        <div className="mt-14 space-y-10">
          {ROLES.map((role, i) => (
            <AnimatedSection key={role.title} delay={i * 0.1}>
              <article className="relative grid gap-4 rounded-2xl card-surface p-6 md:grid-cols-4 md:gap-6">
                {/* Left column — metadata */}
                <div className="md:col-span-1">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Briefcase size={18} />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">
                    {role.period}
                  </p>
                  <p className="mt-1 text-xs text-faint">{role.location}</p>
                </div>

                {/* Right column — details */}
                <div className="md:col-span-3">
                  <h3 className="text-heading text-lg">{role.title}</h3>
                  <p className="mt-0.5 text-sm font-medium text-tertiary">
                    {role.company}
                    {role.context && (
                      <span className="text-faint"> · {role.context}</span>
                    )}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {role.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="relative pl-4 text-sm leading-relaxed text-tertiary before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/40"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

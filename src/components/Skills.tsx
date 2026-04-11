import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  items: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Python", "C++", "C", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Node.js", "Supabase", "Three.js", "Leaflet.js"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "Linux", "HTML/CSS", "VS Code"],
  },
];

function SkillBadge({ name, index }: { name: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 + 0.1 }}
      className="rounded-lg border border-border-subtle bg-highest px-4 py-2 text-sm font-medium text-secondary transition-colors hover:border-accent/40 hover:text-accent"
    >
      {name}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="angled-top-reverse bg-page">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Skills
          </p>
          <h2 className="text-heading text-3xl sm:text-4xl">
            Tech I work with
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <AnimatedSection key={category.title} delay={catIndex * 0.1}>
              <div className="text-left">
                <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <SkillBadge key={item} name={item} index={i} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

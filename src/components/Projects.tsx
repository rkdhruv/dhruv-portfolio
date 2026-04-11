import { ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demo?: string;
  github?: string;
}

const PROJECTS: Project[] = [
  {
    title: "UDelaWhere??",
    description:
      "An interactive 360° campus exploration game to help incoming students navigate the University of Delaware. Features multiple game modes, immersive panoramic views via Three.js, interactive mapping with Leaflet.js, and a real-time global leaderboard powered by Supabase.",
    tags: ["React", "TypeScript", "Three.js", "Leaflet.js", "Supabase"],
    image: "/project-udelawhere.png",
    github: "https://github.com/nathancblack/UDelaWhere",
  },
  {
    title: "Pathfinder",
    description:
      "A career guidance web app that leverages LLM APIs to generate personalized career recommendations from user quiz responses. Features a responsive React frontend with dynamic rendering to display tailored career paths and actionable insights.",
    tags: ["React", "OpenAI API"],
    image: "/project-pathfinder.png",
    github: "https://github.com/NekroCat/Final-Project",
  },
  {
    title: "F1 Data Visualizer",
    description:
      "An interactive Formula 1 data visualization tool using the FastF1 API to analyze race telemetry, lap times, and driver performance metrics. Processes real-time racing data to generate insights on speed traces, tire strategies, and lap-by-lap comparisons.",
    tags: ["Python", "FastF1 API", "Data Visualization"],
    image: "/project-f1-visualizer.png",
    github: "https://github.com/rkdhruv/f1-data-visualizer",
  },
  {
    title: "Habit Tracker",
    description:
      "A habit tracking web application built with the WEBez framework, implementing dynamic UI components and state management for tracking daily habits and building streaks.",
    tags: ["TypeScript", "WEBez Framework"],
    github: "https://github.com/UD-S24-CISC181/final-project-rkdhruv",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl card-surface transition-colors hover:border-accent/30"
      >
        {/* Thumbnail */}
        <div className="relative h-44 overflow-hidden bg-highest">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-faint">
              <Code2 size={32} className="opacity-20" />
            </div>
          )}
          {/* Hover accent bar */}
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-heading text-lg">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-tertiary">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-4 flex items-center gap-3 border-t border-border-subtle pt-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-tertiary transition-colors hover:text-accent"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-tertiary transition-colors hover:text-accent"
              >
                <Code2 size={14} />
                Source
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </AnimatedSection>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="angled-top bg-page-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Projects
          </p>
          <h2 className="text-heading text-3xl sm:text-4xl">
            Things I've built
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-tertiary">
            A selection of projects I've worked on — from campus exploration games
            to F1 data analysis.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

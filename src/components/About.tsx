import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Award } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="angled-top bg-page-alt">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            About Me
          </p>
          <h2 className="text-heading text-3xl sm:text-4xl">
            A bit about who I am
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid items-center gap-12 md:grid-cols-5">
          {/* Photo placeholder */}
          <AnimatedSection className="md:col-span-2">
            <div className="relative mx-auto aspect-square w-56 sm:w-64 md:w-full md:max-w-xs">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-transparent blur-md" />
              <img
                src="/headshot.jpeg"
                alt="Dhruv Patel"
                className="relative h-full w-full object-cover rounded-2xl border border-border-subtle"
              />
              {/* Decorative accent corner */}
              <div className="absolute -right-3 -top-3 h-6 w-6 border-r-2 border-t-2 border-accent" aria-hidden="true" />
              <div className="absolute -bottom-3 -left-3 h-6 w-6 border-b-2 border-l-2 border-accent" aria-hidden="true" />
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection className="md:col-span-3" delay={0.15}>
            <div className="space-y-4 text-left text-tertiary leading-relaxed">
              <p>
                I'm Dhruv Patel, a Computer Science student at the University of
                Delaware with a concentration in Artificial Intelligence &amp;
                Robotics. I'm passionate about building software that solves
                real problems — from mission-critical satellite systems to
                interactive web experiences.
              </p>
              <p>
                Currently, I'm working as a software developer and undergraduate
                researcher on a NASA-funded CubeSat mission, writing ground
                station and flight software in Python and C. I love tackling
                challenging engineering problems and turning ideas into
                functional, well-crafted products.
              </p>
            </div>

            {/* Info cards */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-4"
              >
                <GraduationCap size={20} className="mt-0.5 shrink-0 text-accent" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-heading font-heading">
                    Education
                  </p>
                  <p className="mt-1 text-sm text-tertiary">
                    B.S. Computer Science, University of Delaware — GPA: 3.98/4.00.
                    Expected May 2027.
                  </p>
                </div>
              </motion.aside>

              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-4"
              >
                <Award size={20} className="mt-0.5 shrink-0 text-accent" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-heading font-heading">
                    Honors
                  </p>
                  <p className="mt-1 text-sm text-tertiary">
                    Dean's List (Fall 2023 – Spring 2025), Presidential Scholarship
                  </p>
                </div>
              </motion.aside>
            </div>

            {/* Fun fact */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-3 flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-4"
            >
              <Sparkles size={20} className="mt-0.5 shrink-0 text-accent" />
              <div className="text-left">
                <p className="text-sm font-semibold text-heading font-heading">
                  Fun fact
                </p>
                <p className="mt-1 text-sm text-tertiary">
                  When I'm not coding, you'll find me watching F1 races, playing video games,
                  or tinkering with side projects that will definitely be finished 'someday.'
                </p>
              </div>
            </motion.aside>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { highlights, profile, projects, skills } from "@/data/site";

export const metadata = {
  title: "Biomedical Profile | Home",
  description: "Personal biomedical profile bridging academic rigor and industry impact.",
  openGraph: {
    title: "Biomedical Profile | Home",
    description: "Personal biomedical profile bridging academic rigor and industry impact.",
    images: ["/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Biomedical Profile | Home",
    description: "Personal biomedical profile bridging academic rigor and industry impact.",
    images: ["/og-image.png"]
  }
};

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home" className="section">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{profile.title}</p>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  {profile.name}
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300">{profile.tagline}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={profile.cvUrl} className="btn-primary">
                  Download CV
                </a>
                <Link href="#contact" className="btn-secondary">
                  Contact
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                {profile.location ? <span>{profile.location}</span> : null}
                <span>{profile.email}</span>
              </div>
            </div>
            <div className="card relative flex items-center justify-center p-8">
              <div className="absolute inset-6 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700" />
              <Image
                src="/avatar.png"
                alt="Profile avatar"
                width={220}
                height={220}
                className="relative rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="mx-auto max-w-6xl space-y-10 px-6">
            <SectionTitle
              eyebrow="Highlights"
              title="Why teams bring me in"
              description="A blend of mechanistic curiosity and delivery-focused execution."
            />
            <div className="section-grid md:grid-cols-3">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="card p-6">
                  <h3 className="text-lg font-semibold">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {featuredProjects.length ? (
          <section id="projects" className="section">
            <div className="mx-auto max-w-6xl space-y-10 px-6">
              <SectionTitle
                eyebrow="Featured"
                title="Projects that define my translational lens"
                description="Selected work that spans discovery, validation, and delivery."
              />
              <div className="section-grid md:grid-cols-3">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} mode="home" />
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/academic" className="btn-secondary">
                  View academic lens
                </Link>
                <Link href="/industry" className="btn-primary">
                  View industry lens
                </Link>
              </div>
            </div>
          </section>
        ) : null}

        <section id="skills" className="section">
          <div className="mx-auto max-w-6xl space-y-10 px-6">
            <SectionTitle
              eyebrow="Skills"
              title="Capabilities across discovery to delivery"
              description="Domain expertise paired with methods and cross-team delivery habits."
            />
            <div className="section-grid md:grid-cols-3">
              <div className="card p-6">
                <h3 className="text-lg font-semibold">Domain</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {skills.domain.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold">Methods</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {skills.methods.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold">Delivery</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {skills.delivery.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[0.8fr_1.2fr]">
            <div className="card p-6">
              <Image
                src="/avatar.png"
                alt="Portrait placeholder"
                width={320}
                height={320}
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="space-y-4">
              <SectionTitle eyebrow="About" title="Grounded in science, fluent in delivery" />
              <p className="text-sm text-slate-600 dark:text-slate-300">
                I partner with research and product teams to translate mechanistic insights into
                actionable programs. My work spans experimental design, cross-functional alignment,
                and the narrative framing needed to bring new therapies forward.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                I thrive at the interface of biology and data, leading initiatives that tighten the
                feedback loop between discovery and application. Whether building biomarker stacks
                or validating new targets, I focus on clarity, speed, and scientific rigor.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                I’m open to academic collaborations, industry advisory, and translational strategy
                roles.
              </p>
            </div>
          </div>
        </section>

        <ContactSection profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}

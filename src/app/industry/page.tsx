import Link from "next/link";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { industryExtras, profile, projects } from "@/data/site";

export const metadata = {
  title: "Biomedical Profile | Industry",
  description: "Industry-facing profile focused on delivery, impact, and collaboration.",
  openGraph: {
    title: "Biomedical Profile | Industry",
    description: "Industry-facing profile focused on delivery, impact, and collaboration.",
    images: ["/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Biomedical Profile | Industry",
    description: "Industry-facing profile focused on delivery, impact, and collaboration.",
    images: ["/og-image.png"]
  }
};

const toolset = Array.from(new Set(projects.flatMap((project) => project.methods))).slice(0, 8);

export default function IndustryPage() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="section">
          <div className="mx-auto max-w-6xl space-y-6 px-6">
            <SectionTitle eyebrow="Industry Profile" title="Industry Profile" description="Delivery-focused, measurable, and cross-functional." />
            <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-300">
              I help portfolio teams translate biomedical insights into execution-ready plans, aligning
              assay strategy, data products, and stakeholder narratives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/" className="btn-secondary">
                Back to home
              </Link>
              <Link href="/academic" className="btn-primary">
                Academic profile
              </Link>
            </div>
          </div>
        </section>

        {industryExtras.problemSpaces.length ? (
          <section className="section">
            <div className="mx-auto max-w-6xl space-y-6 px-6">
              <SectionTitle eyebrow="Problem Spaces" title="Where I create value" />
              <div className="section-grid md:grid-cols-2">
                {industryExtras.problemSpaces.map((item) => (
                  <div key={item.title} className="card p-6">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {projects.length ? (
          <section className="section">
            <div className="mx-auto max-w-6xl space-y-6 px-6">
              <SectionTitle
                eyebrow="Case Studies"
                title="Case studies with deliverables and impact"
                description="Same work, industry framing."
              />
              <div className="section-grid md:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} mode="industry" />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section">
          <div className="mx-auto max-w-6xl grid gap-6 px-6 md:grid-cols-[1fr_1.1fr]">
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Toolbox</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Methods and tools I deploy to move programs forward.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-primary">
                {toolset.map((item) => (
                  <span key={item} className="rounded-full bg-primary/10 px-2.5 py-1">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                I can deliver: {industryExtras.canDeliver.join(", ")}.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold">Working style</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                {industryExtras.workingStyle.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="card flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Ready to support your pipeline</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  From biomarker strategy to cross-functional storytelling, I can help you deliver.
                </p>
              </div>
              <Link href="#contact" className="btn-primary">
                Start a conversation
              </Link>
            </div>
          </div>
        </section>

        <ContactSection profile={profile} title="Let’s build impact together" />
      </main>
      <Footer profile={profile} />
    </div>
  );
}

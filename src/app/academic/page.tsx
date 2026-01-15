import Link from "next/link";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import PublicationList from "@/components/PublicationList";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { academicExtras, profile, projects, publications } from "@/data/site";

export const metadata = {
  title: "Biomedical Profile | Academic",
  description: "Academic profile highlighting research focus, publications, and collaborations.",
  openGraph: {
    title: "Biomedical Profile | Academic",
    description: "Academic profile highlighting research focus, publications, and collaborations.",
    images: ["/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Biomedical Profile | Academic",
    description: "Academic profile highlighting research focus, publications, and collaborations.",
    images: ["/og-image.png"]
  }
};

export default function AcademicPage() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="section">
          <div className="mx-auto max-w-6xl space-y-6 px-6">
            <SectionTitle eyebrow="Academic Profile" title="Academic Profile" description="Research-driven, mechanistic, and collaborative." />
            <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-300">
              I lead translational research programs that map mechanism to therapeutic opportunity,
              with a focus on reproducible experimentation and high-impact dissemination.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/" className="btn-secondary">
                Back to home
              </Link>
              <Link href="/industry" className="btn-primary">
                Industry profile
              </Link>
            </div>
          </div>
        </section>

        {academicExtras.researchInterests.length ? (
          <section className="section">
            <div className="mx-auto max-w-6xl space-y-6 px-6">
              <SectionTitle eyebrow="Research" title="Research interests" />
              <ul className="card list-disc space-y-2 p-6 pl-8 text-sm text-slate-600 dark:text-slate-300">
                {academicExtras.researchInterests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {publications.length ? (
          <section className="section">
            <div className="mx-auto max-w-6xl space-y-6 px-6">
              <SectionTitle eyebrow="Publications" title="Selected publications" />
              <PublicationList publications={publications.slice(0, 5)} />
            </div>
          </section>
        ) : null}

        {projects.length ? (
          <section className="section">
            <div className="mx-auto max-w-6xl space-y-6 px-6">
              <SectionTitle eyebrow="Projects" title="Research projects" description="Same work, academic framing." />
              <div className="section-grid md:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} mode="academic" />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {academicExtras.talks.length || academicExtras.awards.length ? (
          <section className="section">
            <div className="mx-auto max-w-6xl grid gap-6 px-6 md:grid-cols-2">
              {academicExtras.talks.length ? (
                <div className="card p-6">
                  <h3 className="text-lg font-semibold">Talks & Posters</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {academicExtras.talks.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {academicExtras.awards.length ? (
                <div className="card p-6">
                  <h3 className="text-lg font-semibold">Awards</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {academicExtras.awards.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        {academicExtras.openQuestions.length ? (
          <section className="section">
            <div className="mx-auto max-w-6xl space-y-6 px-6">
              <SectionTitle eyebrow="Open Questions" title="Questions I want to solve next" />
              <div className="section-grid md:grid-cols-3">
                {academicExtras.openQuestions.map((item) => (
                  <div key={item} className="card p-6 text-sm text-slate-600 dark:text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="card flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Open to collaborations</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  I collaborate on spatial biology, translational biomarkers, and mechanistic modeling.
                </p>
              </div>
              <Link href="#contact" className="btn-primary">
                Start a collaboration
              </Link>
            </div>
          </div>
        </section>

        <ContactSection profile={profile} title="Let’s build something publishable" />
      </main>
      <Footer profile={profile} />
    </div>
  );
}

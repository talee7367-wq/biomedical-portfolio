import type { Profile } from "@/data/site";

type FooterProps = {
  profile: Profile;
};

export default function Footer({ profile }: FooterProps) {
  return (
    <footer className="border-t border-white/30 bg-white/60 py-8 text-sm text-slate-500 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Based in {profile.location || "Global"} · {profile.email}</p>
      </div>
    </footer>
  );
}

import type { Publication } from "@/data/site";

type PublicationListProps = {
  publications: Publication[];
};

export default function PublicationList({ publications }: PublicationListProps) {
  return (
    <ul className="space-y-4">
      {publications.map((pub) => (
        <li key={pub.title} className="card p-5">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{pub.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {pub.venue} · {pub.year}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{pub.authors}</p>
            <a href={pub.url} className="text-xs font-semibold text-primary underline-offset-4 hover:underline">
              View publication
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

import { aboutData } from '../data/aboutData';
import { Link } from 'react-router-dom';

// We can reuse the certifications from aboutData or extend it.
// The HTML page has some more details for certifications. Let's create a local data structure for it.
const extendedCertifications = [
  {
    id: "python-dev",
    title: "Python Developer",
    organization: "Sololearn",
    date: "JUN 2026",
    description: "Demonstrates the ability to design, develop, and maintain scalable Python applications while applying object-oriented programming, testing, and code optimization techniques.",
    tags: ["Python"],
    icon: "open_in_new",
    url: "https://drive.google.com/file/d/1lPAG2srstGZO-tyKD_94ObVyXoXUs6j7/preview"
  },
  {
    id: "cka",
    title: "MSBTE Technical Quiz",
    organization: "Maharashtra State Board Of Technical Education",
    date: "FEB 2024",
    description: "Demonstrates strong technical knowledge, analytical reasoning, and problem-solving competency across engineering and technology domains, validated through achieving Second Place in the MSBTE Technical Quiz Competition.",
    tags: ["2nd Rank", "Technical Quiz", "MSBTE"],
    icon: "open_in_new",
    url: "https://drive.google.com/file/d/1rEIOuAeAalxW5vIl5Txk7RlfUH3VdukB/preview"
  }
];

export default function CertificationsPage() {
  return (
    <div className="flex flex-col min-h-screen -mt-[110px]">
      <header className="mt-section-gap mb-16 max-w-3xl">
        <h1 className="font-hero-display-mobile md:font-hero-display text-hero-display-mobile md:text-hero-display text-zinc-text-primary mb-6 animate-fade-up">
          Certifications &amp;<br />Achievements
        </h1>
        <p className="font-body-lg text-body-lg text-zinc-text-secondary animate-fade-up delay-100">
          Continuous learning is the foundation of robust systems thinking. These certifications represent formal validation of practical, architectural, and operational engineering capabilities.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-section-gap">
        {extendedCertifications.map((cert, index) => (
          <article
            key={cert.id}
            className="cert-card glass-panel rounded-xl p-6 relative overflow-hidden interactive-element group flex flex-col h-full animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Link to={`/document?url=${encodeURIComponent(cert.url)}`} className="absolute top-4 right-4 text-zinc-text-secondary opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all hover-target z-20">
              <span className="material-symbols-outlined text-[24px]">{cert.icon}</span>
            </Link>
            <div className="mb-auto z-10 relative">
              <p className="font-label-mono text-label-mono text-zinc-text-secondary mb-2 tracking-wider">{cert.date}</p>
              <h3 className="font-headline-md text-headline-md text-zinc-text-primary mb-1">{cert.title}</h3>
              <p className="font-body-md text-body-md text-primary-container mb-4">{cert.organization}</p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {cert.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-border flex flex-wrap gap-2 z-10 relative">
              {cert.tags.map(tag => (
                <span key={tag} className="font-label-mono text-[10px] px-2 py-1 border border-zinc-border rounded text-zinc-text-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}

        {/* Placeholder for Future Certification */}
        <article
          className="cert-card glass-panel rounded-xl p-6 relative overflow-hidden interactive-element group flex flex-col h-full border-dashed border-2 opacity-60 animate-fade-up"
          style={{ animationDelay: `${extendedCertifications.length * 100}ms` }}
        >
          <div className="absolute top-4 right-4 text-zinc-text-secondary opacity-50 transition-all">
            <span className="material-symbols-outlined text-[24px]">hourglass_empty</span>
          </div>
          <div className="mb-auto z-10 relative flex flex-col items-center justify-center h-full text-center py-8">
            <div className="w-12 h-12 rounded-full border border-zinc-border flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-zinc-text-secondary text-[24px]">add</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-zinc-text-secondary mb-1">In Progress</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Currently studying something to improve myself.<br />Or doing something to prove myself.<br />Or... Idk. Something.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

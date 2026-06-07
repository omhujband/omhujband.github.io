import { aboutData } from '../data/aboutData';

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-section-gap">
      {/* Intro Section */}
      <section className="pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-7 flex flex-col justify-center">
            <h1 className="font-hero-display-mobile text-hero-display-mobile md:font-hero-display md:text-hero-display text-zinc-text-primary mb-6">
              {aboutData.header.title}
            </h1>
            <div className="mb-6">
              <span className="font-label-mono text-headline-md text-primary uppercase tracking-widest">
                {aboutData.header.subtitle}
              </span>
            </div>
            <p className="font-body-lg text-body-lg text-zinc-text-secondary max-w-2xl mb-8">
              {aboutData.header.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {aboutData.header.tags.map(tag => (
                <span key={tag} className="font-label-mono text-label-mono text-primary border border-zinc-border px-3 py-1 rounded hover-target interactive-element hover:bg-surface-variant/30 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 flex items-center justify-center mt-12 md:mt-0">
            <div className="w-[250px] h-[250px] rounded-full border border-primary-container shadow-[0_0_30px_rgba(96,165,250,0.4)] bg-zinc-surface/50 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(161, 161, 170, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(161, 161, 170, 0.2) 1px, transparent 1px)", backgroundSize: "12px 12px" }}></div>
              <span className="material-symbols-outlined text-primary/40 text-[48px]">person</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid for Details */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
        {/* Education Card */}
        <div className="glass-panel md:col-span-8 p-8 rounded-lg relative overflow-hidden group animate-fade-up">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          <h2 className="font-label-mono text-label-mono text-zinc-text-secondary uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px]">school</span> Education
          </h2>
          <div className="space-y-6 relative z-10">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="font-headline-md text-headline-md text-zinc-text-primary">{aboutData.education.degree}</h3>
                <span className="font-label-mono text-label-mono text-zinc-text-secondary">{aboutData.education.year}</span>
              </div>
              <p className="font-body-md text-body-md text-zinc-text-secondary">{aboutData.education.institution}</p>
              <p className="font-body-md text-body-md text-zinc-text-secondary mt-2">{aboutData.education.details}</p>
            </div>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="glass-panel md:col-span-4 p-8 rounded-lg animate-fade-up delay-100">
          <h2 className="font-label-mono text-label-mono text-zinc-text-secondary uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px]">verified</span> Certifications
          </h2>
          <ul className="space-y-4">
            {aboutData.certifications.map(cert => (
              <li key={cert.title} className="border-b border-zinc-border pb-4 last:border-0 last:pb-0">
                <h4 className="font-body-md text-body-md text-zinc-text-primary font-semibold">{cert.title}</h4>
                <p className="font-label-mono text-label-mono text-zinc-text-secondary mt-1">{cert.organization} · {cert.year}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience Card */}
        <div className="glass-panel md:col-span-12 p-8 rounded-lg mt-gutter animate-fade-up delay-200">
          <h2 className="font-label-mono text-label-mono text-zinc-text-secondary uppercase tracking-widest mb-8 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px]">work</span> Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-border -translate-x-1/2"></div>
            {aboutData.experience.map((exp, index) => (
              <div key={index} className={`relative hover-target ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 mt-8 md:mt-24'}`}>
                {index % 2 === 0 ? (
                  <div className="hidden md:block absolute right-0 top-2 w-2 h-2 bg-primary rounded-full translate-x-[5px]"></div>
                ) : (
                  <div className="hidden md:block absolute left-0 top-2 w-2 h-2 bg-primary rounded-full -translate-x-[5px]"></div>
                )}
                <span className="font-label-mono text-label-mono text-primary mb-2 block">{exp.date}</span>
                <h3 className="font-headline-md text-headline-md text-zinc-text-primary">{exp.role}</h3>
                <p className="font-body-md text-body-md text-zinc-text-primary font-medium mb-3">{exp.company}</p>
                <p className="font-body-md text-body-md text-zinc-text-secondary">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="md:col-span-12 mt-gutter animate-fade-up delay-300">
          <h2 className="font-label-mono text-label-mono text-zinc-text-secondary uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px]">terminal</span> Technical Arsenal
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aboutData.skills.map(skillGroup => (
              <div key={skillGroup.category} className="border border-zinc-border rounded p-4 bg-zinc-surface/50 hover:bg-zinc-surface transition-colors hover-target">
                <h4 className="font-label-mono text-label-mono text-zinc-text-primary mb-3">{skillGroup.category}</h4>
                <ul className="font-body-md text-body-md text-zinc-text-secondary space-y-1">
                  {skillGroup.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

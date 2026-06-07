import { projectsData } from '../data/projectsData';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <header className="mt-section-gap mb-16 max-w-3xl">
        <h1 className="font-hero-display-mobile text-hero-display-mobile md:font-hero-display md:text-hero-display text-on-surface mb-6 animate-fade-up">
          Engineering <br /> <span className="text-primary">Case Studies</span>
        </h1>
        <p className="font-body-lg text-body-lg text-zinc-text-secondary max-w-2xl animate-fade-up delay-100">
          Turning unusual ideas into working products. A detailed look into the architecture, challenges, and outcomes of select technical deep-dives.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-section-gap">
        {projectsData.map((project, index) => (
          <article 
            key={project.id} 
            className={`bg-zinc-surface border border-zinc-border rounded-lg p-8 flex flex-col gap-6 card-glow transition-all duration-300 hover-target relative overflow-hidden group animate-fade-up ${project.featured ? 'md:col-span-2' : ''}`}
            style={{ animationDelay: `${(index + 2) * 100}ms` }}
          >
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-zinc-border opacity-50 group-hover:border-primary transition-colors"></div>
            
            <header>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-2">{project.title}</h2>
              <p className="font-body-md text-body-md text-zinc-text-secondary italic">{project.subtitle}</p>
            </header>
            
            <div className={`grid grid-cols-1 ${project.featured ? 'md:grid-cols-3' : ''} gap-8 space-y-4 md:space-y-0`}>
              <div className={!project.featured ? 'space-y-4' : ''}>
                <h3 className="font-label-mono text-label-mono text-primary mb-1 uppercase tracking-wider">The Problem</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{project.problem}</p>
              </div>
              
              <div className={!project.featured ? 'space-y-4' : ''}>
                <h3 className="font-label-mono text-label-mono text-primary mb-1 uppercase tracking-wider">Engineering Approach</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{project.approach}</p>
              </div>
              
              <div className={!project.featured ? 'space-y-4' : ''}>
                <h3 className="font-label-mono text-label-mono text-primary mb-1 uppercase tracking-wider">Result</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{project.result}</p>
              </div>
            </div>
            
            <div className="mt-auto pt-6 flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="font-label-mono text-label-mono px-2 py-1 border border-zinc-border rounded text-zinc-text-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

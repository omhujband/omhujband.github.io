import { useEffect, useState } from 'react';

export default function ProjectDossierModal({ isOpen, onClose, project }) {
  const [isInitializing, setIsInitializing] = useState(true);
  const [isVisible, setIsVisible] = useState(false); // For fade-in animation

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
      document.body.classList.add('dossier-open');
      // Simulate loading state
      const timer = setTimeout(() => {
        setIsInitializing(false);
      }, 500); // 500ms
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      setIsInitializing(true);
      document.body.style.overflow = 'unset';
      document.body.classList.remove('dossier-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('dossier-open');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      {/* Grid Overlay for the Modal Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.1) 100%),
            linear-gradient(rgba(161, 161, 170, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(161, 161, 170, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 24px 24px, 24px 24px',
          backgroundPosition: 'center top'
        }}
      ></div>

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-primary/20 rounded-[16px] shadow-[0_0_40px_rgba(164,201,255,0.05)] overflow-hidden flex flex-col transition-all duration-300 transform ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {isInitializing ? (
          <div className="flex flex-col items-center justify-center h-[50vh] min-h-[400px]">
            <div className="w-12 h-12 border-2 border-zinc-border border-t-primary rounded-full animate-spin mb-6"></div>
            <p className="font-label-mono text-label-mono text-primary uppercase tracking-widest animate-pulse">
              Initializing Project Dossier...
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <header className="flex flex-col md:flex-row md:justify-between md:items-end p-6 md:p-8 border-b border-primary/10 bg-surface/50">
              <div className="flex flex-col gap-2">
                <span className="font-label-mono text-[10px] md:text-[12px] text-zinc-text-secondary tracking-widest">{project.displayId}</span>
                <h2 className="font-headline-md text-[24px] md:text-[32px] text-zinc-text-primary leading-none">{project.title}</h2>
              </div>

              <div className="flex flex-row md:flex-col gap-4 md:gap-2 mt-4 md:mt-0 text-left md:text-right">
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] text-zinc-text-secondary uppercase tracking-widest">Status</span>
                  <span className="font-label-mono text-[12px] text-primary">{project.status}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] text-zinc-text-secondary uppercase tracking-widest">Category</span>
                  <span className="font-label-mono text-[12px] text-zinc-text-primary">{project.category}</span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-1 right-1 w-8 h-8 flex items-center justify-center rounded-full bg-surface-variant/30 text-zinc-text-secondary hover:text-primary hover:bg-primary/10 transition-colors hover-target"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </header>

            {/* Main Content (Scrollable) */}
            <div className="overflow-y-auto p-6 md:p-8 flex flex-col gap-10 scrollbar-hide">

              {/* Demo Section */}
              {(project.demoUrl || project.demoDescription) && (
                <section className="flex flex-col gap-4">
                  {project.demoUrl && (
                    <div className="w-full aspect-video rounded-xl overflow-hidden bg-[#111] border border-zinc-border relative flex items-center justify-center">
                      <iframe
                        src={project.demoUrl}
                        className="w-full h-full border-0 absolute inset-0"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title={`${project.title} Demo`}
                      ></iframe>
                    </div>
                  )}
                  {project.demoDescription && (
                    <p className="font-body-md text-zinc-text-secondary text-sm md:text-base border-l-2 border-primary/30 pl-4 py-1 italic">
                      {project.demoDescription}
                    </p>
                  )}
                </section>
              )}

              {/* Technical Snapshot & Summary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Summary */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-label-mono text-[12px] text-primary tracking-widest uppercase">Project Summary</h3>
                  <p className="font-body-md text-zinc-text-primary text-sm leading-relaxed">
                    {project.approach} {project.result}
                  </p>
                </div>

                {/* Technical Snapshot */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-label-mono text-[12px] text-primary tracking-widest uppercase">Technical Snapshot</h3>
                  <ul className="flex flex-col gap-2">
                    {project.technicalSnapshot?.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-body-md text-zinc-text-secondary text-sm">
                        <span className="w-1 h-1 rounded-full bg-primary/50"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-col gap-3 border-t border-zinc-border/50 pt-8">
                <h3 className="font-label-mono text-[12px] text-zinc-text-secondary tracking-widest uppercase mb-1">Architecture & Tech</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-label-mono text-[11px] px-3 py-1.5 border border-zinc-border bg-surface-variant/20 rounded text-zinc-text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer / Actions */}
            <footer className="p-6 md:p-8 border-t border-primary/10 bg-surface/30 flex flex-col sm:flex-row items-center justify-end gap-4 mt-auto">
              {project.secondaryAction && (
                <a
                  href={project.secondaryAction.url}
                  className="w-full sm:w-auto px-6 py-3 font-label-mono text-[12px] text-zinc-text-secondary border border-zinc-border rounded hover:bg-surface-variant/30 hover:text-primary transition-colors hover-target text-center"
                >
                  {project.secondaryAction.label}
                </a>
              )}
              {project.primaryAction && (
                <a
                  href={project.primaryAction.url}
                  className="w-full sm:w-auto px-6 py-3 font-label-mono text-[12px] text-[#0A0A0A] bg-primary border border-primary rounded hover:bg-primary-fixed transition-colors hover-target text-center flex items-center justify-center gap-2 group"
                  target='/'
                >
                  {project.primaryAction.label}
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              )}
            </footer>
          </>
        )}
      </div>
    </div>
  );
}

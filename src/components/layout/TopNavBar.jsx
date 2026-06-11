import { Link, useLocation } from 'react-router-dom';

export default function TopNavBar() {
  const location = useLocation();

  const getLinkClasses = (path) => {
    const baseClasses = "px-4 py-2 font-label-mono text-label-mono scale-95 active:scale-90 transition-transform hover:bg-surface-variant/50 rounded-full hover-target";
    if (location.pathname === path) {
      return `${baseClasses} text-primary font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full`;
    }
    return `${baseClasses} text-on-surface-variant hover:text-on-surface transition-colors`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-3 hidden md:flex">
      <div className="bg-surface/80 backdrop-blur-xl border border-zinc-border rounded-full mt-4 mx-auto max-w-fit shadow-sm flex items-center px-2 py-1">
        <div className="px-6 py-2">
          <Link to="/" className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight hover-target">
            Thoughtful Engineer
          </Link>
        </div>
        <div className="flex items-center gap-2 px-2 border-l border-zinc-border">
          <Link className={getLinkClasses('/')} to="/">Home</Link>
          <Link className={getLinkClasses('/about')} to="/about">About</Link>
          <Link className={getLinkClasses('/projects')} to="/projects">Projects</Link>
          <Link className={getLinkClasses('/certifications')} to="/certifications">Certifications</Link>
          <Link 
            to="/document?url=https://placeholder-resume-url.com/preview"
            className="ml-2 px-4 py-1.5 bg-surface-variant/30 border border-zinc-border/50 text-on-surface hover:bg-surface-variant/50 hover:border-primary/50 transition-all font-label-mono text-label-mono rounded-full hover-target flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[14px]">description</span>
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

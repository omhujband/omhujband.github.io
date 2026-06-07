import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full max-w-container-max mx-auto px-margin-desktop py-12 flex flex-col items-center gap-gutter border-t border-zinc-border bg-surface">
      <div className="max-w-2xl text-center mb-6">
        <p className="font-body-md text-body-md text-zinc-text-secondary italic">
          "I don't build apps because I know tools. I build them because I get obsessed with ideas until they become real."
        </p>
      </div>
      <div className="flex gap-6 mb-4">
        <Link to="/about" className="text-zinc-text-secondary hover:text-on-surface transition-colors font-body-md text-body-md hover:text-primary opacity-80 hover:opacity-100 transition-opacity hover-target">
          Philosophy
        </Link>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-text-secondary hover:text-on-surface transition-colors font-body-md text-body-md hover:text-primary opacity-80 hover:opacity-100 transition-opacity hover-target">
          GitHub
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-zinc-text-secondary hover:text-on-surface transition-colors font-body-md text-body-md hover:text-primary opacity-80 hover:opacity-100 transition-opacity hover-target">
          Resume
        </a>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="font-label-mono text-label-mono text-primary">Thoughtful Engineer</span>
        <span className="font-body-md text-body-md text-zinc-text-secondary text-sm">
          © {new Date().getFullYear()} Thoughtful Engineer. Built with discipline and systems thinking.
        </span>
      </div>
    </footer>
  );
}

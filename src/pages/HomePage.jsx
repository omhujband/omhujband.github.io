import { Link } from 'react-router-dom';
import { homeData } from '../data/homeData';
import { useState } from 'react';

function HeroSection() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center relative">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      <div className="max-w-3xl animate-fade-up">
        <div className="inline-flex items-center gap-2 border border-zinc-border rounded-full px-3 py-1 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label-mono text-label-mono text-zinc-text-secondary">System Status: Building</span>
        </div>
        <h1 className="font-hero-display-mobile md:font-hero-display text-hero-display-mobile md:text-hero-display text-zinc-text-primary mb-6">
          {homeData.hero.headline}
        </h1>
        <h2 className="font-headline-md text-headline-md text-primary mb-6 max-w-2xl">
          {homeData.hero.subHeadline}
        </h2>
        <p className="font-body-lg text-body-lg text-zinc-text-secondary max-w-2xl mb-10 leading-relaxed">
          {homeData.hero.description}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link className="bg-primary text-on-primary font-label-mono text-label-mono px-6 py-3 rounded flex items-center gap-2 hover:bg-primary-fixed transition-colors hover-target" to="/projects">
            View Projects
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
          <Link className="bg-transparent border border-zinc-border text-zinc-text-primary font-label-mono text-label-mono px-6 py-3 rounded flex items-center gap-2 hover:bg-surface-variant/30 transition-colors hover-target" to="/about">
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="animate-fade-up delay-100" id="projects">
      <div className="flex items-end justify-between mb-12 border-b border-zinc-border pb-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">// 01. FEATURED WORK</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {homeData.featuredWork.map((project) => (
          <div key={project.id} className="glass-panel p-8 rounded-xl glow-hover transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 flex flex-col justify-between">
                <div>
                  <h4 className="font-headline-md text-headline-md text-zinc-text-primary mb-2">{project.title}</h4>
                  <p className="font-body-md text-body-md text-zinc-text-secondary mb-6">{project.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-zinc-border text-zinc-text-secondary font-label-mono text-label-mono px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 bg-surface-container-low p-6 rounded-lg border border-zinc-border">
                <div>
                  <h5 className="font-label-mono text-label-mono text-primary mb-2">PROBLEM</h5>
                  <p className="font-body-md text-body-md text-zinc-text-secondary text-sm">{project.problem}</p>
                </div>
                <div>
                  <h5 className="font-label-mono text-label-mono text-primary mb-2">APPROACH</h5>
                  <p className="font-body-md text-body-md text-zinc-text-secondary text-sm">{project.approach}</p>
                </div>
                <div>
                  <h5 className="font-label-mono text-label-mono text-primary mb-2">RESULT</h5>
                  <p className="font-body-md text-body-md text-zinc-text-secondary text-sm">{project.result}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InterestsSection() {
  return (
    <section className="animate-fade-up delay-200 mt-section-gap">
      <h3 className="font-label-mono text-label-mono text-primary mb-6">// 02. CURRENT EXPLORATIONS</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {homeData.interests.map((interest, index) => {
          const colSpanClass = interest.cols === 1 ? '' : interest.cols === 2 ? 'md:col-span-2' : 'md:col-span-3';
          return (
            <div key={interest.id} className={`bg-zinc-surface border border-zinc-border rounded-xl p-6 relative overflow-hidden flex flex-col justify-end group glow-hover ${colSpanClass}`}>
              {index === 0 && (
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-surface to-surface"></div>
              )}
              {index === 1 && (
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
              )}
              <span className="material-symbols-outlined text-primary mb-auto text-[32px]">{interest.icon}</span>
              <h4 className="font-headline-md text-headline-md text-zinc-text-primary">{interest.title}</h4>
              <p className="font-label-mono text-label-mono text-zinc-text-secondary mt-2">{interest.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ContactSection() {
  const [copyText, setCopyText] = useState(homeData.contact.email);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(homeData.contact.email).then(() => {
      setCopyText('Copied to clipboard!');
      setCopied(true);
      setTimeout(() => {
        setCopyText(homeData.contact.email);
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <section className="animate-fade-up delay-300 py-12 flex justify-center mt-section-gap mb-16" id="contact">
      <div className="glass-panel w-full max-w-2xl rounded-xl p-10 flex flex-col items-center text-center relative overflow-hidden border border-zinc-border/50">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <h3 className="font-headline-lg text-headline-lg text-zinc-text-primary mb-4">{homeData.contact.title}</h3>
        <h4 className="font-headline-md text-headline-md text-primary mb-8">{homeData.contact.subtitle}</h4>
        <p className="font-body-md text-body-md text-zinc-text-secondary mb-10 max-w-md">
          {homeData.contact.description}
        </p>
        <button
          onClick={handleCopy}
          className={`bg-zinc-surface border ${copied ? 'border-primary bg-primary/5' : 'border-zinc-border hover:border-primary/50'} text-zinc-text-primary px-8 py-4 rounded font-label-mono text-label-mono flex items-center gap-3 transition-all hover-target mb-10 group`}
        >
          <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform text-[20px]">content_copy</span>
          <span>{copyText}</span>
        </button>
        <div className="flex gap-6">
          {homeData.contact.socials.map((social) => (
            <a key={social.id} href={social.url} className="text-zinc-text-secondary hover:text-primary transition-colors hover-target" title={social.name}>
              <span className="material-symbols-outlined text-[28px]">{social.icon}</span>
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-section-gap">
      <HeroSection />
      <FeaturedProjects />
      <InterestsSection />
      <ContactSection />
    </div>
  );
}

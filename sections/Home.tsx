
import React from 'react';

interface HomeProps {
  id: string;
  onViewResume: () => void;
  onViewTools: () => void;
}

const Home: React.FC<HomeProps> = ({ id, onViewResume, onViewTools }) => {
  return (
    <section id={id} className="relative min-h-screen flex flex-col justify-center py-24 px-8 sm:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[900px] mx-auto w-full">
        <div className="flex flex-col gap-10 animate-slide-up z-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface-dark border border-white/5 w-fit shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[11px] font-bold tracking-widest text-primary uppercase">Active in High-Impact Proposals</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-extralight leading-[1.1] tracking-tight">
              Naomi F. <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Donley</span>
            </h1>
            <p className="text-neutral-text text-lg sm:text-xl font-light leading-relaxed max-w-xl">
              I support teams across proposals, client onboarding, and implementation—ensuring every handoff is clear, organized, and executable. My background spans proposal coordination, pricing workflows, client operations, and process automation, allowing me to step in wherever structure and follow-through are needed most.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <button 
              onClick={onViewResume}
              className="group relative flex items-center justify-center h-14 px-10 rounded-full bg-primary text-background-dark hover:bg-white hover:scale-105 transform transition-all duration-300 shadow-[0_0_30px_rgba(220, 165, 169, 0.2)]"
            >
              <span className="text-sm font-bold tracking-wide uppercase mr-2">View Resume</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-y-1 transition-transform">description</span>
            </button>
            <a href="mailto:NaomiDonley@outlook.com" className="group flex items-center justify-center h-14 px-10 rounded-full border border-white/10 hover:border-primary/50 bg-transparent hover:bg-surface-dark text-white hover:text-primary transition-all duration-300">
              <span className="material-symbols-outlined mr-2 text-[20px] text-primary/80 group-hover:text-primary transition-colors">mail</span>
              <span className="text-sm font-semibold tracking-wide uppercase">Get In Touch</span>
            </a>
            <button
              onClick={onViewTools}
              className="group flex items-center justify-center h-14 px-10 rounded-full border border-white/10 hover:border-primary/50 bg-transparent hover:bg-surface-dark text-white hover:text-primary transition-all duration-300"
            >
              <span className="material-symbols-outlined mr-2 text-[20px] text-primary/80 group-hover:text-primary transition-colors">build</span>
              <span className="text-sm font-semibold tracking-wide uppercase">Tools & Automations</span>
            </button>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-12 border-t border-white/5 mt-4">
            <div className="flex flex-col">
              <span className="text-3xl font-light text-white">90%</span>
              <span className="text-xs uppercase tracking-widest text-neutral-text font-bold">Turnaround Improvement</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-light text-white">Advanced</span>
              <span className="text-xs uppercase tracking-widest text-neutral-text font-bold">Excel & CRM Expert</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-light text-white">BBA</span>
              <span className="text-xs uppercase tracking-widest text-neutral-text font-bold">Business Admin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

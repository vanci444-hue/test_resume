import { useState } from 'react'
import { useLang } from '../context/LangContext'

/* ── Project Detail Modal ── */
function ProjectModal({ project, closeBtn, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <div
        className="bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-outline-variant)] shadow-[8px_8px_0px_#000] w-full max-w-2xl max-h-[85vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal title bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-[var(--color-outline-variant)] bg-[var(--color-surface-container)] shrink-0">
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] font-bold">
            <span className="w-2 h-2 bg-[var(--color-primary-container)] inline-block" />
            <span className="text-[var(--color-primary-fixed-dim)] uppercase">{project.name}</span>
          </div>
          <button
            onClick={onClose}
            className="px-2 py-0.5 bg-[var(--color-secondary-container)] border border-[var(--color-secondary)] text-[var(--color-secondary)] font-['JetBrains_Mono'] text-[10px] font-bold uppercase hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-secondary)] transition-none cursor-pointer"
          >
            {closeBtn}
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto p-5 space-y-5 font-['JetBrains_Mono'] text-sm">
          {/* Meta */}
          <div className="flex flex-wrap gap-3">
            <span className="px-2 py-0.5 border border-[var(--color-primary-container)] text-[var(--color-primary-container)] text-[10px] font-bold bg-[var(--color-surface-container)]">
              {project.role}
            </span>
            <span className="px-2 py-0.5 border border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)] text-[10px] font-bold bg-[var(--color-surface-container)]">
              {project.period}
            </span>
          </div>

          {/* Highlight */}
          <div className="bg-[var(--color-surface-container)] border border-[var(--color-primary-container)] p-3">
            <div className="font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)] uppercase mb-1">■ KEY METRICS</div>
            <div className="text-[var(--color-primary-container)] font-bold text-xs">{project.highlight}</div>
          </div>

          {/* Background */}
          <div>
            <div className="font-['Space_Mono'] text-[11px] font-bold text-[var(--color-primary-fixed-dim)] uppercase mb-2">【项目背景 / BACKGROUND】</div>
            <div className="text-[var(--color-on-surface-variant)] leading-relaxed whitespace-pre-line text-xs">
              {project.background}
            </div>
          </div>

          {/* Works */}
          <div>
            <div className="font-['Space_Mono'] text-[11px] font-bold text-[var(--color-primary-fixed-dim)] uppercase mb-2">【核心工作 / CORE WORK】</div>
            <ul className="space-y-2">
              {project.works.map((w, i) => (
                <li key={i} className="flex gap-2 text-[var(--color-on-surface-variant)] text-xs leading-relaxed">
                  <span className="text-[var(--color-primary-container)] font-bold shrink-0">{`>_${i + 1}`}</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div>
            <div className="font-['Space_Mono'] text-[11px] font-bold text-[var(--color-primary-fixed-dim)] uppercase mb-2">【项目成果 / RESULTS】</div>
            <ul className="space-y-1.5">
              {project.results.map((r, i) => (
                <li key={i} className="flex gap-2 text-[var(--color-on-surface)] text-xs leading-relaxed">
                  <span className="text-[var(--color-primary-container)] font-bold shrink-0">■</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Main page ── */
export default function WorkProjects() {
  const { t } = useLang()
  const w = t.work
  const [selected, setSelected] = useState(null)

  return (
    <div className="flex flex-col w-full pb-16 page-enter">
      {/* Page header */}
      <div className="flex items-center gap-3 mt-4 mb-6">
        <span className="font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-primary-fixed-dim)] uppercase tracking-widest">
          {w.pageTag}
        </span>
        <span className="flex-1 border-b border-[var(--color-outline-variant)]" />
      </div>

      <h2 className="font-['Space_Mono'] text-2xl lg:text-[32px] font-bold text-[var(--color-on-surface)] uppercase mb-8">
        {w.title}
      </h2>

      {/* Work experience timeline */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="font-['Space_Mono'] text-base font-bold text-[var(--color-on-surface)] uppercase">{w.workTitle}</span>
          <span className="flex-1 border-b border-dashed border-[var(--color-outline-variant)]" />
        </div>
        <div className="space-y-4">
          {w.jobs.map((job, i) => (
            <div key={i} className="flex gap-4">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-[var(--color-primary-container)] mt-1.5 shrink-0" />
                {i < w.jobs.length - 1 && (
                  <div className="w-0.5 flex-1 bg-[var(--color-outline-variant)] mt-1" />
                )}
              </div>
              {/* Content */}
              <div className="bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-outline-variant)] p-4 mb-4 flex-1 shadow-[3px_3px_0px_#000]">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <div className="font-['Space_Mono'] text-sm font-bold text-[var(--color-on-surface)] uppercase">
                      {job.company}
                    </div>
                    <div className="font-['JetBrains_Mono'] text-[11px] font-bold text-[var(--color-primary-fixed-dim)] mt-0.5">
                      {job.role}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 border border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)] font-['JetBrains_Mono'] text-[10px] font-bold bg-[var(--color-surface-container)]">
                    {job.period}
                  </span>
                </div>
                <p className="font-['JetBrains_Mono'] text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
                  {job.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-['Space_Mono'] text-base font-bold text-[var(--color-on-surface)] uppercase">{w.projectTitle}</span>
          <span className="flex-1 border-b border-dashed border-[var(--color-outline-variant)]" />
        </div>
        <p className="font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)] uppercase mb-5">
          {`> ${w.clickHint}`}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {w.projects.map((project, i) => (
            <button
              key={i}
              onClick={() => setSelected(project)}
              className="text-left bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-outline-variant)] p-5 shadow-[4px_4px_0px_#000] hover:border-[var(--color-primary-container)] hover:shadow-[4px_4px_0px_var(--color-primary-container)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-none cursor-pointer group"
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-3">
                <div className="font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-outline)]">
                  #{String(i + 1).padStart(2, '0')}
                </div>
                <span className="font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)] border border-[var(--color-outline-variant)] px-1.5 py-0.5">
                  {project.period}
                </span>
              </div>

              {/* Project name */}
              <div className="font-['Space_Mono'] text-sm font-bold text-[var(--color-on-surface)] uppercase mb-1 group-hover:text-[var(--color-primary-container)] transition-none">
                {project.name}
              </div>
              <div className="font-['JetBrains_Mono'] text-[11px] font-bold text-[var(--color-primary-fixed-dim)] mb-3">
                {project.role}
              </div>

              {/* Highlight */}
              <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] p-2 font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-primary-container)]">
                ■ {project.highlight}
              </div>

              {/* Click hint */}
              <div className="mt-3 font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-outline)] group-hover:text-[var(--color-primary-fixed-dim)] transition-none">
                {'> CLICK TO EXPAND ▶'}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <ProjectModal
          project={selected}
          closeBtn={w.closeBtn}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}

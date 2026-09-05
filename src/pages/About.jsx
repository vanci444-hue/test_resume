import { useLang } from '../context/LangContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <div className="flex flex-col w-full pb-16 page-enter">
      {/* Page header */}
      <div className="flex items-center gap-3 mt-4 mb-6">
        <span className="font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-primary-fixed-dim)] uppercase tracking-widest">
          {a.pageTag}
        </span>
        <span className="flex-1 border-b border-[var(--color-outline-variant)]" />
      </div>

      <h2 className="font-['Space_Mono'] text-2xl lg:text-[32px] font-bold text-[var(--color-on-surface)] uppercase mb-8">
        {a.title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Bio card */}
        <div className="lg:col-span-7 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-outline-variant)] shadow-[4px_4px_0px_#000] p-6">
          {/* Window bar */}
          <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[var(--color-outline-variant)] font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)]">
            <span className="w-2 h-2 bg-[var(--color-primary-container)] inline-block" />
            <span className="text-[var(--color-primary-fixed-dim)]">BIO.TXT</span>
          </div>
          <div className="space-y-4 font-['JetBrains_Mono'] text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
            <p>{a.bio1}</p>
            <p>{a.bio2}</p>
            <p>{a.bio3}</p>
          </div>
        </div>

        {/* Right column: Education + Skills */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Education */}
          <div className="bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-outline-variant)] shadow-[4px_4px_0px_#000] p-5">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[var(--color-outline-variant)] font-['JetBrains_Mono'] text-[10px] font-bold">
              <span className="w-2 h-2 bg-[var(--color-primary-fixed-dim)] inline-block" />
              <span className="text-[var(--color-primary-fixed-dim)] uppercase">{a.edu.title}</span>
            </div>
            <div className="space-y-4">
              {a.edu.items.map((item, i) => (
                <div key={i} className="border-l-2 border-[var(--color-primary-container)] pl-4">
                  <div className="font-['Space_Mono'] text-sm font-bold text-[var(--color-on-surface)] uppercase">
                    {item.school}
                  </div>
                  <div className="font-['JetBrains_Mono'] text-[11px] font-bold text-[var(--color-primary-fixed-dim)] mt-0.5">
                    {item.degree} · {item.period}
                  </div>
                  <div className="font-['JetBrains_Mono'] text-xs text-[var(--color-on-surface-variant)] mt-1">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-outline-variant)] shadow-[4px_4px_0px_#000] p-5">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[var(--color-outline-variant)] font-['JetBrains_Mono'] text-[10px] font-bold">
              <span className="w-2 h-2 bg-[var(--color-secondary-container)] inline-block" />
              <span className="text-[var(--color-primary-fixed-dim)] uppercase">{a.skills.title}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {a.skills.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 border border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)] font-['JetBrains_Mono'] text-[10px] font-bold bg-[var(--color-surface-container)] hover:border-[var(--color-primary-container)] hover:text-[var(--color-primary-container)] transition-none cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useLang } from '../context/LangContext'
import heroImg from '../assets/avatar_pixel.png'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <div className="flex flex-col w-full pb-16 page-enter">
      {/* Page header */}
      <div className="flex items-center gap-3 mt-4 mb-6">
        <span className="font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-primary-fixed-dim)] uppercase tracking-widest">
          {c.pageTag}
        </span>
        <span className="flex-1 border-b border-[var(--color-outline-variant)]" />
      </div>

      <h2 className="font-['Space_Mono'] text-2xl lg:text-[32px] font-bold text-[var(--color-on-surface)] uppercase mb-8">
        {c.title}
      </h2>

      <div className="flex justify-center">
        <div className="w-full max-w-lg bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-outline-variant)] shadow-[6px_6px_0px_#000] p-6">
          {/* Window bar */}
          <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[var(--color-outline-variant)] font-['JetBrains_Mono'] text-[10px] font-bold">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-primary-container)] inline-block" />
              <span className="text-[var(--color-primary-fixed-dim)]">CONNECT.EXE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[var(--color-on-surface-variant)]">{c.availability}</span>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 border-2 border-[var(--color-primary-container)] shadow-[4px_4px_0px_#000] overflow-hidden">
                <img
                  src={heroImg}
                  alt={c.name}
                  className="w-full h-full object-cover pixelated"
                />
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[var(--color-primary-container)] border-2 border-[var(--color-background)]" />
            </div>
          </div>

          {/* Name + role */}
          <div className="text-center mb-6">
            <div className="font-['Space_Mono'] text-xl font-bold text-[var(--color-on-surface)] uppercase">
              {c.name}
            </div>
            <div className="font-['JetBrains_Mono'] text-[11px] font-bold text-[var(--color-primary-fixed-dim)] mt-1 uppercase">
              {c.role}
            </div>
          </div>

          {/* Contact items */}
          <div className="space-y-3 mb-6">
            {c.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] px-4 py-3"
              >
                <span className="font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)] uppercase shrink-0">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-['JetBrains_Mono'] text-xs font-bold text-[var(--color-primary-container)] hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-[var(--color-on-surface)] text-right break-all">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Education note */}
          <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] p-3 mb-4 font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)] leading-relaxed">
            <span className="text-[var(--color-primary-fixed-dim)] mr-2">■ EDU:</span>
            {c.edu}
          </div>

          {/* Footer note */}
          <div className="text-center font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-outline)] uppercase tracking-widest">
            {`> ${c.footer}`}
          </div>
        </div>
      </div>
    </div>
  )
}

import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  return (
    <footer className="w-full bg-[var(--color-surface-container-lowest)] border-t-2 border-[var(--color-outline-variant)] py-6 relative z-10">
      <div className="max-w-[1152px] mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)]">
          <span className="text-[var(--color-primary-fixed-dim)]">■</span>
          <span>{f.copy}</span>
        </div>
        <div className="font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)]">
          {f.sys}
        </div>
      </div>
    </footer>
  )
}

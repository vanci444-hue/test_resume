import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'
import heroImg from '../assets/avatar_pixel.png'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { t, toggleLang, lang } = useLang()
  const n = t.nav
  const location = useLocation()

  const navItems = [
    { label: n.home, to: '/' },
    { label: n.about, to: '/about' },
    { label: n.work, to: '/work' },
    { label: n.contact, to: '/contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-surface-container-lowest)] border-b-2 border-[var(--color-outline-variant)]">
      <div className="h-16 max-w-[1152px] mx-auto px-4 lg:px-8 flex items-center justify-between">

        {/* Left: Logo + system tag */}
        <div className="flex items-center gap-4">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="font-['Space_Mono'] font-bold text-sm text-[var(--color-primary-fixed-dim)] uppercase tracking-wider">
              JQ_SYS
            </span>
            <span className="font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)]">
              v2.5.0
            </span>
            <span className="inline-block w-2 h-4 bg-[var(--color-primary-container)] cursor-blink" />
          </NavLink>
          <div className="hidden xl:flex items-center gap-2 ml-4 px-2 py-1 border border-[var(--color-outline-variant)] bg-[var(--color-surface-container)]">
            <span className="inline-block w-2 h-2 bg-[var(--color-primary-container)] rounded-full animate-pulse" />
            <span className="font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)] uppercase">
              {t.home.status}
            </span>
          </div>
        </div>

        {/* Right: Nav + controls */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, to }) => {
              const isActive = location.pathname === to
              return (
                <NavLink
                  key={to}
                  to={to}
                  className={[
                    'px-3 py-1 font-["JetBrains_Mono"] text-[11px] font-bold uppercase border transition-none',
                    isActive
                      ? 'bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] border-transparent shadow-[2px_2px_0px_#000]'
                      : 'text-[var(--color-on-surface-variant)] border-transparent hover:bg-[var(--color-surface-container-high)] hover:text-[var(--color-on-surface)] hover:border-[var(--color-outline-variant)]',
                  ].join(' ')}
                >
                  {label}
                </NavLink>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="px-2 py-1 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)] uppercase shadow-[2px_2px_0px_#000] hover:bg-[var(--color-primary-container)] hover:text-[var(--color-on-primary-container)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-none cursor-pointer"
            >
              {theme === 'dark' ? n.theme : n.themeLight}
            </button>
            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              className="px-2 py-1 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)] uppercase shadow-[2px_2px_0px_#000] hover:bg-[var(--color-primary-container)] hover:text-[var(--color-on-primary-container)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-none cursor-pointer"
            >
              {n.lang}
            </button>
            {/* Avatar */}
            <img
              src={heroImg}
              alt="JQ Zhao"
              className="w-8 h-8 rounded-full object-cover border border-[var(--color-outline-variant)] pixelated"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

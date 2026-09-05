import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import heroImg from '../assets/avatar_pixel.png'

/* ── Typewriter hook ── */
function useTypewriter(text, speed = 80) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    setDisplayed('')
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])
  return displayed
}

/* ── Terminal component ── */
function Terminal({ term }) {
  const [history, setHistory] = useState([
    { type: 'sys', text: term.welcome },
  ])
  const [input, setInput] = useState('')
  const histRef = useRef(null)

  useEffect(() => {
    if (histRef.current) histRef.current.scrollTop = histRef.current.scrollHeight
  }, [history])

  const exec = () => {
    const cmd = input.trim().toLowerCase()
    if (!cmd) return
    const userLine = { type: 'user', text: `${term.prompt} ${cmd}` }

    let respText
    if (cmd === 'clear') {
      setHistory([{ type: 'sys', text: term.commands.clear === '__CLEAR__' ? term.welcome : term.welcome }])
      setInput('')
      return
    } else if (cmd === 'help') {
      respText = term.commands.help
    } else if (cmd === 'projects' || cmd === 'ls projects') {
      respText = term.commands.projects
    } else if (cmd === 'about' || cmd === 'whoami') {
      respText = term.commands.about
    } else if (cmd === 'contact') {
      respText = term.commands.contact
    } else if (cmd === 'skills') {
      respText = term.commands.skills
    } else {
      respText = term.commands.unknown.replace('{cmd}', cmd)
    }

    setHistory(h => [...h, userLine, { type: 'resp', text: respText }])
    setInput('')
  }

  return (
    <div className="mt-6 bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-outline)] p-4 shadow-[4px_4px_0px_#000]">
      {/* Title bar */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--color-outline-variant)] font-['JetBrains_Mono'] text-[10px] font-bold">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[var(--color-primary-container)] inline-block" />
          <span className="text-[var(--color-primary-fixed-dim)]">{term.title}</span>
        </div>
        <span className="text-[var(--color-on-surface-variant)]">{term.inputReady}</span>
      </div>

      {/* History */}
      <div
        ref={histRef}
        className="space-y-1 font-['JetBrains_Mono'] text-xs text-[var(--color-on-surface-variant)] mb-2 max-h-32 overflow-y-auto"
      >
        {history.map((line, i) => (
          <div
            key={i}
            className={
              line.type === 'user'
                ? 'text-[var(--color-primary-fixed-dim)]'
                : line.type === 'sys'
                ? 'text-[var(--color-on-surface-variant)]'
                : 'text-[var(--color-on-surface)]'
            }
            dangerouslySetInnerHTML={{
              __html: line.text.replace(/<(\w+)>/g, '<span class="text-[#00ff41] font-bold">$1</span>'),
            }}
          />
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs">
        <span className="text-[var(--color-primary-container)] font-bold select-none">{term.prompt}</span>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && exec()}
          placeholder={term.placeholder}
          spellCheck={false}
          autoComplete="off"
          className="flex-1 bg-transparent border-none outline-none text-[var(--color-primary)] placeholder:text-[var(--color-outline)] font-['JetBrains_Mono'] text-xs"
        />
        <button
          onClick={exec}
          className="px-2 py-0.5 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] font-['JetBrains_Mono'] text-[10px] font-bold uppercase hover:bg-[var(--color-primary-container)] hover:text-[var(--color-on-primary-container)] transition-none cursor-pointer"
        >
          {term.exec}
        </button>
      </div>
    </div>
  )
}

/* ── Main Home page ── */
export default function Home() {
  const { t } = useLang()
  const h = t.home
  const navigate = useNavigate()
  const headline = useTypewriter(h.headline, 80)

  return (
    <div className="flex flex-col w-full pb-16 page-enter">
      {/* Hero window */}
      <div className="relative w-full bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-outline-variant)] shadow-[6px_6px_0px_#000] p-4 sm:p-6 lg:p-8 mt-4">

        {/* Title bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[var(--color-outline-variant)] pb-3 mb-6 font-['JetBrains_Mono'] text-[10px] font-bold">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 bg-[var(--color-primary-container)]" />
            <span className="text-[var(--color-primary-fixed-dim)] uppercase tracking-wider">[SYSTEM_BOOT: OK]</span>
            <span className="text-[var(--color-on-surface-variant)] hidden sm:inline">// MEM_ALLOC: 64KB</span>
          </div>
          <div className="flex gap-1">
            <span className="w-3 h-3 bg-[var(--color-surface-bright)] inline-block text-center text-[9px] font-bold leading-3">_</span>
            <span className="w-3 h-3 bg-[var(--color-surface-bright)] inline-block text-center text-[9px] font-bold leading-3">□</span>
            <span className="w-3 h-3 bg-[var(--color-secondary-container)] text-[var(--color-secondary)] inline-block text-center text-[9px] font-bold leading-3">×</span>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 pb-6">
          {/* Left */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            {/* Kernel tag */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]">
              <span className="text-[var(--color-primary-fixed-dim)] font-bold">▲</span>
              <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-[var(--color-on-surface-variant)] tracking-widest uppercase">
                {h.kernelTag}
              </span>
            </div>

            {/* Headline typewriter */}
            <div className="min-h-[72px] sm:min-h-[88px] flex items-center">
              <h1 className="font-['Space_Mono'] text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[var(--color-primary-container)] uppercase drop-shadow-[0_0_12px_rgba(0,255,65,0.4)]">
                {headline}
                <span className="inline-block w-4 h-7 bg-[var(--color-primary-container)] ml-1 align-baseline cursor-blink" />
              </h1>
            </div>

            {/* Subtitle + tags */}
            <div className="space-y-3 max-w-2xl">
              <p className="font-['Space_Mono'] text-sm font-bold text-[var(--color-primary)] uppercase">
                {h.subtitle}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {h.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 border border-[var(--color-primary-container)] text-[var(--color-primary-container)] font-['JetBrains_Mono'] text-[10px] font-bold bg-[var(--color-surface-container)] shadow-[2px_2px_0px_#000]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio */}
            <p className="font-['JetBrains_Mono'] text-sm text-[var(--color-on-surface-variant)] max-w-xl leading-relaxed">
              {h.bio}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => navigate('/work')}
                className="px-4 py-2.5 bg-[var(--color-surface-container-high)] border-2 border-[var(--color-primary-container)] font-['JetBrains_Mono'] text-[13px] font-bold text-[var(--color-primary-container)] uppercase shadow-[4px_4px_0px_#000] hover:bg-[var(--color-primary-container)] hover:text-[var(--color-on-primary-container)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-none cursor-pointer"
              >
                {h.btnProjects}
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-4 py-2.5 bg-[var(--color-surface-container)] border-2 border-[var(--color-outline-variant)] font-['JetBrains_Mono'] text-[13px] font-bold text-[var(--color-on-surface-variant)] uppercase shadow-[4px_4px_0px_#000] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-none cursor-pointer"
              >
                {h.btnContact}
              </button>
            </div>
          </div>

          {/* Right: Avatar cartridge */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="bg-[var(--color-surface-container)] border-2 border-[var(--color-outline-variant)] p-3 shadow-[4px_4px_0px_#000]">
              {/* Cartridge title bar */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--color-outline-variant)] font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)]">
                <span>{h.avatarLabel}</span>
                <span className="text-[var(--color-primary-fixed-dim)]">{h.avatarSize}</span>
              </div>

              {/* Avatar frame */}
              <div className="relative bg-[var(--color-surface-container-lowest)] border-2 border-[var(--color-outline)] p-2 overflow-hidden">
                <img
                  src={heroImg}
                  alt="JQ Zhao"
                  className="w-full h-56 object-cover pixelated"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-[rgba(14,14,14,0.9)] border border-[var(--color-outline-variant)] p-1.5 flex justify-between items-center font-['JetBrains_Mono'] text-[10px] font-bold">
                  <span className="text-[var(--color-primary-container)]">SYS_ID: JQ-9000</span>
                  <span className="text-[var(--color-on-surface-variant)]">HP: 100/100</span>
                </div>
              </div>

              {/* Status bars */}
              <div className="mt-3 space-y-2 font-['JetBrains_Mono'] text-[10px] font-bold">
                <div className="flex justify-between text-[var(--color-on-surface-variant)]">
                  <span>INFERENCE_BUFFER:</span>
                  <span className="text-[var(--color-primary-container)]">■■■■■■■■□□ 82%</span>
                </div>
                <div className="flex justify-between text-[var(--color-on-surface-variant)]">
                  <span>COGNITIVE_LOAD:</span>
                  <span className="text-[var(--color-primary-fixed-dim)]">■■■■■■□□□□ 64%</span>
                </div>
              </div>
            </div>

            {/* Controller badge */}
            <div className="bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)] p-2 flex items-center justify-between font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)]">
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-secondary)] font-bold">●</span>
                <span className="text-[var(--color-primary-fixed)] font-bold">●</span>
                <span>INPUT: D-PAD ACTIVE</span>
              </div>
              <span className="text-[var(--color-primary-container)]">MAP: [A][B][SELECT][START]</span>
            </div>
          </div>
        </div>

        {/* Stats HUD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t-2 border-[var(--color-outline-variant)]">
          {h.stats.map(stat => (
            <div
              key={stat.id}
              className="bg-[var(--color-surface-container)] border-2 border-[var(--color-outline-variant)] p-4 shadow-[3px_3px_0px_#000] relative"
            >
              <div className="absolute top-1 right-2 font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-outline)]">
                {stat.id}
              </div>
              <div className="font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-on-surface-variant)] uppercase tracking-widest mb-1">
                {stat.label}
              </div>
              <div className="font-['Space_Mono'] text-xl sm:text-2xl font-bold text-[var(--color-primary-container)]">
                {stat.value}
              </div>
              <div className="font-['JetBrains_Mono'] text-[10px] font-bold text-[var(--color-primary-fixed-dim)] uppercase mt-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Terminal */}
        <Terminal term={h.terminal} />
      </div>
    </div>
  )
}

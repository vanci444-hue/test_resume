import { createContext, useContext, useState } from 'react'
import { content } from '../data/content'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('zh')
  const toggleLang = () => setLang(l => (l === 'zh' ? 'en' : 'zh'))
  const t = content[lang]

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)

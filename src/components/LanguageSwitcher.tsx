import { useI18n, LANGUAGES, LANGUAGE_LABELS } from '../i18n'

const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n()

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value as typeof lang)}
      className="rounded-full border border-brand-black/10 bg-brand-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-black/60 transition-colors hover:border-brand-black/20 hover:text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-dark-blue/30"
      aria-label="Select language"
    >
      {LANGUAGES.map((l) => (
        <option key={l} value={l}>
          {LANGUAGE_LABELS[l]}
        </option>
      ))}
    </select>
  )
}

export default LanguageSwitcher

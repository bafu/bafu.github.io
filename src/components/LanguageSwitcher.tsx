import { useI18n, LANGUAGES, LANGUAGE_LABELS } from '../i18n'

const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n()

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value as typeof lang)}
      className="border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-beige-gold focus:ring-offset-2 focus:ring-offset-background"
      style={{ borderRadius: '0.25rem' }}
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

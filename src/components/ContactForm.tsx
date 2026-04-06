import { useState, type FormEvent, type FC } from 'react'
import { useI18n } from '../i18n'

/**
 * After deploying the Google Apps Script (see docs/google-apps-script.js),
 * replace this URL with your deployment URL.
 */
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyBErc6rbCR3ATDH36nAFEq2qmPhaFHKDcaP_efOq2XXf_scAzl3Sggk5mYLCf3z9LX/exec'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

type ContactFormProps = {
  /** "section" for homepage (full width heading), "inline" for blog post (compact) */
  variant?: 'section' | 'inline'
  /** Current page path, sent alongside the form for context */
  pagePath?: string
}

const ContactForm: FC<ContactFormProps> = ({ variant = 'section', pagePath = '/' }) => {
  const { t } = useI18n()

  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    social: '',
    phone: '',
    message: ''
  })

  const validate = (): boolean => {
    const newErrors: Record<string, boolean> = {}
    if (!formData.name.trim()) newErrors.name = true
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = true
    if (!formData.company.trim()) newErrors.company = true
    if (!formData.message.trim()) newErrors.message = true
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setFormState('submitting')

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, page: pagePath })
      })

      // no-cors returns opaque response, so we treat any non-error as success
      if (response.type === 'opaque' || response.ok) {
        setFormState('success')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const inputClasses =
    'w-full border bg-card px-4 py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-beige-gold focus:ring-offset-2 focus:ring-offset-background'
  const inputStyle = { borderRadius: '0.25rem', height: '40px' }
  const errorInputClasses = 'border-destructive'
  const normalBorderClasses = 'border-border hover:border-foreground/20'

  // Success state
  if (formState === 'success') {
    return (
      <div className={variant === 'section' ? 'mx-auto max-w-xl text-center' : 'max-w-xl'}>
        <div className="animate-fade-in py-12">
          <svg
            className="mx-auto h-10 w-10 text-success"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-4 font-serif text-xl font-normal text-foreground sm:text-2xl">
            {t('contactForm.successHeading')}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{t('contactForm.successMessage')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={variant === 'section' ? 'mx-auto max-w-xl' : 'max-w-xl'}>
      {variant === 'inline' && (
        <h3 className="font-serif text-xl font-normal text-foreground sm:text-2xl">
          {t('contactForm.heading')}
        </h3>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className={variant === 'inline' ? 'mt-6 space-y-5' : 'mt-8 space-y-5 text-left'}
      >
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-foreground">
            {t('contactForm.name')}
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder={t('contactForm.namePlaceholder')}
            className={`${inputClasses} ${errors.name ? errorInputClasses : normalBorderClasses} mt-1.5`}
            style={inputStyle}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-destructive">{t('contactForm.validationRequired')}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-foreground">
            {t('contactForm.email')}
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder={t('contactForm.emailPlaceholder')}
            className={`${inputClasses} ${errors.email ? errorInputClasses : normalBorderClasses} mt-1.5`}
            style={inputStyle}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">{t('contactForm.validationEmail')}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="cf-company" className="block text-sm font-medium text-foreground">
            {t('contactForm.company')}
          </label>
          <input
            id="cf-company"
            type="text"
            required
            value={formData.company}
            onChange={(e) => updateField('company', e.target.value)}
            placeholder={t('contactForm.companyPlaceholder')}
            className={`${inputClasses} ${errors.company ? errorInputClasses : normalBorderClasses} mt-1.5`}
            style={inputStyle}
          />
          {errors.company && (
            <p className="mt-1 text-xs text-destructive">{t('contactForm.validationRequired')}</p>
          )}
        </div>

        {/* Social Media (optional) */}
        <div>
          <label htmlFor="cf-social" className="block text-sm font-medium text-foreground">
            {t('contactForm.social')}{' '}
            <span className="font-normal text-muted-foreground">({t('contactForm.optional')})</span>
          </label>
          <input
            id="cf-social"
            type="text"
            value={formData.social}
            onChange={(e) => updateField('social', e.target.value)}
            placeholder={t('contactForm.socialPlaceholder')}
            className={`${inputClasses} ${normalBorderClasses} mt-1.5`}
            style={inputStyle}
          />
        </div>

        {/* Phone (optional) */}
        <div>
          <label htmlFor="cf-phone" className="block text-sm font-medium text-foreground">
            {t('contactForm.phone')}{' '}
            <span className="font-normal text-muted-foreground">({t('contactForm.optional')})</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder={t('contactForm.phonePlaceholder')}
            className={`${inputClasses} ${normalBorderClasses} mt-1.5`}
            style={inputStyle}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-message" className="block text-sm font-medium text-foreground">
            {t('contactForm.message')}
          </label>
          <textarea
            id="cf-message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            placeholder={t('contactForm.messagePlaceholder')}
            className={`${inputClasses} ${errors.message ? errorInputClasses : normalBorderClasses} mt-1.5 resize-none`}
            style={{ borderRadius: '0.25rem' }}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-destructive">{t('contactForm.validationRequired')}</p>
          )}
        </div>

        {/* Error message */}
        {formState === 'error' && (
          <p className="text-sm text-destructive">{t('contactForm.errorMessage')}</p>
        )}

        {/* Submit */}
        <div className={variant === 'section' ? 'pt-2 text-center' : 'pt-2'}>
          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="inline-flex h-10 items-center justify-center border border-foreground bg-foreground px-8 text-sm font-medium uppercase tracking-wide text-background transition-colors duration-200 hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-60"
            style={{ borderRadius: '0.25rem' }}
          >
            {formState === 'submitting' ? t('contactForm.submitting') : t('contactForm.submit')}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm

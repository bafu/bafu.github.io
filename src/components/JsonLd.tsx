import { useEffect, useRef } from 'react'

interface JsonLdProps {
  /** One or more JSON-LD objects to inject as <script type="application/ld+json"> */
  data: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * Injects JSON-LD structured data into <head>.
 *
 * Manages its own lifecycle — appends on mount, removes on unmount,
 * and replaces when `data` changes.
 */
const JsonLd = ({ data }: JsonLdProps) => {
  const elRef = useRef<HTMLScriptElement | null>(null)

  useEffect(() => {
    // Remove previous script if it exists
    if (elRef.current) {
      elRef.current.remove()
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
    elRef.current = script

    return () => {
      script.remove()
      elRef.current = null
    }
  }, [data])

  return null
}

export default JsonLd

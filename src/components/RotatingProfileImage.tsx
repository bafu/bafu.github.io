import { useState, useEffect, useCallback } from 'react'

const IMAGES = [
  '/assets/bofu-nvidia-hq-2017-3.jpg',
  '/assets/bofu-coscup-2017.jpg',
  '/assets/bofu-nvidia-hq-2017-1.jpg',
  '/assets/bofu-gtc-2017.jpg',
]

const IMAGE_ALTS = [
  'Bofu Chen at NVIDIA HQ 2017',
  'Bofu Chen at COSCUP 2017',
  'Bofu Chen at NVIDIA HQ 2017',
  'Bofu Chen at GTC 2017',
]

const ROTATION_INTERVAL = 4000

const RotatingProfileImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Preload all images on mount
  useEffect(() => {
    const imagePromises = IMAGES.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve()
        img.onerror = () => reject(new Error(`Failed to load ${src}`))
        img.src = src
      })
    })

    Promise.all(imagePromises)
      .then(() => setIsLoaded(true))
      .catch((error) => console.error('Error preloading images:', error))
  }, [])

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Auto-rotate images (pauses on hover or reduced motion)
  useEffect(() => {
    if (!isLoaded || isPaused || prefersReducedMotion) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length)
    }, ROTATION_INTERVAL)

    return () => clearInterval(interval)
  }, [isLoaded, isPaused, prefersReducedMotion])

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  if (!isLoaded) {
    return (
      <div className="relative border border-border bg-card p-4" style={{ borderRadius: '0.25rem' }}>
        <div className="relative aspect-square w-full animate-pulse bg-foreground/10" style={{ borderRadius: '0.25rem' }}></div>
      </div>
    )
  }

  return (
    <div
      className="relative border border-border bg-card p-4"
      style={{ borderRadius: '0.25rem' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full overflow-hidden" style={{ borderRadius: '0.25rem' }} aria-live="polite" aria-atomic="true">
        {IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={IMAGE_ALTS[index]}
            className={`photo-chanel absolute left-0 top-0 w-full transition-[opacity,filter] duration-300 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              position: index === 0 ? 'relative' : 'absolute',
              borderRadius: '0.25rem',
            }}
            aria-hidden={index !== currentIndex}
          />
        ))}
      </div>
      {/* Dot indicators */}
      <div className="mt-3 flex justify-center gap-2" role="group" aria-label="Image carousel controls">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToImage(index)}
            aria-label={`Go to image ${index + 1}: ${IMAGE_ALTS[index]}`}
            className={`h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'w-6 bg-beige-gold'
                : 'w-2 bg-foreground/20 hover:bg-foreground/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default RotatingProfileImage

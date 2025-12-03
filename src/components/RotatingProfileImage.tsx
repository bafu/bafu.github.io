import { useState, useEffect } from 'react'

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

const ROTATION_INTERVAL = 4000 // 4 seconds per image

const RotatingProfileImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

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

  // Auto-rotate images
  useEffect(() => {
    if (!isLoaded) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length)
    }, ROTATION_INTERVAL)

    return () => clearInterval(interval)
  }, [isLoaded])

  if (!isLoaded) {
    // Show a placeholder while images load
    return (
      <div className="relative rounded-[28px] border border-brand-black/10 bg-brand-white p-4 shadow-glass">
        <div className="absolute -top-6 right-6 h-24 w-24 rounded-full bg-brand-dark-blue/20 blur-3xl"></div>
        <div className="relative aspect-square w-full animate-pulse rounded-2xl bg-brand-black/10"></div>
      </div>
    )
  }

  return (
    <div className="relative rounded-[28px] border border-brand-black/10 bg-brand-white p-4 shadow-glass">
      <div className="absolute -top-6 right-6 h-24 w-24 rounded-full bg-brand-dark-blue/20 blur-3xl"></div>
      <div className="relative w-full overflow-hidden rounded-2xl">
        {IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={IMAGE_ALTS[index]}
            className={`absolute left-0 top-0 w-full rounded-2xl transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              position: index === 0 ? 'relative' : 'absolute',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default RotatingProfileImage

import { lazy, Suspense } from 'react'
import React from 'react'
import { LoadingSpinner } from '../components/ui/Skeleton'

export const lazyLoad = (importFunc, fallback = null) => {
  const LazyComponent = lazy(importFunc)

  return (props) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export const LazyLanding = lazyLoad(() => import('../pages/Landing'))
export const LazyLearn = lazyLoad(() => import('../pages/learn'))
export const LazyStudio = lazyLoad(() => import('../pages/Studio'))
export const LazyTalent = lazyLoad(() => import('../pages/Talent'))
export const LazyFund = lazyLoad(() => import('../pages/Fund'))
export const LazyLMS = lazyLoad(() => import('../pages/LMS'))
export const LazyCreativeBase = lazyLoad(() => import('../pages/CreativeBase'))
export const LazyAbout = lazyLoad(() => import('../pages/About'))

export const LazyHeader = lazyLoad(() => import('../components/Header'))
export const LazyFooter = lazyLoad(() => import('../components/Footer'))

export const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return isIntersecting
}

export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/placeholder.jpg',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [isInView, setIsInView] = React.useState(false)
  const imgRef = React.useRef()

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-gray-200 ${className}`}
          {...props}
        />
      )}
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={handleLoad}
          onError={() => {
            setIsLoaded(true)
          }}
          {...props}
        />
      )}
    </div>
  )
}

export const preloadResources = () => {
  const fontLink = document.createElement('link')
  fontLink.rel = 'preload'
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
  fontLink.as = 'style'
  document.head.appendChild(fontLink)

  const criticalImages = [
    '/logo.png',
    '/hero-bg.jpg'
  ]

  criticalImages.forEach(src => {
    const img = new Image()
    img.src = src
  })
}

export const loadModule = async (modulePath) => {
  try {
    const module = await import(modulePath)
    return module.default || module
  } catch (error) {
    console.error(`Failed to load module: ${modulePath}`, error)
    return null
  }
}

export const dynamicImport = (importFunc, retries = 3) => {
  return new Promise((resolve, reject) => {
    const attemptImport = async (attempt) => {
      try {
        const module = await importFunc()
        resolve(module)
      } catch (error) {
        if (attempt < retries) {
          setTimeout(() => attemptImport(attempt + 1), 1000 * attempt)
        } else {
          reject(error)
        }
      }
    }

    attemptImport(1)
  })
}

export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      console.log('SW registered: ', registration)
    } catch (error) {
      console.log('SW registration failed: ', error)
    }
  }
}

'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  useAnimationControls,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring
} from 'motion/react'

const WIDE_SCREEN_BREAKPOINT = 1440
const BASE_MAX_WIDTH = 1224
const SHRUNK_MAX_WIDTH = 904

export function useHeaderMotion () {
  const pathname = usePathname()
  const controls = useAnimationControls()
  const { scrollY } = useScroll()
  const maxWidth = useMotionValue(BASE_MAX_WIDTH)
  const smoothMaxWidth = useSpring(maxWidth, { stiffness: 350, damping: 40 })
  const [isWideScreen, setIsWideScreen] = useState(false)

  useEffect(() => {
    controls.set({ opacity: 0, y: -20, translateX: '-50%' })
    controls.start({
      opacity: 1,
      y: 0,
      translateX: '-50%',
      transition: { duration: 0.3, ease: 'easeInOut' }
    })
  }, [pathname, controls])

  useEffect(() => {
    const handleResize = () => {
      const nextIsWide = window.innerWidth >= WIDE_SCREEN_BREAKPOINT
      setIsWideScreen(nextIsWide)
      if (!nextIsWide) {
        maxWidth.set(BASE_MAX_WIDTH)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [maxWidth])

  useMotionValueEvent(scrollY, 'change', latest => {
    if (!isWideScreen) return
    const previous = scrollY.getPrevious()
    const isScrollingDown =
      typeof previous === 'number' ? latest > previous : true
    const nextWidth = isScrollingDown
      ? SHRUNK_MAX_WIDTH
      : BASE_MAX_WIDTH
    maxWidth.set(nextWidth)
  })

  useEffect(() => {
    if (!isWideScreen) {
      maxWidth.set(BASE_MAX_WIDTH)
    }
  }, [isWideScreen, maxWidth])

  const headerStyle = useMemo(() => {
    return isWideScreen
      ? { maxWidth: smoothMaxWidth }
      : { maxWidth: BASE_MAX_WIDTH }
  }, [isWideScreen, smoothMaxWidth])

  return {
    controls,
    headerStyle
  }
}


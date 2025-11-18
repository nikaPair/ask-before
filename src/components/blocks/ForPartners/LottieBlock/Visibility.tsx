'use client'

import React, { useCallback, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import type { DotLottie } from '@lottiefiles/dotlottie-react'
import {
  IconContainer,
  VisibilityContainer,
  VisibilitySpan,
  VisibilityTitle,
  VisibilityWrapper
} from './Visibility.styled'

const DotLottieReact = dynamic(
  () =>
    import('@lottiefiles/dotlottie-react').then(
      module => module.DotLottieReact
    ),
  { ssr: false }
)

const Visibility = ({
  src,
  text,
  spanText,
  spanColor,
  text2,
}: {
  src: string
  text: string
  spanText: string
  spanColor: string
  text2?: string
}) => {
  const lottieRef = useRef<DotLottie | null>(null)
  const isDestroyingRef = useRef(false)

  const handleLottieInstance = useCallback((instance: DotLottie | null) => {
    lottieRef.current = instance
    isDestroyingRef.current = false
  }, [])

  useEffect(() => {
    return () => {
      if (isDestroyingRef.current) return
      isDestroyingRef.current = true

      const instance = lottieRef.current
      if (instance) {
        try {
          instance.stop?.()
        } catch (e) {
          // ignore
        }
        try {
          instance.destroy?.()
        } catch (e) {
          // ignore
        }
        lottieRef.current = null
      }
    }
  }, [])

  return (
    <VisibilityWrapper>
      <VisibilityContainer>
        <IconContainer>
          <DotLottieReact
            dotLottieRefCallback={handleLottieInstance}
            src={src}
            loop
            autoplay
          />
        </IconContainer>
        <VisibilityTitle>
          {text}{' '}
          <VisibilitySpan style={{ color: spanColor }}>{spanText}</VisibilitySpan>{' '}
          {text2}
        </VisibilityTitle>
      </VisibilityContainer>
    </VisibilityWrapper>
  )
}

export default Visibility

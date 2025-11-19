'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import {
  IconContainer,
  VisibilityContainer,
  VisibilitySpan,
  VisibilityTitle,
  VisibilityWrapper
} from './Visibility.styled'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

const Visibility = ({
  src,
  text,
  spanText,
  spanColor,
  text2
}: {
  src: string
  text: string
  spanText: string
  spanColor: string
  text2?: string
}) => {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    fetch(src)
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Failed to load animation:', err))
  }, [src])

  return (
    <VisibilityWrapper>
      <VisibilityContainer>
        <IconContainer>
          {animationData && (
            <Lottie animationData={animationData} loop autoplay  style={{ width: '100%', height: '100%' }}/>
          )}
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

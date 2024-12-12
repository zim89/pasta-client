'use client'

import { useEffect, useState } from 'react'
import { Engine } from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'

export const WinterTheme = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    <>
      {init && (
        <Particles
          className='relative z-[1000] max-h-screen'
          id='snow'
          options={{
            particles: {
              color: {
                value: '#FFF',
              },
              number: {
                value: 100,
              },
              opacity: {
                value: { min: 0.3, max: 1 },
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
              move: {
                enable: true,
                direction: 'bottom-right',
                speed: { min: 3, max: 5 },
              },
            },
          }}
        />
      )}
    </>
  )
}

import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

interface AutoRotateCameraProps {
  autoRotateSpeed?: number
  enableAutoRotate?: boolean
  pauseOnInteraction?: boolean
  resumeDelay?: number
  target?: [number, number, number]
  enableDamping?: boolean
  dampingFactor?: number
  rotateSpeed?: number
  enableZoom?: boolean
  enableRotate?: boolean
  enablePan?: boolean
  minDistance?: number
  maxDistance?: number
  minPolarAngle?: number
  maxPolarAngle?: number
  minAzimuthAngle?: number
  maxAzimuthAngle?: number
}

export function AutoRotateCamera({
  autoRotateSpeed = 0.5,
  enableAutoRotate = true,
  pauseOnInteraction = true,
  resumeDelay = 2000,
  target = [0, 0, 0],
  enableDamping = true,
  dampingFactor = 0.05,
  rotateSpeed = 0.5,
  enableZoom = true,
  enableRotate = true,
  enablePan = false,
  minDistance = 5,
  maxDistance = 20,
  minPolarAngle = Math.PI / 4,
  maxPolarAngle = Math.PI / 2,
  minAzimuthAngle = -Infinity,
  maxAzimuthAngle = Infinity,
}: AutoRotateCameraProps) {
  const controlsRef = useRef<OrbitControlsImpl>(null)
  const interactionTimeoutRef = useRef<NodeJS.Timeout>()
  const isInteractingRef = useRef(false)

  useEffect(() => {
    const controls = controlsRef.current
    if (!controls) return

    const handleStart = () => {
      if (pauseOnInteraction) {
        isInteractingRef.current = true
        if (interactionTimeoutRef.current) {
          clearTimeout(interactionTimeoutRef.current)
        }
      }
    }

    const handleEnd = () => {
      if (pauseOnInteraction) {
        if (interactionTimeoutRef.current) {
          clearTimeout(interactionTimeoutRef.current)
        }
        interactionTimeoutRef.current = setTimeout(() => {
          isInteractingRef.current = false
        }, resumeDelay)
      }
    }

    controls.addEventListener('start', handleStart)
    controls.addEventListener('end', handleEnd)

    return () => {
      controls.removeEventListener('start', handleStart)
      controls.removeEventListener('end', handleEnd)
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current)
      }
    }
  }, [pauseOnInteraction, resumeDelay])

  useFrame((state, delta) => {
    const controls = controlsRef.current
    if (!controls) return

    if (enableAutoRotate && !isInteractingRef.current) {
      const azimuthAngle = controls.getAzimuthalAngle()
      controls.setAzimuthalAngle(azimuthAngle + autoRotateSpeed * delta)
    }

    if (enableDamping) {
      controls.update()
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      target={target}
      enableDamping={enableDamping}
      dampingFactor={dampingFactor}
      rotateSpeed={rotateSpeed}
      enableZoom={enableZoom}
      enableRotate={enableRotate}
      enablePan={enablePan}
      minDistance={minDistance}
      maxDistance={maxDistance}
      minPolarAngle={minPolarAngle}
      maxPolarAngle={maxPolarAngle}
      minAzimuthAngle={minAzimuthAngle}
      maxAzimuthAngle={maxAzimuthAngle}
    />
  )
}

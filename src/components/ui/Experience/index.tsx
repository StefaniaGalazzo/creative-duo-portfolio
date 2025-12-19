import { Canvas } from '@react-three/fiber'
import { Suspense, useMemo } from 'react'
import { GradientBackground, Squirtle } from '../..'
import { useControls } from 'leva'
import { AutoRotateCamera } from '../AutoRotateCamera'
import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'

export default function Experience() {
  const lightControls = useControls(
    'Lights',
    {
      // Debug
      showHelpers: { value: false, label: '👁️ Show Helpers' },

      // Directional Light 1
      dirPosition: { value: [8, 3, 5], step: 0.5, label: 'Dir1 Position' },
      dirIntensity: { value: 5, min: 0, max: 5, step: 0.5, label: 'Dir1 Intensity' },
      dirColor: { value: '#243ef0', label: 'Dir1 Color' },

      // Ambient Light
      ambIntensity: { value: 0.15, min: 0, max: 3, step: 0.1, label: 'Amb Intensity' },
      ambColor: { value: '#959ded', label: 'Amb Color' },

      // Hemisphere Light
      hemiIntensity: { value: 1.1, min: 0, max: 2, step: 0.1, label: 'Hemi Intensity' },
      hemiSkyColor: { value: '#3b54ff', label: 'Hemi Sky' },
      hemiGroundColor: { value: '#06022d', label: 'Hemi Ground' },

      // Directional Light 2
      dirPosition_2: { value: [-19, 8, -17], step: 0.5, label: 'Dir2 Position' },
      dirIntensity_2: { value: 5, min: 0, max: 5, step: 0.5, label: 'Dir2 Intensity' },
      dirColor_2: { value: '#243ef0', label: 'Dir2 Color' },
    },
    { collapsed: true }
  )

  const lights = useMemo(
    () => (
      <>
        <directionalLight
          position={lightControls.dirPosition}
          intensity={lightControls.dirIntensity}
          color={lightControls.dirColor}
          castShadow={false}
        />
        <ambientLight intensity={lightControls.ambIntensity} color={lightControls.ambColor} />
        <hemisphereLight
          skyColor={lightControls.hemiSkyColor}
          groundColor={lightControls.hemiGroundColor}
          intensity={lightControls.hemiIntensity}
        />
        <directionalLight
          position={lightControls.dirPosition_2}
          intensity={lightControls.dirIntensity_2}
          color={lightControls.dirColor_2}
          castShadow={false}
        />
      </>
    ),
    [
      lightControls.dirPosition,
      lightControls.dirIntensity,
      lightControls.dirColor,
      lightControls.ambIntensity,
      lightControls.ambColor,
      lightControls.hemiIntensity,
      lightControls.hemiSkyColor,
      lightControls.hemiGroundColor,
      lightControls.dirPosition_2,
      lightControls.dirIntensity_2,
      lightControls.dirColor_2,
    ]
  )

  const cameraControls = useControls(
    'Camera',
    {
      // Auto-rotation
      enableAutoRotate: { value: true, label: '🔄 Auto Rotate' },
      autoRotateSpeed: { value: 0.5, min: -2, max: 2, step: 0.1, label: 'Auto Speed' },
      pauseOnInteraction: { value: true, label: '⏸️ Pause on Interact' },
      resumeDelay: { value: 2000, min: 500, max: 5000, step: 100, label: 'Resume Delay (ms)' },

      // Camera position
      cameraDistance: { value: 8, min: 3, max: 15, step: 0.5, label: 'Initial Distance' },
      cameraHeight: { value: 1.5, min: 0, max: 5, step: 0.1, label: 'Initial Height' },

      // Distance limits
      minDist: { value: 5, min: 2, max: 10, label: 'Min Distance' },
      maxDist: { value: 15, min: 10, max: 30, label: 'Max Distance' },

      // Rotation controls
      rotSpeed: { value: 0.8, min: 0.1, max: 2, step: 0.05, label: 'Manual Rotate Speed' },
      enableRotate: { value: true, label: '↻ Enable Manual Rotate' },

      // Vertical rotation limits
      minPolarDeg: { value: 60, min: 0, max: 90, step: 5, label: 'MinPolarAngle (°)' },
      maxPolarDeg: { value: 90, min: 30, max: 90, step: 5, label: 'MaxVertAngle (°)' },

      // Other controls
      enableZoom: { value: true, label: '🔍 Enable Zoom' },
      enablePan: { value: false, label: '✋ Enable Pan' },
    },
    { collapsed: true }
  )

  const minPolarAngle = (cameraControls.minPolarDeg * Math.PI) / 180
  const maxPolarAngle = (cameraControls.maxPolarDeg * Math.PI) / 180
  const cameraPosition: [number, number, number] = [0, cameraControls.cameraHeight, cameraControls.cameraDistance]

  return (
    <Canvas
      camera={{ position: cameraPosition, fov: 50, near: 0.1, far: 300 }}
      performance={{ min: 0.5 }}
      frameloop='demand' // Renderizza solo quando necessario
      gl={{
        powerPreference: 'high-performance',
        alpha: false,
        antialias: true,
        stencil: false,
        depth: true,
      }}
      className='canvas'>
      <GradientBackground />
      {lights}

      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      <AutoRotateCamera
        autoRotateSpeed={cameraControls.autoRotateSpeed}
        enableAutoRotate={cameraControls.enableAutoRotate}
        pauseOnInteraction={cameraControls.pauseOnInteraction}
        resumeDelay={cameraControls.resumeDelay}
        target={[0, 0, 0]}
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={cameraControls.rotSpeed}
        enableZoom={cameraControls.enableZoom}
        enableRotate={cameraControls.enableRotate}
        enablePan={cameraControls.enablePan}
        minDistance={cameraControls.minDist}
        maxDistance={cameraControls.maxDist}
        minPolarAngle={minPolarAngle}
        maxPolarAngle={maxPolarAngle}
      />

      <Suspense fallback={null}>
        <Squirtle />
      </Suspense>
    </Canvas>
  )
}

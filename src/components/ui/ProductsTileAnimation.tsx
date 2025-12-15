import { useRef, useReducer, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { easing } from 'maath'

const accents = ['#ff4060', '#ffcc00', '#20ffa0', '#4060ff']

const shuffle = (accent = 0) => [
  { color: '#444', roughness: 0.1, metalness: 0.5 },
  { color: '#444', roughness: 0.1, metalness: 0.5 },
  { color: '#444', roughness: 0.1, metalness: 0.5 },
  { color: 'white', roughness: 0.1, metalness: 0.1 },
  { color: 'white', roughness: 0.1, metalness: 0.1 },
  { color: 'white', roughness: 0.1, metalness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: '#444', roughness: 0.1 },
  { color: '#444', roughness: 0.3 },
  { color: '#444', roughness: 0.3 },
  { color: 'white', roughness: 0.1 },
  { color: 'white', roughness: 0.2 },
  { color: 'white', roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true, transparent: true, opacity: 0.5 },
  { color: accents[accent], roughness: 0.3, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true }
]

function Scene() {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0)
  const connectors = useMemo(() => shuffle(accent), [accent])
  
  return (
    <Canvas 
      flat 
      shadows 
      onClick={click} 
      dpr={[1, 1.5]} 
      gl={{ antialias: false, alpha: true }} 
      camera={{ position: [0, 0, 30], fov: 17.5, near: 10, far: 40 }}
      style={{ background: 'transparent' }}
    >
      {connectors.map((props, i) => (
        <Sphere key={i} index={i} {...props} />
      ))}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={100} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
          <Lightformer form="ring" color="#4060ff" intensity={80} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 10, 0]} scale={10} />
        </group>
      </Environment>
    </Canvas>
  )
}

function Sphere({ position, children, index = 0, color = 'white', ...props }: any) {
  const ref = useRef<any>(null)
  const gridSize = 3
  const spacing = 4
  
  const pos = useMemo(() => {
    if (position) return position
    
    // Create a grid-based positioning to avoid collisions
    const gridX = (index % gridSize) - (gridSize - 1) / 2
    const gridY = Math.floor(index / gridSize) - 1
    const gridZ = Math.floor(index / (gridSize * 2)) - 0.5
    
    return [
      gridX * spacing + (Math.random() - 0.5) * 0.5,
      gridY * spacing + (Math.random() - 0.5) * 0.5,
      gridZ * spacing + (Math.random() - 0.5) * 0.5
    ]
  }, [position, index])
  
  useFrame((state, delta) => {
    if (!ref.current) return
    delta = Math.min(0.1, delta)
    
    // Gentler floating animation with unique patterns per sphere
    const time = state.clock.elapsedTime
    const uniqueOffset = index * 1.3
    
    ref.current.position.y = pos[1] + Math.sin(time * 0.8 + uniqueOffset) * 0.2
    ref.current.position.x = pos[0] + Math.cos(time * 0.6 + uniqueOffset * 0.7) * 0.15
    ref.current.position.z = pos[2] + Math.sin(time * 0.4 + uniqueOffset * 0.5) * 0.1
    
    ref.current.rotation.x += delta * 0.1
    ref.current.rotation.y += delta * 0.05
    
    // Color animation
    easing.dampC(ref.current.material.color, color, 0.2, delta)
  })
  
  return (
    <mesh ref={ref} castShadow receiveShadow position={pos}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial {...props} />
      {children}
    </mesh>
  )
}

export const ProductsTileAnimation: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`} style={{ clipPath: 'inset(0)' }}>
      <Scene />
    </div>
  )
}
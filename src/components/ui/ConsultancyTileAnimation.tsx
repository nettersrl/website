import React, { useRef, useReducer, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, MeshTransmissionMaterial, Environment, Lightformer } from '@react-three/drei';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import { easing } from 'maath';

const accents = ['#4060ff', '#20ffa0', '#ff4060', '#ffcc00'];

const shuffle = (accent = 0) => [
  { color: '#444', roughness: 0.1 },
  { color: '#444', roughness: 0.75 },
  { color: '#444', roughness: 0.75 },
  { color: 'white', roughness: 0.1 },
  { color: 'white', roughness: 0.75 },
  { color: 'white', roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true }
];

function Scene() {
  const [accent, click] = useReducer((state) => ++state % accents.length, 2);
  const connectors = useMemo(() => shuffle(accent), [accent]);

  return (
    <Canvas 
      onClick={click} 
      shadows 
      dpr={[1, 1.5]} 
      gl={{ antialias: false, alpha: true }} 
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
    >
      <color attach="background" args={['transparent']} />
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      {connectors.map((props, i) => <Connector key={i} index={i} {...props} />)}
      <Connector position={[10, 10, 5]} index={connectors.length}>
        <Model>
          <MeshTransmissionMaterial clearcoat={1} thickness={0.1} anisotropicBlur={0.1} chromaticAberration={0.1} samples={8} resolution={512} />
        </Model>
      </Connector>
      <EffectComposer multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
        </group>
      </Environment>
    </Canvas>
  );
}

function Connector({ position, children, index = 0, accent, ...props }: any) {
  const ref = useRef<any>(null);
  const gridSize = 3;
  const spacing = 3;
  
  const pos = useMemo(() => {
    if (position) return position;
    
    // Create a grid-based positioning to avoid collisions
    const gridX = (index % gridSize) - (gridSize - 1) / 2;
    const gridY = Math.floor(index / gridSize) - 1;
    const gridZ = Math.floor(index / (gridSize * 2)) - 0.5;
    
    return [
      gridX * spacing + (Math.random() - 0.5) * 0.3,
      gridY * spacing + (Math.random() - 0.5) * 0.3,
      gridZ * spacing + (Math.random() - 0.5) * 0.3
    ];
  }, [position, index]);
  
  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.elapsedTime;
    const uniqueOffset = index * 1.2;
    
    // Gentler floating animation with unique patterns per object
    ref.current.position.y = pos[1] + Math.sin(time * 0.6 + uniqueOffset) * 0.15;
    ref.current.position.x = pos[0] + Math.cos(time * 0.4 + uniqueOffset * 0.8) * 0.1;
    ref.current.position.z = pos[2] + Math.sin(time * 0.3 + uniqueOffset * 0.6) * 0.08;
    
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.003;
  });

  return (
    <group ref={ref} position={pos}>
      {children ? children : <Model {...props} />}
      {accent && <pointLight intensity={4} distance={2.5} color={props.color} />}
    </group>
  );
}

// Removed Pointer function - no longer needed without physics

function Model({ children, color = 'white', roughness = 0 }: any) {
  const ref = useRef<any>(null);
  const { nodes, materials } = useGLTF('/c-transformed.glb');
  
  useFrame((_, delta) => {
    easing.dampC(ref.current.material.color, color, 0.2, delta);
  });

  return (
    <mesh ref={ref} castShadow receiveShadow scale={10} geometry={(nodes as any).connector.geometry}>
      <meshStandardMaterial metalness={0.2} roughness={roughness} map={(materials as any).base.map} />
      {children}
    </mesh>
  );
}

export const ConsultancyTileAnimation: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`} style={{ clipPath: 'inset(0)' }}>
      <Scene />
    </div>
  );
};
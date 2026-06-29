import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ThemeProps {
  theme: 'dark' | 'light';
}

// Procedural animated wave mesh
function WaveMesh({ theme }: ThemeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const count = 40;
  const sep = 0.4;
  
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    const time = clock.getElapsedTime();
    const geometry = meshRef.current.geometry as THREE.BufferGeometry;
    const positions = geometry.attributes.position;
    
    // Rotate slowly
    meshRef.current.rotation.z = time * 0.03;
    
    // Animate vertices in a wave pattern
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      
      // Calculate wave height based on distance from center, time, and coords
      const dist = Math.sqrt(x * x + y * y);
      const z = Math.sin(dist - time * 1.2) * 0.35 + Math.cos(x * 0.4 + time) * 0.15;
      
      positions.setZ(i, z);
    }
    
    positions.needsUpdate = true;
  });

  // Generate initial grid vertices
  const vertices = [];
  const indices = [];
  for (let x = 0; x < count; x++) {
    for (let y = 0; y < count; y++) {
      const px = (x - count / 2) * sep;
      const py = (y - count / 2) * sep;
      vertices.push(px, py, 0);
    }
  }

  for (let x = 0; x < count - 1; x++) {
    for (let y = 0; y < count - 1; y++) {
      const a = x * count + y;
      const b = x * count + y + 1;
      const c = (x + 1) * count + y;
      const d = (x + 1) * count + y + 1;
      
      indices.push(a, b, c);
      indices.push(b, d, c);
    }
  }

  const positionArray = new Float32Array(vertices);
  const indexArray = new Uint16Array(indices);
  
  const meshColor = theme === 'dark' ? '#FFFFFF' : '#000000';
  const meshOpacity = theme === 'dark' ? 0.06 : 0.09;

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -1.2, -2]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positionArray, 3]}
        />
        <bufferAttribute
          attach="index"
          args={[indexArray, 1]}
        />
      </bufferGeometry>
      <meshBasicMaterial
        color={meshColor}
        wireframe
        transparent
        opacity={meshOpacity}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

// Floating dust particle system
function ParticleField({ theme }: ThemeProps) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate random particles
  const [particles] = useState(() => {
    const temp = new Float32Array(500);
    for (let i = 0; i < 500; i++) {
      temp[i] = (Math.random() - 0.5) * 15; // X, Y, Z
    }
    return temp;
  });

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const time = clock.getElapsedTime();
    // Slow drift
    pointsRef.current.rotation.y = time * 0.015;
    pointsRef.current.rotation.x = time * 0.008;
  });

  const particleColor = theme === 'dark' ? '#FFFFFF' : '#000000';
  const particleOpacity = theme === 'dark' ? 0.25 : 0.35;

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={particleColor}
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={particleOpacity}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Camera controller that reacts to scroll
function CameraController({ scrollY }: { scrollY: number }) {
  useFrame(({ camera }) => {
    // Shifts camera angle downward by 15% for every 100px of scroll.
    const scrollFactor = scrollY / 100;
    
    // Target position and rotation based on scroll
    const targetY = -scrollFactor * 0.6; 
    const targetZ = 8 + scrollFactor * 0.3;
    const targetRotX = -Math.PI / 10 - (scrollFactor * 0.06); // Tilt downwards

    // Smoothly lerp towards target
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, targetRotX, 0.05);
  });

  return null;
}

export default function ThreeBackground({ theme }: ThemeProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial checks
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const bgGradient = theme === 'dark' 
    ? 'radial-gradient(circle at 50% 50%, #141416 0%, #0B0E14 100%)'
    : 'radial-gradient(circle at 50% 50%, #F9FAFB 0%, #FFFFFF 100%)';

  const lightColor = theme === 'dark' ? '#FFFFFF' : '#888888';

  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none transition-opacity duration-700"
      style={{ 
        background: bgGradient,
        // Scale down viewport ratio by 20% on mobile screens
        opacity: isMobile ? 0.25 : 0.5,
        transform: isMobile ? 'scale(0.8)' : 'scale(1)'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={theme === 'dark' ? 0.4 : 0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.0} color={lightColor} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color={lightColor} />
        
        <WaveMesh theme={theme} />
        <ParticleField theme={theme} />
        <CameraController scrollY={scrollY} />
      </Canvas>
    </div>
  );
}

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';

interface Scene3DProps {
  children?: React.ReactNode;
  enableControls?: boolean;
}

export const Scene3D: React.FC<Scene3DProps> = ({ 
  children, 
  enableControls = true 
}) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      className="absolute inset-0 -z-10"
    >
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight 
        position={[10, 10, 10]} 
        intensity={1}
        color="#6366f1"
      />
      <pointLight 
        position={[-10, -10, 5]} 
        intensity={0.5}
        color="#ec4899"
      />
      
      {/* Background */}
      <Stars 
        radius={300}
        depth={60}
        count={1000}
        factor={7}
        saturation={0}
        fade
        speed={1}
      />
      
      {/* Floating geometric elements */}
      <FloatingGeometry
        position={[-5, 3, -5]}
        geometry="torus"
        color="#6366f1"
        scale={0.8}
      />
      <FloatingGeometry
        position={[6, -2, -8]}
        geometry="octahedron"
        color="#ec4899"
        scale={0.6}
      />
      <FloatingGeometry
        position={[-3, -4, -6]}
        geometry="sphere"
        color="#06b6d4"
        scale={0.4}
      />
      <FloatingGeometry
        position={[8, 4, -10]}
        geometry="box"
        color="#6366f1"
        scale={0.5}
      />
      
      {/* Environment */}
      <Environment preset="night" />
      
      {/* Controls */}
      {enableControls && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      )}
      
      {children}
    </Canvas>
  );
};
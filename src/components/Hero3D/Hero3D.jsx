import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import styles from './Hero3D.module.css';


const shapes = [
  { type: 'sphere', pos: [5.5, 0.4, -1], size: 2.1, color: '#44a2e5', distort: true, speed: 2 },
  { type: 'torus', pos: [2.8, 3.3, -2], size: 0.9, color: '#d34dbb', speed: 3 },
  { type: 'octa', pos: [3.6, -3.3, -1], size: 0.9, color: '#1c1042', speed: 2.5 },
  { type: 'icosa', pos: [-6.8, 3.4, -3], size: 0.8, color: '#3f51b5', wire: true, speed: 2 },
  { type: 'sphere', pos: [-3.2, -3.6, -2], size: 0.5, color: '#d34dbb', speed: 3 },
  { type: 'knot', pos: [-0.5, 3.8, -3], size: 0.6, color: '#44a2e5', speed: 2 },
{ type: 'torus', pos: [-6.5, -5, -4], size: 0.7, color: '#44a2e5', speed: 1.5 },
  { type: 'octa', pos: [0.8, -3.9, -3], size: 0.5, color: '#d34dbb', wire: true, speed: 2.5 },
  { type: 'sphere', pos: [7.2, 3.6, -3], size: 0.6, color: '#3f51b5', speed: 2 },
  { type: 'icosa', pos: [7.4, -3.2, -2], size: 0.55, color: '#44a2e5', speed: 3 },
];

function Geometry({ type }) {
  switch (type) {
    case 'torus':
      return <torusGeometry args={[1, 0.35, 24, 48]} />;
    case 'octa':
      return <octahedronGeometry args={[1]} />;
    case 'icosa':
      return <icosahedronGeometry args={[1, 0]} />;
    case 'knot':
      return <torusKnotGeometry args={[0.8, 0.25, 96, 16]} />;
    default:
      return <sphereGeometry args={[1, 48, 48]} />;
  }
}

function Shape({ type, pos, size, color, distort, wire, speed }) {
  return (
    <Float speed={speed} rotationIntensity={1.2} floatIntensity={1.6}>
      <mesh position={pos} scale={size}>
        <Geometry type={type} />
        {distort ? (
          <MeshDistortMaterial
            color={color}
            distort={0.4}
            speed={2}
            roughness={0.15}
            metalness={0.1}
          />
        ) : (
          <meshStandardMaterial
            color={color}
            roughness={0.3}
            metalness={0.2}
            wireframe={wire}
          />
        )}
      </mesh>
    </Float>
  );
}

const Hero3D = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 5, 6]} intensity={1.8} />
        {shapes.map((s, i) => (
          <Shape key={i} {...s} />
        ))}
      </Canvas>
    </div>
  );
};

export default Hero3D;
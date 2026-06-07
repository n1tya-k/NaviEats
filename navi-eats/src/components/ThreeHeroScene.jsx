import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function createShape(color, position, scale) {
  const mesh = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.25, roughness: 0.35, metalness: 0.3 })
  );
  mesh.position.set(...position);
  mesh.scale.set(...scale);
  return mesh;
}

export default function ThreeHeroScene() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2('#020617', 0.06);

    const camera = new THREE.PerspectiveCamera(36, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const ambientLight = new THREE.AmbientLight('#ffffff', 0.6);
    const directionalLight = new THREE.DirectionalLight('#ffffff', 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(ambientLight, directionalLight);

    const shapes = [
      createShape('#f59e0b', [-2, 1, 0], [1.4, 1.4, 1.4]),
      createShape('#22c55e', [2, -0.7, 0], [1.1, 1.1, 1.1]),
      createShape('#0ea5e9', [0, 2.1, -1], [1.6, 1.6, 1.6]),
    ];
    shapes.forEach((shape) => scene.add(shape));

    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 + index * 0.001;
        shape.rotation.y += 0.006 + index * 0.001;
        shape.position.y += Math.sin(elapsed * (0.8 + index * 0.2)) * 0.002;
      });
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
      renderer.dispose();
      shapes.forEach((shape) => {
        shape.geometry.dispose();
        shape.material.dispose();
      });
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}

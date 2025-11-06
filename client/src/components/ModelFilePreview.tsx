import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

type Props = {
  modelUrl: string;
};

const GLTFModel: React.FC<{ url: string; onSceneLoaded?: (scene: THREE.Group) => void }> = ({ url, onSceneLoaded }) => {
  const { scene } = useLoader(GLTFLoader, url);

  useEffect(() => {
    const colors = [
      '#4a90e2', '#50e3c2', '#7ed6df', '#70a1ff', '#5352ed',
      '#a29bfe', '#ff6b81', '#f8c291', '#f9ca24', '#57606f',
    ];
    let i = 0;

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: colors[i % colors.length],
        });
        i++;
      }
    });

    if (onSceneLoaded) onSceneLoaded(scene);
  }, [scene, onSceneLoaded]);

  return <primitive object={scene} />;
};

const FitCamera: React.FC<{ scene: THREE.Group | null }> = ({ scene }) => {
  const { camera, controls } = useThree();

  useEffect(() => {
    if (!scene) return;
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxSize = Math.max(size.x, size.y, size.z);
    const fitHeightDistance = maxSize / (2 * Math.atan((camera.fov * Math.PI) / 360));
    const fitWidthDistance = fitHeightDistance / camera.aspect;
    const distance = Math.max(fitHeightDistance, fitWidthDistance);

    // Set camera directly overhead (looking down -Z axis)
    camera.position.set(center.x, center.y + distance * 1.2, center.z);
    camera.up.set(0, 0, -1); // Y up, looking down
    camera.near = distance / 100;
    camera.far = distance * 100;
    camera.lookAt(center);
    camera.updateProjectionMatrix();

    if (controls) {
      controls.target.copy(center);
      controls.update();
    }
  }, [scene, camera, controls]);

  return null;
};

const ModelFilePreview: React.FC<Props> = ({ modelUrl }) => {
  const [controlsEnabled, setControlsEnabled] = useState(false);
  const [scene, setScene] = useState<THREE.Group | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  if (!modelUrl) return null;

  return (
    <div
      ref={wrapperRef}
      tabIndex={0}
      onFocus={() => setControlsEnabled(true)}
      onBlur={() => setControlsEnabled(false)}
      style={{
        outline: 'none',
        width: '100%',
        height: '300px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: controlsEnabled ? '0 0 0 2px #4a90e2' : 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 5, 0], fov: 50, up: [0, 0, -1] }}
        style={{ pointerEvents: controlsEnabled ? 'auto' : 'none' }}
      >

        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <GLTFModel url={modelUrl} onSceneLoaded={setScene} />
          <FitCamera scene={scene} />
          <OrbitControls enabled={controlsEnabled} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelFilePreview;

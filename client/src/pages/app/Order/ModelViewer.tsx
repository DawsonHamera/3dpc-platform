import React, { Suspense, useMemo, useEffect, useRef } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type RegionMaterial = {
  hex?: string;           // fallback or plain color
  texture_url?: string;   // texture image URL
};

type Props = {
  regionColors?: Record<string, RegionMaterial>;
  modelPath?: string;
};

const ModelScene: React.FC<Props> = ({ regionColors = {}, modelPath = '' }) => {
  const { scene } = useGLTF(modelPath);
  const { camera, gl } = useThree();
  const controls = useRef<any>();
  const groupRef = useRef<THREE.Group>(null);

  // Extract unique texture URLs and preload
  const texturesToLoad = useMemo(() => {
    return Array.from(
      new Set(
        Object.values(regionColors)
          .map(mat => mat.texture_url)
          .filter((url): url is string => !!url)
      )
    );
  }, [regionColors]);

  const textures = useLoader(THREE.TextureLoader, texturesToLoad);

  // Map texture URL to loaded texture object
  const textureMap = useMemo(() => {
    const map: Record<string, THREE.Texture> = {};
    texturesToLoad.forEach((url, i) => {
      map[url] = textures[i];
    });
    return map;
  }, [textures, texturesToLoad]);

  // Apply materials based on regionColors
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh && regionColors[child.name]) {
        const matData = regionColors[child.name];
        if (matData.texture_url && textureMap[matData.texture_url]) {
          child.material = new THREE.MeshStandardMaterial({
            map: textureMap[matData.texture_url],
          });
        } else if (matData.hex) {
          child.material = new THREE.MeshStandardMaterial({
            color: matData.hex,
          });
        } else {
          child.material = new THREE.MeshStandardMaterial({ color: '#cccccc' });
        }
        child.material.needsUpdate = true;
      }
      if (child.isMesh) {
        console.log(child.name, 'has UVs?', !!child.geometry.attributes.uv);
      }
    });
  }, [regionColors, scene, textureMap]);

  // Fit camera to model on load and when scene changes
  useEffect(() => {
    if (!groupRef.current) return;

    const box = new THREE.Box3().setFromObject(groupRef.current);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // Compute distance for camera to fit model in view
    const maxSize = Math.max(size.x, size.y, size.z);
    const fov = (camera.fov * Math.PI) / 180;
    const cameraDistance = maxSize / (2 * Math.tan(fov / 2));

    // Position camera relative to model center
    camera.position.set(center.x, center.y + cameraDistance * 1.2, center.z + cameraDistance);

    camera.near = cameraDistance / 100;
    camera.far = cameraDistance * 100;
    camera.updateProjectionMatrix();

    // Update controls target and camera
    if (controls.current) {
      controls.current.target.copy(center);
      controls.current.update();
    }
  }, [scene, camera]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} dispose={null} />
      <OrbitControls ref={controls} />
    </group>
  );
};

const ModelViewer: React.FC<Props> = (props) => {
  if (!props.modelPath) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <ModelScene {...props} />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;

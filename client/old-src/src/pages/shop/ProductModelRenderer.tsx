import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type Props = {
    modelPath: string;
};

const ModelScene: React.FC<Props> = ({ modelPath }) => {
    const { scene } = useGLTF(modelPath);
    const { camera } = useThree();
    const controls = useRef<any>();
    const groupRef = useRef<THREE.Group>(null);

    useEffect(() => {
        if (!groupRef.current) return;
        const box = new THREE.Box3().setFromObject(groupRef.current);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxSize = Math.max(size.x, size.y, size.z);
        const fov = (camera.fov * Math.PI) / 180;
        const cameraDistance = maxSize / (2 * Math.tan(fov / 2));
        camera.position.set(center.x, center.y + cameraDistance * 1.2, center.z + cameraDistance);
        camera.near = cameraDistance / 100;
        camera.far = cameraDistance * 100;
        camera.updateProjectionMatrix();
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

const ProductModelRenderer: React.FC<Props> = ({ modelPath }) => {
    if (!modelPath) return null;
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
                <ModelScene modelPath={modelPath} />
            </Suspense>
        </Canvas>
    );
};

export default ProductModelRenderer;

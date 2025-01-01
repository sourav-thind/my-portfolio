import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';
import * as THREE from 'three';

const CubeEnvironment = () => {
    const { scene } = useThree();

    useEffect(() => {
        // Load the cube texture
        const loader = new CubeTextureLoader();
        const cubeTexture = loader.load([
            '/textures/cubemap/px.jpg', // Positive X
            '/textures/cubemap/nx.jpg', // Negative X
            '/textures/cubemap/py.jpg', // Positive Y
            '/textures/cubemap/ny.jpg', // Negative Y
            '/textures/cubemap/pz.jpg', // Positive Z
            '/textures/cubemap/nz.jpg', // Negative Z
        ]);

        // Set it as the scene background and environment
        scene.background = cubeTexture;
        scene.environment = cubeTexture;
        
      

        // Cleanup on unmount (optional)
        return () => {
            scene.background = null;
            scene.environment = null;
        };
    }, [scene]);

    return null; // No need to render anything
};

export default CubeEnvironment;

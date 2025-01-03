import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';
import * as THREE from 'three';

const CubeEnvironment = () => {
    const { scene } = useThree();

    useEffect(() => {
        const loader = new CubeTextureLoader();
        const cubeTexture = loader.load([
            '/textures/cubemap/px.jpg',
            '/textures/cubemap/nx.jpg',
            '/textures/cubemap/py.jpg', 
            '/textures/cubemap/ny.jpg', 
            '/textures/cubemap/pz.jpg', 
            '/textures/cubemap/nz.jpg',
        ]);

        scene.background = cubeTexture;
        scene.environment = cubeTexture;
        
        return () => {
            scene.background = null;
            scene.environment = null;
        };
    }, [scene]);

    return null; 
};

export default CubeEnvironment;

import React, { useEffect, useRef } from 'react';
import Stats from 'stats.js';

const StatsComponent = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    // Initialize stats.js
    const stats = new Stats();
    stats.showPanel(0); // 0 for FPS, 1 for MS, 2 for memory

    // Append stats panel to the DOM
    statsRef.current.appendChild(stats.dom);

    // Create an animation loop to update stats
    const animate = () => {
      stats.begin();
      // Perform your animations, renders, or updates here
      stats.end();

      // Call animate again in the next frame
      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup on unmount
    return () => {
      statsRef.current.removeChild(stats.dom);
    };
  }, []);

  return <div ref={statsRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1000 }} />;
};

export default StatsComponent;

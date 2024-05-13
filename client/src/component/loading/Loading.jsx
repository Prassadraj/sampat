import React, { useEffect } from 'react';
import { helix } from 'ldrs';

function Loading() {
  useEffect(() => {
    // Register the custom element 'l-helix' using helix.register()
    helix.register();
  }, []); // Run this effect only once on component mount

  return (
    <div className='flex justify-center items-center h-screen '>
      {/* Render the 'l-helix' component with specified attributes */}
      <l-helix
      
        size="77"
        speed="2.5"
        color="green"
      ></l-helix>
    </div>
  );
}

export default Loading;

// components/Loader.js
import React from 'react';
import Image from 'next/image';
import loaderGif from '../../public/loader.gif'; // Make sure to place your GIF in the public directory

const Loader = () => (
  <div className="loader">
    <Image src={loaderGif} alt="Loading..." width={330} height={150} />
    <style jsx>{`
      .loader {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        z-index: 9999; // Ensure it appears above all other content
      }
    `}</style>
  </div>
);

export default Loader;

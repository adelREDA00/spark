import React from 'react';

const YourComponent = () => {
  const sketchfabEmbedCode = `
    <div class="sketchfab-embed-wrapper">
      <iframe
        title="LE LOUVRE PARIS"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/469983fa89924eecbde4c50d27ebd20d/embed"
      ></iframe>
  
    </div>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: sketchfabEmbedCode }} />
  );
};

export default YourComponent;

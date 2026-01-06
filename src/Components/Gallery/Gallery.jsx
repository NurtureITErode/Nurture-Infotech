import React, { useEffect, useState } from 'react';
import './Gallery.css';
import GalleryImages from './GalleryImages.json';

function Gallery() {
  const [GImages, GsetImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GsetImages(GalleryImages);
    setLoading(false);
  }, []); 
  return (
    <div>
      <section className='Gallery'>
        <div className='Gallery_Heading'>
          <h2>Gallery</h2>
        </div>
        <div>
          {loading ? (
            <p className='loader'></p>
          ) : (
            <div className='Gallery_images'>
              {GImages.map((e, index) => (
                <img src={e.src}  key={index} alt={`Gallery Image ${index}`} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Gallery;

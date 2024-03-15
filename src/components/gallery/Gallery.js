import React, { useState } from "react";
import { decodeHtml } from "../media/Media";

import './gallery.css'

const Gallery = ({ media_metadata }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Object.keys(media_metadata).length);
    };

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + Object.keys(media_metadata).length) % Object.keys(media_metadata).length);
    };

    const isFirstImage = currentImageIndex === 0;
    const isLastImage = currentImageIndex === Object.keys(media_metadata).length - 1;

    return (
        <>
            <div className="gallery">
                <div>
                    {Object.keys(media_metadata).map((id, index) => (
                    <div key={id} className="gallery-item" style={{ display: index === currentImageIndex ? 'block' : 'none' }}>
                        <img className="width100" src={decodeHtml(media_metadata[id].s.u)} alt={id} />
                    </div>
                    ))}
                </div>
                <div className="gallery-navigation">
                    <button onClick={goToPrevImage} disabled={isFirstImage}>Previous</button>
                    <button onClick={goToNextImage} disabled={isLastImage}>Next</button>
                </div>
            </div>
            {/* <div className="gallery-navigation">
                <button onClick={goToPrevImage} disabled={isFirstImage}>Previous</button>
                <button onClick={goToNextImage} disabled={isLastImage}>Next</button>
            </div> */}
        </>
    )
}

export default Gallery;
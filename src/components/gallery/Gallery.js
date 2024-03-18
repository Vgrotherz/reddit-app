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
                    <button onClick={goToPrevImage} disabled={isFirstImage} class="button-30">
                        <svg className="left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path></svg>
                    </button>
                    <button onClick={goToNextImage} disabled={isLastImage} class="button-30">
                        <svg className='right' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path></svg>
                    </button>
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
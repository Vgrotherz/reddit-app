import React from "react";
import './body.css';

const Body = ({ searchResults }) => {
    return(
        <div className="block">
            {searchResults.map((result) => {
                const { id, title, url, media, author } = result.data;
                console.log(result.data)
                return (
                    <div key={id} className="post">
                        <h3>{title}</h3>
                        {url && (
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                {url}
                            </a>
                        )}
                        {media && media.type === "image" && (
                            <img src={media.url} alt="Media" />
                        )}
                        {media && media.type === "video" && (
                            <video controls>
                                <source src={media.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <p>Author: {author}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Body;
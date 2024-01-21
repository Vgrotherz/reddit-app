import React from "react";

import './body.css';

const Body = ({ searchResults }) => {
    return(
        <div className="search_results">
            {searchResults.map((result) => {
                const { id, title, url, thumbnail, author, preview } = result.data;
                // const imageUrl = preview.images[0].resolutions[0].url;
                console.log(result.data)
                return (
                    <div >
                        <div key={id} className="post">
                            <h3>{title}</h3>
                            {/* <img src={thumbnail}></img> */}
                            <img className="img" src={url}></img>
                            <p>Author: {author}</p>
                            {/* this is a link to a reddit */}
                            {/* <a href={url} target="_blank" rel="noopener noreferrer">
                                {url}
                            </a> */}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Body;
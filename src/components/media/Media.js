import React, { useState } from "react";

import './media.css'

const Media = ({ url, isGifv, thumbnail, isVideo, media, isImage, title, selftext_html, searchResults, sortedResults, result, index, spoiler }) => {
    console.log('Media component - spoiler prop:', spoiler);

    const [results, setResults] = useState(searchResults);
    const [ isSpoiler, setIsSpoiler ] = useState(spoiler);

    const decodeHtml= (html) => {
        let txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    // funciton for handle showmore button 
    const handleShowText = (index) => {
        const updatedResults = [...sortedResults];
        updatedResults[index].showFullText = !updatedResults[index].showFullText;
        setResults(updatedResults);
    }

    // logic for show more button
    const truncatedText = decodeHtml(selftext_html).slice(0, 1400);
    const displayText = result.showFullText ? decodeHtml(selftext_html) : truncatedText;
    
    const handleSpoilerCheck = () => {
       setIsSpoiler(!isSpoiler);
    }


    return(
        <>
            <div className="media_choose">
                    {   isGifv?  ( 
                        <video className="width60" autoPlay loop>
                            <source src={url.replace('.gifv', '.mp4')} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>    
                    ) 
                    // : spoiler? (
                    //         // <button className="spoiler" onClick={handleSpoilerCheck}>Spoiler</button>
                    // ) 
                    : thumbnail && isVideo? (
                        <video className="width_100" controls autoPlay loop>
                            <source src={media.reddit_video.fallback_url} type="video/mp4"></source>
                        </video>
                    ) : isImage? (
                        <img className="width_100" src={url} alt={title} />                                    
                    ) : thumbnail && thumbnail === 'self'? (
                        <div className="post_text">
                            <div dangerouslySetInnerHTML={{ __html: displayText }}></div>
                            {decodeHtml(selftext_html).length > 1400 && (
                                <button onClick={() => handleShowText(index)}>
                                    {result.showFullText ? 'Show less' : 'Show more'}
                                </button>
                            )}
                        </div>      
                    ) : thumbnail? (
                        <div>
                            <img src={thumbnail} alt={title}></img>
                            {/* {dynamicUrl? (<img className="img" src={dynamicUrl} alt={title} />)
                            : null} */}
                            <div dangerouslySetInnerHTML={{ __html: displayText }}></div>
                            {decodeHtml(selftext_html).length > 1400 && (
                                <button onClick={() => handleShowText(index)}>
                                    {result.showFullText ? 'Show less' : 'Show more'}
                                </button>
                            )}
                        </div>
                    ) : null
                }
            </div>
        </>
    )
}

export default Media;
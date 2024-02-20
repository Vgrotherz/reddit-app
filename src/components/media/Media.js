import React, { useState } from "react";

import './media.css'

const Media = ({ url, isGifv, thumbnail, isVideo, media, isImage, title, selftext_html, searchResults, sortedResults, result, index, spoiler, youTransform, over_18 }) => {
    // console.log('Media component - spoiler prop:', spoiler);

    const [results, setResults] = useState(searchResults);
    const [ isSpoiler, setIsSpoiler ] = useState(spoiler);
    const [ over18, setOver18 ] = useState(over_18);

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
    // const youTransform = decodeHtml(media_embed.content);
    const truncatedText = decodeHtml(selftext_html).slice(0, 1400);
    const displayText = result.showFullText ? decodeHtml(selftext_html) : truncatedText;
    
    const youTubeFrame = decodeHtml(youTransform);

    const handleSpoilerCheck = () => {
       setIsSpoiler(!isSpoiler);
    }

    const handleOver18Check = () => {
        setOver18(!over18);
    }



    return(
        <>
            <div className="media_choose">
                    {   over18 ? (
                        <button className="spoiler" onClick={handleOver18Check}>
                            Mature Content
                            This page may contain sensitive or adult content that is not for everyone.                  
                            By continuing, you agreed that you're under 18 and also agree that use of this site constitutes.
                        </button>                          
                    ) : 
                    isGifv?  ( 
                        <video className="width60" autoPlay loop>
                            <source src={url.replace('.gifv', '.mp4')} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>    
                    ) 
                    : isSpoiler ? (
                            <button className="spoiler" onClick={handleSpoilerCheck}>Spoiler</button>
                    ) 
                    : thumbnail && isVideo? (
                        <video className="width_50" controls autoPlay loop>
                            <source src={media.reddit_video.fallback_url} type="video/mp4"></source>
                        </video>
                    ) 
                    : youTransform? (
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: youTubeFrame }} />
                        </div>
                    ) 
                    : isImage? (
                        <img className="width_50" src={url} alt={title} />                                    
                    ) : thumbnail && thumbnail === 'self' || thumbnail === 'spoiler' ? (
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
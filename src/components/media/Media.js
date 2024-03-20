import React, { useState } from "react";
import Gallery from "../gallery/Gallery";

import './media.css'

import { decodeHtml, renderImagesText } from '../utils/utils';

const Media = ({ url, isGifv, thumbnail, isVideo, media, media_metadata , isImage, title, selftext_html, searchResults, sortedResults, result, index, spoiler, youTransform, over_18, is_gallery, setIsLoading }) => {
    
    const [ results, setResults] = useState(searchResults);
    const [ isSpoiler, setIsSpoiler ] = useState(spoiler);
    const [ over18, setOver18 ] = useState(over_18);


    // funciton for handle showmore button 
    const handleShowText = (index) => {
        const updatedResults = [...sortedResults];
        updatedResults[index].showFullText = !updatedResults[index].showFullText;
        setResults(updatedResults);
    }

    // logic for show more button
    const truncatedText = decodeHtml(selftext_html).slice(0, 1400);
    const displayText = result.showFullText ? decodeHtml(selftext_html) : truncatedText;
    
    const youTubeFrame = decodeHtml(youTransform);

    const handleSpoilerCheck = () => {
        setIsLoading(true);
        setIsSpoiler(!isSpoiler);
        setIsLoading(false)
    }

    const handleOver18Check = () => {
        setOver18(!over18);
    }



    return(
        <>
            <div className={ !is_gallery? "media_choose" : "media_choose special_gallery" }>
                    {   over18 ? (
                        <div className="spoiler-div" onClick={handleOver18Check}>
                            <button className="spoiler">
                                <p>
                                    Mature Content
                                    This page may contain sensitive or adult content that is not for everyone.                  
                                    By continuing, you agreed that you're under 18 and also agree that use of this site constitutes.
                                </p>
                            </button>
                        </div>                          
                    ) : 
                    isGifv?  ( 
                        <video className="width60" autoPlay loop>
                            <source src={url.replace('.gifv', '.mp4')} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>    
                    ) 
                    : isSpoiler ? (
                        <div className='spoiler_div' onClick={handleSpoilerCheck}>
                            <button className="spoiler">Spoiler</button>
                        </div>
                    ) 
                    : thumbnail && isVideo? (
                        <video className="width_70" controls autoPlay loop>
                            <source src={media.reddit_video.fallback_url} type="video/mp4"></source>
                        </video>
                    ) 
                    : youTransform? (
                        <div className="youTube">
                            <div dangerouslySetInnerHTML={{ __html: youTubeFrame }} />
                        </div>
                    ) : is_gallery? (
                        <Gallery media_metadata={media_metadata} results={results}/>
                    )
                    : isImage? (
                        <>
                            {selftext_html? (<div dangerouslySetInnerHTML={{ __html: displayText }}></div>) : null}
                            <img className="width_50" src={url} alt={title} />  
                        </>                                  
                    ) : thumbnail && thumbnail === 'self' || thumbnail === 'spoiler' ? (
                        <div className="post_text" >
                            {renderImagesText(decodeHtml(displayText))}
                            {decodeHtml(selftext_html).length > 1400 && (
                                <button onClick={() => handleShowText(index)}>
                                    {result.showFullText ? 'Show less' : 'Read more'}
                                    {!result.showFullText ? 
                                        (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path></svg>) 
                                        : 
                                        (<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path></svg></span>)
                                    }
                                    
                                </button>
                            )}
                        </div>      
                    ) : thumbnail? (
                        <div className="thumbnail">
                            {/* {renderImagesOnly(decodeHtml(displayText))} */}
                            {renderImagesText(decodeHtml(displayText))}
                            {decodeHtml(selftext_html).length > 1400 && (
                                <button onClick={() => handleShowText(index)}>
                                    {result.showFullText ? 'Show less' : 'Read more'}
                                    {!result.showFullText ? 
                                        (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path></svg>) 
                                        : 
                                        (<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path></svg></span>)
                                    }
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
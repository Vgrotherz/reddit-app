import React, { useState } from "react";
import './body.css';

import ScoreBlock from "../scoreBlock/ScoreBlock";

const Body = ({ searchResults, isLoading }) => {
    const [results, setResults] = useState(searchResults);

    // converts seconds to different more readable date
    const timeSince = (date) => {
        const seconds = Math.floor((new Date() - date) / 1000);
        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }

    const scoreK = (score) => {
        if(score >= 1000) {
            return `${(score / 1000).toFixed(1)}k`; // Converts and appends 'k' for thousands
        }
        return score;  // Returns the original score if less than 1000
    }
    
    // Sort searchResults by created time in descending order
    const sortedResults = searchResults.sort((a, b) => b.data.created - a.data.created);

    // funciton for handle showmore button 
    const handleShowText = (index) => {
        const updatedResults = [...sortedResults];
        updatedResults[index].showFullText = !updatedResults[index].showFullText;
        setResults(updatedResults);
    }

    return(
        <div className="search_results">
            {/* results like it will be on Reddit - replace it on 47 = {searchResults.map((result) => { */}
            {sortedResults.map((result, index) => {
                const { id, title, url, thumbnail, selftext_html, media, media_metadata, author, link_flair_text, score, num_comments, created, subreddit_name_prefixed, subreddit } = result.data;

                console.log(result.data) //shows all json data from search
                // Check if media exists and if it's a video
                const isVideo = media && media.reddit_video;
                const isGifv = url.endsWith(".gifv");
                
                // попытка получить картинку для сторонних сайтов - данные с media_metadata и отображение на 148 строке
                // let dynamicUrl = null;
                // if (media_metadata && Object.keys(media_metadata).length > 0) {
                //     const dynamicKey = Object.keys(media_metadata)[0]; // Assuming there is only one key
                //     dynamicUrl = media_metadata[dynamicKey].s.u;
                // }

                // isImge to controls what to render in a post
                const isImage = url.endsWith(".png") || url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".gif") || url.endsWith(".gifv");
               

                // redditDate - epoch data from json. daysCreated - convert to human readable date - these 2 func is a whole date info of a post date
                // const redditDate = new Date(created *1000);
                // const daysCreated = redditDate.toGMTString()+"<br>"+redditDate.toLocaleString();

                const daysCreated = timeSince(new Date(created * 1000));
                
                const decodeHtml= (html) => {
                    let txt = document.createElement("textarea");
                    txt.innerHTML = html;
                    return txt.value;
                }

                // logic for show more button
                const truncatedText = decodeHtml(selftext_html).slice(0, 1400);
                const displayText = result.showFullText ? decodeHtml(selftext_html) : truncatedText;

                return (
                    <div>
                        <div key={id} className={isLoading? 'post center_flex' : 'post' }>
                            { isLoading? (
                                <div className="loading">
                                    {/* loading screen */}
                                    <div class="lds-ellipsis">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            ) : (
                                <> 
                                    <ScoreBlock score={score}/>
                                    <div className="pic_block">
                                        <div>
                                            <div id="name_days">
                                                <p className="subreddit_name">{subreddit_name_prefixed}</p>
                                                <span>•</span>
                                                <div className="days_created">
                                                    <p>{daysCreated}</p>
                                                </div>
                                            </div> 
                                            <p id="author">{author}</p>
                                        </div>
                                        <h2>{title}</h2>
                                        { link_flair_text && <p id="link_flair_text">{link_flair_text}</p> }
                                        {/* check what to render next gif/video/text etc */}
                                        <div className="media_choose">
                                            { isGifv?  ( 
                                                <video className="width60" autoPlay loop>
                                                    <source src={url.replace('.gifv', '.mp4')} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>    
                                                ) : thumbnail && isVideo? (
                                                    <video className="video" controls autoPlay loop>
                                                        <source src={media.reddit_video.fallback_url} type="video/mp4"></source>
                                                    </video>
                                                ) : isImage? (
                                                    <img className="img" src={url} alt={title} />                                    
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
                                        <br></br>
                                        <div className="comment_block">
                                            <button className="icon_action_btn">
                                               <svg className="icon_action" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1h-8.829l-.171.171v-.171h-3c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12m0-2h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3z"></path></svg>
                                                <span id="comments_num">{num_comments}</span>
                                            </button>
                                        </div>
                                        {/* <img>{likes}</img> */}
                                        {/* this is a link to a reddit for testing*/}
                                        <a href={url} target="_blank" rel="noopener noreferrer">
                                            {url}
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>
                        
                    </div>
                );
            })}
        </div>
    );
}

export default Body;
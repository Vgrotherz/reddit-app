import React from "react";

import './body.css';

const Body = ({ searchResults, isLoading }) => {

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

    return(
        <div className="search_results">
            {/* results like it will be on Reddit - replace it on 47 = {searchResults.map((result) => { */}
            {sortedResults.map((result) => {
                const { id, title, url, thumbnail, selftext_html, media, author, link_flair_text, score, num_comments, created, subreddit_name_prefixed, subreddit } = result.data;

                // Check if media exists and if it's a video
                const isVideo = media && media.reddit_video;
                const isGifv = url.endsWith(".gifv");

                // isImge to controls what to render in a post
                const isImage = url.endsWith(".png") || url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".gif") || url.endsWith(".gifv");
                console.log(result.data)

                // redditDate - epoch data from json. daysCreated - convert to human readable date - these 2 func is a whole date info of a post date
                // const redditDate = new Date(created *1000);
                // const daysCreated = redditDate.toGMTString()+"<br>"+redditDate.toLocaleString();

                const daysCreated = timeSince(new Date(created * 1000));
                
                const decodeHtml= (html) => {
                    let txt = document.createElement("textarea");
                    txt.innerHTML = html;
                    return txt.value;
                }

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
                                    <div className="btn_block">
                                        <button className="icon_action_btn">
                                            <svg className="icon_action" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115-1.17-1.169-1.17-3.073 0-4.242l7.121-7.121 7.121 7.121c1.17 1.169 1.17 3.073 0 4.242-1.094 1.095-2.979 1.14-4.121.115v4.764c0 1.654-1.346 3-3 3zm-1-12.586v9.586c0 .551.448 1 1 1s1-.449 1-1v-9.586l3.293 3.293c.379.378 1.035.378 1.414 0 .391-.391.391-1.023 0-1.414l-5.707-5.707-5.707 5.707c-.391.391-.391 1.023 0 1.414.379.378 1.035.378 1.414 0l3.293-3.293z"></path></svg>
                                        </button>
                                            <span className="score">{scoreK(score)}</span>
                                        <button className="icon_action_btn">
                                            <svg className="icon_action" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.312l-7.121-7.121c-1.17-1.17-1.17-3.073 0-4.242 1.094-1.094 2.978-1.138 4.121-.115v-4.834c0-1.654 1.346-3 3-3s3 1.346 3 3v4.834c1.143-1.023 3.027-.979 4.121.115 1.17 1.169 1.17 3.072 0 4.242l-7.121 7.121zm-5-10.242c-.268 0-.518.104-.707.293-.391.39-.391 1.023 0 1.414l5.707 5.707 5.707-5.707c.391-.391.391-1.024 0-1.414-.379-.379-1.035-.379-1.414 0l-3.293 3.293v-9.656c0-.551-.448-1-1-1s-1 .449-1 1v9.656l-3.293-3.293c-.189-.189-.439-.293-.707-.293z"></path></svg>
                                        </button>
                                    </div>
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
                                                <div dangerouslySetInnerHTML={{ __html: decodeHtml(selftext_html)}}></div>
                                            ) : thumbnail? (
                                                <img src={thumbnail}></img>
                                            ) : null
                                        }
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
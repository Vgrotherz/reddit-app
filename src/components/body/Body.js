import React from "react";
import './body.css';

import { decodeHtml } from "../utils/utils";
import ScoreBlock from "../scoreBlock/ScoreBlock";
import Comments from "../comments/Comments";
import Media from "../media/Media";
// import fetchRedditComments from "../redditApi/RedditComments";

export const timeSince = (date) => {
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

const Body = ({ searchResults, isLoading, setIsLoading, is_gallery }) => {

    // converts seconds to different more readable date
    
    
    // Sort searchResults by created time in descending order
    const sortedResults = searchResults.sort((a, b) => b.data.created - a.data.created);

    return(
        <div className="search_results">
            {/* results like it will be on Reddit - replace it on 47 = {searchResults.map((result) => { */}
            {sortedResults.map((result, index) => {
                const { id, title, url, thumbnail, selftext_html, media, media_metadata, author, link_flair_text, score, num_comments, created, subreddit_name_prefixed, spoiler, over_18, is_gallery } = result.data;

                // console.log(result.data) //shows all json data from search
                const youTransform = media && media.oembed && media.oembed.html;

                // Check if media exists and if it's a video
                const isVideo = media && media.reddit_video;
                const isGifv = url.endsWith(".gifv");
                // isImge to controls what to render in a post
                const isImage = url.endsWith(".png") || url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".gif") || url.endsWith(".gifv");

                // попытка получить картинку для сторонних сайтов - данные с media_metadata и отображение на 138 строке
                // let dynamicUrl = null;
                // if (media_metadata && Object.keys(media_metadata).length > 0) {
                //     const dynamicKey = Object.keys(media_metadata)[0]; // Assuming there is only one key
                //     dynamicUrl = media_metadata[dynamicKey].s.u;
                // }

                // redditDate - epoch data from json. daysCreated - convert to human readable date - these 2 func is a whole date info of a post date
                // const redditDate = new Date(created *1000);
                // const daysCreated = redditDate.toGMTString()+"<br>"+redditDate.toLocaleString();

                const daysCreated = timeSince(new Date(created * 1000));
                

                return (
                    <div className="res">
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
                                        <div className="width_100">
                                            <div id="name_days">
                                                <p className="subreddit_name">{subreddit_name_prefixed}</p>
                                                <span>•</span>
                                                <div className="days_created">
                                                    <p>{daysCreated}</p>
                                                </div>
                                            </div> 
                                            <p id="author">{author}</p>
                                        </div>
                                        <h1>{decodeHtml(title)}</h1>
                                        { link_flair_text && <p id="link_flair_text">{link_flair_text}</p> }
                                        { isLoading? 
                                            ( <div className="loading">
                                                {/* loading screen */}
                                                <div class="lds-ellipsis">
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                            </div> ) 
                                            : ( 
                                                <div className={is_gallery? "med cent_flex" : "med" }>
                                                    <Media url={url} isGifv={isGifv} thumbnail={thumbnail} isVideo={isVideo} media={media} isImage={isImage} title={title} selftext_html={selftext_html} searchResults={searchResults} sortedResults={sortedResults} result={result} index={index} spoiler={spoiler} youTransform={youTransform} over_18={over_18} is_gallery={is_gallery} media_metadata={media_metadata} setIsLoading={setIsLoading} />
                                                    <br></br>
                                                </div>)
                                        }
                                        
                                        <div className="comment_block">
                                            <Comments postId={id} subredditName={subreddit_name_prefixed} title={title} num_comments={num_comments} isLoading={isLoading} setIsLoading={setIsLoading}/>
                                        </div>
                                        {/* <img>{likes}</img> */}
                                        {/* this is a link to a reddit for testing*/}
                                        {/* <a href={url} target="_blank" rel="noopener noreferrer">
                                            {url}
                                        </a> */}
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
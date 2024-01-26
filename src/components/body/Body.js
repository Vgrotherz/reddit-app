import React from "react";

import './body.css';

const Body = ({ searchResults }) => {
    return(
        <div className="search_results">
            {searchResults.map((result) => {
                const { id, title, url, thumbnail, author, link_flair_text, media, score, num_comments, created, subreddit_name_prefixed } = result.data;
                // isImge to controls what to render in a post
                const isImage = url.endsWith(".png") || url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".gif");
                console.log(result.data)

                const redditDate = new Date(created *1000);
                const daysCreated = redditDate.toGMTString()+"<br>"+redditDate.toLocaleString();

                
                return (
                    <div>
                        <div key={id} className="post">
                            <div>
                                <p>{daysCreated}</p>
                                <button>up</button>
                                {score}
                                <button>down</button>
                            </div>
                            <h2>{title}</h2>
                            { link_flair_text && <p className="link_flair_text">{link_flair_text}</p> }
                            { isImage? ( 
                                <img className="img" src={url} alt={title} />
                                ) : (
                                    <img src={thumbnail}></img>
                                )
                            }
                            <p>
                                {subreddit_name_prefixed} 
                                <br></br>
                                {author}
                            </p>
                            <button>{num_comments}comments</button>
                            {/* <img>{likes}</img> */}
                            <br></br>
                            {/* this is a link to a reddit for testing*/}
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                {url}
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Body;
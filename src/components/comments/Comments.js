import React, { useEffect, useState } from "react";
import fetchRedditComments from "../redditApi/RedditComments";

import { timeSince } from "../body/Body";
import { decodeHtml } from "../media/Media"; 

import './comment.css'

const Comments = ({ postId, subredditName, title, num_comments }) => {

    const [ comments, setComments ] = useState([]);
    const [ showComments, setShowComments ] = useState(false);


    useEffect(() => {
    
        const fetchComments = async () => {
            try {
                const commentsData = await fetchRedditComments(postId, subredditName, title);
                commentsData.sort((a, b) => b.days - a.days);
                setComments(commentsData);
                console.log('comments.js ', commentsData)
                
            } catch (error) {
                console.error('Error fetching comments:', error);
                setComments([]); // Clear comments in case of error
            }
        }
        if(showComments) {
            fetchComments();
        }
    }, [postId, subredditName, title, showComments]);
    
    const handleCommentsClick = () => setShowComments(!showComments);

    return(
        <div className="width100">
            <button className="icon_action_btn" onClick={handleCommentsClick}>
                <svg className="icon_action" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1h-8.829l-.171.171v-.171h-3c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12m0-2h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3z"></path></svg>
                <p id="comments_num">{num_comments}</p>
                {showComments && num_comments > 0 ? (
                        <p>Hide Comments</p>
                    ) : !showComments && num_comments > 0 ? (
                        <p>Show Comments</p>
                    ) : showComments && num_comments === 0 ? (
                        null
                    ) : null
                }   
            </button>
            {showComments && (
                <ul>
                    {comments.map((comment, index) => { 
                        const daysCreatedComm = timeSince(new Date(comment.days * 1000));
                        const isImageUrl = /\.(jpeg|jpg|gif|png)$/i.test(comment.body);
                        const commentBody = comment.body;
                        const imageComment = decodeHtml(commentBody)

                        return (
                            <li key={index} className="comment">
                                <div className="comment_block">
                                    <h4>{comment.author}</h4><span>•</span><>{daysCreatedComm}</>
                                </div>
                                {isImageUrl ? (
                                    <img src={comment.body} alt="Comment pic" />
                                ) : (
                                    <div>
                                        <div dangerouslySetInnerHTML={{ __html: imageComment }} />
                                    </div>
                                )}
                                
                                <div className="comment_value_block">
                                    <svg rpl="" fill="currentColor" height="16" icon-name="upvote-outline" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"></path></svg>
                                    <span className="">{comment.score}</span>
                                    <svg rpl="" fill="currentColor" height="16" icon-name="downvote-outline" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z"></path></svg>
                                </div>
                                <div className="days_created">
                                    <p></p>
                                </div>   
                            </li> 
                            )})}
                </ul>
                )
            }
        </div>
    )
}

export default Comments;
import React, { useEffect, useState } from "react";
import fetchRedditComments from "../redditApi/RedditComments";

import './comment.css'

const Comments = ({ postId, subredditName, title, num_comments }) => {

    const [ comments, setComments ] = useState([]);
    const [ showComments, setShowComments ] = useState(false);

    useEffect(() => {
        
        const fetchComments = async () => {
            try {
                const commentsData = await fetchRedditComments(postId, subredditName, title);
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
        <div>
            <button className="icon_action_btn" onClick={handleCommentsClick}>
                <svg className="icon_action" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1h-8.829l-.171.171v-.171h-3c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12m0-2h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3z"></path></svg>
                <p id="comments_num">{num_comments}</p>
                {showComments ? (
                    <>
                        <p>Hide Comments</p>
                    </>
                    ) : (
                    <p>Show Comments</p>
                )}   
            </button>
            {showComments && (
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index} className="comment">
                            <h4>Author : {comment.author}</h4>
                            <p>{comment.body} (Score : {comment.score})</p>
                            {/* <p>Score : {comment.score}</p> */}
                            {/* <strong>{comment.author}</strong>: {comment.body} (Score: {comment.score}) */}
                        </li>
                    ))}
                </ul>
                )
            }
        </div>
    )
}

export default Comments;
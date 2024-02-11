import React, { useEffect, useState } from 'react';

const RedditComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        
        const response = await fetch('https://www.reddit.com/r/HitmanAslume/comments/1algs6e/i_fucking_love_kane_lynch_rahhhhh/.json');

        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }

        const jsonData = await response.json();
        console.log(jsonData);

        // Extract comments from the response
        const commentsData = jsonData[1].data.children.map(comment => ({
          author: comment.data.author,
          body: comment.data.body,
          score: comment.data.score,
        }));

        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div>
      <h1>Reddit Comments</h1>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.author}</strong>: {comment.body} (Score: {comment.score})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedditComments;
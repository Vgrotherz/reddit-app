    const fetchRedditComments = async (postId, subredditName, titleName) => {
      try {
        
        const response = await fetch(`https://www.reddit.com/${subredditName}/comments/${postId}/${titleName}.json`);

        
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

        return commentsData;
      } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
      }
    };


export default fetchRedditComments;
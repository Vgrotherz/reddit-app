const RedditApi = async (searchTerm) => {
    try {
        const response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}&type=link&sort=hot`);
        const data = await response.json();
        return data.data.children;
    } catch (error) {
        console.error("Error fetching Reddit API:", error);
        return [];
    }
}

export default RedditApi;
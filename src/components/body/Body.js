import React from "react";
import './body.css';

const Body = ({ searchResults }) => {
    return(
        <div className="block">
            {searchResults.map((result) => (
                <div key={result.data.id}  className="post">{result.data.title}</div>
            ))}
        </div>
    );
}

export default Body;
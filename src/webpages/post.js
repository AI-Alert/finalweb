import React, { useState, useEffect }  from 'react';
const Post = props => {
    var id = props.match.params.id
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setIsLoaded(true);
                    setPost(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  
    
    if (post) {
        return (
            <div>
                <h1>{post.title}</h1>
                <div>
                    Title: {post.title}
                </div>
                <div>
                    Author: {post.author}
                </div>
                <div>
                    Excerpt: {post.excerpt}
                </div>
                <div>
                    Content: {post.content}
                </div>
                <div>
                    Status: {post.status}
                </div>
          </div>
        );
    }
}
export default Post;
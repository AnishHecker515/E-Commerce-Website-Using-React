import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Posts.css"; 

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then((res) => res.json())
            .then((d) => {
                setPosts(d.posts);
            });
    }, []);

    return (
        <div className="product-view">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-md-8">
                                    </div>
                                    <div className="col-md-4">
                                        <div className="product-short">
                                            <div className="dropdown">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {posts.map((ty) => (
                                <div key={ty.id} className="col-lg-4">
                                    <div className="product-item">
                                        <i className="bi bi-file-earmark-post post-icon"></i>
                                        <Link to={`/singlePosts/${ty.id}`}>
                                            <p>{ty.title}</p>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;

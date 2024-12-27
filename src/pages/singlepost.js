// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Comments from "./comments";
// import "./SinglePosts.css"; 


// function SinglePosts() {
//     const { id } = useParams();
//     const [singlePosts, setSinglePosts] = useState({});
//     const [user, setUser] = useState({});

//     useEffect(() => {
//         fetch(`https://dummyjson.com/posts/${id}`)
//             .then((res) => res.json())
//             .then((d) => {
//                 setSinglePosts(d);
//             });
//     }, [id]);

//     useEffect(() => {
//         fetch(`https://dummyjson.com/users/${id}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setUser(data);
//             });
//     }, [id]);

//     return (
//         <div className="post-detail">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="post-content">
//                             <div className="title">
//                                 <h2>{singlePosts.title}</h2>
//                             </div>
//                             <div className="body">
//                                 <p>{singlePosts.body}</p>
//                             </div>
//                             <div className="tags">
//                                 <p><strong>Tags:</strong> {singlePosts.tags?.map(tag => <span key={tag}>{tag}</span>)}</p>
//                             </div>
//                             <div className="reactions">
//                                 <p><strong>Likes:</strong> {singlePosts.reactions?.likes || 0}</p>
//                                 <p><strong>Dislikes:</strong> {singlePosts.reactions?.dislikes || 0}</p>
//                             </div>
//                             <div className="views">
//                                 <p><strong>Views:</strong> {singlePosts.views}</p>
//                             </div>
//                             <div className="user-id">
//                                 <p><strong>User ID:</strong> {singlePosts.userId}</p>
//                             </div>
//                             <div className="name">
//                                 <p><strong>Name:</strong> {user.firstName}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <Comments />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SinglePosts;



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./comments";
import "./SinglePosts.css"; // Import the scoped CSS file

function SinglePosts() {
    const { id } = useParams();
    const [singlePosts, setSinglePosts] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then((res) => res.json())
            .then((d) => {
                setSinglePosts(d);
            });
    }, [id]);

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, [id]);

    return (
        <div className="single-posts-container">
            <div className="single-posts-content">
                <div className="single-posts-row">
                    <div className="single-post">
                        <div className="single-post-title">
                            
                            <h2>{singlePosts.title}</h2>
                        </div>
                        <div className="single-post-body">
                            <p>{singlePosts.body}</p>
                        </div>
                        <div className="single-post-tags">
                            <p><strong>Tags:</strong> {singlePosts.tags?.map(tag => <span key={tag}>{tag}</span>)}</p>
                        </div>
                        <div className="single-post-reactions">
                            <p><strong>Likes:</strong> {singlePosts.reactions?.likes || 0}</p>
                            <p><strong>Dislikes:</strong> {singlePosts.reactions?.dislikes || 0}</p>
                        </div>
                        <div className="single-post-views">
                            <p><strong>Views:</strong> {singlePosts.views}</p>
                        </div>
                        <div className="single-post-user-id">
                            <p><strong>User ID:</strong> {singlePosts.userId}</p>
                        </div>
                        <div className="single-post-name">
                            <p><strong>Name:</strong> {user.firstName}</p>
                        </div>
                    </div>
                    <div className="single-post-comments">
                        <Comments />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePosts;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleComments() {
    const { id } = useParams();
    const [singleComment, setSingleComment] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/comments/${id}`)
            .then((res) => res.json())
            .then((d) => {
                setSingleComment(d);
            });
    }, [id]);

    return (
        <>
            <div className="comment-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="comment-content">
                                <div className="body">
                                    <p>{singleComment.body}</p>
                                </div>
                                <div className="post-id">
                                    <p><strong>Post ID:</strong> {singleComment.postId}</p>
                                </div>
                                <div className="likes">
                                    <p><strong>Likes:</strong> {singleComment.likes}</p>
                                </div>
                                <div className="user-info">
                                    <p><strong>User ID:</strong> {singleComment.user?.id}</p>
                                    <p><strong>Username:</strong> {singleComment.user?.username}</p>
                                    <p><strong>Full Name:</strong> {singleComment.user?.fullName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleComments;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './comments.css';


function Comment() {
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}/comments`)
            .then((res) => res.json())
            .then((data) => setComments(data.comments));
    }, [id]);

    return (
        <div className="comments-section">
            <h3>Comments</h3>
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <p><strong>{comment.user.fullName}</strong> ({comment.user.username})</p>
                        <p>{comment.body}</p>
                    </div>
                ))
            ) : (
                <p>No comments available.</p>
            )}
        </div>
    );
}

export default Comment;

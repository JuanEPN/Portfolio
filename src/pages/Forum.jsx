import { useState } from "react";
import "./Forum.css";
import { db } from "../database/firebase";
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    updateDoc,
    doc,
    arrayUnion,
} from "firebase/firestore";

import { useEffect } from "react";
import { comment } from "postcss";


const Forum = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState("");
    const [newComments, setNewComments] = useState({});

    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    comments: doc.data().comments || [],
                }))
            );
        });
        return () => unsubscribe();
    }, []); 




    const handleSubmitPost = async (e) => {
        e.preventDefault();
        if (newPost.trim()) {
            await addDoc(collection(db, "posts"), {
                content: newPost,
                comments: [],
                createdAt: new Date()
            });
            setNewPost("");
        }
    };

    const handleAddComment = async (postId, e) => {
        e.preventDefault();
        const commentText = newComments[postId];
        if (commentText && commentText.trim()) {
            const postRef = doc(db, "posts", postId);
            await updateDoc(postRef, {
                comments: arrayUnion({
                    id: Date.now(), 
                    content: commentText,
                    createdAt: new Date().toISOString()
                }),
            });
            setNewComments(prevComments => ({
                ...prevComments,
                [postId]: ""
            }));
        }
    };

    const handleCommentChange = (postId, text) => {
        setNewComments(prevComments => ({
            ...prevComments,
            [postId]: text
        }));
    };

    return (
        <section className="forum-section">
            <h2>Blog/Foro</h2>

            {/* Formulario para nuevos posts */}
            <form onSubmit={handleSubmitPost} className="post-form">
                <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Escribe algo interesante aquí..."
                    required
                />
                <button type="submit">Publicar Post</button>
            </form>

            {/* Lista de posts */}
            <div className="posts-container">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="post-content">
                            <p>{post.content}</p>
                            <small>{new Date(post.createdAt).toLocaleString()}</small>
                        </div>

                        {/* Comentarios existentes */}
                        <div className="comments-container">
                            {post.comments.map((comment) => (
                                <div key={comment.id} className="comment">
                                    <p>{comment.content}</p>
                                    <small>{new Date(comment.createdAt).toLocaleString()}</small>
                                </div>
                            ))}
                        </div>

                        {/* Formulario para nuevos comentarios */}
                        <form onSubmit={(e) => handleAddComment(post.id, e)} className="comment-form">
                            <textarea
                                value={newComments[post.id] || ""}
                                onChange={(e) => handleCommentChange(post.id, e.target.value)}
                                placeholder="Añade un comentario..."
                            />
                            <button type="submit">Comentar</button>
                        </form>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Forum;
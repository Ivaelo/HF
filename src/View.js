import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBCardFooter
} from 'mdb-react-ui-kit';


const View = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [like, setLike] = useState(0);

    useEffect(() => {
        const getPosts = async () => {
            await axios.get(`http://localhost:3000/posts`, { withCredentials: true })
            .then(response => {
                setAllPosts(response.data);
            })
            .catch(error => {
                console.error(error);
            })
        }
        getPosts();
    }, [like]);

    const handleLike = async (id) => {
        await axios.post(`http://localhost:3000/posts/${id}/like`, {}, { withCredentials: true })
            .then(() => {
                setLike(like + 1);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/posts/${id}`, { withCredentials: true })
            .then(() => {
                setLike(like + 1);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="views-frame">
            {allPosts.map(post => {
                return (
                    <MDBCard key={post.id} alignment='center' className="view-card">
                        <MDBCardBody>
                            <MDBCardTitle>By: {post.userName}</MDBCardTitle>
                            <MDBCardText>
                                {post.content}
                            </MDBCardText>
                            {sessionStorage.getItem("id") === post.userName ? (
                                <MDBBtn color='danger' onClick={() => handleDelete(post.id)}>Delete</MDBBtn>
                            ) : (
                                <MDBBtn onClick={() => handleLike(post.id)}>Like</MDBBtn>
                            )}
                        </MDBCardBody>
                        <MDBCardFooter className='text-muted'>
                            Likes: {post.likes}
                        </MDBCardFooter>
                    </MDBCard>
                );
            })}
        </div>
    );
}

export default View;
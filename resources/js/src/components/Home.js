import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import AppContainer from "./AppContainer";

const Home = () => {
    const [posts, setPosts] = useState(null);

    const fatchPosts = () => {
        api.getAllPosts().then(res => {
            const result = res.data;
            setPosts(result.data);
        });
    }

    useEffect(() => {
        fatchPosts();
    }, []);

    const renderPosts = () => {
        if (!posts) {
            return (
                <tr>
                    <td colSpan="4">Loading posts....</td>
                </tr>
            );
        }
        if (posts.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        There is no post found. please add new post.
                    </td>
                </tr>
            );
        }

        return posts.map((post, index) => (
            <tr key={index}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.details}</td>
                <td>
                    <div className="btn-group" role="group">
                        <Link to={`/edit/${post.id}`} className="btn btn-warning">
                            Edit
                        </Link>
                        <button type="button" className="btn btn-danger" onClick={() => {
                            api.deletePost(post.id).then(fatchPosts).catch( err => alert("Failed to delete the post with id :" + post.id))
                        }}>Delete</button>
                    </div>
                </td>
            </tr>
        ));
    };

    return (
        <AppContainer title="Learn ReactJS With Laravel">
            <div>
                <Link className="nav-link" to="/add" className="btn btn-primary">Add</Link>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Details</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderPosts()}
                    </tbody>
                </table>
            </div>
        </AppContainer>
    );
};

export default Home;

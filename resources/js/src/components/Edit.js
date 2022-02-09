import React ,{ useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import AppContainer from "./AppContainer";

const Edit = () => {
    const { id } = useParams();
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    
    const onEditSubmit = async () => {
        try{
            await api.updatePost({
                title,details
            }, id)

            navigate('/');
        }
        catch
        {
            alert('Failed to Edit post!');
        }
        finally
        {
            setLoading(false);
        }
    }


    useEffect(() => {
        let isMounted = true;
        api.getPost(id).then((res) => {
            const result = res.data;
            const post = result.data;
            setTitle(post.title);
            setDetails(post.details);
        });
        return () => { isMounted = false };
    }, []);

    return (
        <AppContainer title="Edit Post">
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Ttile</label>
                    <input type="text" className="form-control" id="title"  value={title} onChange={ e => setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="details" className="form-label">
                        Details
                    </label>
                    <textarea
                        className="form-control"
                        id="details"
                        rows="3"
                        value={details}
                        onChange={ e => setDetails(e.target.value)}
                    ></textarea>
                </div>
                <button type="button" className="btn btn-primary" disabled={loading} onClick={onEditSubmit}>{loading ? 'Loading' : 'Save'}</button>
            </form>
        </AppContainer>
    );
};

export default Edit;

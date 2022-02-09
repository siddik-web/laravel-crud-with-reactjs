import React ,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import AppContainer from "./AppContainer";

const Add = () => {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    
    const onAddSubmit = async () => {
        try{
            await api.addPost({
                title,details
            })

            navigate('/');
        }
        catch
        {
            alert('Failed to add post!');
        }
        finally
        {
            setLoading(false);
        }
    }

    return (
        <AppContainer title="Add Post">
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
                <button type="button" className="btn btn-primary" disabled={loading} onClick={onAddSubmit}>{loading ? 'Loading' : 'Save'}</button>
            </form>
        </AppContainer>
    );
};

export default Add;

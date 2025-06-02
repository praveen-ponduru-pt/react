import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    return (
        <>
            <div>
                <button onClick={() => navigate('/movies-app')}>Back</button>
                <h1>Movie Details</h1>
                <h2>Movie Id: {id}</h2>
            </div>
        </>
    )
}

export default MovieDetails;
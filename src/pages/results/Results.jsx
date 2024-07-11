import "./Results.css";
import { useNavigate, useLocation } from "react-router-dom";

const Results = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { answers } = location.state;
    const { counter } = location.state;

    return (
        <div className="results-container">
            <h1 className="results"> Resultados </h1>
            <h2 className="correct"> Respuestas Correctas: {answers} / {counter} </h2>
            <button onClick={() => navigate('/difficulty')} className="buttonTryAgain">Volver a jugar</button>
        </div>
    )
}

export default Results;
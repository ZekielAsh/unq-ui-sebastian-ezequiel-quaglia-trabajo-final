import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../service/Api";
import "./Difficulty.css";

const Difficulty = () => {
    const [selected, setSelected] = useState([]);
    const navigate = useNavigate();

    
    useEffect(() => {
        const fetchMode = async () => {
            try {
                const response = await Api.getDifficulty();
                setSelected(response.data);
            } catch (error) {
                console.error('Error fetching difficulty', error);
            }
        };
        fetchMode();
    }, []);

    const handleDifficultyChange = (mode) => {
        navigate("/question", { state: { difficulty: mode } });
    }

    return (
        <div>
            <div className="difficulty-container">
                <div className='title'>
                    <h1>Elegir Dificultad</h1>
                </div>
            </div>
            <div className="list">
                { selected?.map((mode) => (
                    <button key={mode} onClick={() => handleDifficultyChange(mode)} className="buttonDifficulty">{mode}</button>
                ))}
            </div>
        </div>
    )
}

export default Difficulty;
import Api from "../../service/Api";
import React, { useEffect, useState } from "react";
import './Home.css';

const Home = () => {
    const [difficultyMode, setDifficultyMode] = useState([]);
    const [selectedMode, setSelectedMode] = useState('easy');

    useEffect(() => {
        const fetchMode = async () => {
            try {
                const response = await Api.getDifficulty();
                setDifficultyMode(response.data);
            } catch (error) {
                console.error('Error fetching difficulty mode', error);
            }
        };
        fetchMode();
    }, []);

    const handleDifficultyChange = (difficulty) => {
        setSelectedMode(difficulty);
    }

    return (
        <div className="home">
            <h1>Choose your difficulty</h1>
            <div className="difficulty">
                {difficultyMode.map((mode) => (
                    <button
                        key={mode}
                        className={selectedMode === mode ? 'selected' : ''}
                        onClick={() => handleDifficultyChange(mode)}
                    >
                        {mode}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Home;
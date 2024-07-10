import './Home.css';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <button onClick={() => navigate('/difficulty')}>New Game</button>
        </div>
    );
}

export default Home;
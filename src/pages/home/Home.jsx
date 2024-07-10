import './Home.css';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <button onClick={() => navigate('/difficulty')}>Empezar</button>
        </div>
    );
}

export default Home;
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Difficulty from './pages/difficulty/Difficulty'
import Question from './pages/question/Question'
import Results from './pages/results/Results'


const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/difficulty" element={<Difficulty />} />
                <Route path="/question" element={<Question />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </Router>
    )
}
export default App

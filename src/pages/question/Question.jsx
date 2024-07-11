import "./Question.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Answer from "../answer/Answer";
import Api from "../../service/Api";

const Question = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { difficulty } = location.state; 
    const [questionList, setQuestionList] = useState([]);
    const [counter, setCounter] = useState(0);
    const [correct, setCorrect] = useState(null);
    const [answers, setAnswers] = useState(0);

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const response = await Api.getQuestions(difficulty);
                setQuestionList(response.data);
            } catch (error) {
                console.error('Error fetching question', error);
            }
        };
        fetchQuestion();
    }, []);

    const handleAnswer = async (answer) => {
        const questId = {
            questionId: questionList[counter].id, 
            option: answer
        };
        try {
            const response = await Api.postAnswer(questId);
            setCorrect(response.data.answer ? "Respuesta Correcta!" : "Respuesta Incorrecta!");
            setAnswers(current => current + (response.data.answer ? 1 : 0));
            setTimeout(() => {
                setCorrect(null);
                setCounter(previous => previous + 1);
              }, 1000);
        } catch (error) {
            console.error('Error posting answer', error);
        }
    };

    if (!questionList.length) { return <div>Cargando...</div> };

    if (counter >= questionList.length) { 
        navigate("/results", { state: { answers, counter } });
    }

    return (
        <div className="question-container">
            <div className="results">
                Puntaje: {answers}
            </div>
            {correct && <div className="correct">{correct}</div>};
            <div>
                <div className="question">{questionList[counter].question}</div>
                <Answer answers={questionList[counter]} whenAnswer={handleAnswer} />
            </div>
        </div>
    );
};

export default Question;
import React from 'react';
import './Answer.css';

const Answer = ({ answers, whenAnswer }) => {

    const handleClick = (option) => {
        whenAnswer(option);
    };

    return (
        <>
            <div className='answer-container'>
                <button onClick={() => handleClick("option1")}> {answers.option1} </button>
                <button onClick={() => handleClick("option2")}> {answers.option2} </button>
                <button onClick={() => handleClick("option3")}> {answers.option3} </button>
                <button onClick={() => handleClick("option4")}> {answers.option4} </button>
            </div>
        </>
    );
}

export default Answer;
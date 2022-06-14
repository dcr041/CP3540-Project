import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import classNames from 'classnames';
import Statistics from './Statistics';

const shuffleAnswers = question => {
    const answers = [question.correct_answer, ...question.incorrect_answers];

    for (let index = 0; index < answers.length; index++) {
        const random = Math.floor(Math.random() * index);
        const tmp = answers[index];
        console.log(tmp);
        answers[index] = answers[random];
        answers[random] = tmp;
    }

    return answers;
};

export default function GameView({ questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [answers, setAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const random = Math.floor(Math.random() * (10));

    useEffect(() => {
        const question = questions[random];
        setCurrentQuestion(question);
        setAnswers(shuffleAnswers(question));
    }, [currentQuestionIndex]);

    const selectAnswer = answer => {
        setIsSubmitting(true);
        setSelectedAnswer(answer);

        if (answer === currentQuestion.correct_answer) {
            setCountCorrectAnswers(countCorrectAnswers + 1);
        }

        setTimeout(() => {
            const newQuestionIndex = currentQuestionIndex + 1;

            if (newQuestionIndex === 5) {
                setGameOver(true);
            } else {
                setCurrentQuestionIndex(newQuestionIndex);
                setIsSubmitting(false);
                setSelectedAnswer(null);
            }
        }, 750);
    };

    if (gameOver) {
        return <Statistics countCorrectAnswers={countCorrectAnswers} />;
    }

    return (
        <>
            <div>
                {currentQuestionIndex + 1}/{5}
            </div>
            <div className="mb-4" >
                {currentQuestion.question}
            </div>
            <div>
                <ListGroup className={classNames({ disabled: isSubmitting })}>
                    {answers.map((answer, i) => {
                        const isSelectedAndSubmitting = isSubmitting && answer === selectedAnswer;

                        return (
                            <ListGroup.Item
                                key={i}
                                className={classNames({
                                    correct:
                                        isSelectedAndSubmitting && answer === currentQuestion.correct_answer,
                                    incorrect:
                                        isSelectedAndSubmitting && answer !== currentQuestion.correct_answer,
                                })}
                                onClick={() => selectAnswer(answer)}
                            >
                                {answer}
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </div>
        </>
    );
}

import React, { useState } from 'react';
import Question from '../Quiz/Question';
import quizData from '../../staticData/Data';

const Home = () => {
    const [questions, setQuestions] = useState(quizData);

    return (
        <main>
            <div className="container">
                <h3>Quiz App</h3>
                <section>
                    {questions.map((question) => (
                        <Question key={question.id} {...question} />
                    ))}
                </section>
            </div>
        </main>
    );
};

export default Home;

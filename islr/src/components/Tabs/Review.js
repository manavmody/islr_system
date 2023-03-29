import React,{useEffect, useState} from "react";

const Review = () => {
    const questions = [
        {
          id: 1,
          question: 'Identify the following video symbol',
          src: "https://www.youtube.com/embed/JW9yPJ2REK0",
          options: ['Close', 'Difficult', 'Run', 'Today'],
          answer: 'Difficult'
        },
        {
          id: 2,
          question: 'Identify the following video symbol',
          src: "https://www.youtube.com/embed/RJVa8OUU9pA",
          options: ['Close', 'Help', 'Run', 'Today'],
          answer: 'Close'
        },
        {
          id: 3,
          question: 'Identify the following video symbol',
          src: "https://www.youtube.com/embed/W_qFjH-GKzA",
          options: ['Sleep', 'Help', 'Run', 'Thank You'],
          answer: 'Thank You'
        }
      ];
    
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [userAnswers, setUserAnswers] = useState([]);
      const [feedback, setFeedback] = useState('');
    
      const handleAnswerClick = (answer) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestion] = answer;
        setUserAnswers(newAnswers);
    
        if (answer === questions[currentQuestion].answer) {
          setFeedback('Correct!');
        } else {
          setFeedback('Incorrect.');
        }
      };
    
      const handleNextQuestionClick = () => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setFeedback('');
        } else {
          // Quiz is complete
          console.log('User answers:', userAnswers);
        }
      };
    
      return (
        <div>
          <h1>{questions[currentQuestion].question}</h1>
          
          
            <h2 style={{paddingBottom:"10px",paddingTop:"10px"}}>Question {currentQuestion + 1}</h2>
          
          <p ><iframe src={questions[currentQuestion].src} title="YouTube video" allowfullscreen ></iframe></p>
                
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerClick(option)}>
              {option}
            </button>
          ))}
          <br />
         

         
          {feedback ? <p >{feedback}</p> : <br/>}
          <button className="button" onClick={handleNextQuestionClick}>Next</button>
        </div>
      );
}
export default Review
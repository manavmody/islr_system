import React,{ useState} from "react";
import SentencesGame from "../Questions/SentencesGame";
const Sentences = () => {
    const[nextbutton,setNextbutton] = useState(false);
    const[questionNumber,setQuestionnumber] = useState(1);
    const question1 = [
      { id: 1, isFlipped: false, word:"Me",step:10 },
      { id: 2, isFlipped: false, word:"Go",step:1 },
      { id: 3, isFlipped: false, word:"You",step:10 },
      { id: 4, isFlipped: false, word:"To",step:2 },
      { id: 5, isFlipped: false, word:"Free",step:10 },
      { id: 6, isFlipped: false, word:"Help",step:10 },
      { id: 7, isFlipped: false, word:"Today",step:10 },
      { id: 8, isFlipped: false, word:"Are",step:10 },
      { id: 9, isFlipped: false, word:"Sleep",step:3 },
    ]
    const question2 = [
      { id: 1, isFlipped: false, word:"Me",step:10 },
      { id: 2, isFlipped: false, word:"Go",step:10 },
      { id: 3, isFlipped: false, word:"You",step:2 },
      { id: 4, isFlipped: false, word:"To",step:10 },
      { id: 5, isFlipped: false, word:"Free",step:3 },
      { id: 6, isFlipped: false, word:"Help",step:10 },
      { id: 7, isFlipped: false, word:"Today",step:4},
      { id: 8, isFlipped: false, word:"Are",step:1 },
      { id: 9, isFlipped: false, word:"Sleep",step:10 },
    ]
    const question3 = [
      { id: 1, isFlipped: false, word:"Me",step:2 },
      { id: 2, isFlipped: false, word:"Go",step:10 },
      { id: 3, isFlipped: false, word:"You",step:10 },
      { id: 4, isFlipped: false, word:"To",step:10},
      { id: 5, isFlipped: false, word:"Free",step:10 },
      { id: 6, isFlipped: false, word:"Help",step:1 },
      { id: 7, isFlipped: false, word:"Today",step:10 },
      { id: 8, isFlipped: false, word:"Are",step:10 },
      { id: 9, isFlipped: false, word:"Sleep",step:10 },
    ]
    function next(data) {
      setNextbutton(data);
    }
    const handleNext = () => {
      setNextbutton(false);
      setQuestionnumber(questionNumber+1);
    }
      return (
        <div>
           {questionNumber===1 ? <SentencesGame question={question1} video="https://www.youtube.com/embed/e4lux9dnPcw" next={next} answer={3}/>: null}
           {questionNumber===2 ? <SentencesGame question={question2} video="https://www.youtube.com/embed/1XLi2MXWjGc" next={next} answer={4}/>: null}
           {questionNumber===3 ? <SentencesGame question={question3} video="https://www.youtube.com/embed/d9fEfBJmy0Y" next={next} answer={2}/>: null}
            {nextbutton && <button className="button2" onClick={handleNext}>NEXT</button>}
        </div>
       
      );
}
export default Sentences
import React,{ useState} from "react";
const SentencesGame= (props) => {
    const [cards, setCards] = useState(props.question);
    const [currentStep, setCurrentStep] = useState(1);
    const[success,setSuccess] =  useState(false)

      function handleClick() {
        const data = true;
        props.next(data);
      }
    
      const handleCardFlip = (cardId,step) => {
        console.log(step)
        console.log(currentStep)
        if(step === currentStep && currentStep===props.answer){
          setSuccess(true);
          handleClick()
        }
        if(step === currentStep ){
          setCurrentStep(currentStep+1)
          const updatedCards = cards.map((card) => {

            if (card.id === cardId) {
              return {
                ...card,
                isFlipped: !card.isFlipped,
              };
            }
            
            return card;
          });
          
          setCards(updatedCards);

        }
        else{ //if wrong card is chosen
          setCurrentStep(1)
          const updatedCards = cards.map((card) => {

            if (card.id === cardId) {
              return {
                ...card,
                isFlipped: !card.isFlipped,
              };
            }
            
            return card;
          });
          
          setCards(updatedCards);
          setTimeout(() => {
            setCards(props.question)
            
          }, 1000);
        }
        
      };
    
      return (
        <div>
         <p>Identify the following video</p>
         <p>
         <iframe src={props.video} title="YouTube video" allowfullscreen></iframe>
         </p>
         {success && <h3>congrats youve answered this question</h3>}
             <div className="card-box">
            {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${card.isFlipped ? 'flipped' : ''}`}
              onClick={() => handleCardFlip(card.id,card.step)}
            >
            
            {card.isFlipped ? <div className="front">{card.word}</div> : 
            <div className="back">???</div>}

            </div>
          ))}
            </div>
        </div>
       
      );
}
export default SentencesGame
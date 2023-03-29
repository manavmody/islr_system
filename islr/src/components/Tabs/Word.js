import React,{useEffect, useState} from "react";



const Words = () => {
    const[videoKey,setVideoKey] = useState(false);
    const words = [
        {
            id:1,
            word: "Help",
            index:1,
            src: "https://www.youtube.com/embed/e4lux9dnPcw"
        },
        {
            id:2,
            word: "Sleep",
            index:2,
            src: "https://www.youtube.com/embed/1XLi2MXWjGc"
        },
        {
            id:3,
            word: "Today",
            index:3,
            src: "https://www.youtube.com/embed/d9fEfBJmy0Y"
        },
        


    ]
    
    
    const showVideo=(index)=>{
        setVideoKey(index)
    }
    

    return(
        <div className="flexbox-container">
        {words.map((id)=>(
            <ul key={id}>
                <button className="button" onClick={() =>showVideo(id.index)}>{id.word}</button>
                {videoKey===id.index ? 
                <div>
                <div style={{paddingBottom:"10px",paddingTop:"10px"}}>
                       <p fontFamily="Comic Sans MS">The following video is the symbol for {id.word}</p> 
                    </div>
                    <iframe src={id.src} title="YouTube video" allowfullscreen></iframe>
                </div> : null}
            </ul>
        ))}
         
        </div>
    )
}
export default Words
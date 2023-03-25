import React,{useEffect, useState} from "react";

const Words = () => {

    const[video1,setvideo1] = useState(false)
    const[video2,setvideo2] = useState(false)
    const[video3,setvideo3] = useState(false)
    const showVideo1 = () =>{
        setvideo1(true)
        setvideo2(false)
        setvideo3(false)
    }
    const showVideo2 = () =>{
        setvideo1(false)
        setvideo2(true)
        setvideo3(false)
    }
    const showVideo3 = () =>{
        setvideo1(false)
        setvideo2(false)
        setvideo3(true)
    }
    

    return(
        <div>
        <ul>
            <button onClick={showVideo1}>Sleep</button>
            {video1 ? 
            <div>
                <div style={{paddingBottom:"10px",paddingTop:"10px"}}>
                    The following video is the symbol for sleep
                </div>
                <iframe src="https://www.youtube.com/embed/e4lux9dnPcw" title="YouTube video" allowfullscreen></iframe>             
            </div>
            
             : null}
            
        </ul>
        <ul>
            <button onClick={showVideo2}>Today</button>
                {video2 ? 
                <div>
                    <div style={{paddingBottom:"10px",paddingTop:"10px"}}>
                        The following video is the symbol for Today
                    </div>                   
                   <iframe src="https://www.youtube.com/embed/1XLi2MXWjGc" title="YouTube video" allowfullscreen></iframe>                  
                </div>
                
                : null}
        </ul>
        <ul>
            <button onClick={showVideo3}>Help</button>
                {video3 ? 
                <div>
                    <div style={{paddingBottom:"10px",paddingTop:"10px"}}>
                        The following video is the symbol for Help
                    </div>
                    <iframe src="https://www.youtube.com/embed/d9fEfBJmy0Y" title="YouTube video" allowfullscreen></iframe>
                </div>
                
                : null}
        </ul>
            
         
        </div>
    )
}
export default Words
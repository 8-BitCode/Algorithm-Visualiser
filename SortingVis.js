import React from 'react'
import './SoritngVis.css'



export default function BortingVis(props) {
    var arr = props.arr
    var sortStatus = props.sortStatus
    var height = props.height
    

    var fullColour = 0
    if (sortStatus === false){
        fullColour = 'white'
       
    }
    else {
        fullColour = 'green'
        
    }

    
    
    
    const largestNum = Math.max.apply(null, arr)

   
    return (
        <div className="arrayContainer">
            
        <center>
        {arr.map((ele,id)=>(
            <div className="arrayElement"
            key={id}
            style={{
                height:`${(window.innerHeight - height - 45) *(ele /largestNum)}px`,
                width:`${(((window.innerWidth-16)/arr.length)/2)}px`,
                marginLeft :`${(((window.innerWidth-20)/arr.length)/5)}px`,
                marginRight :`${(((window.innerWidth-20)/arr.length)/5)}px`,
                
                marginTop:`${(((window.innerWidth)/arr.length)/5)}px`,
                backgroundColor:`${fullColour}`,
                
                
            }}></div>
        ))}
        
        </center>
        
    </div>

    )
}



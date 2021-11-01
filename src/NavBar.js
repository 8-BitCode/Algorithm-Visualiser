import React, {useState,  useEffect, useRef} from 'react'
// import navbar idk 

import "./NavBar.css"
import { insertionSort } from './Algorithm/insertionSort'
import { BogoSort } from './Algorithm/bogoSort'
import { selectionSort } from './Algorithm/selectionSort'
import { combSort } from './Algorithm/oddEvenSort'


export default function NavBar(props) {
    var Intervals = 0
    var setHeight = props.setHeight
    var arr =props.arr
    var updateArr = props.updateArr
    var beep = arr.slice()
    beep.sort((a,b) => a-b )
    
    var setSortStatus = props.setSortStatus
    
    const [Speed, SetSpeed] = useState(100)
    const [Length, setLength] = useState(20)
    
    
    const listRef = useRef();

    
  


    //-----------------------------------------------------------------------------------//
    
    
    
  
    // This function calculates width and height of the list
    const getListSize = () => {
      
  
      const newHeight = listRef.current.clientHeight;
      setHeight(newHeight);
    };
  
    // Get 'width' and 'height' after the initial render and every time the list changes
    useEffect(() => {
      getListSize();
    });
  
    // Update 'width' and 'height' when the window resizes
    useEffect(() => {
      window.addEventListener("resize", getListSize);
    });

//-------------------------------------------------------------------------------------------//

    
    
    var Algorithm = props.Algorithm
    var setAlgorithm = props.setAlgorithm
    
    
    
    
    function isSmallScreen() {
        return window.matchMedia("(max-width:560px)").matches
     }
     
     var x = isSmallScreen()
     
     if (x===true){
        x = 'none' 
    }
    
 
//-----------------------------Produce Array-------------------------------------//
    
    function randomArray(){
        var arr = []
        
        for (let i = 0; i < Length; i++){
          
          
         arr.push(randomIntFromInterval(1, 1000))
         
          
        }
       updateArr(arr)
        
        
        
      }
      
      function randomIntFromInterval(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

        
      
           
        
    
        
      
  
   

   function ChangeDisplay() {
       
       if (display === 'none'){
        setDisplay('block')
       }
       else{
       setDisplay('none')
       
       }
   }

   
   const [display, setDisplay] = useState(x)
    
   
   
   
   
  
   if (JSON.stringify(arr) === JSON.stringify(beep)){
       setSortStatus(true)
       
   }
   else if(JSON.stringify(arr) !== JSON.stringify(beep)){
       setSortStatus(false)
       
   }


   function sort (){
    ChangeDisplay()
    
   function Stop(){
       //sortstatus does not work here, trust me!
        if (JSON.stringify(arr) === JSON.stringify(beep)){
            clearInterval(Intervals)
            
            if (x===true){
            setDisplay('none')
            }
            else if (x===false){
                setDisplay('block')
                
            }
    }
       }
       //this function is needed so that the sorting actually breaks, idk what to call it tho
       function stuff(){
        var temp = arr.slice()
        updateArr(temp)
       }

        


       //will add more algorithms later on
       if (Algorithm === 'Insertion Sort'){
        Intervals = setInterval(insertionsort, Speed)
        console.log(arr);
    }
       if (Algorithm === 'Bogo Sort'){
        Intervals = setInterval(bogoSort, Speed)
       }
       if(Algorithm === 'Selection Sort'){
           Intervals = setInterval(selectionsort, Speed)
       }
       if(Algorithm === 'Comb Sort'){
           Intervals = setInterval(combsort, Speed)
       }
       
      
       
       
     
     
    function insertionsort(){
        insertionSort(arr)
        stuff()
        Stop()
    }
   function bogoSort (){
      BogoSort(arr)
      stuff()
      Stop()
    }
    function selectionsort(){
        selectionSort(arr)
        stuff()
        Stop()
    }
    function combsort(){
        combSort(arr)
        stuff()
        Stop()
    }
    
    

   }
   

   function ChooseAlgo (event){
       setAlgorithm(event.target.value)
   }
   
   function ChangeSpeed (event){
       SetSpeed(1000-(event.target.value))
   }
   
   function ChangeLength(event){
    setLength(event.target.value)
    randomArray()
}

    

    return (
        
       <div className="NavBar">
           <nav className="navBar"  ref={listRef}>
               <div className="Title">Sorting Algorithm</div>
                <a href="#" className="Toggle" onClick={ChangeDisplay}>
                   <span className="Bar"></span>
                   <span className="Bar"></span>
                   <span className="Bar"></span>
                </a>
                <div className="Inputs" style={{display:display}}>
                   <ul>
                       <button onClick={randomArray}><li>Initialise array</li></button>
                       <button><li><div style={{marginRight:'5px'}}>Algorithms:  </div>
                           <select onChange={ChooseAlgo}>
                           <option value='Insertion Sort'>Insertion Sort</option>
                            <option value='Bogo Sort'>Bogo Sort</option>
                            <option value='Selection Sort'>Selection Sort</option>
                            <option value='Comb Sort'>Comb Sort</option>

                           </select></li></button>
                       <button onClick={sort}><li>Sort!</li></button>
                       <button>
                           <li>  
                                <div>Array Length:</div><input onChange={ChangeLength} type='range' min='5' max='150'></input><br></br>
                                <div>Sort Speed:</div><input  onChange={ChangeSpeed} type='range' min='1' max='1000'></input>
                                </li> </button>
                   </ul>
               </div>
           </nav>
           
       </div>
    )
}

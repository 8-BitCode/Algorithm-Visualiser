
import React, {useState} from "react";
import NavBar from "./NavBar"
import SortingVis from "./SortingVis"




//chamge the random intiavl values later on

function App() {

  const [arr, updateArr] = useState([])
  const [sortStatus, setSortStatus] = useState()
  const [Algorithm, setAlgorithm] = useState('Insertion Sort')
  const [height, setHeight] = useState();
    
   
   
  return (
    <div className="container">
      <NavBar updateArr= {updateArr} 
              arr={arr} 
              sortStatus={sortStatus} 
              setSortStatus={setSortStatus}
              Algorithm={Algorithm}
              setAlgorithm={setAlgorithm}
              height={height}
              setHeight={setHeight}
              />

      <SortingVis updateArr={updateArr} 
                  arr={arr}  
                  sortStatus={sortStatus} 
                  setSortStatus={setSortStatus} 
                  Algorithm={Algorithm}
                  setAlgorithm={setAlgorithm}
                  height={height}
                  setHeight={setHeight}
                  />    
      
    </div>
  );

}




export default App;

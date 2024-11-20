
import Display from "./Display"
import Buttons from "./Buttons"
import styles from "./App.module.css"
import { useState } from "react";

function App() {
  const [output,setOutput]=useState("");//we will use this output value in display box 
  

  function handleButtonClick(value){
    if(value==='C'){
      setOutput("");
    }else if(value==="="){

      const result=eval(output);
      setOutput(result);

    }else{
      let updatedvalue=output+value;
      setOutput(updatedvalue);
    }
  }

  return (
    <div className={styles.calculator}>
      
      <Display value={output}/>
      <Buttons onButtonClick={handleButtonClick}/>
      
    </div>
  )
}

export default App



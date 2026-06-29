
import react,{useState} from "react";

const Practice = ()=>{
  const [show, setshow]= useState(false);

  return (
   <div>
    <button onClick={()=>{setshow(!show)}}>Toggle</button>

    {show && (
        <h1>i am paragraph</h1>
    )}
   </div>

  )

}

export default Practice;
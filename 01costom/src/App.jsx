import React from 'react'

const App = () => {

let counter = 15;

const addValue=()=>{
  console.log("clicked", counter);
  counter = counter + 1
}

  return (
   <div>
     <h1>counter Value :{counter} </h1>
     <button
     onClick={addValue}
     
     >Add Value</button>
     <br />
     <br />
     <button>Remove Value</button>
   </div>
    
  )
}

export default App
import React, { useCallback, useState  } from 'react'

const App = () => {

  const [length ,setLenght]=useState(8)
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

const passwordGenerator=useCallback(()=>{
let pass =""
let str ="ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(condition){
  
}


})[length,numberAllowed,charAllowed,setPassword]

  return (
    <>
<h1 className='text-4xl text-center text-white'>Password Generator</h1>

    </>
  )
}

export default App
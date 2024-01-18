import React from 'react'
import Card from './components/Card'
let myobj ={
  name :"PapaRanjeet",
  age : 21
}
const App = () => {
  return (
    <div className='h-screen w-full bg-white flex justify-center items-center gap-5'>
    <Card username="Anuj" btnText="click me"/>
    <Card username="Anjali" btnText="visit me"/>

    </div>
  )
}

export default App
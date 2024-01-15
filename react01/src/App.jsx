import React from 'react'

const App = () => {

  const username = "Anuj"
  return (
   <div className='full-size h-screen bg-black'>
    <nav className='full-size h-12 bg-white flex justify-between pl-10 text-xl items-center font-medium'>
<div>
  Anuj
</div>
<div className='flex gap-4 pr-10'>
  <h1>contact</h1>
  <h1>About</h1>
  <h1>Blog</h1>
</div>
    </nav>
    <h1 className='text-white'>hello {username} its time to win that day!!!</h1>
    
    </div>
  )
}

export default App 
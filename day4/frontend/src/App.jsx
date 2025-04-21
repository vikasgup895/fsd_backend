import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Update from './components/Update'
import Delete from './components/Delete'
const App = () => {
  return (
    <div>
      <h1 style={{textAlign : "center" }} > User Registration System</h1>
      <Register />
      <Update />
      <Delete />
      <View />
    </div>
  )
}

export default App
import { useState } from 'react'
import Flow from './Flow'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Flow />
    </div>
  )
}

export default App

import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const getData = async () => {
      await fetch('https://localhost:7240/User/5')
        .then(res => {
          console.log(res.json())
        })
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.log(error)
        })
    }

    getData()
  }, [])

  return (
    <>
      <h1>Dungeon Companion</h1>
    </>
  )
}

export default App

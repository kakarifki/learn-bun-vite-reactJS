import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [hitung, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='bg-blue-300'>Vite + React + Tailwind + typscript</h1>
      <div className="card">
        <button onClick={() => setCount((hitung) => hitung + 1)}>
          klik untuk menghitung {hitung}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
                  <p>
                ss Jangan coba coba ya
            </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

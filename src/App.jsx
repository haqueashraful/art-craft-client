import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  { Context } from './context/MyContextProvider'
import MyArtCraftList from './Pages/MyArtCraftList'
import UpdateCraftItem from './Pages/UpdateCraftItem'
import Subcategory from './Pages/SubCatagory'
import AllArtCraftItemsPage from './Pages/AllArtCraftItemsPage'

function App() {
  const [count, setCount] = useState(0)
  const { name, setName, user } = useContext(Context)
  console.log(user)
  console.log(count, name)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setName('Rana1')
          setCount((count) => count + 1)}}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MyArtCraftList />

      <UpdateCraftItem />

      <Subcategory />

      <AllArtCraftItemsPage />
    </>
  )
}

export default App

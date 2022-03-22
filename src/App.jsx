import { Route, Routes } from 'react-router-dom'
import { Nav } from './components'
import { Home } from './pages'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { Nav } from './components'
import { Home } from './pages'

function App() {
  return (
    <>
      <Nav />
      <Box mt={44}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </>
  )
}

export default App

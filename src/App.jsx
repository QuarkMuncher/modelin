import { Route, Routes } from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'
import { Nav } from './components'
import { Home } from './pages'

function App() {
  return (
    <Container maxW="container.2xl" p={0} bg="white">
      <Nav />
      <Box mt={44}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Container>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'
import { Nav, Footer } from './components'
import { Home, Portfolio } from './pages'

function App() {
  return (
    <Container maxW="container.2xl" p={0} bg="white">
      <Nav />
      <Box mt={44}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </Box>
      <Footer />
    </Container>
  )
}

export default App

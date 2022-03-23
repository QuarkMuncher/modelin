import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  colors: {
    black: {
      400: '#4d4d4d',
      900: '#000000'
    }
  },
  fonts: {
    heading: "'Lexend Deca', sans-serif",
    body: "'Mukta', sans-serif"
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'normal'
      }
    }
  },
  sizes: {
    container: {
      '2xl': '1920px'
    }
  },
  styles: {
    global: {
      body: {
        color: 'black.900'
      }
    }
  }
})

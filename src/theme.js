import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  transition: {
    all: 'all 150ms ease-in'
  },
  colors: {
    black: {
      400: '#4d4d4d',
      900: '#000000'
    },
    offWhite: '#f3f3f3'
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
  space: {
    special: {
      lg: '242px'
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
        color: 'black.900',
        bg: 'offWhite'
      }
    }
  }
})

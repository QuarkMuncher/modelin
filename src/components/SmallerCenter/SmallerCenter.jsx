import { Box } from '@chakra-ui/react'

export default function SmallerCenter(props) {
  return (
    <Box w="full" px="special.lg" {...props}>
      {props.children}
    </Box>
  )
}

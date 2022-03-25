import { Box } from '@chakra-ui/react'

export default function SmallerCenter({ children, ...rest }) {
  return (
    <Box w="full" px="special.lg" {...rest}>
      {children}
    </Box>
  )
}

import { Box } from '@chakra-ui/react'

export default function MediumCenter({ children, ...rest }) {
  return (
    <Box w="full" px="special.md" {...rest}>
      {children}
    </Box>
  )
}

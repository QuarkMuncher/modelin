import { Link as BaseLink } from '@chakra-ui/react'

export default function Link({ color, children, ...rest }) {
  return (
    <BaseLink
      transition="all 150ms ease-in"
      _hover={{
        color: `${color ? color : 'black.400'}`,
        textDecoration: 'underline'
      }}
      {...rest}
    >
      {children}
    </BaseLink>
  )
}

import { Link as BaseLink } from '@chakra-ui/react'

export default function Link(props) {
  return (
    <BaseLink
      transition="all 150ms ease-in"
      _hover={{
        color: 'black.400',
        textDecoration: 'underline'
      }}
      {...props}
    >
      {props.children}
    </BaseLink>
  )
}

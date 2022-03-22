import { Link } from '@chakra-ui/react'

export default function BaseLink(props) {
  return (
    <Link
      transition="all 150ms ease-in"
      _hover={{
        color: 'black.400',
        textDecoration: 'underline'
      }}
      {...props}
    >
      {props.children}
    </Link>
  )
}

import { Link, Text, Center } from '@chakra-ui/react'
import RelativeCenter from './RelativeCenter'

export default function SlidingButton(props) {
  return (
    <Link
      position="relative"
      border="1px"
      _hover={{ textDecoration: 'none' }}
      role="group"
      overflow="hidden"
      {...props}
    >
      <Center py={2} px={10}>
        <Text>{props.children}</Text>
      </Center>
      <RelativeCenter bg="white" color="black.900" w="full" h="full">
        <Text>{props.children}</Text>
      </RelativeCenter>
      <RelativeCenter
        _groupHover={{ left: 0 }}
        transition="all 150ms ease-in"
        zIndex="docked"
        bg="black.900"
        color="white"
        w="full"
        h="full"
        left="-100%"
      >
        <Text>{props.children}</Text>
      </RelativeCenter>
    </Link>
  )
}

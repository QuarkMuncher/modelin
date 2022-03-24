import { Link, Text, Center, useTheme } from '@chakra-ui/react'
import RelativeCenter from './RelativeCenter'

export default function SlidingButton(props) {
  const theme = useTheme()

  return (
    <Link
      display="block"
      position="relative"
      border="1px"
      _hover={{ textDecoration: 'none' }}
      role="group"
      overflow="hidden"
      w="max"
      {...props}
    >
      <Center py={2} px={10}>
        <Text>{props.children}</Text>
      </Center>
      <RelativeCenter color="black.900" w="full" h="full">
        <Text>{props.children}</Text>
      </RelativeCenter>
      <RelativeCenter
        _groupHover={{ left: 0 }}
        transition={theme.transition.all}
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

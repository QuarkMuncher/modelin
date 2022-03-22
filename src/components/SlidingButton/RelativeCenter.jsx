import { Center } from '@chakra-ui/react'

export default function RelativeCenter(props) {
  return (
    <Center position="absolute" top={0} left={0} {...props}>
      {props.children}
    </Center>
  )
}

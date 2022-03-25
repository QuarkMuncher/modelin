import { useEffect, useState } from 'react'
import { VStack, Heading, Text } from '@chakra-ui/react'
import { SmallerCenter } from '../components'

export default function Portfolio() {
  const [headerText, setHeaderText] = useState()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}texts/5`)
      .then(res => res.json())
      .then(res => {
        if (res && res[0].description) setHeaderText(res[0])
      })
  }, [])

  return (
    <VStack spacing={0}>
      <SmallerCenter py={14}>
        <VStack spacing={8} align="flex-start">
          <Heading as="h1" fontSize="5xl">
            Portfolio
          </Heading>
          <Text fontSize="sm" maxW="sm">
            {headerText && headerText.description}
          </Text>
        </VStack>
      </SmallerCenter>
    </VStack>
  )
}

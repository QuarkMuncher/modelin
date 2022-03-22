import { Grid, GridItem, VStack, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import SlidingButton from '../SlidingButton'

export default function CallToAction({ title, subtitle, buttonText }) {
  return (
    <Grid
      templateColumns="14rem 1fr 14rem"
      templateRows="1fr"
      h="full"
      w="full"
    >
      <GridItem colStart={2} colSpan={1}>
        <VStack
          align="flex-start"
          justify="space-between"
          bg="white"
          pl={16}
          py={12}
          pr={8}
          h="full"
        >
          <Heading as="h1" fontSize="5xl">
            {title}
          </Heading>
          <Text as="h2" letterSpacing="tight" fontSize="sm">
            {subtitle}
          </Text>
          <SlidingButton as={Link} to="/portfolio">
            {buttonText}
          </SlidingButton>
        </VStack>
      </GridItem>
    </Grid>
  )
}

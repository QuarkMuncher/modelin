import { Link } from 'react-router-dom'
import { Grid, GridItem, Text, Heading } from '@chakra-ui/react'
import SlidingButton from '../SlidingButton'
import SmallerCenter from '../SmallerCenter/SmallerCenter'

export default function ShortAbout({
  header,
  name,
  title,
  description,
  buttonText
}) {
  return (
    <SmallerCenter bg="offWhite">
      <Grid
        templateColumns="max-content 34rem 1fr"
        templateRows="repeat(2, max-content)"
        rowGap={24}
        columnGap={12}
        py={28}
        w="full"
      >
        <GridItem colStart={1} colEnd={-1} rowStart={1} rowEnd={2}>
          <Heading fontSize="md" maxW="xs" lineHeight="1.7">
            {header}
          </Heading>
        </GridItem>
        <GridItem
          colStart={1}
          colEnd={2}
          rowStart={2}
          rowEnd={3}
          lineHeight="1.7"
        >
          <Text fontSize="md">{name}</Text>
          <Text fontSize="md">{title}</Text>
        </GridItem>
        <GridItem
          colStart={2}
          colEnd={3}
          rowStart={2}
          rowEnd={3}
          lineHeight="1.7"
        >
          <Text fontSize="md">{description}</Text>
        </GridItem>
        <GridItem
          colStart={3}
          colEnd={4}
          rowStart={2}
          rowEnd={3}
          alignSelf="flex-end"
        >
          <SlidingButton as={Link} to="/about">
            {buttonText}
          </SlidingButton>
        </GridItem>
      </Grid>
    </SmallerCenter>
  )
}

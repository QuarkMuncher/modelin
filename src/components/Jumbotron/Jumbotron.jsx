import { Grid, GridItem, Image } from '@chakra-ui/react'

export default function Jumbotron({ backgroundSource }) {
  return (
    <Grid templateColumns="repeat(6, 1fr)" templateRows="repeat(3, 1fr)">
      <GridItem colStart={2} colEnd={-1} rowSpan={3}>
        <Image src={backgroundSource} objectFit="cover" />
      </GridItem>
    </Grid>
  )
}

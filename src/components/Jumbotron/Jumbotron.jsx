import { Grid, GridItem, Image } from '@chakra-ui/react'
import CallToAction from './CallToAction'

export default function Jumbotron({
  backgroundSource,
  title,
  subtitle,
  buttonText
}) {
  return (
    <Grid templateColumns="repeat(6, 1fr)" templateRows="16rem 1fr 16rem">
      <GridItem colStart={2} colEnd={-1} rowStart={1} rowSpan={3}>
        <Image src={backgroundSource} objectFit="cover" />
      </GridItem>
      <GridItem colStart={1} colSpan={3} rowStart={2} rowSpan={1}>
        <CallToAction
          title={title}
          subtitle={subtitle}
          buttonText={buttonText}
        />
      </GridItem>
    </Grid>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  VStack,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Square,
  Image,
  Icon,
  Heading,
  Text,
  useTheme
} from '@chakra-ui/react'
import { BiLike } from 'react-icons/bi'

export default function LikeableSquare({ description, img, id }) {
  const [likes, setLikes] = useState(20)
  const theme = useTheme()

  return (
    <VStack>
      <Grid
        as={Link}
        to={`/portfolio/${id}`}
        templateColumns="1fr"
        templateRows="1fr"
        role="group"
        border="1px"
        overflow="hidden"
        boxSize="xs"
      >
        <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={2}>
          <Image
            src={img}
            transition={theme.transition.all}
            boxSize="xs"
            objectFit="cover"
            _groupHover={{
              transform: 'scale(1.2)'
            }}
          />
        </GridItem>
        <GridItem
          colStart={1}
          colEnd={2}
          rowStart={1}
          rowEnd={2}
          zIndex="docked"
          p={4}
          transition={theme.transition.all}
          background="rgba(255, 255, 255, 0.6)"
          opacity={0}
          _groupHover={{
            opacity: 1
          }}
        >
          <Square boxSize="full" border="1px" p={4} textAlign="center">
            <Heading as="h2" fontSize="xl">
              {description}
            </Heading>
          </Square>
        </GridItem>
      </Grid>
      <Flex w="full">
        <Text>Likes - </Text>
        <Text color="blue.500">{likes}</Text> <Spacer />{' '}
        <Icon
          as={BiLike}
          boxSize="1.4rem"
          cursor="pointer"
          onClick={() => setLikes(state => state + 1)}
        />
      </Flex>
    </VStack>
  )
}

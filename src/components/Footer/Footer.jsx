import { useState, useEffect } from 'react'
import {
  Box,
  VStack,
  SimpleGrid,
  Grid,
  GridItem,
  Heading,
  Text,
  List,
  ListItem
} from '@chakra-ui/react'
import SmallerCenter from '../SmallerCenter'
import RouterLink from '../RouterLink'
import Link from '../Link'

export default function Footer() {
  const [footerMail, setFooterMail] = useState()
  const [footerInfo, setFooterInfo] = useState()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}texts/3`)
      .then(res => res.json())
      .then(res => {
        if (res && res[0].description) setFooterMail(...res)
      })

    fetch(`${import.meta.env.VITE_API_URL}texts/4`)
      .then(res => res.json())
      .then(res => {
        if (res && res[0].description) setFooterInfo(...res)
      })
  }, [])

  return (
    <VStack as="footer" spacing={0} fontSize="sm">
      <SmallerCenter bg="white" py={14}>
        <SimpleGrid columns={3}>
          <Box>
            <Heading as="h1" fontSize="5xl">
              Need more details?
            </Heading>
          </Box>
        </SimpleGrid>
      </SmallerCenter>
      <SmallerCenter bg="offWhite" py={14}>
        <Grid templateColumns="33% 1fr">
          <GridItem alignSelf="flex-end">
            <Heading as="h2" fontSize="3xl">
              {footerMail && footerMail.description}
            </Heading>
          </GridItem>
          <GridItem>
            <Text maxW="3xl" lineHeight="1.7">
              {footerInfo && footerInfo.description}
            </Text>
          </GridItem>
        </Grid>
      </SmallerCenter>
      <SmallerCenter bg="black.900" color="white" py={14}>
        <SimpleGrid columns={3}>
          <Box lineHeight="1.7">
            <Text>©2020, Alexander Westham</Text>
            <Text>Interior Designer</Text>
          </Box>
          <List lineHeight="1.7">
            <ListItem>
              <RouterLink to="/" color="offWhite">
                Home
              </RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/portfolio" color="offWhite">
                Portfolio
              </RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/prices" color="offWhite">
                Services &amp; Prices
              </RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/about" color="offWhite">
                About Me
              </RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/contact" color="offWhite">
                Contact
              </RouterLink>
            </ListItem>
          </List>
          <List lineHeight="1.7">
            <ListItem>
              <Link to="#" color="offWhite">
                Instagram
              </Link>
            </ListItem>
            <ListItem>
              <Link to="#" color="offWhite">
                Houzz
              </Link>
            </ListItem>
          </List>
        </SimpleGrid>
      </SmallerCenter>
    </VStack>
  )
}

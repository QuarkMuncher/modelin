import { useState, useEffect } from 'react'
import { VStack } from '@chakra-ui/react'
import { Jumbotron, ShortAbout } from '../components'
import jumboBackground from '../assets/images/LandingPageIMG.jpg'

export default function Home() {
  const [jumbotronData, setJumbotronData] = useState()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}texts/1`)
      .then(res => res.json())
      .then(res => {
        if (res && res[0].description) setJumbotronData(...res)
      })
  }, [])

  return (
    <VStack spacing={0}>
      {jumbotronData && (
        <Jumbotron
          backgroundSource={jumboBackground}
          title={jumbotronData.description}
          subtitle="Individual approach to the design of private apartments and public areas"
          buttonText="Portfolio"
        />
      )}
      <ShortAbout
        header="Offering you a full range of interior and furniture design services"
        name="Alexander Westham"
        title="Interior Designer"
        description="Experience of over 10 years of successful projects on creating unique and modern interior designs all over the world."
        buttonText="About Me"
      />
    </VStack>
  )
}

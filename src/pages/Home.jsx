import { useState, useEffect } from 'react'
import { VStack } from '@chakra-ui/react'
import { Jumbotron, ShortAbout, RecentProjects } from '../components'
import jumboBackground from '../assets/images/LandingPageIMG.jpg'
import Recent1 from '../assets/images/PortfolioIMG_01.jpg'
import Recent2 from '../assets/images/PortfolioIMG_02.jpg'
import Recent3 from '../assets/images/PortfolioIMG_03.jpg'
import Recent4 from '../assets/images/PortfolioIMG_04.jpg'

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
      <RecentProjects
        header="Recent projects"
        buttonText="Portfolio"
        projects={[
          {
            description: 'Hotel lounge with Veranda',
            img: Recent1,
            id: '6'
          },
          {
            description: 'Bedroom in a Classic Style',
            img: Recent2,
            id: '7'
          },
          {
            description: 'Web Design Studio Lounge',
            img: Recent3,
            id: '8'
          },
          {
            description: 'Living Room Design in Bright Colors',
            img: Recent4,
            id: '9'
          }
        ]}
      />
    </VStack>
  )
}

import { useState, useEffect } from 'react'
import { Jumbotron } from '../components'
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
    <>
      {jumbotronData && (
        <Jumbotron
          backgroundSource={jumboBackground}
          title={jumbotronData.description}
          subtitle="Individual approach to the design of private apartments and public areas"
          buttonText="Portfolio"
        />
      )}
    </>
  )
}

import { HStack, Image } from '@chakra-ui/react'
import { SiHouzz, SiInstagram } from 'react-icons/si'
import { Link } from 'react-router-dom'
import IconLink from './IconLink'
import NavLink from './NavLink'
import Logo from '../../assets/logo/logo-modelin.svg'

export default function Nav() {
  return (
    <HStack
      py={16}
      px={6}
      position="sticky"
      align="end"
      justify="space-between"
    >
      <Image src={Logo} alt="Modelin Logo" h="48px" />
      <HStack align="end" spacing={4}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/prices">Services &amp; Prices</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <IconLink as={Link} icon={SiInstagram} to="#" />
        <IconLink as={Link} icon={SiHouzz} to="#" />
      </HStack>
    </HStack>
  )
}

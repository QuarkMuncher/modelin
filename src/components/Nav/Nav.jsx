import { HStack, Flex, Spacer, Image } from '@chakra-ui/react'
import { SiHouzz, SiInstagram } from 'react-icons/si'
import { Link } from 'react-router-dom'
import IconLink from './IconLink'
import NavLink from './NavLink'
import Logo from '../../assets/logo/logo-modelin.svg'

export default function Nav() {
  return (
    <HStack
      as="nav"
      w="full"
      justify="center"
      position="fixed"
      top={0}
      left={0}
      right={0}
    >
      <Flex
        py={16}
        px={6}
        bg="white"
        align="flex-end"
        w="full"
        maxW="container.2xl"
      >
        <Image src={Logo} alt="Modelin Logo" h="48px" />
        <Spacer />
        <HStack align="flex-end" spacing={4}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/prices">Services &amp; Prices</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <IconLink as={Link} icon={SiInstagram} to="#" />
          <IconLink as={Link} icon={SiHouzz} to="#" />
        </HStack>
      </Flex>
    </HStack>
  )
}

import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/7416939.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={3}>
        <Image src={logo} boxSize='60px'/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
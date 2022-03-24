import { Icon } from '@chakra-ui/react'
import Link from '../Link'

export default function IconLink({ as, to, icon, isExternal }) {
  return as ? (
    <Link as={as} to={to} lineHeight={0} isExternal={isExternal}>
      <Icon as={icon} boxSize="1.4em" />
    </Link>
  ) : (
    <Link href={to} lineHeight={0} isExternal={isExternal}>
      <Icon as={icon} boxSize="1.4em" />
    </Link>
  )
}

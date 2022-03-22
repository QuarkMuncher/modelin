import { Icon } from '@chakra-ui/react'
import BaseLink from './BaseLink'

export default function IconLink({ as, to, icon, isExternal }) {
  return as ? (
    <BaseLink as={as} to={to} lineHeight={0} isExternal={isExternal}>
      <Icon as={icon} boxSize="1.4em" />
    </BaseLink>
  ) : (
    <BaseLink href={to} lineHeight={0} isExternal={isExternal}>
      <Icon as={icon} boxSize="1.4em" />
    </BaseLink>
  )
}

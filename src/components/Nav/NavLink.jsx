import { Link as RouterLink } from 'react-router-dom'
import BaseLink from './BaseLink'

export default function NavLink({ to, children }) {
  return (
    <BaseLink fontSize="xl" lineHeight={1} as={RouterLink} to={to}>
      {children}
    </BaseLink>
  )
}

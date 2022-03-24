import { Link as RouterLink } from 'react-router-dom'
import Link from '../Link'

export default function NavLink({ to, children }) {
  return (
    <Link fontSize="xl" lineHeight={1} as={RouterLink} to={to}>
      {children}
    </Link>
  )
}

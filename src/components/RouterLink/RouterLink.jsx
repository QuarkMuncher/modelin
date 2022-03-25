import { Link as ReactLink } from 'react-router-dom'
import Link from '../Link'

export default function RouterLink({ to, children, ...rest }) {
  return (
    <Link as={ReactLink} to={to} {...rest}>
      {children}
    </Link>
  )
}

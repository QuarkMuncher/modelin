import { Link } from 'react-router-dom'
import { VStack, HStack, Heading } from '@chakra-ui/react'
import SmallerCenter from '../SmallerCenter'
import LikeableSquare from '../LikeableSquare'
import SlidingButton from '../SlidingButton'

export default function RecentProjects({ header, projects, buttonText }) {
  return (
    <SmallerCenter>
      <VStack align="flex-start" spacing={14} py={28}>
        <Heading as="h1" fontSize="5xl" transform="translateX(-2px)">
          {header}
        </Heading>
        <HStack justify="space-between" w="full">
          {projects &&
            projects.map(project => (
              <LikeableSquare key={`like-project-${project.id}`} {...project} />
            ))}
        </HStack>
        <SlidingButton as={Link} to="/portfolio">
          {buttonText}
        </SlidingButton>
      </VStack>
    </SmallerCenter>
  )
}

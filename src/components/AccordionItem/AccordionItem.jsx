import {
  AccordionItem as AItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Icon,
  Text,
  Spacer,
  useTheme
} from '@chakra-ui/react'
import { GoPlus } from 'react-icons/go'

export default function AccordionItem({ title, description }) {
  const theme = useTheme()

  return (
    <AItem>
      {({ isExpanded }) => (
        <>
          <AccordionButton pl={0} py={4}>
            <Heading as="h2" fontSize="3xl">
              {title}
            </Heading>
            <Spacer />
            <Icon
              as={GoPlus}
              boxSize="1.8rem"
              transition={theme.transition.all}
              transform={`rotate(${isExpanded ? '-45deg' : '0'})`}
            />
          </AccordionButton>
          <AccordionPanel pt={6} pb={12} pl={20} pr={16}>
            <Text fontSize="lg">{description}</Text>
          </AccordionPanel>
        </>
      )}
    </AItem>
  )
}

import { VStack, Heading, Accordion } from '@chakra-ui/react'
import SmallerCenter from '../SmallerCenter'
import AccordionItem from '../AccordionItem'

export default function Services({ header, services }) {
  return (
    <SmallerCenter>
      <VStack align="flex-start" spacing={10} py={14}>
        <Heading as="h1" fontSize="5xl">
          {header}
        </Heading>
        <Accordion w="full" maxW="6xl" allowToggle>
          {services.map((service, index) => (
            <AccordionItem
              key={`service-${index}-key`}
              title={service.title}
              description={service.description}
            />
          ))}
        </Accordion>
      </VStack>
    </SmallerCenter>
  )
}

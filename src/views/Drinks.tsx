import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const DrinksView: React.FC = () => {
  return (
    <>
      <Container maxW="6xl" mx="auto" px={{ base: '6', md: '8' }} pt={32}>
        <Heading>Coffee</Heading>
        <Text>Cappuccino</Text>
      </Container>
    </>
  )
}

export default DrinksView

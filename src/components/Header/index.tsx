// @ts-nocheck
import { Box, Link, HStack, Container } from '@chakra-ui/react'
import { Logo } from '@components/Logo'
import NextLink from 'next/link'
import * as React from 'react'

export const HeaderComponent: React.FC = () => {
  return (
    <>
      <Box
        as="header"
        background="transparent"
        position="relative"
        zIndex={300}
        mb={-8}
        color="black"
        py={4}
        h={4}
        fontSize="2xl"
      >
        <Container maxW="6xl" mx="auto" px={{ base: '6', md: '8' }}>
          <HStack
            direction="row"
            justify="space-between"
            align="center"
            fontSize={{ base: 'md', md: 'xl', lg: '2xl', xl: '3xl' }}
          >
            <NextLink href="/" passHref>
              <Link color="black" transitionDuration={0} _hover={{ color: 'pink', textDecoration: 'underline' }}>
                Home
              </Link>
            </NextLink>
            <NextLink href="/archive" passHref>
              <Link transitionDuration={0} _hover={{ color: 'pink', textDecoration: 'underline' }}>
                Archive
              </Link>
            </NextLink>
            <Logo />
            <NextLink href="/drinks" passHref>
              <Link transitionDuration={0} _hover={{ color: 'pink', textDecoration: 'underline' }}>
                Drinks
              </Link>
            </NextLink>
            <Link transitionDuration={0} _hover={{ color: 'pink', textDecoration: 'underline' }}>
              Find Us
            </Link>
          </HStack>
        </Container>
      </Box>
    </>
  )
}

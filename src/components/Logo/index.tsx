// @ts-nocheck
import { Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import * as React from 'react'

export const Logo = () => {
  return (
    <Heading
      as={Link}
      fontSize={{ base: 'xl', md: '4xl', lg: '5xl', xl: '6xl' }}
      m={0}
      fontWeight={500}
      letterSpacing="-0.05em"
      hover={{
        color: 'pink',
      }}
    >
      <NextLink href="/" passHref>
        <Link transitionDuration={0} _hover={{ color: 'pink', textDecoration: 'underline' }}>
          SCHEMA RADIO
        </Link>
      </NextLink>
    </Heading>
  )
}

import {
  Link,
  FooterHeadline,
  Divider,
  SimpleGrid,
  Box,
  HStack,
  Stack,
  Flex,
  Wrap,
  WrapItem,
  useColorModeValue,
  IconButton,
  Icon,
} from '@healform/liquid'
import NextLink from 'next/link'
import React from 'react'
import { Applepay, Girocard, Klarna, Mastercard, Paypal, Visa } from 'react-pay-icons'

import HEALFORM_CONTACT_DATA from '../../data/HEALFORM_CONTACT_DATA'
import { footerLinks, links, socialLinks } from './_data'

export const FooterComponent: React.FC = () => {
  return (
    <>
      <Box
        as="footer"
        backgroundColor={useColorModeValue('white', 'gray.900')}
        py="20"
        borderTopWidth={'1px'}
        borderTopStyle={'solid'}
        borderTopColor={useColorModeValue('gray.200', 'gray.800')}
      >
        <Box maxW={{ base: 'xl', md: '8xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid
            mb={10}
            w="full"
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={{ base: '8', md: '5' }}
            fontSize="sm"
          >
            <Box>
              <FooterHeadline as={'h5'}>{HEALFORM_CONTACT_DATA.shortName}</FooterHeadline>
              <Box fontSize="sm">
                {HEALFORM_CONTACT_DATA.companyName}
                <br />
                Ganzkörperkälteanwendung
                <br />
                <br />
                Tel.: {HEALFORM_CONTACT_DATA.phone}
                <br />
                Fax: {HEALFORM_CONTACT_DATA.fax}
              </Box>
            </Box>
            {links.map((group, idx) => (
              <Box key={idx}>
                <FooterHeadline as={'h5'}>{group.title}</FooterHeadline>
                <Stack as="ul" listStyleType="none">
                  {group.links.map((link, idx) => (
                    <Box as="li" key={idx}>
                      <NextLink href={link.href} passHref>
                        <Box
                          as="a"
                          href={link.href}
                          target={link.newTab ? '_blank' : '_self'}
                          _hover={{ textDecor: 'underline' }}
                        >
                          {link.label}
                          {link.badge && (
                            <Box as="span" marginStart="2">
                              {link.badge}
                            </Box>
                          )}
                        </Box>
                      </NextLink>
                    </Box>
                  ))}
                </Stack>
              </Box>
            ))}
            <Box>
              <FooterHeadline as={'h5'}>Social Media</FooterHeadline>
              <HStack spacing="2" as="ul">
                {socialLinks.map((link, idx) => (
                  <Box key={idx} as="a" href={link.href} target={'_blank'}>
                    <IconButton icon={link.icon} aria-label={link.label} />
                  </Box>
                ))}
              </HStack>
            </Box>
            <Box>
              <FooterHeadline isTruncated as={'h5'}>
                Zahlungsmethoden
              </FooterHeadline>
              <Flex as="ul" flexWrap="wrap">
                <Visa style={{ marginRight: 10, marginBottom: 5, width: 40 }} />
                <Mastercard style={{ marginRight: 10, marginBottom: 5, width: 40 }} />
                <Klarna style={{ marginRight: 10, marginBottom: 5, width: 40 }} />
                <Applepay style={{ marginRight: 10, marginBottom: 5, width: 40 }} />
                <Girocard style={{ marginRight: 10, marginBottom: 5, width: 40 }} />
                <Paypal style={{ marginRight: 10, marginBottom: 5, width: 40 }} />
              </Flex>
            </Box>
          </SimpleGrid>
          <Divider my="10" borderColor={useColorModeValue('gray.200', 'gray.800')} />
          <Flex
            direction={{ base: 'column-reverse', lg: 'row' }}
            align={{ base: 'flex-start', lg: 'center' }}
            justify="space-between"
            fontSize="sm"
            color="gray.500"
          >
            <Wrap id="bottom" spacing={{ base: '4', lg: '8' }} mt={{ base: '4', lg: '0' }}>
              <WrapItem fontWeight={600}>
                <Box>
                  &copy; {new Date().getFullYear()} {HEALFORM_CONTACT_DATA.companyName}. Alle Rechte vorbehalten.
                </Box>
              </WrapItem>
              {footerLinks.map((link, idx) => (
                <WrapItem key={idx}>
                  <NextLink href={link.href} passHref>
                    <Link>{link.label}</Link>
                  </NextLink>
                </WrapItem>
              ))}
              <Link data-cc="c-settings">Cookie Einstellungen</Link>
              <Link>
                <Icon viewBox="0 0 250 250" color="seagrass.500">
                  <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
                </Icon>{' '}
                Status
              </Link>
            </Wrap>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

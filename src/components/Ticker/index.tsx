import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Marquee from 'react-fast-marquee'

const pills = [
  {
    time: '12:00 - 14:00',
    name: 'DJ Caustic',
  },
  {
    time: '14:00 - 16:00',
    name: 'Semantic Release',
  },
  {
    time: '16:00 - 17:00',
    name: 'LSDXOXO',
  },
  {
    time: '17:00 - 18:00',
    name: 'Gloria Tells',
  },
]

export const TickerComponent: React.FC = () => {
  return (
    <>
      <Box as="section" py={{ base: 4, md: 7 }} w="full">
        <Box>
          <Marquee speed={30} gradient={false}>
            {pills.map((pill, idx) => (
              <Box mx="3" key={idx}>
                <Box
                  color="black"
                  py={2}
                  px={12}
                  bg={'transparent'}
                  borderRadius="full"
                  borderWidth={4}
                  borderColor="lime"
                >
                  <Text fontSize="4xl" letterSpacing="-0.033em">
                    <Box as="span" fontFamily="Serifbabe" fontWeight={700} fontStyle="italic">
                      {pill.time} »
                    </Box>{' '}
                    {pill.name}
                  </Text>
                </Box>
              </Box>
            ))}
          </Marquee>
        </Box>
      </Box>
    </>
  )
}

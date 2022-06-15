import { Box, Container, SimpleGrid, Image, Heading, AspectRatio, Text, Wrap, WrapItem, Stack } from '@chakra-ui/react'
import axios from 'axios'
import type { GetServerSideProps } from 'next'
import React from 'react'

export function ArchiveView({ recordings }) {
  return (
    <>
      <Container maxW="6xl" mx="auto" px={{ base: '6', md: '8' }} pt={32}>
        <SimpleGrid columns={[1, 2, 4]} spacing={14}>
          {recordings.map((recording, idx) => (
            <>
              <Stack spacing={2} key={idx}>
                <AspectRatio ratio={1}>
                  <Image src={recording.image} w="full" />
                </AspectRatio>
                <Stack spacing={2}>
                  <Wrap>
                    {recording.genres?.map((genre, idx) => (
                      <>
                        <WrapItem key={idx} bg="lime" color="black" px={2} fontSize="10" borderRadius="xl">
                          <Text>{genre.title}</Text>
                        </WrapItem>
                      </>
                    ))}
                  </Wrap>
                  <Heading size="md">{recording.title}</Heading>
                </Stack>
              </Stack>
            </>
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}

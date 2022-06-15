import { Box } from '@chakra-ui/react'
import React from 'react'

export const VideoComponent: React.FC = () => {
  return (
    <>
      <Box
        as="video"
        autoPlay
        loop
        muted
        src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'}
        objectFit="cover"
        w="full"
        h="full"
        top={0}
        left={0}
        zIndex={100}
      />
      <Box
        w="100vw"
        h="100vh"
        position="absolute"
        bgImg={'https://radio-rasclat.com/noise.133083d59b17abf8d7db.gif'}
        bgRepeat="repeat"
        bgSize="200px 200px"
        top={0}
        left={0}
        zIndex={100}
        opacity=".2"
      />
    </>
  )
}

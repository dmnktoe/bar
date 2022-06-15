import { TickerComponent, VideoComponent } from '@components'
import { Box } from '@healform/liquid'
import React from 'react'

export const HomeView: React.FC = () => {
  return (
    <>
      <Box h="calc(100vh)" w="100%">
        <VideoComponent />
        <Box position="absolute" bottom={0} zIndex={300} h="auto" w="full">
          <TickerComponent />
        </Box>
      </Box>
    </>
  )
}

export default HomeView

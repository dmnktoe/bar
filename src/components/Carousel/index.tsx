import { Box, Card } from '@healform/liquid'
import React from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Slide {
  image: string
  title: string
  description: string
}

export const CarouselComponent = (props: { slides: Slide[] }) => {
  const { slides } = props
  return (
    <Box overflowX="hidden">
      <Box maxW={{ base: 'xl', md: '8xl' }} mx="auto" px={{ base: '6', md: '8' }} overflow="visible">
        <Box className="swiper-container">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {slides.map((slide: Slide, index) => (
              <SwiperSlide key={index}>
                <Card key={index} image={slide.image} title={slide.title} description={slide.description} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  )
}

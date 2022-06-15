import { chakra } from '@chakra-ui/react'

export const SocialButton = chakra('a', {
  baseStyle: {
    rounded: 'lg',
    w: '8',
    h: '8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bg: 'blackAlpha.50',
    color: 'black',
    transition: 'all 0.2s',
    _hover: {
      bg: 'blackAlpha.200',
    },
  },
})

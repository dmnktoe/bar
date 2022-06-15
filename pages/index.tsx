import { HomeView } from '@views'
import React from 'react'

import AppHead from '../src/utils/AppHead'

const Home: React.FC = () => {
  return (
    <>
      <AppHead title="HEALFORM® Cryocenter - Die coole Therapie" />
      <HomeView />
    </>
  )
}

export default Home

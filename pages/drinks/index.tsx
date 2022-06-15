import { DrinksView } from '@views/Drinks'
import React from 'react'

import AppHead from '../../src/utils/AppHead'

const Drinks: React.FC = () => {
  return (
    <>
      <AppHead title="Drinks" />
      <DrinksView />
    </>
  )
}

export default Drinks

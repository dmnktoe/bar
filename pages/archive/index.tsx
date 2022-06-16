// @ts-nocheck
import { ArchiveView } from '@views'
import React from 'react'

import AppHead from '../../src/utils/AppHead'

function Archive({ recordings }) {
  return (
    <>
      <AppHead title="Archive" />
      <ArchiveView recordings={recordings} />
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.radio-rasclat.com/recordings`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { recordings: data } }
}

export default Archive

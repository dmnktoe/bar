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
export async function getServerSideProps({ req, res }) {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
  // Fetch data from external API
  const result = await fetch(`https://api.radio-rasclat.com/recordings`)
  const data = await result.json()

  // Pass data to the page via props
  return { props: { recordings: data } }
}

export default Archive

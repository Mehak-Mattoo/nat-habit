'use client'
import React from 'react'

const error = ({ error }: { error: Error }) => {
  console.log(error);
  return (
    <div>
        <h1>Error</h1>
        <p>{error.message}</p>
    </div>
  )
}

export default error
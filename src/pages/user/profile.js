import React from 'react'
import { useParams } from 'react-router-dom'

export default function Game() {
  const { username } = useParams();
  return (
    <div>
      { username }
    </div>
  )
}

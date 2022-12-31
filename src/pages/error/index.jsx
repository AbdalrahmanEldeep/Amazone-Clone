import React from 'react'
import styled from 'styled-components'

const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  width: 100vw;
`

export default function NotFound() {
  return (
    <Error>
      <h1> Page Not Found | 404 </h1>
    </Error>
  )
}

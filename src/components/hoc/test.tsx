import React, { useState, useEffect, useRef } from 'react'

export default () => {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

  return (
    <div ref={ref}>
      <ul>
      <li>{height}</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      </ul>
    </div>
  )
}
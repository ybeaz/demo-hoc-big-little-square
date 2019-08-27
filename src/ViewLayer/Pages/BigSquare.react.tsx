import React from 'react'

export const BigSquare = (props) => {
  // console.info('BigSquare', { props })
  const { backgroundColor } = props
  return <div className={`BigSquare ${backgroundColor}`}>{props.children}</div>
}

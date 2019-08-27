import React from 'react'

export const LittleSquare = (props) => {
  // console.info('LittleSquare', { props })
  const { backgroundColor } = props
  return <div className={`LittleSquare ${backgroundColor}`}>{props.children}</div>
}


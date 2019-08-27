import React from 'react'

export const BackgroundColor = (WrappedComponent, props) => {
  return class extends React.Component {
    render(){
      const propsToPass = { ...this.props, ...props }
      return <WrappedComponent {...propsToPass} />
    }
  }
}

/* Another variant
export const BackgroundColor1 = (WrappedComponent, props) => {
  class HOC extends React.Component {
    render(){
      const propsToPass = { ...this.props, ...props }
      return <WrappedComponent {...propsToPass} />
    }
  }
  return HOC
}
*/

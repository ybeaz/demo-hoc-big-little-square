import React from 'react'
import ReactDOM from 'react-dom'

import './ViewLayer/CssStyles/index.less'

import { BackgroundColor } from './ViewLayer/HigherOrderComponents/BackgroundColor.react'
import { LittleSquare } from './ViewLayer/Components/LittleSquare.react'
import { BigSquare } from './ViewLayer/Pages/BigSquare.react'

const BigSquareNext = BackgroundColor(BigSquare, { backgroundColor: 'red' })
const LittleSquareNext = BackgroundColor(LittleSquare, { backgroundColor: 'yellow' })

const App = () => (
  <div>
    <BigSquare>
      <LittleSquare>Before<br />wrapping with React HOC</LittleSquare>
    </BigSquare>
    <BigSquareNext>
      <LittleSquareNext>After<br />wrapping with React HOC</LittleSquareNext>
    </BigSquareNext>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

{/*
const App = () => (
  <BackgroundColor>
      {backgroundColor => (
          <BigSquare backgroundColor={backgroundColor}>
              <LittleSquare backgroundColor={'red'} />
          </BigSquare>
      )}
  </BackgroundColor>
)
*/}

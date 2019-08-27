import React from 'react'
import ReactDOM from 'react-dom'


import './ViewLayer/CssStyles/index.less'
// import './Shared/styles.less' 

import { ItemCard } from './ViewLayer/Pages/ItemCard.react'
import { Error404Page } from './ViewLayer/Pages/Error404.react'

const App = () => (
  <BackgroundColor>
      {backgroundColor => (
          <BigSquare backgroundColor={backgroundColor}>
              <LittleSquare backgroundColor={'red'} />
          </BigSquare>
      )}
  </BackgroundColor>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

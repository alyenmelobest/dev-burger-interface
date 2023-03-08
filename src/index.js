import React from 'react'
import ReactDOM from 'react-dom/client'

import Register from './containers/Register'
// import Login from './containers/Login'
import GlobalStyles from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Register />
    <GlobalStyles />
  </>
)

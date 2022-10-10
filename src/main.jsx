import './Styles/reset.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/colors.css'
import './Styles/global.css'
import './Styles/buttons.css'
import './Styles/typography.css'
import'./Styles/selects.css'
import './Styles/font.css'
import './Styles/input.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesPages from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesPages/>
    </BrowserRouter>
  </React.StrictMode>
)

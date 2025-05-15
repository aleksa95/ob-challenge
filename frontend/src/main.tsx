import React from 'react'
import ReactDOM from 'react-dom/client'
import { SWRegister } from '@/components/SWRegister'
import { Root } from '@/pages/Root'

import './styles/initialize.css'

const rootElement =
  document.getElementById('root') ?? document.createElement('div')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Root />
    <SWRegister />
  </React.StrictMode>
)

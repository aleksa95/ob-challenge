import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { generalApi } from '@/apis/general.api'
import { SWRegister } from '@/components/SWRegister'
import { Root } from '@/pages/Root'

import './styles/initialize.css'

const rootElement =
  document.getElementById('root') ?? document.createElement('div')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ApiProvider api={generalApi}>
      <Root />
      <SWRegister />
    </ApiProvider>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import WebApp from '@twa-dev/sdk'
import { StoreProvider } from './stores'

WebApp.ready()
WebApp.expand()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
)

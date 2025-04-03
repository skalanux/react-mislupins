import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'materialize-css/dist/css/materialize.min.css'
import './index.css'

import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
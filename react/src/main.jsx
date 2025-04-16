import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Root} from "./components"
import { ContextProvider } from './contexts/ContextProvider.jsx';

import "./css/index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <Root></Root>
    </ContextProvider>
  </StrictMode>,
)

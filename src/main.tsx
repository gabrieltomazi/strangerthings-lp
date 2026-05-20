import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import GlobalStyle from './style/globalStyle'
import '../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Home />
  </StrictMode>,
)

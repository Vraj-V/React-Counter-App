import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Class from './ClassCounter.jsx'
import Function from './FunctionCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Class />
    <hr />
    
    <Function />
  </StrictMode>,
)

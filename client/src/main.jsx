import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { UserProvider } from './Context/userContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <UserProvider>
    <App />
  </UserProvider>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RecoilRoot } from 'recoil'
import { UserAuthProvider } from './hooks/useAuth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserAuthProvider>
     <RecoilRoot>
      <App />
    </RecoilRoot>
    </UserAuthProvider>
  </StrictMode>,
)

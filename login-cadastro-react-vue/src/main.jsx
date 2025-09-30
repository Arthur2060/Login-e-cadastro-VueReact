import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createApp } from 'vue'
import './index.css'
import App from './components/ReactApp.jsx'
import VueApp from './components/VueApp.vue'

createApp(VueApp).mount("#vue-root")

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

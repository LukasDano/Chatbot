import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReloadButton from "./components/chatwindow.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <ReloadButton/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { HashRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client'

import './input.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />

  </HashRouter>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.js'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'

i18next.init({
  interpolation: {escapeValue: false},
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  },
  lng: 'en', // Establece el idioma predeterminado
  fallbackLng: 'en', // Define el idioma de respaldo
  debug: true, // Activa el modo de depuración
  interpolation: {
    escapeValue: false, // No escapes HTML en las traducciones
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)

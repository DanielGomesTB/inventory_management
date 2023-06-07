import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Provider from './context/Provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)

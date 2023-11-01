import React from 'react'
import ReactDOM from 'react-dom/client'
import { CardProduct } from '../../src/index'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Default counter</h2>
      <CardProduct name='123412' />
    </div>
  </React.StrictMode>,
)
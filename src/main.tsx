import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './styles/global.css'
import { routes } from './routes/routes'
import { TasksContextProvider } from './contexts/Completeds'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TasksContextProvider>
      <RouterProvider router={routes} />
    </TasksContextProvider>
  </React.StrictMode>,
)

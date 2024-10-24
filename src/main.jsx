import { Profiler, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import Dashboard from './Dashboard.jsx'
import History from './History.jsx'
import Profile from './Profile.jsx'
import AddMoney from './AddMoney';
import AddExpense from './AddExpense';
import AuthProvider from './AuthProvider.jsx'
import AllAddMoney from './AllAddMoney.jsx'
import AllExpenses from './AllExpenses.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>
      },
      {
        path: 'add-income',
        element: <AddMoney></AddMoney>
      },
      {
        path: 'add-expense',
        element: <AddExpense></AddExpense>
      },
      {
        path: 'history',
        element: <History></History>
      },

      {
        path: 'add-income/view-all-add-money',
        element: <AllAddMoney></AllAddMoney>
      },
      {
        path: 'add-expense/view-all-expenses',
        element:<AllExpenses></AllExpenses>
      },

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)

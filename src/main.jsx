import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/pages/shared/login/Login.jsx'
import Register from './components/pages/shared/register/Register.jsx'
import Home from './components/pages/home/Home.jsx'
import Blogs from './components/pages/blogs/Blogs.jsx'
import AuthProvider from './components/providers/AuthProvider.jsx'
import PrivateRoute from './components/route/PrivateRoute.jsx'
import ErrorPage from './components/pages/errorpage/ErrorPage.jsx'
import AddToyPage from './components/pages/addtoy/AddToy.jsx'
import MyToys from './components/pages/mytoys/MyToys.jsx'
import UpdateToy from './components/pages/mytoys/UpdateToy.jsx'
import CarDetails from './components/pages/home/CarDetails.jsx'
import AllToys from './components/pages/alltoys/AllToys.jsx'
import SingeToyDetails from './components/pages/alltoys/SingeToyDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/add-toy',
        element: <PrivateRoute><AddToyPage></AddToyPage></PrivateRoute>
      },
      {
        path: '/all-toys',
        element: <AllToys></AllToys>,
        loader: () => fetch('https://toy-bazar-server-red.vercel.app/add')
      },
      {
        path: '/all-toys/:id',
        element: <PrivateRoute><SingeToyDetails></SingeToyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-bazar-server-red.vercel.app/add/${params.id}`)
      },
      {
        path: '/my-toys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
        loader: () => fetch('https://toy-bazar-server-red.vercel.app/add')
      },
      {
        path: '/my-toys/:id',
        element: <UpdateToy></UpdateToy>,
      },
      {
        path:'/car-details/:carId',
        element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-bazar-server-red.vercel.app/car-details/${params.carId}`)
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

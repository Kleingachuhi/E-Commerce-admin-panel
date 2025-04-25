import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import HomePage from './Components/HomePage.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Login from './Components/Login.jsx'
import NavBar from './Components/NavBar.jsx'
import Products from '../Pages/Products.jsx'
import AddProducts from '../Pages/AddProducts.jsx'
import EditProducts from '../Pages/EditProducts.jsx'
import HomeNav from './Components/NavBars/HomeNav.jsx'
import ProductsNav from './Components/NavBars/ProductsNav'
import AddNav from './Components/NavBars/AddNav.jsx'
import EditNav from './Components/NavBars/EditNav.jsx'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'home',
      element: (
        <>
          <HomeNav />
          <HomePage />
        </>
      ),
    },
    {
      path: 'products',
      element: (
        <>
          <ProductsNav />
          <Products />
        </>
      ),
    },
    {
      path: 'add-product',
      element: (
        <>
          <AddNav />
          <AddProducts />
        </>
      ),
    },
    {
      path:'edit-product',
      element: (<>
        <EditNav  />
         <EditProducts />
         </>
      )
    },
    {
      path: 'edit-product/:productId',
      element: (
        <>
          <EditNav />
          <EditProducts />
        </>
      ),
    }
    
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


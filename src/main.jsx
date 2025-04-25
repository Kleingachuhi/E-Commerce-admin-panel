import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import HomeNav from './Components/NavBars/HomeNav.jsx'
import ProductsNav from './Components/NavBars/ProductsNav'
import AddNav from './Components/NavBars/AddNav.jsx'
import EditNav from './Components/NavBars/EditNav.jsx'
import ErrorPage from './Components/Pages/ErrorPage.jsx'
import HomePage from './Components/Pages/HomePage.jsx'
import ProductsPage from './Components/Pages/Products.jsx'
import AddProduct from './Components/Pages/AddProducts.jsx'
import EditProducts from './Components/Pages/EditProducts.jsx'
import Login from './Components/Pages/Login.jsx'
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
          <ProductsPage />
        </>
      ),
    },
    {
      path: 'add-product',
      element: (
        <>
          <AddNav />
          <AddProduct />
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


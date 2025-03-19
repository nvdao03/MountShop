import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout'
import Profile from './pages/Profile'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'
import path from './constants/path'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'

// Nếu người dùng login thành công thì cho người dùng thao tác tiếp còn ko thì ở nguyên trang login
function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

// Khi người dùng login rồi thì ko cần cho người dùng vào trang login nữa, nếu người dùng cố vào trang register sẽ cho nó chuyển đến trang home
// Nếu người dùng login rồi thì cho vào -> còn ko thì cho vào trang list sản phẩm
function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouterElements() {
  const routerElement = useRoutes([
    {
      index: true,
      path: path.home,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: path.productlist,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: path.productDetailPageHome,
      element: (
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      )
    },
    {
      path: path.productDetailPageProductList,
      element: (
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      )
    },
    {
      path: path.cart,
      element: (
        <MainLayout>
          <Cart />
        </MainLayout>
      )
    },
    {
      path: path.cartPageProductList,
      element: (
        <MainLayout>
          <Cart />
        </MainLayout>
      )
    },
    {
      path: path.cartPageProfile,
      element: (
        <MainLayout>
          <Cart />
        </MainLayout>
      )
    },
    {
      path: path.cartPageProductDetailHome,
      element: (
        <MainLayout>
          <Cart />
        </MainLayout>
      )
    },
    {
      path: path.cardPageDetailProductList,
      element: (
        <MainLayout>
          <Cart />
        </MainLayout>
      )
    },
    {
      path: path.home,
      element: <ProtectedRoute />,
      children: [
        {
          path: path.profile,
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: path.home,
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: path.register,
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])

  return routerElement
}

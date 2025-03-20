import React, { createContext, useState } from 'react'
import { getAccessTokenFromLS } from '../utils/auth'
import { getUserNameFromLS } from '../utils/user'
import { Product } from '../types/product.type'

interface AppContextInterface {
  isAuthenticated: boolean
  userName: string
  cartList: Product[]
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  setUserName: React.Dispatch<React.SetStateAction<string>>
  setCartList: React.Dispatch<React.SetStateAction<Product[]>>
}

const initialAppContext: AppContextInterface = {
  // Giá trị của nó sẽ được lấy ra và kiểm tra nếu có access_token sẽ trả về true (ép kiểu)
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  userName: getUserNameFromLS(),
  cartList: [],
  setIsAuthenticated: () => null,
  setUserName: () => null,
  setCartList: () => null
}

// createContext() phải truyền giá trị khởi tạo, nếu ko truyên giá trị khởi tạo nó sẽ lấy giá trị khởi tạo là prop value
export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [userName, setUserName] = useState<string>(initialAppContext.userName)
  const [cartList, setCartList] = useState(initialAppContext.cartList)

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        userName,
        cartList,
        setIsAuthenticated,
        setUserName,
        setCartList
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

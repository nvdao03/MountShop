import React, { createContext, useState } from 'react'
import { getAccessTokenFromLS } from '../utils/auth'
import { getUserNameFromLS } from '../utils/user'

interface AppContextInterface {
  isAuthenticated: boolean
  userName: string
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  setUserName: React.Dispatch<React.SetStateAction<string>>
}

const initialAppContext: AppContextInterface = {
  // Giá trị của nó sẽ được lấy ra và kiểm tra nếu có access_token sẽ trả về true (ép kiểu)
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  userName: getUserNameFromLS(),
  setIsAuthenticated: () => null,
  setUserName: () => null
}

// createContext() phải truyền giá trị khởi tạo, nếu ko truyên giá trị khởi tạo nó sẽ lấy giá trị khởi tạo là prop value
export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [userName, setUserName] = useState<string>(initialAppContext.userName)

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        userName,
        setUserName
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

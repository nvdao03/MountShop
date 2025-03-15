import { createContext } from 'react'
import { getAccessTokenFromLS } from '../utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: () => void
}

const initialAppContext: AppContextInterface = {
  // Giá trị của nó sẽ được lấy ra và kiểm tra nếu có access_token sẽ trả về true (ép kiểu)
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null
}

// createContext() phải truyền giá trị khởi tạo, nếu ko truyên giá trị khởi tạo nó sẽ lấy giá trị khởi tạo là prop value
export const AppContext = createContext(initialAppContext)

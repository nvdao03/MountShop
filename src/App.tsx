import useRouterElements from './useRouterElements'
import { ToastContainer } from 'react-toastify'

function App() {
  const routerElements = useRouterElements()

  return (
    <>
      {routerElements}
      <ToastContainer />
    </>
  )
}

export default App

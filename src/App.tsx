import ScrollToTop from './components/ScrollToTop'
import useRouterElements from './useRouterElements'
import { ToastContainer } from 'react-toastify'

function App() {
  const routerElements = useRouterElements()

  return (
    <>
      <ScrollToTop />
      {routerElements}
      <ToastContainer />
    </>
  )
}

export default App

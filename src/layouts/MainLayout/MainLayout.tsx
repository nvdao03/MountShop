import Footer from '../../components/Footer'
import Header from '../../components/Header'

interface PropType {
  children?: React.ReactNode
}

export default function MainLayout({ children }: PropType) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

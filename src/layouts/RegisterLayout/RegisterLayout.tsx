import Footer from '../../components/Footer'
import RegisterHeader from '../../components/RegisterHeader'

interface PropsType {
  children?: React.ReactNode
}

function RegisterLayout({ children }: PropsType) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}

export default RegisterLayout

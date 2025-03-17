import Lottie from 'lottie-react'
import animateData from '../../../../assets/imgs/animate/animate-login.json'

interface PropsType {
  className?: string
}

function AnimateLogin({ className }: PropsType) {
  return <Lottie animationData={animateData} className={className} loop={true} />
}

export default AnimateLogin

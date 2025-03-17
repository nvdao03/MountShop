import Lottie from 'lottie-react'
import animateData from '../../../assets/imgs/animate/animate-register.json'

interface PropsType {
  className?: string
}

function AnimateRegister({ className }: PropsType) {
  return <Lottie animationData={animateData} className={className} loop={true} />
}

export default AnimateRegister

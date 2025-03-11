interface PropsType {
  children?: React.ReactNode
}

function RegisterLayout({ children }: PropsType) {
  return (
    <div>
      RegisterLayout
      {children}
    </div>
  )
}

export default RegisterLayout

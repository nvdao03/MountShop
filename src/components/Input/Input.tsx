import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  register?: UseFormRegister<any>
}

export default function Input({
  type,
  errorMessage,
  placeholder,
  className,
  name,
  register,
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
  classNameInput = 'p-3 outline-none w-full border border-solid border-[#B3B3B3] rounded-[8px] focus:border-[#4F46E5] rounded-sm focus:shadow-sm'
}: PropsType) {
  const registerResult = register && name ? register(name) : {}
  return (
    <>
      <div className={className}>
        <input type={type} className={classNameInput} placeholder={placeholder} {...registerResult} />
        <div className={classNameError}>{errorMessage}</div>
      </div>
    </>
  )
}

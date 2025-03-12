import { UseFormRegister } from 'react-hook-form'

interface PropsType {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
}

export default function Input({ type, errorMessage, placeholder, className, name, register }: PropsType) {
  return (
    <>
      <div className={className}>
        <input
          type={type}
          className='p-3 outline-none w-full border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
          placeholder={placeholder}
          {...register(name)}
        />
        <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
      </div>
    </>
  )
}

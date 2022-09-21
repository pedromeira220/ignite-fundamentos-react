import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <input
      type="text"
      className="w-full bg-gray-500 rounded-lg placeholder-gray-300 p-4 focus:outline-none focus:outline-2 focus:outline-purple-dark text-gray-100"
      {...rest}
    />
  )
}

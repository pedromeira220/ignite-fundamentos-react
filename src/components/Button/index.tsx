import { PlusCircle } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-blue text-white font-bold flex items-center justify-between p-4 rounded-lg gap-2 hover:bg-blue-dark transition-colors"
      {...rest}
    >
      <span className="hidden sm:inline">{text}</span>
      <span>
        <PlusCircle size={24} />
      </span>
    </button>
  )
}

import { PlusCircle } from 'phosphor-react'

interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return (
    <button className="bg-blue text-white font-bold flex items-center justify-between p-4 rounded-lg gap-2 hover:bg-blue-dark transition-colors">
      <span className="hidden sm:inline">{text}</span>
      <span>
        <PlusCircle size={24} />
      </span>
    </button>
  )
}

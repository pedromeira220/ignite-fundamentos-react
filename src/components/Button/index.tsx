import { PlusCircle } from 'phosphor-react'

interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return (
    <button className="bg-blue text-white font-bold flex items-center justify-between p-4 rounded-lg gap-2 hover:bg-blue-dark transition-colors">
      <span>{text}</span>
      <span>
        <PlusCircle size={32} />
      </span>
    </button>
  )
}

import { Trash } from 'phosphor-react'
import { ButtonHTMLAttributes, useState } from 'react'

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function DeleteButton({ ...rest }: DeleteButtonProps) {
  const [trashIconColor, setTrashIconColor] = useState<'#808080' | '#E25858'>(
    '#808080'
  )

  return (
    <button
      className="hover:bg-gray-400 transition-colors rounded-[4px] p-[6px]"
      onMouseEnter={() => {
        setTrashIconColor('#E25858')
      }}
      onMouseLeave={() => {
        setTrashIconColor('#808080')
      }}
      {...rest}
    >
      <Trash size={24} color={trashIconColor} />
    </button>
  )
}

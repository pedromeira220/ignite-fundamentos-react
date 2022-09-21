import { Trash } from 'phosphor-react'
import { useState } from 'react'

export function DeleteButton() {
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
    >
      <Trash size={24} color={trashIconColor} />
    </button>
  )
}

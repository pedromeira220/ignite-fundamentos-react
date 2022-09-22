import { useState } from 'react'
import { Checkbox } from '../Checkbox'
import { DeleteButton } from '../DeleteButton'

interface TaskProps {
  content: string
  isChecked: boolean
}

export function Task({ content, isChecked }: TaskProps) {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(
    isChecked ? isChecked : false
  )

  return (
    <div className="bg-gray-500 flex items-center justify-between p-4 rounded-lg w-full mb-3">
      <div className="gap-4 flex items-center justify-between">
        <Checkbox setIsCheckboxChecked={setIsCheckboxChecked} />
        <span
          className={` ${
            isCheckboxChecked ? 'text-gray-300 line-through' : 'text-white'
          }`}
        >
          {content}
        </span>
      </div>
      <DeleteButton />
    </div>
  )
}

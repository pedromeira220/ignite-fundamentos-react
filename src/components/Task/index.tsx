import { useState } from 'react'
import { Checkbox } from '../Checkbox'
import { DeleteButton } from '../DeleteButton'

export function Task() {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)

  return (
    <div className="bg-gray-500 flex items-center justify-between p-4 rounded-lg w-full mb-3">
      <div className="gap-4 flex items-center justify-between">
        <Checkbox setIsCheckboxChecked={setIsCheckboxChecked} />
        <span
          className={` ${
            isCheckboxChecked ? 'text-gray-300 line-through' : 'text-white'
          }`}
        >
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
      </div>
      <DeleteButton />
    </div>
  )
}

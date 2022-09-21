import { Checkbox } from '../Checkbox'
import { DeleteButton } from '../DeleteButton'

export function Task() {
  return (
    <div className="bg-gray-500 flex items-center justify-between p-4 rounded-lg w-full">
      <div className="gap-4 flex items-center justify-between">
        <Checkbox />
        <span className="text-white">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
      </div>
      <DeleteButton />
    </div>
  )
}

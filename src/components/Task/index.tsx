import { useState } from 'react'
import { ITask } from '../../pages/Home'
import { Checkbox } from '../Checkbox'
import { DeleteButton } from '../DeleteButton'

interface TaskProps {
  task: ITask
  onDeleteTask: (taskId: string) => void
  onSetInTaskListTaskCheckedProperty: (
    taskId: string,
    newIsCheckedState: boolean
  ) => void
}

export function Task({
  task,
  onDeleteTask,
  onSetInTaskListTaskCheckedProperty,
}: TaskProps) {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(
    task.isChecked ? task.isChecked : false
  )

  return (
    <div className="bg-gray-500 flex items-center justify-between p-4 rounded-lg w-full mb-3">
      <div className="gap-4 flex items-center justify-between">
        <Checkbox
          isChecked={isCheckboxChecked}
          handleCheckBoxChange={() => {
            setIsCheckboxChecked(oldIsCheckedState => {
              const newIsCheckedState = !oldIsCheckedState

              onSetInTaskListTaskCheckedProperty(task.id, newIsCheckedState)

              return newIsCheckedState
            })
          }}
        />
        <span
          className={` ${
            isCheckboxChecked ? 'text-gray-300 line-through' : 'text-white'
          }`}
        >
          {task.content}
        </span>
      </div>
      <DeleteButton
        onClick={() => {
          onDeleteTask(task.id)
        }}
      />
    </div>
  )
}

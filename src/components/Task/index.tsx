import { useState } from 'react'
import { ITask } from '../../pages/Home'
import { Checkbox } from '../Checkbox'
import { DeleteButton } from '../DeleteButton'

interface TaskProps {
  task: ITask
  setCheckedTaskList: React.Dispatch<React.SetStateAction<ITask[]>>
  taskList: ITask[]
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>
  onDeleteTask: (taskId: string) => void
}

export function Task({
  task,
  setCheckedTaskList,
  taskList,
  setTaskList,
  onDeleteTask,
}: TaskProps) {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(
    task.isChecked ? task.isChecked : false
  )

  function handleCheckBoxChange() {
    setIsCheckboxChecked(state => {
      return !state
    })
  }

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  return (
    <div className="bg-gray-500 flex items-center justify-between p-4 rounded-lg w-full mb-3">
      <div className="gap-4 flex items-center justify-between">
        <Checkbox handleCheckBoxChange={handleCheckBoxChange} />
        <span
          className={` ${
            isCheckboxChecked ? 'text-gray-300 line-through' : 'text-white'
          }`}
        >
          {task.content}
        </span>
      </div>
      <DeleteButton onClick={handleDeleteTask} />
    </div>
  )
}

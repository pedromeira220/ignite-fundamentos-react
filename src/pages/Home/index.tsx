import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { ClipboardText } from 'phosphor-react'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Task } from '../../components/Task'

export interface ITask {
  content: string
  isChecked: boolean
  id: string
}

export function Home() {
  const [taskList, setTaskList] = useState<ITask[]>([])

  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTaskInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setNewTaskText(event.target.value)
  }

  function handleNewTaskButtonCreate() {
    if (newTaskText.length == 0) {
      alert('Você não pode criar uma task sem nenhum texto')
      return
    }

    const newTask: ITask = {
      content: newTaskText,
      id: uuid(),
      isChecked: false,
    }

    const newTaskList: ITask[] = [newTask, ...taskList]

    setTaskList(newTaskList)
    setNewTaskText('')

    const newTasksInput = document.querySelector(
      '.new-tasks-input'
    ) as HTMLInputElement

    newTasksInput.focus()
  }

  function deleteTask(taskId: string) {
    const taskListWithoutDeletedOne = taskList.filter(taskItem => {
      if (taskItem.id !== taskId) {
        return true
      } else {
        return false
      }
    })

    setTaskList(taskListWithoutDeletedOne)
  }

  function setInTaskListTaskCheckedProperty(
    taskId: string,
    newIsCheckedState: boolean
  ) {
    const taskListWithUpdatedTask = taskList.map(taskItem => {
      if (taskItem.id == taskId) {
        const newTask: ITask = {
          ...taskItem,
          isChecked: newIsCheckedState,
        }

        return newTask
      }

      return taskItem
    })

    setTaskList(taskListWithUpdatedTask)
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Header />

      <section className="w-full h-full max-w-3xl">
        <div className="w-full px-4 -mt-8 ">
          <div className="w-full flex items-center justify-between gap-2">
            <Input
              placeholder="Adicione uma nova tarefa"
              onChange={event => {
                handleNewTaskInputChange(event)
              }}
              value={newTaskText}
              autoFocus
            />
            <Button
              text="Criar"
              onClick={() => {
                handleNewTaskButtonCreate()
              }}
            />
          </div>
        </div>
        <header className="w-full">
          <div className="w-full flex items-center justify-between px-4 mt-16">
            <div className="flex gap-2">
              <span className="font-bold text-blue text-sm">
                Tarefas criadas
              </span>
              <span className="px-2 py-[0.125rem] bg-gray-400 rounded-full flex items-center justify-center ">
                <span className="text-white text-xs">{taskList.length}</span>
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-purple text-sm">Concluídas</span>
              <span className="px-2 py-[0.125rem] bg-gray-400 rounded-full flex items-center justify-center ">
                <span className="text-white text-xs">
                  {taskList.length == 0
                    ? '0'
                    : `${
                        taskList.filter(taskItem => {
                          return taskItem.isChecked
                        }).length
                      } de ${taskList.length}`}
                </span>
              </span>
            </div>
          </div>
        </header>

        <main className="w-full rounded-2 overflow-hidden flex-1 border-t-2 border-gray-400 rounded-lg mt-6 flex items-center justify-center flex-col text-gray-300 ">
          {taskList.length == 0 ? (
            <>
              <div className="flex items-center justify-center flex-col mt-20">
                <ClipboardText size={64} color="#333333" />
                <span className="font-bold mt-4 text-center">
                  Você ainda não tem tarefas cadastradas
                </span>
                <span className="text-center">
                  Crie tarefas e organize seus itens a fazer
                </span>
              </div>
            </>
          ) : (
            <>
              {taskList.map(task => {
                return (
                  <Task
                    task={task}
                    key={task.id}
                    onDeleteTask={deleteTask}
                    onSetInTaskListTaskCheckedProperty={
                      setInTaskListTaskCheckedProperty
                    }
                  />
                )
              })}
            </>
          )}
        </main>
      </section>
    </div>
  )
}
/*
<div className="flex items-center justify-center flex-col mt-20">
            <ClipboardText size={56} color="#333333" />
            <span className="font-bold mt-4 text-center">
              Você ainda não tem tarefas cadastradas
            </span>
            <span className="text-center">
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>



          {taskList.map(task => {
            return (
              <Task
                content={task.content}
                isChecked={task.isChecked}
                key={task.id}
              />
            )
          })}
 */

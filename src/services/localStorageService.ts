import { ITask } from '../pages/Home'

type itemsOptions = 'taskList'

export const localStorageService = {
  setItem: (key: itemsOptions, taskList: ITask[]): void => {
    localStorage.setItem(key, JSON.stringify(taskList))
  },
  getItem: (key: itemsOptions): ITask[] => {
    const fromLocalStorage = localStorage.getItem(key)

    if (!fromLocalStorage) {
      const emptyTaskList: ITask[] = []
      return emptyTaskList
    }

    return JSON.parse(fromLocalStorage) as ITask[]
  },
}

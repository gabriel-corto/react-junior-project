import { createContext, ReactNode, useState } from "react";
import { ITasks } from "../App";

interface TaskContextProps {
  Tasks: ITasks[] 
  setTasks: (Tasks: ITasks[]) => void 
  onCompleteTask: (Task: ITasks) => void 
  onDeleteTasks: (Task: ITasks) => void 

  AllTasks: number
  CompletedsTasks: ITasks[]
}
interface TasksContextProviderProps {
  children: ReactNode
}
export const TasksContext = createContext({} as TaskContextProps)

export function TasksContextProvider({ children }: TasksContextProviderProps) {

  const [Tasks, setTasks] = useState<ITasks[]>(() => {

    const storedTasks = localStorage.getItem("tasks")
    return storedTasks ? (JSON.parse(storedTasks)) as ITasks[] :  []
  })
  
  const AllTasks = Tasks.length 
  const CompletedsTasks = Tasks.filter((task) => task.isCompleted)

  function onDeleteTasks(Task: ITasks) {
    const TaskNotDeleted = Tasks.filter((TaskToDelete) => {
      return Task.id !== TaskToDelete.id
    })

    setTasks(TaskNotDeleted)
    localStorage.setItem("tasks", JSON.stringify(TaskNotDeleted))
  }

  function onCompleteTask(Task: ITasks) {
    const TaskCompleted = Tasks.map((TaskToCompleted) => {
      if(TaskToCompleted.id === Task.id) {
        return {
          ...Task,
          isCompleted: !Task.isCompleted 
        } 
      } 

      return TaskToCompleted 
    })
    setTasks(TaskCompleted)
    localStorage.setItem("tasks", JSON.stringify(TaskCompleted))
  }

  return(
    <TasksContext.Provider value={{
      Tasks,
      setTasks,
      onCompleteTask,
      onDeleteTasks,
      AllTasks,
      CompletedsTasks,
    }}>
      {children}
    </TasksContext.Provider>
  )
}
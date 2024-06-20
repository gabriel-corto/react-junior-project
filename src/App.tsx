import { CheckCircle, Info, PlusCircle, WarningCircle } from "phosphor-react";
import { SideBar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { Status } from "./components/Status";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { useTasks } from "./hooks/useTasks";
import { EmptyUi } from "./components/EmptyUi";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import './styles/layout.css'

const IconsDangerColor: string = "var(--red-500)"
const IconsPurpleColor: string = "var(--purple-500)"

export interface ITasks {
  id: string 
  text: string
  isCompleted: boolean
}

export default function App() {
  const [Text, setText] = useState("")
  const { Tasks, setTasks, onCompleteTask, onDeleteTasks, AllTasks, CompletedsTasks} = useTasks()

  function ChangeTaskText(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }
  function CreateNewTask(event: FormEvent) {
    event.preventDefault()

    if(Text.length <= 0) {
      toast.dark("Please add Some Text !", {
        position: "bottom-center",
        icon: <WarningCircle size={25} color={IconsDangerColor} weight="fill"/>
      }) 
    } else {
      setTasks([...Tasks, 
        {
          id: crypto.randomUUID(),
          text: Text, 
          isCompleted: false
        }
      ])
      setText("")
      localStorage.setItem("tasks", JSON.stringify([...Tasks, {
        id: crypto.randomUUID(),
        text: Text,
        isCompleted: false
      }]))

      toast.dark("Your Task Was Created", {
        position: "bottom-center",
        icon: <CheckCircle size={25} color={IconsPurpleColor} weight="fill"/>
      })
    }
  }

  function HandleCompletedTask(Task: ITasks) {
    onCompleteTask(Task)
    toast.dark("See Your Completed Tasks", {
      position: "bottom-center",
      icon: <Info size={25} color={IconsPurpleColor}/>
    }) 
  }

  function HandleDeleteTask(Task: ITasks) {
    onDeleteTasks(Task)
    toast.dark("One Task Was removed", {
      position: "bottom-center",
      icon: <Info size={25} color={IconsPurpleColor} weight="fill"/>
    }) 
  }

  useEffect(() => {
    if(AllTasks <= 0) {
      document.title = `Task App / Home` 
    } else {
      document.title = `(${AllTasks}) Task App / Home`
    }
  })
  
  return (
    <div className="wrapper">
      <SideBar />

      <main className="container">
        <Header content="My Tasks"/>

        <form action="#" className="form-container" onSubmit={CreateNewTask}>
          <input 
            type="text"
            placeholder="Create your task..." 
            onChange={ChangeTaskText}
            value={Text}
            autoFocus/>

          <button className="button-create-task">
            <PlusCircle weight="bold"/>
            <span>Create</span>
          </button>
        </form>

        <div className="tasks-status">
          <Status text="all tasks" sNumber={AllTasks}/>
          <Status text="completed" sNumber={CompletedsTasks.length}/>
        </div>

        <div className="tasks-container">
          {Tasks.map((task) => {
            return(
              <Task 
                key={task.id}
                text={task.text}

                onCompleteTask={() => {HandleCompletedTask(task)}}
                onDeleteTask={() => {HandleDeleteTask(task)}}

                task={task}
              />
            )
          })}

          {Tasks.length <= 0 && (
            <EmptyUi>
              <span>You do not have tasks created <br /> but you can create One</span>
            </EmptyUi>
          )}
        </div>

        <ToastContainer autoClose={1000} />
      </main>
    </div>
  )
}
import { useEffect } from "react";
import { EmptyUi } from "../../components/EmptyUi";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import { Task } from "../../components/Task";
import { useTasks } from "../../hooks/useTasks";
import './style.css'
export function Completed() {

  const { CompletedsTasks } = useTasks()

  useEffect(() => {
    if(CompletedsTasks.length <= 0) {
      document.title = `Task App / Home` 
    } else {
      document.title = `(${CompletedsTasks.length}) Tasks Completeds`
    }
  })

  return(
    <div className="completed-container">
      <SideBar />

      <main className="container">
        <Header content="Completeds Tasks"/>

        <div className="completeds-tasks">
          {CompletedsTasks.map((task) => {
            return (
              <Task 
                key={task.id}
                text={task.text}/>
            )
          })}

          {CompletedsTasks.length <= 0 && (
            <EmptyUi>
              <span>Without anytask created<br /> is impossible show completeds tasks</span>
            </EmptyUi>
          )}
        </div>
      </main>
    </div>
  )
}
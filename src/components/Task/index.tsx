import { Check, DotsThree, Trash } from "phosphor-react";
import './style.css'
import { ITasks } from "../../App";

interface TaskProps {
  text: string
  onDeleteTask?: () => void 
  onCompleteTask?: () => void

  task?: ITasks
}
export function Task({ task, text, onDeleteTask, onCompleteTask }: TaskProps) {

  const isCompleted = task?.isCompleted
  return(
    <div className="task">
      <button 
        className="task-toggle-button" 
        title={isCompleted ? "Completed" : "Mark as completed"} 
        onClick={onCompleteTask}>

        {isCompleted ? <Check weight="bold"/> : <DotsThree weight="bold"/> }
      </button>

      <strong className={isCompleted ? "TaskCompleted" : "task-text"}>{text}</strong>

      <button className="task-button-delete" title="Delete task" onClick={onDeleteTask}>
        <Trash weight="bold" />
      </button>
    </div>
  )
}
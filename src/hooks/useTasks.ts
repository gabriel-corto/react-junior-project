import { useContext } from "react";
import { TasksContext } from "../contexts/Completeds";

export const useTasks = () => useContext(TasksContext)
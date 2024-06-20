import { Warning } from "phosphor-react";
import './style.css'
import { ReactNode } from "react";

interface EmptyProps {
  children: ReactNode
}
export function EmptyUi({ children }: EmptyProps) {
  return(
    <section className="empty-container">
      <Warning weight="bold" size={40}/>
      {children}
    </section>
  )
}
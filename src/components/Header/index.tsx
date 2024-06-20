import { ClipboardText } from "phosphor-react";
import './style.css'

interface HeaderProps {
  content: string 
}
export function Header({ content }: HeaderProps) {
  return(
    <header className="logo">
      <ClipboardText weight="bold"/>
      <span>{content}</span>
    </header>
  )
}
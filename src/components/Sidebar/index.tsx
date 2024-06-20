import { CircleWavyCheck, ClipboardText, User } from "phosphor-react"
import './style.css'
import { Link } from "react-router-dom"

export function SideBar() {
  return(
    <aside className="sidebar">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <ClipboardText weight="bold"/>
              <span>ToDos</span>
            </Link>
          </li>
          <li>
            <Link to="/completeds">
              <CircleWavyCheck weight="bold"/>
              <span>Completeds</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <User />
              <span>Theme</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
import './style.css'
interface StatusProps {
  text: string 
  sNumber: number
}
export function Status({ text, sNumber }: StatusProps) {
  return(
    <div className="status">
      <span>{text}</span>
      <strong>{sNumber}</strong>
    </div>
  )
}
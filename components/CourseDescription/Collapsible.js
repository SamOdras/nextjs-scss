import { useEffect, useState } from "react"
import ICONS from 'utils/icons'


const Collapsible = (props) => {

  const { chevronDown, chevronUp } = ICONS
  const { title, description, isOpen=false } = props

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) setOpen(true);
  }, [])

  return (
    <div className="collapsible" onClick={() => setOpen(!open)}>
      <div className="collapsible__title">
        <div className="title-3">{title}</div>
        <img src={open ? chevronUp : chevronDown} alt="chevronDown"/>
      </div>
      {open && <div className="collapsible__description" dangerouslySetInnerHTML={{__html: description}}>
      </div>}
    </div>
  )
}

export default Collapsible;
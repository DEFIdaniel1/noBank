import './Card.scss'

const Card = (props:any) => {
const cardClass = `container ${props.className}`

    return (
    <div className={cardClass}>{props.children}</div>
  )
}

export default Card
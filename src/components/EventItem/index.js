// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, getClickedId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const imageStyles = isActive ? 'act-img' : ''

  const onClickImage = () => {
    getClickedId(id)
  }

  return (
    <li className="event-card">
      <button className="click-button" type="button" onClick={onClickImage}>
        <img
          src={imageUrl}
          alt="event"
          className={`event-image ${imageStyles}`}
        />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem

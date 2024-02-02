// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, getClickedId} = props
  const {registrationStatus, imageUrl, name, location} = eventDetails

  const onClickImage = () => {
    getClickedId(registrationStatus)
  }

  return (
    <li className="event-card">
      <button className="click-button" type="button" onClick={onClickImage}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem

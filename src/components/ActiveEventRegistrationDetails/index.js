// Write your code here
import './index.css'

const statusConstant = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationDetails} = props

  const renderInitialView = () => (
    <div className="initial-card">
      <p className="initial-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderYetToRegisteredView = () => (
    <div className="status-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-image"
      />
      <p className="status-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="status-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="Register-image"
      />
      <h1 className="status-text">You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="status-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="Closed-image"
      />
      <h1 className="status-text">Registrations Are Closed Now!</h1>
      <p className="status-para">
        Stay tuned. We Will reopen the registrations soon!
      </p>
    </div>
  )

  switch (registrationDetails) {
    case statusConstant.initial:
      return renderInitialView()
    case statusConstant.yetToRegister:
      return renderYetToRegisteredView()
    case statusConstant.registered:
      return renderRegisteredView()
    case statusConstant.closed:
      return renderRegistrationClosedView()
    default:
      return null
  }
}
export default ActiveEventRegistrationDetails

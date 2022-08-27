

function Weeks(props) {

  return (
    <div className="week-container">
    <div className="week-header">
      <p className="text">Today</p>
    </div>
    <div className="week-days">
      <div className="today day">
        <div className="special-first-container">
          <p className="text special-text" id="special-text">
            Monday
          </p>
          <p className="clock">11:42 PM</p>
        </div>
        <div className="special-twice-container">
          <div className="special-item-container">
            <p className="special-degree">16'</p>
            <p className="special-item">
              Wind: <span>19'</span>
            </p>
            <p className="special-item">
              Pressure: <span>1000MB</span>
            </p>
          </div>
          <div className="special-item-container">
            <i className="fa-solid fa-cloud-meatball" id="special-icon"></i>
            <p className="special-item">
              Sunrise: <span>6:02 AM</span>
            </p>
            <p className="special-item">
              Sunset: <span>9:18 PM</span>
            </p>
          </div>
        </div>
      </div>
      <div className="day">
        <p className="text day-text">Tue</p>
        <p className="degree">16'</p>
        <i className="fa-solid fa-cloud-meatball"></i>
      </div>
      <div className="day">
        <p className="text day-text">Wed</p>
        <p className="degree">16'</p>
        <i className="fa-solid fa-cloud-meatball"></i>
      </div>
      <div className="day">
        <p className="text day-text">Thu</p>
        <p className="degree">16'</p>
        <i className="fa-solid fa-cloud-meatball"></i>
      </div>
      <div className="day">
        <p className="text day-text">Fri</p>
        <p className="degree">16'</p>
        <i className="fa-solid fa-cloud-meatball"></i>
      </div>
      <div className="day">
        <p className="text day-text">Sat</p>
        <p className="degree">16'</p>
        <i className="fa-solid fa-cloud-meatball"></i>
      </div>
      <div className="day">
        <p className="text day-text">Sun</p>
        <p className="degree">16'</p>
        <i className="fa-solid fa-cloud-meatball"></i>
      </div>
    </div>
  </div>
  )

}

export default Weeks;
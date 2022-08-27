function header(props) {
  return (
    <div className="header-container">
      <div className="header-items-container">
        <p className="text location-city" id="header-location">
          <i className="fa-solid fa-location-dot"></i> Tehran,
          <span className="location-countray">Iran</span>
        </p>
      </div>
      <div className="header-form-container">
        <form action="#">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className="text input"
            type="text"
            name="search"
            placeholder="Search city..."
          />
        </form>
      </div>
      <div className="header-items-container">
        <div className="text change-light">change light</div>
        <div className="profile"></div>
      </div>
    </div>
  );
}

export default header;

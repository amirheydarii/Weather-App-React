import Map from "./Map";
import Sidebar from "./Sidebar";
import Weeks from "./Weeks";


function Main(props) {

  return (
    <div className="main-container">
        <Weeks />
        <Map />
        <Sidebar />
    </div>
  )

}

export default Main;
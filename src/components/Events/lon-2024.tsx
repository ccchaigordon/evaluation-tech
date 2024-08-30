import NavBar from "../NavBar";
import Footer from "../Footer";
import useDocumentTitle from "../useDocumentTitle";

function Lon2024() {
  useDocumentTitle("Log Off Night 2024 | CS Society USM");

  return (
    <>
      <NavBar />
      <div className="main">
        <p className="event-arrow">
          ←
          <a href="/" className="event-link">
            Academic Session 2023/2024
          </a>
        </p>
      </div>
      <div className="card-details">
        <div className="card-details-desc">
          <h1 className="card-details-title">Log Off Night 2024</h1>
          <div className="card-tag">
            <div className="tag-year">USM Students</div>
            <div className="tag-details">Prom Night</div>
          </div>
          <div className="card-details-details">
            <div className="card-details-details-icons">
              <i className="fa fa-calendar text-xl"></i>
              <i className="fa fa-clock text-xl"></i>
              <i className="fa fa-map-marker text-xl"></i>
            </div>
            <div className="card-details-details-dtl">
              <p>7th July 2024</p>
              <p>7:00pm - 11:00pm (GMT+8)</p>
              <p>Bayview Hotel, George Town, Penang</p>
            </div>
          </div>
          <div className="card-details-details-desc">
            Log Off Night is the epic celebration marking the end of the
            2023/2024 academic year for all Computer Science students! It's a
            night where we come together to celebrate our achievements, honor
            our graduating final-year students and bid farewell to dear friends.
          </div>
        </div>
        <div className="card-details-img">
          <img
            src="https://s6.imgcdn.dev/mClPa.webp"
            alt="Log Off Night 2023 image"
            className="lon-img"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Lon2024;

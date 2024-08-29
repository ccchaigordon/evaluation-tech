import NavBar from "../NavBar";
import Footer from "../Footer";
import useDocumentTitle from "../useDocumentTitle";

function Frosty2023() {
  useDocumentTitle("Frosty Fantasy Night 2023 | CS Society USM");

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
          <h1 className="card-details-title">Frosty Fantasy Night 2023</h1>
          <div className="card-tag">
            <div className="tag-year">CS Students</div>
            <div className="tag-details">Entertainment</div>
          </div>
          <div className="card-details-details">
            <div className="card-details-details-icons">
              <i className="fa fa-calendar text-xl"></i>
              <i className="fa fa-clock text-xl"></i>
              <i className="fa fa-map-marker text-xl"></i>
            </div>
            <div className="card-details-details-dtl">
              <p>4th April 2024</p>
              <p>8:30pm - 11:30pm (GMT+8)</p>
              <p>DK G31, School of Computer Sciences, USM</p>
            </div>
          </div>
          <div className="card-details-details-desc">
            A brand new event specifically designed for computer science
            undergraduates to unwind and relax. <br />
            <br />
            Frosty Fantasy Night 2024 aims to provide a break from the rigorous
            academic and coding schedules that students typically face. It
            features a variety of activities such as performance, lucky draw
            session and movie night, all intended to foster a sense of community
            among the participants. <br />
            <br />
            This event encourages students to take a step back from their
            studies, engage in fun and stress-free activities, and connect with
            their peers in a relaxed environment. It's a chance to build lasting
            connections and recharge your energy.
          </div>
        </div>
        <div className="card-details-img">
          <img
            src="./src/assets/frostynight-2023-poster.webp"
            alt=" image"
            className="frosty-2023-img"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Frosty2023;

import NavBar from "../NavBar";
import Footer from "../Footer";
import useDocumentTitle from "../useDocumentTitle";
import { useEffect } from "react";

function Agm2024() {
  useDocumentTitle("Annual General Meeting 2024 | CS Society USM");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <h1 className="card-details-title">Annual General Meeting 2024</h1>
          <div className="card-tag">
            <div className="tag-year">CS Students</div>
            <div className="tag-details">CS Society</div>
          </div>
          <div className="card-details-details">
            <div className="card-details-details-icons">
              <i className="fa fa-calendar text-xl"></i>
              <i className="fa fa-clock text-xl"></i>
              <i className="fa fa-map-marker text-xl"></i>
            </div>
            <div className="card-details-details-dtl">
              <p>26th June 2024</p>
              <p>7:50pm - 10:45pm (GMT+8)</p>
              <p>Online</p>
            </div>
          </div>
          <div className="card-details-details-desc">
            The Annual General Meeting (AGM) is an annual event of CS Society
            aimed to showcase the achievements of the CS Society throughout the
            academic year and election is done to elect the new Executive
            Members for the next academic session. <br />
            <br />
            The annual activity report showcases the events that CS Society has
            organised throughout the academic session. Get a glimpse of the
            behind-the-scenes action, the dedication and the hard work put in by
            the committees. <br />
            <br />
            The CS Society Board Election is your chance to make your voice
            heard and vote for the new Top Committee members of CS Society, who
            will shoulder the responsibilities of leading the student body
            toward greater heights.
          </div>
        </div>
        <div className="card-details-img">
          <img
            src="https://s6.imgcdn.dev/mCO9S.webp"
            alt="AGM 2024 image"
            className="agm-2024-img"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Agm2024;

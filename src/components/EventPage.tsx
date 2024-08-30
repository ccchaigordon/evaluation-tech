import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import useDocumentTitle from "./useDocumentTitle";

function EventPage() {
  useDocumentTitle("Events | CS Society USM");

  return (
    <>
      <NavBar />
      <div className="main">
        <h1 className="main-title">
          <span>All Events</span>
        </h1>
        <div className="content">
          <Link className="card" to="/lon-2024">
            <img
              src="https://s6.imgcdn.dev/mClPa.webp"
              alt="Log Off Night 2024 image"
              className="lon-img"
            />
            <div className="card-body">
              <div className="card-left">July 7 2024</div>
              <div className="card-right">
                <h2 className="card-right-title">Log Off Night 2024</h2>
                <p className="card-right-desc">
                  An annual dinner to celebrate and appreciate final year
                  computer science students' contributions.
                </p>
                <div className="card-tag">
                  <div className="tag-year">USM Students</div>
                  <div className="tag-details">Prom Night</div>
                </div>
              </div>
            </div>
          </Link>
          <Link className="card" to="/pixel-2024">
            <img
              src="https://s6.imgcdn.dev/mC0kT.webp"
              alt="PIXEL 2024 image"
              className="pixel-img"
            />
            <div className="card-body">
              <div className="card-left">July 2 2024</div>
              <div className="card-right">
                <h2 className="card-right-title">
                  Project Innovation & eXploration in CS Education and Learning
                  2024
                </h2>
                <p className="card-right-desc">
                  An annual flagship exhibition programme specially curated for
                  final year computer science students.
                </p>
                <div className="card-tag">
                  <div className="tag-year">Year 4</div>
                  <div className="tag-details">Flagship</div>
                </div>
              </div>
            </div>
          </Link>
          <Link className="card" to="/agm-2024">
            <img
              src="https://s6.imgcdn.dev/mCO9S.webp"
              alt="AGM 2024 image"
              className="agm-img"
            />
            <div className="card-body">
              <div className="card-left">June 26 2024</div>
              <div className="card-right">
                <h2 className="card-right-title">
                  Annual General Meeting 2024
                </h2>
                <p className="card-right-desc">
                  An annual event to showcase the achievements of CS Society
                  throughout the year and elect the new executives members.
                </p>
                <div className="card-tag">
                  <div className="tag-year">CS Students</div>
                  <div className="tag-details">CS Society</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Next line */}

          <Link className="card" to="/vhack-2024">
            <img
              src="https://s6.imgcdn.dev/mC2ji.webp"
              alt="V Hack 2024 image"
              className="vhack-img"
            />
            <div className="card-body">
              <div className="card-left">Apr 20 2024</div>
              <div className="card-right">
                <h2 className="card-right-title">Varsity Hackathon 2024</h2>
                <p className="card-right-desc">
                  A completely redesigned international hackathon and a space
                  for university students to gain new hackathon experience.
                </p>
                <div className="card-tag">
                  <div className="tag-year">International</div>
                  <div className="tag-details">Flagship</div>
                </div>
              </div>
            </div>
          </Link>
          <Link className="card" to="/sukapps-2024">
            <img
              src="https://s6.imgcdn.dev/mCBq9.webp"
              alt="SUKAPPS 2024 image"
              className="sukapps-img"
            />
            <div className="card-body">
              <div className="card-left">Apr 9 2024</div>
              <div className="card-right">
                <h2 className="card-right-title">
                  Sukan Antara Pusat Pengajian Sains 2024
                </h2>
                <p className="card-right-desc">
                  A joint collaboration sports competition between seven
                  competing Science Schools in USM.
                </p>
                <div className="card-tag">
                  <div className="tag-year">Science Schools</div>
                  <div className="tag-details">Sports</div>
                </div>
              </div>
            </div>
          </Link>
          <Link className="card" to="/frosty-2023">
            <img
              src="https://s6.imgcdn.dev/mCPdu.webp"
              alt="Frosty Night 2023 image"
              className="frosty-img"
            />
            <div className="card-body">
              <div className="card-left">Apr 4 2024</div>
              <div className="card-right">
                <h2 className="card-right-title">Frosty Fantasy Night 2023</h2>
                <p className="card-right-desc">
                  A brand new event specifically designed for computer science
                  undergraduates to unwind and relax.
                </p>
                <div className="card-tag">
                  <div className="tag-year">CS Students</div>
                  <div className="tag-details">Entertainment</div>
                </div>
              </div>
            </div>
          </Link>

          {/* Next line */}

          <Link className="card" to="/me2-2024">
            <img
              src="https://s6.imgcdn.dev/mCa8t.webp"
              alt="Major Minor Exploration Event 2024 image"
              className="me2-img"
            />
            <div className="card-body">
              <div className="card-left">Mar 5 2024</div>
              <div className="card-right">
                <h2 className="card-right-title">
                  Major Minor Exploration Event 2024
                </h2>
                <p className="card-right-desc">
                  A 2-day virtual event aimed at helping first-year USM CS
                  students to select their academic tracks.
                </p>
                <div className="card-tag">
                  <div className="tag-year">Year 1</div>
                  <div className="tag-details">Talk</div>
                </div>
              </div>
            </div>
          </Link>
          <Link className="card" to="/vcsirf-2023">
            <img
              src="https://s6.imgcdn.dev/mCS4y.webp"
              alt="VCSIRF 2023 image"
              className="vcsirf-img"
            />
            <div className="card-body">
              <div className="card-left">Dec 4 2023</div>
              <div className="card-right">
                <h2 className="card-right-title">
                  Virtual Computer Science Internship & Recruitment Fair 2023
                </h2>
                <p className="card-right-desc">
                  A 1-day online event featuring career talks and sharing
                  sessions primarily for computer science students at USM.
                </p>
                <div className="card-tag">
                  <div className="tag-year">Year 3 & 4</div>
                  <div className="tag-details">Flagship</div>
                </div>
              </div>
            </div>
          </Link>
          <Link className="card" to="/csbersamamu-2023">
            <img
              src="https://s6.imgcdn.dev/mCsqN.webp"
              alt="CS Bersamamu 2023 image"
              className="csbersamamu-img"
            />
            <div className="card-body">
              <div className="card-left">Oct 22 2023</div>
              <div className="card-right">
                <h2 className="card-right-title">CS Bersamamu 2023</h2>
                <p className="card-right-desc">
                  An annual event that is organized to welcome and guide
                  first-year students from School of Computer Sciences, USM.
                </p>
                <div className="card-tag">
                  <div className="tag-year">Year 1</div>
                  <div className="tag-details">Flagship</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="event-btn-container">
          <div className="event-btn-group">
            <button className="event-btn-link">Page 1</button>
            <Link className="event-btn" to="/events-2" title="Go to Next">
              Next →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventPage;

import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import useDocumentTitle from "./useDocumentTitle";

function EventPage2() {
  useDocumentTitle("Events | CS Society USM");

  return (
    <>
      <NavBar />
      <div className="main">
        <h1 className="main-title">
          <span>All Events</span>
        </h1>
        <div className="content">
          <div className="card">
            <img
              src="./src/assets/lon-2023-poster.webp"
              alt="Log Off Night 2023 image"
              className="lon-img"
            />
            <div className="card-body">
              <div className="card-left">July 14 2023</div>
              <div className="card-right">
                <h2 className="card-right-title">Log Off Night 2023</h2>
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
          </div>
          <div className="card">
            <img
              src="./src/assets/pixel-2023-poster.webp"
              alt="PIXEL 2023 image"
              className="pixel-2023-img"
            />
            <div className="card-body">
              <div className="card-left">July 12 2023</div>
              <div className="card-right">
                <h2 className="card-right-title">
                  Project Innovation & eXploration in CS Education and Learning
                  2023
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
          </div>
          <div className="card">
            <img
              src="./src/assets/agm-2023-poster.webp"
              alt="AGM 2023 image"
              className="agm-img"
            />
            <div className="card-body">
              <div className="card-left">June 21 2023</div>
              <div className="card-right">
                <h2 className="card-right-title">
                  Annual General Meeting 2023
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
          </div>

          {/* Next line */}

          <div className="card">
            <img
              src="./src/assets/cs-sports-day-2023-poster.webp"
              alt="CS Sports Day 2023 image"
              className="sukapps-img"
            />
            <div className="card-body">
              <div className="card-left">Apr 30 2023</div>
              <div className="card-right">
                <h2 className="card-right-title">CS Sports Day 2023</h2>
                <p className="card-right-desc">
                  A brand-new student-led sports event for students and
                  lecturers in the School of Computer Sciences.
                </p>
                <div className="card-tag">
                  <div className="tag-year">CS Students</div>
                  <div className="tag-details">Sports</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="./src/assets/vhack-2023-poster.webp"
              alt="V Hack 2023 image"
              className="vhack-2023-img"
            />
            <div className="card-body">
              <div className="card-left">Apr 2 2023</div>
              <div className="card-right">
                <h2 className="card-right-title">Varsity Hackathon 2023</h2>
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
          </div>
          <div className="card">
            <img
              src="./src/assets/me2-2023-poster.webp"
              alt="Major Minor Exploration Event 2023 image"
              className="me2-2023-img"
            />
            <div className="card-body">
              <div className="card-left">Mar 5 2024</div>
              <div className="card-right">
                <h2 className="card-right-title">
                  Major Minor Exploration Event 2023
                </h2>
                <p className="card-right-desc">
                  A virtual event aimed at helping first-year USM CS students to
                  select their academic tracks.
                </p>
                <div className="card-tag">
                  <div className="tag-year">Year 1</div>
                  <div className="tag-details">Talk</div>
                </div>
              </div>
            </div>
          </div>

          {/* Next line */}

          <div className="card">
            <img
              src="./src/assets/cpp-clinic-2023-poster.webp"
              alt="C++ Clinic 2023 image"
              className="cpp-img"
            />
            <div className="card-body">
              <div className="card-left">Jan 28 2023</div>
              <div className="card-right">
                <h2 className="card-right-title">C++ Clinic 2023</h2>
                <p className="card-right-desc">
                  An online C++ coding workshop involving first-year computer
                  science students from USM in preparation for their final exam.
                </p>
                <div className="card-tag">
                  <div className="tag-year">Year 1</div>
                  <div className="tag-details">Workshop</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="./src/assets/csirf-2022-poster.webp"
              alt="CSIRF 2022 image"
              className="csirf-img"
            />
            <div className="card-body">
              <div className="card-left">Jan 7 2023</div>
              <div className="card-right">
                <h2 className="card-right-title">
                  Computer Science Internship & Recruitment Fair 2022
                </h2>
                <p className="card-right-desc">
                  A 2-day physical event featuring career talks and exhibitions
                  uniquely for computer science students at USM.
                </p>
                <div className="card-tag">
                  <div className="tag-year">Year 3 & 4</div>
                  <div className="tag-details">Flagship</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="./src/assets/csbersamamu-2022-poster.webp"
              alt="CS Bersamamu 2022 image"
              className="csbersamamu-2022-img"
            />
            <div className="card-body">
              <div className="card-left">Oct 29 2022</div>
              <div className="card-right">
                <h2 className="card-right-title">CS Bersamamu 2022</h2>
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
          </div>
        </div>
        <div className="event-btn-container">
          <div className="event-btn-group">
            <Link className="event-btn" to="/events" title="Go to Previous">
              ← Prev
            </Link>
            <button className="event-btn-link">Page 2</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventPage2;

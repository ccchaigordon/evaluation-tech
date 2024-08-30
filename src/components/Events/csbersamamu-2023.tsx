import NavBar from "../NavBar";
import Footer from "../Footer";
import useDocumentTitle from "../useDocumentTitle";

function CsB() {
  useDocumentTitle("CS Bersamamu 2023 | CS Society USM");

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
          <h1 className="card-details-title">CS Bersamamu 2023</h1>
          <div className="card-tag">
            <div className="tag-year">Year 1</div>
            <div className="tag-details">Flagship</div>
          </div>
          <div className="card-details-details">
            <div className="card-details-details-icons">
              <i className="fa fa-calendar text-xl"></i>
              <i className="fa fa-clock text-xl"></i>
              <i className="fa fa-map-marker text-xl"></i>
            </div>
            <div className="card-details-details-dtl">
              <p>22nd October 2023</p>
              <p>9:30pm - 5:30pm (GMT+8)</p>
              <p>DK G31, School of Computer Sciences, USM</p>
            </div>
          </div>
          <div className="card-details-details-desc">
            CS Bersamamu is an annual event that is organized by the senior
            committees from CS Society for the first-year students from School
            of Computer Sciences, USM. This program aims to prepare the
            first-year students for university life and establish a platform for
            them to get to know their course mates, lecturers, and the whole CS
            community. <br />
            <br />
            This year, a series of engaging events took place, such as senior
            sharing session, booth exhibitions, recreational activities, and a
            hackathon session, all aimed at fostering camaraderie and
            facilitating a smooth transition into university life.
          </div>
        </div>
        <div className="card-details-img">
          <img
            src="https://s6.imgcdn.dev/mCsqN.webp"
            alt="CS Bersamamu image"
            className="csbersamamu-img"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CsB;

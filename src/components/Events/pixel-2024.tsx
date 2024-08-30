import NavBar from "../NavBar";
import Footer from "../Footer";
import useDocumentTitle from "../useDocumentTitle";
import { useEffect } from "react";

function Pixel2024() {
  useDocumentTitle(
    "Project Innovation & eXploration in CS Education and Learning 2024 | CS Society USM"
  );

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
          <h1 className="card-details-title">
            Project Innovation & eXploration in CS Education and Learning 2024
          </h1>
          <div className="card-tag">
            <div className="tag-year">Year 4</div>
            <div className="tag-details">Flagship</div>
          </div>
          <div className="card-details-details">
            <div className="card-details-details-icons">
              <i className="fa fa-calendar text-xl"></i>
              <i className="fa fa-clock text-xl"></i>
              <i className="fa fa-map-marker text-xl"></i>
            </div>
            <div className="card-details-details-dtl">
              <p>2nd June 2024</p>
              <p>10:00am - 12:40pm (GMT+8)</p>
              <p>Dewan Budaya, USM</p>
            </div>
          </div>
          <div className="card-details-details-desc">
            Project Innovation & eXploration in CS Education and Learning (PIXEL
            2024) is a recognised annual flagship programme designed for
            final-year students, meticulously organised by the Computer Science
            Society in collaboration with the School of Computer Sciences,
            Universiti Sains Malaysia. As an extension of the Final Year Project
            (FYP) assessment, PIXEL 2024 allows students to display their work
            and gain valuable feedback from industry professionals. <br />
            <br />
            This year, PIXEL returns with a broader range of distinguished
            honours and significant rewards, all targeted at accomplishing key
            milestones and encouraging academic achievement. PIXEL 2024 will
            implement a hybrid approach, with a virtual FYP exhibition and
            project evaluation followed by an Awards & Closing Ceremony being
            held at Dewan Budaya. Learn more about PIXEL 2024 at our{" "}
            <span>
              <a href="https://pixelusm.com/" target="_blank">
                official website
              </a>
            </span>
            !
          </div>
        </div>
        <div className="card-details-img">
          <img
            src="https://s6.imgcdn.dev/mC7vD.webp"
            alt="PIXEL 2023 image"
            className="pixel-img"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pixel2024;

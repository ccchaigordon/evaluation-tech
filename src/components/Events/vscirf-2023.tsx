import NavBar from "../NavBar";
import Footer from "../Footer";
import useDocumentTitle from "../useDocumentTitle";
import { useEffect } from "react";

function Vcsirf2023() {
  useDocumentTitle(
    "Virtual Computer Science Internship & Recruitment Fair 2023 | CS Society USM"
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
            Virtual Computer Science Internship & Recruitment Fair 2023
          </h1>
          <div className="card-tag">
            <div className="tag-year">Year 3 & 4</div>
            <div className="tag-details">Flagship</div>
          </div>
          <div className="card-details-details">
            <div className="card-details-details-icons">
              <i className="fa fa-calendar text-xl"></i>
              <i className="fa fa-clock text-xl"></i>
              <i className="fa fa-map-marker text-xl"></i>
            </div>
            <div className="card-details-details-dtl">
              <p>4th December 2023</p>
              <p>8:45am - 4:30pm (GMT+8)</p>
              <p>Online</p>
            </div>
          </div>
          <div className="card-details-details-desc">
            Virtual Computer Science Internship & Recruitment Fair (VCSIRF) is
            an annual career fair organised by the USM Computer Science Society
            to provide industrial training placement opportunities for the
            third-year students and to supply employment opportunities for the
            final year students of the School of Computer Sciences, Universiti
            Sains Malaysia. <br />
            <br />
            This event is held virtually this year, enabling students to explore
            opportunities conveniently and gain valuable insights into their
            future careers. The event signifies the dedication of both the
            organisers and participating companies to support students in their
            journey towards successful and fulfilling careers in the field of
            computer science. <br />
            <br />
            Learn more about VCSIRF 2023 at our{" "}
            <span>
              <a href="https://vcsirfusm.com/" target="_blank">
                official website
              </a>
            </span>
            !
          </div>
        </div>
        <div className="card-details-img">
          <img
            src="https://s6.imgcdn.dev/mCS4y.webp"
            alt="VCSIRF image"
            className="vcsirf-2023-img"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vcsirf2023;

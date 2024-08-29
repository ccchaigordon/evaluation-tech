import NavBar from "../NavBar";
import Footer from "../Footer";
import useDocumentTitle from "../useDocumentTitle";

function Me22024() {
  useDocumentTitle("Major Minor Exploration Event 2024 | CS Society USM");

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
            Major Minor Exploration Event 2024
          </h1>
          <div className="card-tag">
            <div className="tag-year">Year 1</div>
            <div className="tag-details">Talk</div>
          </div>
          <div className="card-details-details">
            <div className="card-details-details-icons">
              <i className="fa fa-calendar text-xl"></i>
              <i className="fa fa-clock text-xl"></i>
              <i className="fa fa-map-marker text-xl"></i>
            </div>
            <div className="card-details-details-dtl">
              <p>4th & 5th March 2024</p>
              <p>8:00pm - 10:30pm (GMT+8)</p>
              <p>Online</p>
            </div>
          </div>
          <div className="card-details-details-desc">
            Major Minor Exploration Event 2024 is an online sharing session
            involving first-year and second-year students from the School of
            Computer Sciences, Universiti Sains Malaysia, as well as students
            from other schools who are interested in pursuing a minor in
            Computer Science. <br />
            <br />
            The main objective of this sharing session is to provide detailed
            explanations and information about the process of selecting majors
            and minors for Bachelor of Computer Science (Honours) to assist
            students in choosing their minor in the second semester of their
            first year and their major in the second semester of their second
            year. Additionally, this sharing session also offers an opportunity
            for students from other schools to understand the minor courses
            offered by the School of Computer Sciences. <br />
            <br />
            ME² 2024's target group consists of first-year students from the
            School of Computer Sciences, Universiti Sains Malaysia, while the
            secondary target includes second-year students from the School of
            Computer Sciences, Universiti Sains Malaysia, and students from
            other schools who are interested in taking minor courses in Computer
            Science.
          </div>
        </div>
        <div className="card-details-img">
          <img
            src="./src/assets/me2-2024-poster.webp"
            alt="ME2 2024 image"
            className="me2-img"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Me22024;

import NavBar from "../NavBar";
import Footer from "../Footer";
import useDocumentTitle from "../useDocumentTitle";

function Vhack2024() {
  useDocumentTitle("Varsity Hackathon 2024 | CS Society USM");

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
          <h1 className="card-details-title">Varsity Hackathon 2024</h1>
          <div className="card-tag">
            <div className="tag-year">International</div>
            <div className="tag-details">Flagship</div>
          </div>
          <div className="card-details-details">
            <div className="card-details-details-icons">
              <i className="fa fa-calendar text-xl"></i>
              <i className="fa fa-clock text-xl"></i>
              <i className="fa fa-map-marker text-xl"></i>
            </div>
            <div className="card-details-details-dtl">
              <p>20th April 2024</p>
              <p>8:00am - 6:30pm (GMT+8)</p>
              <p>Dewan Pembangunan Siswa 1, USM</p>
            </div>
          </div>
          <div className="card-details-details-desc">
            Varsity Hackathon, or V HACK, is the annual flagship event of the
            USM Computer Science Society, currently held for the third
            consecutive year, after the success of the inaugural V HACK 2022 and
            later, V HACK 2023. V HACK is one of the biggest student-led
            hackathons in Malaysia, with participants from both local and
            international universities competing to present their innovative
            solutions to a panel of highly accredited judges from both the
            industry and academics. <br />
            <br />
            Since its introduction, V HACK has continued the tradition of
            fostering innovation, collaboration, and creativity within the
            student community. The hackathon serves as a platform for aspiring
            developers, designers, and enthusiasts among university students to
            come together, explore cutting-edge technologies, and transform
            their ideas into tangible projects. <br />
            <br />
            This year, V HACK returns, aiming to exceed previous successes and
            set new benchmarks for student-led hackathons in Malaysia.
            Collaborating with the Securities Commission Malaysia (SC), V HACK
            2024 aims to deliver an unparalleled experience for participants.
            We're elevating the event with expanded workshops, renowned
            speakers, expert mentors, and increased prize pools to reward the
            best of the best. Following the precedent set by V HACK 2023, V HACK
            2024 will conduct its preliminary rounds online, culminating in a
            prestigious Grand Final hosted at Penang, Malaysia, where the
            top-performing teams will compete physically. <br />
            <br />
            Learn more about VHACK 2024 at our{" "}
            <span>
              <a href="https://vhackusm.com/" target="_blank">
                official website
              </a>
            </span>
            !
          </div>
        </div>
        <div className="card-details-img">
          <img
            src="./src/assets/vhack-2024-poster.webp"
            alt=" image"
            className="vhack-img"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vhack2024;

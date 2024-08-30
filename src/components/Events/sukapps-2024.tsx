import NavBar from "../NavBar";
import Footer from "../Footer";
import useDocumentTitle from "../useDocumentTitle";

function Sukapps() {
  useDocumentTitle("Sukan Antara Pusat Pengajian Sains 2024 | CS Society USM");

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
            Sukan Antara Pusat Pengajian Sains 2024
          </h1>
          <div className="card-tag">
            <div className="tag-year">Science Schools</div>
            <div className="tag-details">Sports</div>
          </div>
          <div className="card-details-details">
            <div className="card-details-details-icons">
              <i className="fa fa-calendar text-xl"></i>
              <i className="fa fa-clock text-xl"></i>
              <i className="fa fa-map-marker text-xl"></i>
            </div>
            <div className="card-details-details-dtl">
              <p>8th & 9th April 2024</p>
              <p>8:00am - 5:00pm (GMT+8)</p>
              <p>Azman Hashim USM Sports Arena</p>
            </div>
          </div>
          <div className="card-details-details-desc">
            SUKAPPS, or also known as Sukan Antara Pusat Pengajian Sains is a
            sports competition between seven competing Science Schools in USM.{" "}
            <br />
            <br />
            Schools involved:
            <ul>
              <br />
              <li>School of Computer Sciences </li>
              <li>School of Chemical Sciences</li>
              <li>School of Mathematical Sciences</li>
              <li>School of Biological Sciences</li>
              <li>School of Pharmaceutical Sciences</li>
              <li>School of Chemical Sciences</li>
              <li>School of Physics</li>
            </ul>
            <br />
            There were a variety of sports that each School was competing,
            including Futsal (M), Badminton (M & W), Volleyball (M & W), Netball
            (W).
            <br />
            <br />
            Each year, SUKAPPS will be hosted by one of the Science Schools in
            rotatiom, and this year it was hosted by School of Physics.
            <br />
            <br />
            We are proud to announce that the School of Computer Sciences
            managed to rake in the Champion title for all Badminton categories
            (Men's Single, Women's Single, Men's Double, Women's Double, Mixed)
            and Third Place for Men's Volleyball this year.
          </div>
        </div>
        <div className="card-details-img">
          <img
            src="https://s6.imgcdn.dev/mCBq9.webp"
            alt="Sukapps image"
            className="sukapps-2024-img"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sukapps;

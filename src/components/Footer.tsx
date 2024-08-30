function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top-container">
          <a href="/" className="nav-start-link">
            <div className="">
              <img
                src="https://cssocietyusm.com/assets/logos/organizations/cs-soc-official.svg"
                alt="CS Society Logo"
                className="logo-footer"
              />
            </div>
          </a>
          <div className="footer-link">
            <span className="footer-title">Navigate</span>
            <a href="/about" className="link-hover">
              About us
            </a>
            <a href="/events" className="link-hover">
              Events
            </a>
            <a href="/news" className="link-hover">
              News
            </a>
          </div>
          <div className="footer-col">
            <p>Social</p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/cs.usm.my/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/cs.usm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://tiktok.com/@cs.usm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/cssocietyusm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://t.me/+zA4GF8CVVFpjOWY1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="footer-sch-logo">
            <a
              href="https://cs.usm.my"
              target="_blank"
              className="transition hover:scale-105"
            >
              <img
                src="https://cssocietyusm.com/assets/logos/organizations/CS-logo-transparent.svg"
                title="USM CS School Logo"
                className="text-2xl h-12 pointer-events-none"
              ></img>
            </a>
            <a
              href="https://usm.my"
              target="_blank"
              className="transition hover:scale-105"
            >
              <img
                src="https://cssocietyusm.com/assets/logos/organizations/USM-color.svg"
                title="USM Logo"
                className="text-2xl h-12 pointer-events-none"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2022 - 2023 Computer Science Society, Universiti Sains Malaysia</p>
      </div>
    </footer>
  );
}

export default Footer;

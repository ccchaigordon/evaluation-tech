import useDocumentTitle from "./useDocumentTitle";

function NotFound() {
  useDocumentTitle("Page Not Found");

  return (
    <div className="error-container">
      <div className="error-gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="error-content">
        <h1 className="error-main-heading">
          This page is not developed...yet.
        </h1>
        <p>
          ...the existence of this page is just to let you know that either it
          never existed or to indicate that the button is clickable.
        </p>
        <a href="/">
          <button className="error-btn">
            Back to home <i className="far fa-hand-point-right"></i>
          </button>
        </a>
      </div>
    </div>
  );
}

export default NotFound;

import React from "react";
import "./Footer.scss";

function Footer({ sharedBasicInfo }) {
  const networks = sharedBasicInfo?.social?.map((network) => (
    <a
      key={network.name}
      href={network.url}
      target="_blank"
      rel="noopener noreferrer"
      className="m-4"
      aria-label={network.name}
    >
      <i className={network.class}></i>
    </a>
  ));

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{networks}</div>
        <div className="copyright py-4 text-center">
          <div className="container">
            <small>&copy; {sharedBasicInfo?.name ?? "???"}</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
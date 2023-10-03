import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="copyrights">
        <span>© 2023 Nnquan. All rights reserved.</span>
      </div>
      <div className="links">
        <Link to="https://www.facebook.com" className="facebook">
          <img src="square-facebook.svg" alt=""></img>
        </Link>
        <Link to="https://www.instagram.com" className="instagram">
          <img src="square-instagram.svg" alt=""></img>
        </Link>
        <Link to="https://www.linkedin.com" className="linkedln">
          <img src="linkedin.svg" alt=""></img>
        </Link>
        <Link to="https://github.com" className="github">
          <img src="github.svg" alt=""></img>
        </Link>
      </div>
    </div>
  );
}

export default Footer;

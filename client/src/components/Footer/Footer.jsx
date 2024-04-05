import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <section className="footer__section">
        <div className="footer__div">
        <Link className="footer__navlink">
          <p>Refund Policy</p>
        </Link>
        <Link className="footer__navlink">
          <p>Shipping Policy</p>
        </Link>
        <Link className="footer__navlink">
          <p>Privacy Policy</p>
        </Link>

        <Link className="footer__navlink">
          <p>Terms of Service</p>
        </Link>
        </div>
      </section>
    </>
  );
}

export default Footer;

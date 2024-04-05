import "./Header.scss";
import { useNavigate } from "react-router-dom";
import brewLogo from "../../assets/icons/brewLogo.png";
import bellIcon from "../../assets/icons/bell.png";
import avatarIcon from "../../assets/icons/avatar.png";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <section className="header">
        <div className="header__links">
          <img
            src={brewLogo}
            alt=""
            className="header__links-logo"
            onClick={() => navigate("/")}
          />

          <p className="header__orders" onClick={() => navigate("/orders")}>
            Orders
          </p>

          <p className="header__returns" onClick={() => navigate("/returns")}>
            Returns
          </p>
        </div>

        <div className="header__tail">
          <div className="header__icons">
            <img src={bellIcon} alt="" className="header__bell--icon"></img>
            <img
              src={avatarIcon}
              alt=""
              className="header__avatar--icon"
              onClick={() => navigate("/profile")}
            ></img>
          </div>
          <div className="header__buttons">
            <button className="header__button">
              <p className="header__gostore"> Go to store </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Header;

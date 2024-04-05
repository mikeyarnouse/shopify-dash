import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="header">
        <div className="header__content">
          <div className="header__pages">
                <Link path='/'>
                <img src='' alt=''>
                </img>
                </Link>
                
                <Link path='../../pages/Orders/Orders.jsx' className="header__navlink">
                    <p className="header__orders"> Orders </p>
                </Link>

                <Link className="header__navlink">
                  <p className="header__returns"> Returns </p>
                </Link>
                
            
          </div>

            <div> 
                <div className="header__icons"> 
                <Link path=''> 
                <img src='' alt='' className="header__bell--icon">

                </img>
                <img src='' alt='' className="header__avatar--icon">

                </img>
                
                </Link>
                </div>
                <div className="header__buttonsect"> 
                    <Link> 
                    <button className="header__button"> 
                       <p className="header__gostore"> Go to store </p> 
                    </button>
                    </Link>
                </div>


            </div>
        </div>




      </section>
      <h1> Header RIGHT HERE </h1>
    </>
  );
}
export default Header;

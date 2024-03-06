import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../context/GlobalState";
import Header from "./Header";

export const Nav = () => {
  const { state, setState, contactState, setContactState } = useGlobalState();
  function togleContact() {
    setContactState(true);
    setState(false);
  }

  return (
    <header className="nav-open">
      <div className="header">
        <Link to="/" title="Matrix Solutions" className="logo ir">
          Matrix
        </Link>
        <div onClick={() => setState(false)} className="menu ir active">
          Menu
        </div>
        <div className="contact-icon ir" onClick={togleContact}>
          contact-icon
        </div>
        {/* <Header /> */}
        <nav>
          <div className="middle-nav">
            <div className="middle-cell">
              <ul>
                <li>
                  <Link className="scroll" to="/our-clients">
                    Our clients
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to="/recent-work">
                    Recent work
                  </Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/our-work">Our work</Link>
                </li>
                <li>
                  <Link className="scroll" to="/what-we-do">
                    What we do
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to="/our-technologies">
                    Our technologies
                  </Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link className="scroll" to="/why-to-choose-us">
                    Why choose us
                  </Link>
                </li>
                {/*<li>
                <Link to="#">
                  About Us
                  <ul>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Offices</Link></li>
                    <li><Link to="#">People</Link></li>
                    <li><Link to="#">Careers</Link></li>
                  </ul>
                </Link>
              </li>*/}
                {/*<li><Link class="scroll" to="#footer">Contact us</Link></li>*/}
                <li>
                  <Link className="scroll c-ac" to="/contact-us">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

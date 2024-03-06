import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './Nav';
import { useGlobalState } from '../../context/GlobalState';
import { Contact } from './Contact';

const Header = () => {
    const { state, setState, contactState, setContactState, setContactFormState } = useGlobalState()

    const toggleNav = () => {
        setState(true);
        setContactState(false);
    };

    const toggleContact = () => {
        setState(false);
        setContactState(true);
    };

    return (
        <>
            {state ? <Nav /> : (
                <header>
                    <div className="header">
                        <Link to="/" title="Matrix Solutions" className="logo ir">
                            Matrix
                        </Link>
                        <div className="menu ir" onClick={toggleNav}>
                            Menu
                        </div>
                        <div className="contact-icon ir" onClick={toggleContact}>
                            contact-icon
                        </div>
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
                                        <li>
                                            <Link className="scroll c-ac" to="/contact-us">
                                                Contact us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        {contactState ? <Contact /> : ""}
                    </div>
                </header>
            )}
        </>
    );
};

export default Header;

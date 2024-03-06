import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../context/GlobalState';

export const Contact = () => {
  const {  setContactState } = useGlobalState()

  return (
    <div className="contact-form" style={{ display: "block" }}>
      <div className="cf-inner">
        <div className="cf-detail">
          <div className="contact-close ir"  onClick={()=>setContactState(false)}>
            Menu
          </div>
          <div className="c-left">
            <h2>Contact us</h2>
            <p>
              We’d love to hear from you. Either fill out the form, <br />
              <Link to="mailto:info@matrix-solutions.net"> email us</Link>, or give
              the team a call:
            </p>
            <span className="c-number">
              <Link to="tel:+923008485536" data-tel={+923008485536}>
                +92 300 848 5536
              </Link>
            </span>
            <p>
              666, Askari IX,
              <br />
              Lahore Cantt, Pakistan.
            </p>
            <p>
              129 J, Model Town,
              <br />
              Lahore, Pakistan.
            </p>
          </div>
          <div className="c-right">
            <div className="form">
              <form
                id="MyForm"
                name="MyForm"
                method="post"
                action="/register-frm-action.asp"
                onsubmit="return Submitform(this);"
              >
                <div>
                  <input
                    id="contctFName"
                    name="contctFName"
                    type="text"
                    placeholder="Name*"
                    fdprocessedid="5rowaw"
                  />
                </div>
                <div>
                  <input
                    id="contctEmail"
                    name="contctEmail"
                    type="text"
                    placeholder="Email*"
                    fdprocessedid="o587e9"
                  />
                </div>
                <div>
                  <input
                    id="contctMobileNo"
                    name="contctMobileNo"
                    type="text"
                    placeholder="Mobile No"
                    fdprocessedid="gyrik"
                  />
                </div>
                <div>
                  <input
                    id="Subject"
                    name="Subject"
                    type="text"
                    placeholder="Subject"
                    fdprocessedid="58bpgm"
                  />
                </div>
                <div className="tarea">
                  <textarea
                    id="contctTextarea"
                    name="txt_msg"
                    maxLength={2000}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <label className="error-text" id="errormsg" name="errormsg" />
                <div>
                  <input
                    className="btn submit"
                    id="btncontact"
                    type="submit"
                    defaultValue="SUBMIT"
                    fdprocessedid="63cwrg"
                  />
                  {/*<Link className="btn submit" to="javascript:;" id="btncontact" type="submit">SUBMIT</Link>*/}
                </div>
              </form>
            </div>
            <div className="v-center">
              <div className="v-block-detail">
                <h2>Thank you</h2>
                <p>Our team will contact you soon.</p>
                {/*<Link className="btn" to="javascript:;">Close</Link>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

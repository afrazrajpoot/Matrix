export const Privacy_policy = () => (
    <>
      {/*<div id="container-cookies"></div>*/}
      <div id="outer-wrapper">
        <header>
          <div className="header">
            <a href="../" title="Matrix Solutions" className="logo ir">
              Matrix
            </a>
            <a className="menu ir" href="#">
              Menu
            </a>
            <a className="contact-icon ir" href="#">
              contact-icon
            </a>
            <nav>
              <div className="middle-nav">
                <div className="middle-cell">
                  <ul>
                    <li>
                      <a className="scroll" href="../#our-clients">
                        Our clients
                      </a>
                    </li>
                    <li>
                      <a className="scroll" href="./#recent-work">
                        Recent work
                      </a>
                    </li>
                    <li>
                      <a href="../services">Services</a>
                    </li>
                    <li>
                      <a href="../our-work">Our work</a>
                    </li>
                    <li>
                      <a className="scroll" href="./#what-we-do">
                        What we do
                      </a>
                    </li>
                    <li>
                      <a className="scroll" href="./#our-technologies">
                        Our technologies
                      </a>
                    </li>
                    <li>
                      <a href="../blogs">Blogs</a>
                    </li>
                    <li>
                      <a className="scroll" href="./#why-to-choose-us">
                        Why choose us
                      </a>
                    </li>
                    {/*<li>
    <a href="javascript:;">About Us</a>
      <ul>
    <li><a href="javascript:;">About Us</a></li>
    <li><a href="javascript:;">Offices</a></li>
    <li><a href="javascript:;">People</a></li>
    <li><a href="javascript:;">Careers</a></li>
      </ul>
      </li>*/}
                    {/*<li><a class="scroll" href="#footer">Contact us</a></li>*/}
                    <li>
                      <a className="scroll c-ac" href="javascript:;">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div className="contact-form">
          <div className="cf-inner">
            <div className="cf-detail">
              <a className="contact-close ir" href="#">
                Menu
              </a>
              <div className="c-left">
                <h2>Contact us</h2>
                <p>
                  We’d love to hear from you. Either fill out the form, <br />
                  <a href="mailto:info@matrix-solutions.net"> email us</a>, or
                  give the team a call:
                </p>
                <span className="c-number">
                  <a href="tel:+923008485536 " data-tel={+923008485536}>
                    +92 300 848 5536
                  </a>
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
                    action="../register-frm-action.asp"
                    onsubmit="return Submitform(this);"
                  >
                    <div>
                      <input
                        id="contctFName"
                        name="contctFName"
                        type="text"
                        placeholder="Name*"
                      />
                    </div>
                    <div>
                      <input
                        id="contctEmail"
                        name="contctEmail"
                        type="text"
                        placeholder="Email*"
                      />
                    </div>
                    <div>
                      <input
                        id="contctMobileNo"
                        name="contctMobileNo"
                        type="text"
                        placeholder="Mobile No"
                      />
                    </div>
                    <div>
                      <input
                        id="Subject"
                        name="Subject"
                        type="text"
                        placeholder="Subject"
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
                      />
                      {/*<a class=" btn submit" href="javascript:;" id="btncontact" type="submit">SUBMIT</a>*/}
                    </div>
                  </form>
                </div>
                <div className="v-center">
                  <div className="v-block-detail">
                    <h2>Thank you</h2>
                    <p>Our team will contact you soon.</p>
                    {/*<a class="btn" href="javascript:;">Close</a>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div id="content">
            {/*<div class="video-wrapper" style="background-image: url('space-and-time-homepage-video.jpg');">
    <video class="home-video-inner" poster="../images/softwaresliderimg.jpg" playsinline="" muted="" autoplay="" loop="" data-object-fit="cover">
        <source src="../images/video1.mp4" type="video/mp4" type="video/mp4"><p>Sorry, your browser doesn't support HTML5 video.</p>
    </video>
    <div class="bg-image" data-aos="zoom-in" style="background-image:url(../images/softwaresliderimg.jpg)"></div>
      </div>*/}
            <div id="slider" className="small-h">
              <div id="content-inner" className="flexslider">
                <ul className="slides">
                  <li>
                    <div
                      className="bgslider shade"
                      style={{ backgroundImage: "url(../images/img-home.jpg)" }}
                    >
                      <img
                        src="../images/softwaresliderimg.jpg"
                        alt="Group chatting in bar"
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="description">
                      <div className="content-inner">
                        <div className="c-inner">
                          <div className="dep-inner">
                            <div className="inner-center">
                              <h1>Privacy Notice</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="breadcrumb"
              style={{ backgroundColor: "#f3f4f5 !important" }}
            >
              <div className="content-inner">
                <ul>
                  <li>
                    <a href="../">Home</a>
                  </li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>
            <div className="text-box">
              <div className="content-inner">
                <div className="tb-inner">
                  <p>
                    Matrix Solutions (“Matrix Solutions”) company registration
                    number is 02660562 and we are registered at 666, Askari IX
                    Lahore Cantt, Pakistan.
                  </p>
                  <p>
                    Matrix Solutions are committed to protecting your privacy and
                    any data collected that concerns you. By affirmatively
                    accepting the Terms and using this website you agree to Matrix
                    Solutions’s use of the data collected in accordance with this
                    Privacy Notice and Cookie policy. This Notice indicates the
                    type of processes that may result in data being collected
                    about you.
                  </p>
                  <h3>Who your data is shared with</h3>
                  <p>
                    Matrix Solutions do not share or sell submitted data to any
                    other company without your prior consent other than when
                    required to do so by law, or with those data processors used
                    for business operations, who process your data under Matrix
                    Solutions’s control:
                  </p>
                  <ul>
                    <li>Bullhorn (CRM)</li>
                    <li>
                      Thames (AdVantage accounting and media planning system)
                    </li>
                    <li>CommuniGator (online and email marketing campaigns)</li>
                    <li>Facebook (social media retargeting campaigns)</li>
                    <li>Google (website tracking and statistical services)</li>
                  </ul>
                  <p>
                    Matrix Solutions may from time to time provide information of
                    a general nature to third parties – for example, the number of
                    individuals visiting the website or completing a registration
                    form. This information is anonymised and does not include any
                    details which could be used to identify individuals.
                  </p>
                  <h3>Using your personal information</h3>
                  <p>
                    Matrix Solutions will collect two types of information from
                    users of this site: personal data (that which is identifiable,
                    such as names and email addresses) and statistical data which
                    is anonymised, such as how many users of the site there are
                    and which pages they view.
                  </p>
                  <p>
                    The personal information collected is used primarily to
                    process the task for which you visited the website. Data
                    collected is held in accordance with all UK Data Protection
                    Laws and all reasonable precautions are taken to prevent
                    unauthorised access to this information. This safeguard may
                    require you to provide additional forms of identity should you
                    wish to obtain information about the details held for you (a
                    “Subject Access Request”).
                  </p>
                  <h3>Personal Data</h3>
                  <p>
                    This is only captured when you provide it, such as when you
                    request further information via contact forms, apply for a
                    job, register for a newsletter or enter a competition.
                  </p>
                  <p>
                    By submitting your email address and affirmatively ticking
                    your consent to communications, you are agreeing to receive
                    the information you have requested, as well as appropriate and
                    useful communications. These include news and information
                    about our company and services, industry updates and seasonal
                    competitions, or relevant alternative job roles if you have
                    consented to this when submitting your CV.
                  </p>
                  <p>
                    At any time, you can remove yourself from these email lists by
                    clicking the unsubscribe link found in the footer of the email
                    message. Whilst clicking the unsubscribe link in the email is
                    the quickest way to remove yourself from the list, you can
                    also email matrix-solutions.net
                  </p>
                  <p>
                    Your email address and personal information will never be made
                    available to another organisation for marketing purposes
                    without your explicit consent. Matrix Solutions are committed
                    to ensuring you remain in control of the personal data you
                    provide.
                  </p>
                  <h3>Statistical Data</h3>
                  <p>
                    This website uses third parties such as Google Analytics to
                    provide information about visitors. Matrix Solutions may use
                    cookies for website statistics, such as recording the number
                    of users to the site and which pages are visited. This
                    information does not identify who you are and is used this to
                    monitor the effectiveness of the website.
                  </p>
                  <h3>IP address lookup</h3>
                  <p>
                    When you visit this website your IP address will be recorded.
                    This address will be matched against public and proprietary IP
                    address databases to provide information about your visit.
                    This information may identify the organisation to whom the IP
                    address is registered but not individuals. In some limited
                    cases, for example single person companies, it may be possible
                    to identify personal data from publicly available ICANN data.
                  </p>
                  <h3>Profiling and Cookies</h3>
                  <p>
                    Cookies help provide important site functionality so that you
                    don’t have to re-enter information multiple times. They also
                    help remember which links and pages have been clicked or
                    viewed during a session. If you have provided Matrix Solutions
                    with Personal Data, for example by completing the contact
                    form, this data may be associated with other information,
                    allowing Matrix Solutions to record and identify what is most
                    relevant to you.
                  </p>
                  <p>
                    Most cookies are tracked anonymously to feed Google Analytics
                    and learn how to improve your experience on the site. Matrix
                    Solutions’s marketing emails also use cookies to track open
                    rates and performance indicators; this helps improve the
                    relevance of the communications sent to you.
                  </p>
                  <p>
                    By using your browser controls, you are always in control of
                    the cookies Matrix Solutions store. More information on how to
                    control cookies can be found here.
                  </p>
                  <p>
                    Please <a href="/cookie-policy" /> to view our Cookie Policy.
                  </p>
                  <h3>Changes to this Notice</h3>
                  <p>
                    Any changes to this Privacy Notice will be placed here and
                    will supersede this version. Matrix Solutions will take
                    reasonable steps to draw your attention to any changes in the
                    Notice, however it is suggested that you read this page each
                    time you use the website to ensure that it still meets with
                    your approval.
                  </p>
                  <h3>Contacting us</h3>
                  <p>
                    If you would like Matrix Solutions to update or remove
                    information held on you, please contact matrix-solutions.net
                  </p>
                  <p>
                    If you have any questions about this Privacy Notice, would
                    like further information on how your information is used, how
                    the security of your information is maintained, or if you want
                    to know what information Matrix Solutions have collected about
                    you (a “Subject Access Request”), please make contact via the
                    details below. You may be requested to provide some form of
                    identity verification to ensure your Personal Data is
                    safeguarded.
                  </p>
                  <p>
                    666, Askari IX
                    <br />
                    Lahore Cantt, Pakistan.
                  </p>
                </div>
              </div>
            </div>
            {/*<ul class="slides">
    <li>
        <div class="bgslider web" style="background-image: url(../images/slide1.jpg);"></div>
        <div class="bgslider mobile" style="background-image: url(../images/slide1-mobile.jpg);"></div>
        <div class="description fxup">
            <div class="content-inner">
                <div class="dep-inner">
                    <h2>The Smart Solution to Expansion at Heathrow</h2>
                    <p>Extending the Northern Runway – enabling environmental standards to be met, not compromised</p>
                    <a class="btn" href="our-proposal.html">Our Proposal</a>
                </div>
            </div>
        </div>
    </li>
      </ul>*/}
          </div>
        </section>
        <footer>
          <div id="footer" className="footer-links">
            <div className="footer">
              <div className="inner">
                <div className="footer-logo">
                  <img src="/images/matrix-logo.svg" />
                </div>
                <div className="footer-left">
                  <div className="footer-contact">
                    <h4>We are available at...</h4>
                    {/*<span>Tel: <a class="tel-num" href="tel:+17345784736" data-tel="+17345784736">+1 734 578 4736</a></span>*/}
                    {/*<span>Tel: <a class="tel-num" href="tel:+924235947181" data-tel="+924235947181">+92 423 594 7181</a></span>*/}
                    <span>
                      Mob:{" "}
                      <a
                        className="mob-num"
                        href="tel:+923008485536"
                        data-tel={+923008485536}
                      >
                        +92 300 848 5536
                      </a>{" "}
                    </span>
                  </div>
                  <div className="footer-offices">
                    <h4>Our locations are…</h4>
                    <div className="offices-list">
                      {/*<ul>
                        <li style="padding-bottom:30px;">*/}
                      {/*<span>Address</span>*/}
                      {/*US Office: <br />2200 N Canton Center<br />
                            RD Suite 170 Canton,<br />
                            MI, 48187, USA
                        </li>
                        <li>*/}
                      {/*<span>Address</span>*/}
                      {/*&nbsp;
                            </li>
  
                        </ul>*/}
                      <ul>
                        <li>
                          {/*<span>Address</span>*/}
                          666, Askari IX
                          <br />
                          Lahore Cantt, Pakistan
                        </li>
                        <li>
                          {/*<span>Address 2</span>*/}
                          129 J, Model Town
                          <br />
                          Lahore, Pakistan
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="patner-link">
                    <h4>Our partners are...</h4>
                    <a href="https://smallbackroom.co.uk/" target="_blank">
                      Smallbackroom
                    </a>
                    <a href="http://www.matrixmanagement.com.pk/" target="_blank">
                      Matrix Management
                    </a>
                    <a href="https://zealsoftsolutions.com/" target="_blank">
                      Zealsoft
                    </a>
                    {/*<a href="http://storyandco.eu/" target="_blank">Storynco</a>*/}
                  </div>
                </div>
                <div className="social-link">
                  <div className="social-inner">
                    <a
                      className="facebook ir"
                      href="https://facebook.com/Matrix-Solutions-101790821682744"
                      title="Facebook"
                      target="_blank"
                    >
                      Facebook
                    </a>
                    <a
                      className="twitter ir"
                      href="javascript:;"
                      style={{ display: "none" }}
                      title="Twitter"
                      target="_blank"
                    >
                      Twitter
                    </a>
                    <a
                      className="linked-in ir"
                      href="https://www.linkedin.com/in/matirx-solutions-2177bb1b7/"
                      title="LinkedIn"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="youtube ir"
                      href="https://www.youtube.com/channel/UCIpSvDsdtmJy67Gig8m6RUQ"
                      title="Youtube"
                      target="_blank"
                    >
                      Youtube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <span className="copyright-text">© Copyright 2000-2022.</span>
            <a href="terms-and-conditions" className="copyright-link">
              Terms &amp; Conditions
            </a>
            <a href="privacy-policy" className="copyright-link">
              Privacy Policy
            </a>
            <a href="cookie-policy" className="copyright-link">
              Cookies Policy
            </a>
          </div>
        </footer>
      </div>
      <link
        rel="stylesheet"
        type="text/css"
        href="../scripts/fancybox/jquery.fancybox.css?v=2.1.5"
        media="screen"
      />
      {/**/}
      {/* Global site tag (gtag.js) - Google Analytics */}
    </>
  )
  
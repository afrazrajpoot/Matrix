export const Cookie_policy = () => (
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
                      <a className="scroll" href="./../#our-clients">
                        Our clients
                      </a>
                    </li>
                    <li>
                      <a className="scroll" href="./../#recent-work">
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
                      <a className="scroll" href="./../#what-we-do">
                        What we do
                      </a>
                    </li>
                    <li>
                      <a className="scroll" href="./../#our-technologies">
                        Our technologies
                      </a>
                    </li>
                    <li>
                      <a href="../blogs">Blogs</a>
                    </li>
                    <li>
                      <a className="scroll" href="./../#why-to-choose-us">
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
                    {/*<li><a class="scroll" href="./../#footer">Contact us</a></li>*/}
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
                              <h1>Cookie Policy</h1>
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
                  <li>Cookie policy</li>
                </ul>
              </div>
            </div>
            <div className="text-box">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>What are cookies?</h3>
                  <p>
                    Cookies are small text files that are placed on to your
                    computer by websites that you visit. We believe that the use
                    of these tools enables us to provide users with a more
                    meaningful web experience. They are used to make websites
                    work, to improve the efficiency of websites, to enhance the
                    user’s experience and to provide usage information on
                    websites. This information should make your website visits
                    more productive by storing information on your habits and
                    remembering your preferences and any login details, as well as
                    enabling a website to remember you, either by the length of
                    your visit and how you navigate the site (a session cookie,
                    which only exists throughout your visit to the site) or for
                    returning visits (a persistent cookie, which can be stored for
                    up to 2 years).
                  </p>
                  <p>
                    Our website also uses cookies to target content and marketing
                    messages based on your location or browsing habits. If you
                    have provided us with personal data – completing a contact
                    form for example – we may associate this personal data with
                    other information. This will allow us to identify and record
                    what is most relevant to you.
                  </p>
                  <h2>Types of cookies we use</h2>
                  <h3>Essential cookies:</h3>
                  <p>
                    These are cookies that are required for the operation of our
                    website, such as those that enable you to use online forms or
                    watch videos. These cookies don’t gather any data about you
                    that could be used for marketing or remembering personal
                    information.
                  </p>
                  <h3>Analytical cookies:</h3>
                  <p>
                    We use Google Analytics to help us improve the way our website
                    works by ensuring that users are finding what they are looking
                    for easily by identifying which pages are visited and if any
                    errors are encountered. The information collected is anonymous
                    and is used to help us improve how our website works,
                    understand what interests our users, and measure how effective
                    our advertising is.
                  </p>
                  <p>
                    We enable Google Analytics cookies from your first visit to
                    the website, although if you select “Disable Cookies” when
                    prompted they will be disabled.{" "}
                  </p>
                  <h3>Marketing cookies:</h3>
                  <p>
                    These are used to recognise you when you return to our
                    website. This enables us to personalise your experience and
                    remember your preferences. These cookies also record your
                    visit to our website, the pages you have visited and the links
                    you have followed. We will use this information, collected by
                    partners such as CommuniGator, to make our website, the
                    advertising displayed on it and the communications sent more
                    relevant to you.
                  </p>
                  <p>
                    Your web browser can choose whether to accept cookies. Most
                    web browsers are initially set up to accept them as cookies
                    are not dangerous and cannot be used to circulate viruses. By
                    accepting our cookie consent notice and continuing to use this
                    site, you accept our ongoing use of cookies that make
                    advertising and communications more relevant to you and your
                    interests, as well as helping us to improve the site. At any
                    time, you may adjust your web browser settings to refuse
                    cookies. For more information on how to do this please refer
                    to this guide
                  </p>
                  <p>
                    For more information about cookies in general, please visit:{" "}
                    <a herf="javascript:;"> site Name here</a>
                  </p>
                  <h3>Third party cookies on our site</h3>
                  <p>
                    The following sites may set their own cookies whilst browsing
                    our site:
                  </p>
                  <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Pinterest</li>
                    <li>YouTube </li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Google</li>
                    <li>Bing</li>
                  </ul>
                  <p>
                    Typically, these cookies will be set if you are or have been
                    signed in to the corresponding account and are linked to the
                    use of the social media ‘like’ buttons embedded on our site.
                    The use of these cookies should have been detailed in each
                    platform’s Terms and Conditions or Privacy Policies when you
                    signed up, but for a refresher on these policies please select
                    above.
                  </p>
                  <p>
                    We make use of remarketing functionality, allowing us display
                    targeted ads to previous visitors of the site. We use Google
                    AdWords remarketing, which set information within a
                    doubleclick.net cookie. You can find out more information by
                    visiting Google Ads Preferences
                  </p>
                  <p>
                    We use Google’s doubleclick.net cookie to track the
                    performance of our AdWords campaigns. If you visit certain
                    pages on our website, Google and Periscopix will be able to
                    tell that your visit was a result of a click on one of these
                    ads. If you’d like to know more about how Google handles
                    information gathered from the use of cookies, please read
                    their privacy policy:
                  </p>
                  <h3>Google Privacy Policy</h3>
                  <p>
                    We also use Facebook’s cookies set for conversion tracking and
                    measuring the performance of our Facebook advertising
                    campaigns. Additionally, user behaviour on our website may be
                    used to build custom audiences for our own Facebook
                    advertising purposes, such as displaying an ad on Facebook if
                    you visited our site or looked at a few pages but didn’t make
                    contact. The below links have more information on Facebook’s
                    interest-based advertising and how to opt out:
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
                    <a class="btn" href="our-proposal">Our Proposal</a>
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
  
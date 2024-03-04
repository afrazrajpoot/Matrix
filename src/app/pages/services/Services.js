export const Services = () => (
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
            <video class="home-video-inner" poster="/images/softwaresliderimg.jpg" playsinline="" muted="" autoplay="" loop="" data-object-fit="cover">
                <source src="/images/video1.mp4" type="video/mp4" type="video/mp4"><p>Sorry, your browser doesn't support HTML5 video.</p>
            </video>
            <div class="bg-image" data-aos="zoom-in" style="background-image:url(images/softwaresliderimg.jpg)"></div>
        </div>*/}
            <div id="slider" className="small-h">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <div
                      className="bgslider shade"
                      style={{
                        backgroundImage: "url(../images/services-banner2.jpg)"
                      }}
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
                              <h1>Services</h1>
                              {/*<p>
                                                Matrix Solutions brands, builds, and promotes, offering<br />
                                                end-to-end solutions, agility in execution, and depth of specialization.
                                            </p>*/}
                              {/*<a class="btn scroll" href="#what-we-do">Our services</a>
                                            <a class="btn" href="our-work">Our work</a>*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*<li>
                        <div class="bgslider shade" style="background-image:url(images/softwaresliderimg.jpg);">
                            <img src="/images/softwaresliderimg.jpg" alt="Group chatting in bar" style="display:none" />
                        </div>
                        <div class="description">
                            <div class="content-inner">
                                <div class="c-inner">
                                    <div class="dep-inner">
                                        <div class="inner-center">
                                            <h1>Lorem ipsum dolor set amet 2</h1>
                                            <p>Lorem ipsum dolor set amet Lorem ipsum dolor set amet Lorem ipsum dolor set amet Lorem ipsum dolor set amet </p>
                                            <a class="btn scroll" href="#what-we-do">Our services</a>
                                            <a class="btn" href="our-work">Our work</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>*/}
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
                  <li>Services</li>
                </ul>
              </div>
            </div>
            <div className="services" id="our-technologies">
              <div className="content-inner">
                <div className="services-inner">
                  {/*<h3>Our Technologies</h3>*/}
                  <ul>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div className="por-detail">
                        <h5>Strategy</h5>
                        <p>
                          We’re consultants, guides, and partners for brands on
                          digital transformation journeys. Wherever you’re going,
                          we bring ideas and excitement to help you get there.
                        </p>
                        <div className="list">
                          <h4>Digital Strategy</h4>
                          <h4>Brand Strategy</h4>
                          <h4>Digital Transformation</h4>
                        </div>
                        <a className="btn" href="../strategy/">
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-Strategy.png" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Experience Design</h5>
                        <p>
                          We stay very close to a range of technology partners,
                          but we’re not married to any of them. That enables us to
                          offer platform-agnostic recommendations without
                          sacrificing the advantages of specialization and
                          technical excellence.
                        </p>
                        <div className="list">
                          <h4>Website Design</h4>
                          <h4>Mobile App Design</h4>
                          <h4>eCommerce Design</h4>
                          <h4>Global Experience Assessment</h4>
                          <h4>Data Curation + Labeling</h4>
                          <h4>Information Architecture + User Experience</h4>
                        </div>
                        <a className="btn" href="../experience-design/">
                          Read More
                        </a>
                      </div>
                      <img src="../images/Experience Design.jpg" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Technology</h5>
                        <p>
                          A digital platform’s strategy, design, and development
                          must all promote one goal: creating a valuable,
                          memorable experience for the user. We create experiences
                          that connect deeply with your target audience’s needs,
                          and inspire not just affection, but action.
                        </p>
                        <div className="list">
                          <h4>Solutions Architecture</h4>
                          <h4>Website Development</h4>
                          <h4>App Development</h4>
                          <h4>eCommerce Development</h4>
                          <h4>Next Gen</h4>
                          <h4>Partnerships + Content Management Systems</h4>
                        </div>
                        <a className="btn" href="../technology/">
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-Technology.jpg" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Digital Marketing</h5>
                        <p>
                          How can your marketing become more data-driven and more
                          human-centric? We believe the answer lies in deeper
                          collaboration, powerful storytelling, and analytical
                          rigor – combined with the agile methodology needed to
                          bring it all together.
                        </p>
                        <div className="list">
                          <h4>Marketing Strategy</h4>
                          <h4>Social Media Marketing</h4>
                          <h4>Search Engine Optimization</h4>
                          <h4>Paid Media</h4>
                          <h4>Data Analytics + Business Intelligence</h4>
                          <h4>Content Marketing</h4>
                          <h4>Digital PR</h4>
                          <h4>Influencer Marketing</h4>
                        </div>
                        <a className="btn" href="/digital-marketing/">
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-digital-marketing.jpg" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Branding</h5>
                        <p>
                          How do you make real connections in a noisy world?
                          Matrix brings together lean, cross-disciplinary teams to
                          tackle the big challenge facing brands today. We build
                          digital-ready brands that are authentic, memorable, and
                          deeply attuned to their audiences.
                        </p>
                        <div className="list">
                          <h4>Logo Design</h4>
                          <h4>Brand Collateral</h4>
                          <h4>Brand Identity</h4>
                        </div>
                        <a className="btn" href="../branding/">
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-branding.jpg" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Testing</h5>
                        <p>
                          Quality Analysts test the software thoroughly to check
                          for errors by forming test cases.
                        </p>
                        <div className="list">
                          <h4>Unit Testing</h4>
                          <h4>Integration Testing</h4>
                          <h4>System Testing</h4>
                          <h4>Acceptance Testing</h4>
                        </div>
                        <a className="btn" href="../testing/">
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-testing.jpg" />
                    </li>
                    <a
                      href="javascript:;"
                      className="c-ac btn"
                      style={{
                        color: "white",
                        backgroundColor: "royalblue",
                        textDecoration: "none"
                      }}
                    >
                      LET'S TALK ABOUT YOUR PROJECT
                    </a>
                  </ul>
                </div>
              </div>
            </div>
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
  
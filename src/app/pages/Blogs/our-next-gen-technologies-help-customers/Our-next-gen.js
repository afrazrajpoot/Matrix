export const Our_next_gen = () => (
    <>
      {/*<div id="container-cookies"></div>*/}
      <div id="outer-wrapper">
        <header>
          <div className="header">
            <a href="../../" title="Matrix Solutions" className="logo ir">
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
                      <a href="../../services">Services</a>
                    </li>
                    <li>
                      <a href="../../our-work">Our work</a>
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
                      <a href="../../blogs">Blogs</a>
                    </li>
                    <li>
                      <a className="scroll" href="./../#why-to-choose-us">
                        Why choose us
                      </a>
                    </li>
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
                    action="../../register-frm-action.asp"
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
                    </div>
                  </form>
                </div>
                <div className="v-center">
                  <div className="v-block-detail">
                    <h2>Thank you</h2>
                    <p>Our team will contact you soon.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div id="content">
            <div id="slider" className="small-h">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <div
                      className="bgslider shade"
                      style={{
                        backgroundImage: "url(../../images/services-banner2.jpg)"
                      }}
                    >
                      <img
                        src="../../images/softwaresliderimg.jpg"
                        alt="Group chatting in bar"
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="description">
                      <div className="content-inner">
                        <div className="c-inner">
                          <div className="dep-inner">
                            <div className="inner-center">
                              <h1>
                                Our Next-Gen Technologies help Customers to
                                succeed
                              </h1>
                              <ul id="breadcrumb" className="web">
                                <li>
                                  <a href="../../blogs/Professional-web-design-company/">
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="breadcrumb">
              <div className="content-inner">
                <ul>
                  <li>
                    <a href="../../">Home</a>
                  </li>
                  <li>
                    <a href="../../blogs">Blogs</a>
                  </li>
                  <li>Our Next-Gen Technologies help Customers to succeed</li>
                </ul>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <ul id="breadcrumb" className="mobile">
                  <li>
                    <a href="../../blogs/Professional-web-design-company/">
                      Next
                    </a>
                  </li>
                  {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
                </ul>
                <div className="tb-inner">
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    Next-Gen technologies help customers to succeed in an
                    ever-changing business environment. By providing them new IT
                    services and solutions, we help businesses achieve higher
                    revenue and better profitability. From creating a design to
                    implementing solutions, we are your own IT staff and provide
                    you with the{" "}
                    <a href="https://www.matrix-solutions.net/technology">
                      best web development services
                    </a>
                    .
                  </p>
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    Our goal is to offer innovative IT solutions that give maximum
                    return on investment. Our commitment is above beyond to ensure
                    the realization of actual IT solution benefits.
                  </p>
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    <a href="https://matrix-solutions.net">Matrix Solution</a>{" "}
                    knows that every business has different challenges to face,
                    and we do our best to solve them. Our creative and innovative
                    IT solutions guarantee the progress of your business in the
                    most beneficial way. We believe in long-term partnership and
                    client relationships, and that is why our clients get what
                    they need exactly.
                  </p>
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    Our staff has the best website developers who help you manage
                    your business website through different IT services.
                  </p>
                  <h3>Next-Gen Services:</h3>
                  <p>
                    Our Next-Gen technology brings you the most profitable and
                    better services and offers the best practice expertise to
                    every business. Whether you are looking for any QA software
                    testing services or software solutions, we can help you
                    provide a better experience with us all the time.
                  </p>
                  <p>Our some IT services are listed below:</p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      End to End IoT Services:
                    </strong>
                  </p>
                  <p>
                    We are one of the top preferred Internet of things (IoT)
                    software development provider companies. We use a structured
                    approach to build independent Internet of things apps for
                    business purposes. We create long-lasting experiences across
                    each platform and IT channel and enhance product progress
                    swiftly. Our end-to-end Internet of things services also
                    include mobile app development and software quality tester
                    services for the success of your business.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Machine Learning:
                    </strong>
                  </p>
                  <p>
                    Day-by-day machine learning is becoming popular in business
                    and marketing trends. Business owners think it can bring more
                    efficiency to their business deals. Our team is developing new
                    machine learning approaches that, when used, will assist your
                    company in every manner conceivable.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Artificial Intelligence:
                    </strong>
                  </p>
                  <p>
                    We change businesses with our best artificial intelligence
                    solutions. We allow companies to enhance customer experience
                    and interaction by building digital AI solutions. Our
                    artificial intelligence experts can reanalyze the way your
                    business works to implement better services. Our experience in
                    the robotic automation process helps companies reduce the need
                    for human resources that can help them earn more profit.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      BlockChain Development:
                    </strong>
                  </p>
                  <p>
                    With the help of blockchain developers, we create unique
                    solutions. We offer you the best app and web development
                    services based on our experience establishing digital
                    platforms for apps and blockchain firms. Our web developers
                    create innovative designs that provide a good user experience
                    and better liability over your website.
                  </p>
                  <h3>Our Expertise:</h3>
                  <p>
                    We have got everything that your business need. We create IT
                    solutions that best help your company to boost its progress.
                    With many years of experience, our pool of master developers
                    help you intensify your market and business goals. We
                    guarantee your business progress not only technically but also
                    with strategic IT solutions. We are innovative and offer
                    excellence in our work.
                  </p>
                  <h3>Why Choose Us?</h3>
                  <p>
                    Next-Gen technologies build technologies that show how
                    customer use their items. You want your business to grow well
                    and progress rapidly. But, without a well-managed website, you
                    are trying to create a great experience on shaky foundations.
                    That is why our Next-Gen partnership enables technical
                    solutions to your business problems.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Fast Growing Organization:
                    </strong>
                  </p>
                  <p>
                    We are a fast-growing web software development company growing
                    from strength to strength and known globally. We have carved
                    ourselves as one of the leading IT solution agencies. We work
                    fast and offer you the best software IT solutions to your
                    technical business issues.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      We Solve your Business Problems:
                    </strong>
                  </p>
                  <p>
                    We sit and listen to your business problems to provide you the
                    best IT solutions. We work hard and delivers the best creative
                    solutions to your table every time. We use different
                    strategies to meet your business needs and problems.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      We are marketing-focused:
                    </strong>
                  </p>
                  <p>
                    Most software developers do not care about marketing your
                    website or business. They design your website and even more
                    beautiful. But, this cannot help your website rank higher.
                    Matrix Solutions is the best web software development company.
                    We help your website grow and rank higher in search engine
                    results by using proper software and IT techniques. Our focus
                    goes beyond attractive websites.
                    <br />
                    <br />
                  </p>
                  <a href="javascript:;" className="btn-cta contact-icon1">
                    LET'S TALK ABOUT YOUR PROJECT
                  </a>
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
        href="../../scripts/fancybox/jquery.fancybox.css?v=2.1.5"
        media="screen"
      />
      {/**/}
      {/* Global site tag (gtag.js) - Google Analytics */}
    </>
  )
  
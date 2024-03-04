export const Foo = () => (
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
                                E-commerce Development in the emerging global
                                economy
                              </h1>
                              <ul id="breadcrumb" className="web">
                                <li>
                                  <a href="../../blogs/cms">Next</a>
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
                  <li>Ecommerce development</li>
                </ul>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <ul id="breadcrumb" className="mobile">
                  <li>
                    <a href="../../blogs/cms">Next</a>
                  </li>
                  {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
                </ul>
                <div className="tb-inner">
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    In the emerging global economy, e-commerce has become a vital
                    component in business analytics and a solid catalyst in
                    e-commerce development.
                  </p>
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    The development of the best e-commerce websites is the most
                    popular option for businesses. Unlike a standard website,
                    which is used to gather general information, e-commerce
                    website development services allow customers to make online
                    transactions. Therefore, seeking the right e-commerce website
                    development company is an important step required by the
                    customers.
                  </p>
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    Matrix Solutions offers you the best e-commerce development
                    services to make your brand speak loud in the e-commerce
                    market.
                  </p>
                  <h4>Our E-commerce Website Development Process:</h4>
                  <p>
                    <strong style={{ color: "#668cff" }}>1. Analysis:</strong>
                  </p>
                  <p>
                    We closely assess your current position, business
                    requirements, and your brand vision. Keeping in mind the
                    following data we recommend specific e-commerce development
                    services accordingly to help your business grow.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>2. Design:</strong>
                  </p>
                  <p>
                    With our analytical research, we create a captivating design.
                    We pay close attention to every aspect when creating, not only
                    to make it user-friendly but, also to make it the best
                    e-commerce website possible.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>3. Development:</strong>
                  </p>
                  <p>
                    Our highly experienced team creates a custom e-commerce
                    website for you, where online merchandising, advanced product
                    search and user-friendly checkouts are possible.{" "}
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      4. Support &amp; Maintenance:
                    </strong>
                  </p>
                  <p>
                    United solution offers you 24/7 support and e-commerce
                    development services to all of your e-commerce platforms.
                    Maintenance of your e-commerce website will keep you aware of
                    your website that will help you in your e-commerce business.
                  </p>
                  <h4>Our E-commerce Development maintenance:</h4>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      1. Magento Ecommerce:
                    </strong>
                  </p>
                  <p>
                    For businesses who want to establish a long-term professional
                    eCommerce website, Magento is the best open source to create
                    it. We offer the best Magento e-commerce development services
                    cutting-edge Magento site designs that will last a lifetime.
                    Up-gradation of Magento 2 that helps you in the smooth working
                    of your online e-commerce store.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      2. WordPress Woo Commerce:
                    </strong>
                  </p>
                  <p>
                    Do you have a website on WordPress? Turn it into a
                    professional e-commerce store by using woo commerce
                    development services. We help you design themes, custom
                    templates, and UX design for your website to make it one of
                    the best e-commerce websites.
                  </p>
                  <h3 style={{ color: "#668cff", marginTop: 30 }}>
                    How can we help you?
                  </h3>
                  <h4>Supportive Distinct E-commerce Solutions:</h4>
                  <p>
                    Along with our e-commerce and IT services, we make sure
                    customer satisfaction. We offer our customers numerous
                    solutions so that their e-commerce website can function
                    properly.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      B2B or B2C Marketplace:
                    </strong>
                  </p>
                  <p>
                    We ensure that our customers have access to B2B and B2C
                    e-commerce marketplaces that are customized to their specific
                    needs. Hire us to create fully-featured best e-commerce
                    websites.{" "}
                  </p>
                  <p>
                    As an e-commerce design company, we offer you the following
                    B2B services:
                  </p>
                  <ul>
                    <li>Pre-order management</li>
                    <li>Automatic tax calculation</li>
                    <li>
                      A personalized experience for extensive customer service.
                    </li>
                    <li>Product comparison and maintenance</li>
                  </ul>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Online Store Development:
                    </strong>
                  </p>
                  <p>
                    Being a well-experienced e-commerce agency, we manage distinct
                    online store projects. Our highly skilled e-commerce
                    developers create and develop highly established e-commerce
                    websites to bring a higher return on investment for your
                    business.{" "}
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>User Experience:</strong>
                  </p>
                  <p>
                    Our best e-commerce development services help you enjoy a
                    better user experience. Better user experience ensures better
                    website results. In this way, we make sure to provide the best
                    user experience to rank your e-commerce website higher in
                    search engine results.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Problem Solving Techniques:
                    </strong>
                  </p>
                  <p>
                    Our dedicated team members assist you in e-commerce
                    development with our innovative designing strategies. The
                    problem-solving technique is very crucial, as only if the
                    company is well-strategic they will be able to carry out your
                    project from beginning till development and beyond that.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Social Ecommerce Development:
                    </strong>
                  </p>
                  <p>
                    Our e-commerce development team holds the best skills to
                    display the modules perfectly on our customer’s websites. By
                    using different e-commerce development services, we bring
                    perfect solutions to attract various vendors to your
                    e-commerce website to help boost your reach.
                  </p>
                  <h3>How we Rock!</h3>
                  <p>
                    With 17 years of experience in web and e-commerce development,
                    Matrix Solutions has developed the best e-commerce websites
                    using e-commerce development services. We are a pro-e-commerce
                    design agency, and we focus on delivering high-quality
                    services to our audience. We give our leading e-commerce
                    services to suit your specifications, from app development to
                    e-commerce development. You will love what we design for you.
                    Custom e-commerce website development is a need for every
                    business. You cannot deny the importance of e-commerce
                    development in the current digital age. We can build your
                    e-commerce stores within time and at an affordable price. So
                    contact us now for your next project, and we will provide you
                    our best services.
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
  
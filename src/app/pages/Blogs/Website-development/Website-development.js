export const Website_development = () => (
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
                              <h1>Why Website Development is Pivotal?</h1>
                              <ul id="breadcrumb" className="web">
                                <li>
                                  <a href="../../blogs/ecommerce-development">
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
                  <li>Website development</li>
                </ul>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <ul id="breadcrumb" className="mobile">
                  <li>
                    <a href="../../blogs/ecommerce-development">Next</a>
                  </li>
                  {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
                </ul>
                <div className="tb-inner">
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    Web programming or web development refers to building and
                    maintaining websites via the internet or intranet. This
                    process includes web designing and website content
                    development, among other tasks.
                  </p>
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    To make your website rank better in search engine results,
                    your website developer employs various approaches, including
                    coding and search engine optimization (SEO). That is also
                    another and essential part of website development.
                  </p>
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    Matrix Solutions helps you in developing your website in the
                    best manner.
                  </p>
                  <h3>Why is Web Development Important?</h3>
                  <p>
                    Website development is now as essential as your business. Your
                    voice needs to be heard, and your brand needs to be seen if
                    you want your business to succeed. Website development may
                    help you achieve these goals.
                  </p>
                  <p>Let’s have a look at some benefits of web development;</p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      It sets the first impression:
                    </strong>
                  </p>
                  <p>
                    Your website is your first impression; visitors will form an
                    opinion about your company within seconds of arriving at your
                    website. In these first seconds, you want to make a positive
                    impression on your audience. If your website does not seems
                    appealing, there is a greater chance that you will lose your
                    customer. But you can make it worth it through web
                    development.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Communicate with your visitors:
                    </strong>
                  </p>
                  <p>
                    Communicating with your customers is a vital part when it
                    comes to business. Through your website, you can interact with
                    your customers in a better way you produce valuable content
                    regarding your industry or the product you are selling.
                    Afterward, respond to customers’ comments and feedback on the
                    dot.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Increases the Sales:
                    </strong>
                  </p>
                  <p>
                    A well-managed website ensures you more clients so, increase
                    your sales. If a customer likes the design of your website and
                    finds it easy to navigate, he is more likely to make a
                    purchase.{" "}
                    <a
                      style={{ color: "#0039e6" }}
                      href="https://www.matrix-solutions.net/technology/"
                    >
                      Best web development services
                    </a>{" "}
                    make a website grow and earn a healthy amount by increasing
                    its sales.{" "}
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      It creates consistency:
                    </strong>
                  </p>
                  <p>
                    If you want your website to look professional, you need to
                    have the same fonts, colors, styles, and layouts across all
                    the pages. If you do not have consistency on the website, it
                    may look unprofessional. Online website developers help create
                    constancy on your website.
                  </p>
                  <h3>We want to be your full-service, creative web company:</h3>
                  <p>
                    We know that there are a lot of web development agencies it is
                    hard to choose the best partner. If you are looking for a web
                    development agency that can help you from design through
                    development, we will not upset you.
                  </p>
                  <p>Here are some salient features of our agency;</p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      We listen and do our homework:
                    </strong>
                  </p>
                  <p>
                    You are the one who knows your business very well. So, first,
                    we listen to you while you tell us about your business and
                    products. Then we do our little research to know about your
                    industry details and find some hot buttons for your customers.
                    And with the results, we let you know of your week points.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Responsive Website Design:{" "}
                    </strong>
                  </p>
                  <p>
                    We acknowledge the importance of responsive websites.
                    According to Google, a website loses 60% of its traffic if
                    it’s not optimized for the device you are using. Whether it is
                    your phone or tablet, your website must be highly responsive.
                    That is why we develop websites that can adapt to any device.
                    Matrix Solutions is the best website design agency that offers
                    you highly responsive website development services at an
                    affordable price.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Creative Ideas &amp; Solutions:{" "}
                    </strong>
                  </p>
                  <p>
                    We are not typical robots that provide you a fancy website
                    page. We work hard and delivers the best creative ideas to
                    your table every time. The main objective behind this is our
                    clients’ satisfaction. We offer you long-time solutions rather
                    than offer weak and dull ideas. After all, we know what you
                    want!
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      CMS based Web Development:
                    </strong>
                  </p>
                  <p>
                    We apply different Content Management System techniques (CMS)
                    ranging from custom web development services, WordPress
                    development services, user interference, and other services to
                    make your web content much more attractive and reliable.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Quality Web Development Services:
                    </strong>
                  </p>
                  <p>
                    Matrix Solutions is a web development company that has the
                    best web developers to helps you build your website. Let us
                    know what you want we will bring it to you. We understand what
                    our client wants and what makes you happy. We give our leading
                    web development services to suit your specifications, from app
                    development to web development. You will love what we design
                    for you. Hire us now for your next project, and we will
                    provide you our best services within time and budget.
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
  
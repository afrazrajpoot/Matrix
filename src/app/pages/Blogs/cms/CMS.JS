export const CMS = () => (
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
                                Content Management System &amp; Why is it worth
                                it?
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
                  <li>CMS</li>
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
                    A content management system (CMS) is a software application
                    that helps users create, design, and modify their website.
                    Having a content management system allows you to have control
                    of your website content. You can edit, create and delete any
                    video or content from your website. It enables you to keep
                    your business website up-to-date and organized.
                  </p>
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    <a href="https://matrix-solutions.net/technology/">
                      Website developers
                    </a>{" "}
                    can help you manage your website through the best content
                    marketing skills. As of today, the need for information has
                    been increasing. So, you must give up-to-date content on your
                    website because it is so frustrating when you see old content
                    on a website.
                  </p>
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    Matrix Solutions is the content marketing agency that helps
                    you provide the best content management services. A content
                    management system is not just essential for website design but
                    also great for your SEO.{" "}
                  </p>
                  <h3>CMS Features:</h3>
                  <p>
                    Let us know about the salient features of the content
                    management system. So, you get to know what it is and why it
                    is vital for{" "}
                    <a href="https://matrix-solutions.net/experience-design/">
                      corporate website design
                    </a>{" "}
                    and development.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Intuitive indexing, search, and retrieval:
                    </strong>
                  </p>
                  <p>
                    This feature manages all data on your website and enables easy
                    user access through search functions. It helps users to search
                    through different publications and keywords.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Format Management:
                    </strong>
                  </p>
                  <p>
                    This feature helps turn scanned documents on your website into
                    HTML or PDF files.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Revision Features:
                    </strong>
                  </p>
                  <p>
                    These features update your website content and keep it updated
                    after initial publications. It also tracks any changes
                    individuals make to documents or files.{" "}
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>Publishing:</strong>
                  </p>
                  <p>
                    This feature allows users to modify templates or files that
                    have been approved by organizations such as wizards and other
                    tools.
                  </p>
                  <p>
                    A content management system is also central for
                    personalization and one-to-one marketing.
                  </p>
                  <h3>Why do I need CMS for my website?</h3>
                  <p>
                    A content management system gives you control over your
                    website content. It is significant to review and manage your
                    web content. It prevents outdated information on your website.
                    Better quality website content can help you attract more users
                    to your website.
                  </p>
                  <p>
                    Moreover, CMS enables you to create blog posts on your
                    webpage. This fresh content proves good for a better user
                    experience, and it also increases your website ranking through
                    SEO.{" "}
                  </p>
                  <p>
                    When a business continuously uploads fresh and up-to-date
                    content, then a user sees them as goal-oriented and interested
                    in customer dealings.{" "}
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>Ease to Use:</strong>
                  </p>
                  <p>
                    Due to graphical user interference, even those with little
                    technical knowledge can use it.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Easy to search information:
                    </strong>
                  </p>
                  <p>
                    A built-in search function enables a user to search what they
                    are looking for, and it will appear, just like the google
                    search engine.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Easy to manage content:
                    </strong>
                  </p>
                  <p>
                    Not only content making is easy but, you can also delete or
                    remove any outdated content from your website.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Accessible from any device:
                    </strong>
                  </p>
                  <p>
                    A CMS can be of different types, but users can access
                    information from any device connected to the internet.
                  </p>
                  <h3>How can we help you?</h3>
                  <p>
                    With our years of experience, we are making a difference
                    through our best website design and development services to
                    help you achieve your goal. We build powerful websites, we
                    listen, and we do our work, and so on. But there are more
                    important things before choosing the right website development
                    company.{" "}
                  </p>
                  <p>Let us discuss them!</p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      We specialize in Open-source CMS:
                    </strong>
                  </p>
                  <p>
                    We develop your website on an open-source CMS platform, such
                    as WordPress. With WordPress, you can edit and manage your
                    content on your own. You will have full ownership over your
                    business website. If you do not like any of our website
                    developers, you can switch to a new one without wasting time.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      We are marketing-focused:
                    </strong>
                  </p>
                  <p>
                    Most website developers do not care about marketing your
                    website or business. They design your website and even more
                    beautiful. But, this cannot help your website rank higher.
                    Matrix Solutions is the best content marketing agency. We help
                    your website grow and rank higher in search engine results by
                    using proper content management system techniques. Our focus
                    goes beyond attractive websites.
                  </p>
                  <h3>Our Partnerships:</h3>
                  <p>
                    In this digital era, we need to move faster and work with more
                    flexibility. We have to make our dreams a reality. But for
                    achieving high standards, you must have high technology and
                    mobility to execute your ideas. Therefore, Matrix Solutions
                    partners with different Content Management System companies
                    and other technology providers. We together bring new
                    solutions to your web problems by offering you the best web
                    development services.
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
  
export const Web_designing = () => (
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
                                Things to consider when choosing a web Designing
                                company:
                              </h1>
                              <ul id="breadcrumb" className="web">
                                <li>
                                  <a href="../../blogs/mobile-app-development-company">
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
                  <li>web designing</li>
                </ul>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <ul id="breadcrumb" className="mobile">
                  <li>
                    <a href="../../blogs/mobile-app-development-company">Next</a>
                  </li>
                  {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
                </ul>
                <div className="tb-inner">
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    Website is a major component of your online brand. Matrix
                    solution supports you to leverage its advantages by building
                    your digital presence and finding your marketing potential
                    through our Website design service. Our highly skilled web
                    developers work hard to provide you the peace of mind through
                    our website design, development to Search Engine Optimization,
                    and site maintenance service. Your website is the hub for your
                    online marketing, so it must look compelling and eye-catching
                    to convert the customers. We have a highly expert team of
                    professionals to make the best first impression of your
                    website. They can create a website that is mobile-friendly,
                    SEO optimized, and visible to the related customers.
                  </p>
                  <h3>Our Web Designing Service: </h3>
                  <p>
                    <a href="../../" style={{ color: "#0039e6" }}>
                      Matrix solution
                    </a>{" "}
                    is well-reputed as the leading Web design agency in the UK. We
                    have a professional hand in web designing, mobile websites
                    development, and web applications. We provide an engaging
                    opening, user-friendly, receptive to any device, and adaptive
                    web design. With our well-crafted and detail-oriented designs,
                    we have assisted a number of our customers to grow their
                    businesses. We believe in keeping our customers in the loop
                    and provide them a helping hand in rebranding. We are happy to
                    help you.{" "}
                  </p>
                  <p>
                    Here are the salient features of our web designing service;
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Custom Web designing:
                    </strong>
                  </p>
                  <p>
                    A website that is uniquely designed to meet the requirements
                    of your business.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>Responsive:</strong>
                  </p>
                  <p>
                    Over developers create quickly responsive designs. We can
                    create individual designs for your websites that are mobile/
                    tablet friendly.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>SEO optimized:</strong>
                  </p>
                  <p>
                    We take care of the perfect placement of keywords and
                    high-quality links to raise SEO. Our priority is to bring your
                    website to the top of search results.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>Secure (HTTP)</strong>
                  </p>
                  <p>
                    Our designed website is fully secure. We ensure high-security
                    alerts and take responsibility for complete security and
                    privacy.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Professional designs:
                    </strong>
                  </p>
                  <p>
                    Matrix solution has a team of highly qualified web developers
                    who specialize in building professional and appealing web
                    designs to attract the attention of visitors and convert them
                    into paying customers.
                  </p>
                  <p />
                  <h3>Our Web Designing Process:</h3>
                  <p>
                    Unlike other web designing agencies, our process is completely
                    transparent. In fact, we share the minute details of our
                    website designing process with our customers for their
                    satisfaction. Our web designing process involves the following
                    steps;
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Discovery and planning:
                    </strong>
                  </p>
                  <p>
                    The first and foremost step is to analyze your brand, target
                    audience, competitors, and suitable platforms. After that our
                    professionals make tactics and strategies to lead your brand
                    and convert the visitors into paying customers.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Sitemap and Wireframe:
                    </strong>
                  </p>
                  <p>
                    We have a team of highly qualified developers, designers, and
                    content creators who work together to make a sitemap in order
                    to meet the functional needs and the esthetic appeals of the
                    business. A wireframe is created regarding the content, user,
                    and context of use.{" "}
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Unique web Designing:
                    </strong>
                  </p>
                  <p>
                    Our Web Designing agency creates innovative designs that are
                    uniquely designed to fulfill the specific needs of your
                    business. Our team keeps in mind the target audience and the
                    project goals. This helps to analyze whether the design meets
                    up the necessities of the client's business or not.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Content creation:
                    </strong>
                  </p>
                  <p>
                    We write content according to the needs and aptitude of your
                    target customers. Our content creators keep in the SEO needs
                    and write customized content for your web page. The
                    SEO-optimized content will rank high on search engines and
                    will be visible to your target audience.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Website development:
                    </strong>
                  </p>
                  <p>
                    We make sure that the front-end and the back-end work to raise
                    the functionality and the useability of web design. Our
                    developers are equipped with all the latest techniques and
                    tools to help the users to bring change to the site.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Functionality test:
                    </strong>
                  </p>
                  <p>
                    After accomplishment, several functionality tests are taken to
                    determine whether it works as intended or not. Our
                    professionals will check the response of our site on various
                    devices to see how its performance at different display sizes.
                    Its functionality is thoroughly examined from the visitor's
                    point of view.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      launching and optimization:
                    </strong>
                  </p>
                  <p>
                    After making sure that the web design is compelling,
                    user-friendly, and mobile responsive, we present it to our
                    clients for their satisfaction. After their approval, we move
                    toward launching the site. It is fully optimized to rank on
                    the search engine. We ensure the smoothness and 100%
                    satisfaction of our customers.
                  </p>
                  <p />
                  <h3>Our Advantages:</h3>
                  <p>
                    We ensure the best of our services and help you on the cutting
                    edge in your business growth. With our Website design service,
                    you'll get the following advantages.
                  </p>
                  <ul>
                    <ol>
                      We use the latest tools and web design techniques to raise
                      the effectiveness.
                    </ol>
                    <ol>
                      1- We assure you of all kinds of technical, functional, and
                      visual value with the help of our highly qualified team of
                      experts.
                    </ol>
                    <ol>
                      2- Our designed websites are highly responsive and provide
                      higher deliverables.
                    </ol>
                    <ol>
                      3- We can efficiently create infinite scrolling websites,
                      which are now in trend.
                    </ol>
                    <ol>
                      4- We keep in mind a variety of marketing platforms and
                      systems. This makes us the leading Web design agency.
                    </ol>
                    <ol>
                      5- We raise your brand reputation by heightening the user
                      experience with our highly receptive web designing service.
                    </ol>
                    <ul>
                      <p />
                      <h3>Why Choose us?</h3>
                      <p>
                        We design a website that can fulfill all your business
                        needs by providing all the{" "}
                        <a
                          href="../../digital-marketing"
                          style={{ color: "#0039e6" }}
                        >
                          digital marketing services
                        </a>
                        . We keep our clients engaged throughout the designing
                        process.{" "}
                      </p>
                      <p>
                        We specialize in parallax web designing, 2D flat media,
                        and the latest infinite scrolling websites. The experts at
                        Matrix solution are passionate and pay heed to the details
                        to make a healthy appearance of your business. <br />
                        <br />
                      </p>
                      <a href="javascript:;" className="btn-cta contact-icon1">
                        LET'S TALK ABOUT YOUR PROJECT
                      </a>
                    </ul>
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
        href="../../scripts/fancybox/jquery.fancybox.css?v=2.1.5"
        media="screen"
      />
      {/**/}
      {/* Global site tag (gtag.js) - Google Analytics */}
    </>
  )
  
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
                                Why should you hire the best mobile app
                                development company?
                              </h1>
                              <ul id="breadcrumb" className="web">
                                <li>
                                  <a href="../../blogs/global-marketing">Next</a>
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
                    <a href="../../blogs/global-marketing">Next</a>
                  </li>
                  {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
                </ul>
                <div className="tb-inner">
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    Most online business owners think that making their own
                    website is a cakewalk. They consider downloading software and
                    using web hosting ss good enough. But as a matter of fact,
                    this is beyond reality.
                  </p>
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    Most companies do not realize the importance of hiring a
                    professional <b>mobile app development company</b>. So, they
                    end up sinking their online appearance. There are unlimited
                    benefits of hiring a professional for{" "}
                    <b>mobile app development</b>.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>Pros of hiring a mobile app development company:</h3>
                  <p>
                    The smartphone plays a vital role in our lives, and its
                    effectiveness has gone beyond just receiving and making calls
                    and messages. The most distinct feature of a smartphone that
                    makes it more worthful is mobile apps.
                  </p>
                  <p>
                    Mobile is very beneficial to businesses for their online
                    growth, acquire more clients, and add revenue to their
                    business. Many businesses are joining the bandwagon and
                    developing their own mobile app to facilitate their customers
                    by connecting with them directly. They can choose to hire an
                    IT professional for <b>mobile app development</b>, a freelance
                    app developer, or a mobile app development company for their{" "}
                    <b>mobile app development</b>. Each of these options has its
                    own properties. Here are some salient features of hiring a
                    well-reputed company for your app development.
                  </p>
                  <p>
                    Matrix solution consists of a highly trained team of
                    professional project managers, designers, and programmers,
                    etc. Each of these plays a role as an individual to offer a
                    professional full-cycle service.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Better for startups and established businesses:
                    </strong>
                  </p>
                  <p>
                    The biggest advantage of hiring a{" "}
                    <b>mobile app development company</b> is that you get a wide
                    range of professional benefits like business consultancy,
                    business analysis, ideas evaluation, and aftercare services.
                    Unlike a freelancer, who is a jack of all trades but won't be
                    able to provide you the high quality work. We have hired
                    highly qualified professionals for each task to offer you the
                    best of our services. We also help startups to figure out the
                    monetization strategy to grow their business online.{" "}
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>Cost-Effective:</strong>
                  </p>
                  <p>
                    With the collaboration of our team, we provide an efficient
                    and cost-effective <b>mobile app development</b> service. Your
                    billing will depend upon the agreement conditions with no
                    extra charges. On the other hand, building an in-house
                    developers team costs you much higher, because you have to pay
                    for the equipment and training expenditures.{" "}
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Technical experts:
                    </strong>
                  </p>
                  <p>
                    Another benefit of hiring a{" "}
                    <b>mobile app development company</b> is the availability of
                    technical expertise and resources. These technical resources
                    come as a package with our agreement. You can take full
                    advantage of our up-to-date tools, licenses, software, and
                    certificates. Our highly qualified staff remains up to date
                    with the latest trends and programming languages to offer you
                    the best solution.{" "}
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Consistent workflow:
                    </strong>
                  </p>
                  <p>
                    Our mobile app development service provides you peace of mind
                    with a consistent workflow. Our manager will keep you in touch
                    by giving complete detail about the development of your
                    project. A well-tuned and consistent workflow will surely help
                    you meet the deadlines.{" "}
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Support availability:
                    </strong>
                  </p>
                  <p>
                    We make sure to provide you a 24/7 available support team.
                    Unlike freelancers, who may be unavailable sometimes due to
                    personal reasons or workload, we have a large team to provide
                    you the continuity of work. We make sure that our team members
                    are available round the clock to justify your time, money, and
                    data.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      We take care of our reputation:
                    </strong>
                  </p>
                  <p>
                    We have are a well-reputed{" "}
                    <b>mobile app development company</b>, our team works hard and
                    does all the necessary things to maintain our reputation. We
                    understand that our reputation lies in the success of our
                    clients, so we walk the extra mile for your business growth.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Highly responsive:
                    </strong>
                  </p>
                  <p>
                    Our highly experienced developers know all the tricks and
                    tools to make your mobile app highly responsive. With our
                    design, the user will be able to load the app even when there
                    is low internet speed or heavy data traffic.{" "}
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Long term relationship:
                    </strong>
                  </p>
                  <p>
                    We believe in maintaining long-term relationships with our
                    customers, so we make sure to provide the best quality{" "}
                    <b>mobile app development</b> services. Unlike other
                    companies, we don't focus on the number of coming projects.
                    Instead, we work on the effective implementation of projects
                    in the long run.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Detectable success:
                    </strong>
                  </p>
                  <p>
                    Our designed mobile apps have in-built features that will help
                    you review the success. With a professionally designed mobile
                    app, you can keep a record of reports, analyses, downloads,
                    and traffic, etc. So, you'll be able to get an idea of your
                    companies growth, and online appearance.{" "}
                  </p>
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
  
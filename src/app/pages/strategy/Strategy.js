export const Strategy = () => (
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
                              <h1>Services / Strategy</h1>
                              {/*<p>
                                                We’re consultants, guides, and partners for brands on digital transformation journeys. Wherever you’re going, we bring ideas and excitement to help you get there.
                                            </p>*/}
                              {/*<a class="btn scroll" href="#what-we-do">Our services</a>
                                            <a class="btn" href="our-work">Our work</a>*/}
                              <ul id="breadcrumb" className="web">
                                <li>
                                  <a href="../experience-design/">Next</a>
                                </li>
                                {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
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
                    <a href="../">Home</a>
                  </li>
                  <li>strategy</li>
                </ul>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <ul id="breadcrumb" className="mobile">
                  <li>
                    <a href="../experience-design/">Next</a>
                  </li>
                  {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
                </ul>
                <div className="tb-inner">
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    We’re consultants, guides, and partners for brands on digital
                    transformation journeys. Wherever you’re going, we bring ideas
                    and excitement to help you get there.
                  </p>
                  <h3>Significance of Digital Strategy for Brands </h3>
                  <p>
                    Businesses today differentiate not on product or price but on
                    the quality of the experience they provide. And customer
                    experience is increasingly digitized.
                  </p>
                  <p>
                    If you can impress demanding customers with a frictionless
                    journey, you’ll win favor, engagement, and market share. But
                    the question is: what do your customers want?
                  </p>
                  <p>
                    Over 17 years of experience have shown us one thing: quality
                    digital experiences need a strategy driving them. We’ve helped
                    countless clients draw actionable digital roadmaps, launch new
                    websites, and create the apps and experiences that help them
                    compete and win.
                  </p>
                </div>
              </div>
            </div>
            <a href="javascript:;" className="btn-cta contact-icon1" style={{}}>
              LET'S TALK ABOUT YOUR PROJECT
            </a>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="../images/CaseStudy_Syneos_cover_sm_0.jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>How digital strategy makes your brand stands different?</h3>
                  <p>
                    Audiences have always gravitated toward authentic brands. But
                    consumers have only grown choosier, and with good reason:
                    Audiences encounter more brands today than ever before.
                  </p>
                  <p>
                    Meanwhile, digital has changed how we tell brand stories.
                    Social, mobile, and next-gen innovations have given businesses
                    of all sizes the ability to share their story – if they can be
                    heard over the noise.
                  </p>
                  <p>
                    In this environment, the most successful brands have a strong
                    relationship with their audience and a clear understanding of
                    who they are and the values they stand by. That takes
                    strategic clarity, a focus on authentic connection, and a lot
                    of personalities.
                  </p>
                  <p>
                    With more than 15 years of experience transforming brands,
                    Matrix Solutions understands how companies find success and
                    build loyalty in digital. We provide the strategic leadership
                    brands to discover, rethink, and refresh their identity for
                    today's marketplace.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="../images/CaseStudy_Wholesome_Hero_big_2.jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>The Impact of Compelling Content on Your Brand</h3>
                  <p>
                    The content strategy covers the what, why, and how of content
                    creation for your organization. A content strategy might be
                    tailored to your website or content marketing, or it might be
                    your master plan for delighting your audience and
                    supercharging leads and sales.
                  </p>
                  <p>
                    Why create a strategy? Well, there’s a lot of content out
                    there. In a world where millions of blog posts are published
                    every day, you’d better have a strategy for being heard.
                  </p>
                  <p>
                    Matrix Solution's strategic approach is distinguished by
                    teamwork and the drive for results. We work hand in hand with
                    SEO, UX, and design to think through every aspect of creating
                    and promoting truly amazing content. And as veteran content
                    creators, we leverage years of writing experience to plan for
                    your success.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="../images/CaseStudy_Workfront_aProductShowcase.jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>How does Our Digital Transformation process work?</h3>
                  <p>
                    In a digital transformation project, you can't plan the
                    solution until you define the problem. While every engagement
                    is different, we draw on a toolkit that has successfully
                    driven previous change initiatives.
                  </p>
                  <h4>Digital Audit</h4>
                  <h5>Mapping the landscape</h5>
                  <p>
                    We start with a diagnosis of the current situation, taking a
                    close look at the business landscape. We take a
                    discipline-by-discipline approach, with multiple expert teams
                    weighing in.
                  </p>
                  <p>
                    An audit can show you what’s standard practice and what’s best
                    in class, identifying emerging competitors, new tactics, and
                    changing audience behaviors. More importantly, audits can help
                    you spot risks and opportunities – giving you a head start in
                    preparing for what’s next.
                  </p>
                  <h4>Innovation Workshop</h4>
                  <h5>Putting our heads together</h5>
                  <p>
                    An innovation workshop brings together our team and yours in a
                    structured process with open-minded facilitation. The goal is
                    to frame a business problem and then generate ideas to solve
                    it.
                  </p>
                  <p>
                    By calling on a diversity of expertise and thinking styles and
                    exploring ideas fearlessly, we can generate new possibilities
                    and refine our strongest ideas.
                  </p>
                  <p>
                    We prioritize ideas according to value to the organization and
                    readiness to complete, evolving high-value, high-readiness
                    projects further with a tool such as a Business Model Canvas.
                  </p>
                  <h4>Minimum Lovable Product</h4>
                  <h5>Turning ideas into action</h5>
                  <p>
                    Change initiatives can generate many ideas but few outcomes.
                    Fortunately, BFM is an implementation partner as well as an
                    ideal partner.
                  </p>
                  <p>
                    Once we have high-priority ideas, we start defining a minimum
                    lovable product – the version of your idea that delivers the
                    most customer happiness with the least possible initial effort
                    and expense. We determine what the MLP would look like and
                    what it would take to build.
                  </p>
                  <p>
                    Once we understand that, we’re into project management: cost
                    estimates, dependencies, and budgets and resourcing, and we’re
                    ready to start making it happen.
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
        href="../scripts/fancybox/jquery.fancybox.css?v=2.1.5"
        media="screen"
      />
      {/**/}
      {/* Global site tag (gtag.js) - Google Analytics */}
    </>
  )
  
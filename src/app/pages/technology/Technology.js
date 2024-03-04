export const Technology = () => (
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
                              <h1 style={{ width: "80% !important" }}>
                                Powered by Intellect Driven by Values
                              </h1>
                              {/*<p>
                                                We stay very close to a range of technology partners, but we’re not married to any of them. That enables us to offer platform-agnostic recommendations without sacrificing the advantages of specialization and technical excellence.
                                            </p>*/}
                              {/*<a class="btn scroll" href="#what-we-do">Our services</a>
                                            <a class="btn" href="our-work">Our work</a>*/}
                              <ul id="breadcrumb" className="web">
                                <li>
                                  <a href="../experience-design/">Previous</a> |{" "}
                                  <a href="../digital-marketing/">Next</a>
                                </li>
                                {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
                              </ul>
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
            <div className="breadcrumb">
              <div className="content-inner">
                <ul>
                  <li>
                    <a href="../">Home</a>
                  </li>
                  <li>Technology</li>
                </ul>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <ul id="breadcrumb" className="mobile">
                  <li>
                    <a href="../experience-design/">Previous</a> |{" "}
                    <a href="../digital-marketing/">Next</a>
                  </li>
                  {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
                </ul>
                <div className="tb-inner">
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    We stay very close to a range of technology partners, but
                    we’re not married to any of them. That enables us to offer
                    platform-agnostic recommendations without sacrificing the
                    advantages of specialization and technical excellence.
                  </p>
                  <h3>Build the Future with Technical Advancement</h3>
                  <p>
                    Once upon a time, your tech stack was a problem for tech
                    people. But in a digital world, technology strategy is
                    inseparable from business strategy.
                  </p>
                  <p>
                    Digital leaders rely on technology platforms to enable
                    collaboration, agility, and a customer-first mindset. As a
                    result, technology expertise matters more than ever, but
                    making the right tech choices is now a whole-of-business
                    concern.
                  </p>
                  <p>
                    BFM excels at smartly architecting and swiftly developing
                    experience solutions. Deploying a proprietary framework, our
                    solutions architects define and create optimal solutions, with
                    an unshakeable focus on business efficiency, user experience
                    and business need.
                  </p>
                </div>
              </div>
            </div>
            {/*<a href="javascript:;" class="btn-cta contact-icon1" style="">LET'S TALK ABOUT YOUR PROJECT</a>*/}
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="../images/CaseStudy_Workfront_Cover_sm_0.jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>We Develop Websites That Ignite Your Business</h3>
                  <p>
                    Your website represents your brand. And a site that's slow,
                    unreliable, or hard to use is a website that customers and
                    prospects will avoid. Unfortunately, internal teams also
                    suffer when small website changes are agonizingly slow, and
                    significant changes are out of the question.
                  </p>
                  <p>
                    Yet starting a web development project feels daunting, so
                    businesses often feel stuck with the status quo, risking
                    missed opportunities and competitive disadvantage.
                  </p>
                  <p>
                    We are the finest and professional Website Development
                    Company. With over 17 years of experience developing upon the
                    top CMS platforms and a well-honed project management process,
                    Matrix Solutions builds high-performing sites across a wide
                    range of industries. We’ve overcome all kinds of challenges
                    for our clients, helping achieve some exceptional results in
                    the process.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="../images/CaseStudy_HilliardLyons_hero_big.jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>Building Smarter Applications for Smart Users</h3>
                  <p>
                    Apps have fueled disruption, creating and transforming
                    industries. But, in the process, they've made complex
                    organizational problems – like curating vast amounts of
                    content or providing transportation on demand – seem
                    effortless.
                  </p>
                  <p>
                    But in reality, behind every "simple" app is robust technology
                    architecture and immaculate code engineered to deliver a
                    seamless experience.
                  </p>
                  <p>
                    Whether you're looking to create unique user experiences,
                    streamline operations, or get an edge over competitors, BFM is
                    the App Development Company that offers the mobile app
                    development expertise to help you get there. We are the
                    Solutions Architecture &amp; leveraging our technical talents
                    and strategic insights; we deliver rich experiences that spur
                    brand growth.
                  </p>
                  {/*<a href="#" class="btn-cta contact-icon1">DISCUSS MY NEEDS</a>*/}
                </div>
              </div>
            </div>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="../images/CaseStudy_DeerCreekSeed_UpgradingTechnology_0.jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>
                    Blurring the Gap between Creativity and Technology-The Finest
                    eCommerce Development Company
                  </h3>
                  <p>
                    eCommerce businesses know that user experience and revenue go
                    hand in hand. When users find shopping hard, slow, or
                    confusing, they don't convert, and you don't get paid.
                  </p>
                  <p>
                    That’s why your eCommerce site should be working hard for you
                    – streamlining your business and making shopping effortless.
                    But without a well-developed site, you’re trying to build a
                    great experience on shaky foundations.
                  </p>
                  <p>
                    With over 17 years in the business, Matrix Solutions has
                    developed more than our share of high-performing eCommerce
                    sites. We are the pro eCommerce Development Company &amp; we
                    focus on delivering experience users love so that you can get
                    products off your shelves and into buyers' carts.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>Our NextGen Technology Development Process</h3>
                  <p>
                    We merge design thinking and an empathy-driven approach to
                    create powerful and memorable experiences – ones that delight
                    customers and fuel business growth.
                  </p>
                  <p>
                    That’s why your eCommerce site should be working hard for you
                    – streamlining your business and making shopping effortless.
                    But without a well-developed site, you’re trying to build a
                    great experience on shaky foundations. Our Next
                    GenPartnerships enables customers to experience technical
                    advancement.
                  </p>
                  <h4>Preliminary Audience + Competitor Research</h4>
                  <h5>Addressing customer and market needs</h5>
                  <p>
                    Powerful user experiences hinge on knowing your audience. So
                    we help you find business challenges that might be solved with
                    AR, VR, MR, or voice-enabled technologies, as well as the
                    opportunities that emerge as a result.
                  </p>
                  <p>
                    When we find them, we study your market meticulously,
                    exploring every nuance of customer attitudes, behaviour, and
                    interests to find where customer needs – practical and
                    emotional – might intersect with today's immersive
                    technologies.
                  </p>
                  <h4>Design Sprint</h4>
                  <h5>Making the impossible possible</h5>
                  <p>
                    Empathy-driven experiences come alive during the design
                    process. Using a design thinking approach, our designers
                    collaborate with you in 4-day sprints, bringing together
                    strategists, designers, and members of your team to develop
                    innovative applications of next-gen technologies.
                  </p>
                  <h4>Digital Product Prototyping</h4>
                  <h5>Working towards the MLP</h5>
                  <p>
                    With design thinking setting the direction, we employ an agile
                    process to build working prototypes that undergo extensive
                    user testing. Then, validating features and capabilities, we
                    use this test-and-learn approach to refine the digital product
                    and determine whether it's one people will ultimately love.
                  </p>
                  <p>
                    This process aims to develop a Minimum Lovable Product (MLP) –
                    a product with functionality people will continue to use and
                    enjoy day after day, with the least amount of effort and
                    expense.
                  </p>
                  <h4>AR + VR + MR Development</h4>
                  <h5>Creating the immersive experience</h5>
                  <p>
                    During development, engineers, product managers, and UX
                    designers continue to collaborate, building on the MLP to
                    create a fully functional, final digital product ready for
                    market positioning.
                  </p>
                  <p>
                    Whether we’re creating VR apps, AR apps, or an MR experience,
                    our cross-disciplinary team can rapidly develop and scale
                    digital products for commercial application.
                  </p>
                  <h4>Voice-Enabled Product Development</h4>
                  <p>
                    Voice has the potential to deliver intuitive and practically
                    frictionless experiences. Our lean innovation approach enables
                    us to get voice-enabled products into customer's hands quickly
                    and refine them iteratively. We use our time-tested design
                    thinking process to create user-centric experiences that help
                    people perform tasks, find information, and get assistance.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>Partnerships + Content Management Systems</h3>
                  <p>
                    In the digital era, businesses need to move faster and with
                    more flexibility. But having an agile mindset isn't enough.
                    You also need the technology to execute your ideas.
                  </p>
                  <p>
                    That’s why selecting and building on the right platform is
                    critical. And it’s why Matrix Solutions partners with so many
                    industry-leading Content Management Systems providers and
                    other technology partners. We help you choose a solution from
                    among the industry's best and follow through with a specialist
                    implementation team that knows your chosen platform inside and
                    out.
                  </p>
                  <p>We are available.</p>
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
  
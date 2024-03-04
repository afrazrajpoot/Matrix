export const Experience_design = () => (
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
                      <a className="scroll" href="./../#why-to-choose-us">
                        Why choose us
                      </a>
                    </li>
                    <li>
                      <a href="../blogs">Blogs</a>
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
                              <h1>Services / Experience Design</h1>
                              <a href="#" className="btn contact-icon1">
                                Contact Us
                              </a>
                              <ul id="breadcrumb" className="web">
                                <li>
                                  <a href="../strategy/">Previous</a> |{" "}
                                  <a href="../technology/">Next</a>
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
                    <a href="../">Home</a>
                  </li>
                  <li>Experience design</li>
                </ul>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <ul id="breadcrumb" className="mobile">
                  <li>
                    <a href="../strategy/">Previous</a> |{" "}
                    <a href="../technology/">Next</a>
                  </li>
                  {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
                </ul>
                <div className="tb-inner">
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    A digital platform’s strategy, design, and development must
                    all promote one goal: creating a valuable, memorable
                    experience for the user. We create experiences that connect
                    deeply with your target audience’s needs, and inspire not just
                    affection, but action.
                  </p>
                  <h3>Significance of UX for Business &amp; Brand</h3>
                  <p>
                    It’s human nature: people like things to be easy and clear.
                    And today, people have seamless user experiences at their
                    fingertips, every minute of every day. Expectations are high.
                  </p>
                  <p>
                    So when a digital property isn’t easy to use, people get
                    frustrated. And when they get frustrated, they go elsewhere –
                    leaving with a poor impression of your business.
                  </p>
                  <p>
                    The good news is that building a great user experience takes
                    work, but it’s not magic. You need the right expertise, a
                    passion for listening to your users, and a willingness to test
                    and learn.
                  </p>
                  <p>
                    The experts on Matrix Solutions UX team bring all of those
                    qualities and more. It’s their job to turn the frustration of
                    “what’s going on?” into the joy of “that was easy” – designing
                    standout experiences that convert prospects and keep customers
                    coming back.
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
                  <img src="../images/CaseStudy_Peterbilt_Cover_sm_4.jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>How Website Design Defines Your Brand?</h3>
                  <p>
                    A website is a brand touchpoint, a business tool, and a place
                    to drive critical conversions. A great website can be an
                    engine of business growth. A poor site can inflict damage on
                    your brand..
                  </p>
                  <p>
                    But outstanding web design isn’t easy. Today’s audiences have
                    high expectations. You have seconds – maybe milliseconds – to
                    convince visitors that your site is worth their time.
                  </p>
                  <p>
                    With over 17 years of experience, Matrix Solutions creates
                    websites to exceed audience expectations. We build sites to
                    perform with a focus on strategic planning, compelling visual
                    design, and flawless user experience, in order to drive
                    superior results.
                  </p>
                </div>
              </div>
            </div>
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
                  <h3>Navigating the Mobile-First Era</h3>
                  <p>
                    Practically overnight, mobile has become the primary way users
                    engage digitally. And today, audiences judge brands by the
                    quality of the experience they provide. Without a seamless
                    mobile experience, you risk being written off as a waste of
                    time and space.
                  </p>
                  <p>
                    Apps are not the only way to conquer mobile, but they’re a
                    powerful tool – they’re natively mobile, offer broad
                    capabilities, and give you a permanent presence on devices
                    your customers check over 50 times a day.
                  </p>
                  <p>
                    With nearly two decades of experience in digital, the BFM team
                    understands what goes into truly intuitive and engaging mobile
                    experiences. For clients ready to break into the app
                    marketplace, we’re an end-to-end partner for mobile experience
                    design.
                  </p>
                  <h4>How to Design for the Users?</h4>
                  <p>
                    Downloading a mobile app is a commitment. If consumers are
                    going to find your app and integrate it into their routine,
                    the experience must keep them coming back. That starts and
                    ends with the user:
                  </p>
                  <p>
                    <strong>Listen to the user.</strong> Your app design agency
                    should be invested in understanding the needs of users, and
                    how your app might meet those needs. Otherwise, there’s no
                    reason to believe people will use it.
                  </p>
                  <p>
                    <strong>Design for user needs.</strong> Naturally, you want
                    your app to look good. But great app design never complicates
                    things; it gets out of the way and lets users do what they
                    need to do.
                  </p>
                  <p>
                    <strong>Test with real users. </strong> You never really know
                    until you test. Once your agency thinks they have everything
                    just right, they should be letting users go hands-on with the
                    product and prove them wrong. This feedback is key for
                    designing an app that actually understands its audience.
                  </p>
                  <a
                    href="../blogs/Professional-web-design-company/"
                    className="btn-cta"
                  >
                    Professional Web Design
                  </a>
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
                  <h3>How ecommerce Website Design Creates Difference?</h3>
                  <p>
                    Creating custom experiences is key to winning customers’
                    hearts – and seizing market share. When the right products,
                    design, features, and branding come together, users have more
                    excuses to stick around – and more reasons to buy.
                  </p>
                  <p>
                    We’ve been designing high-performing websites for over 17
                    years, and eCommerce sites are at the core of our expertise.
                    We’re focused on creating strategic, compelling designs that
                    deliver unique experiences, driving purchases and bringing
                    users back again and again.
                  </p>
                  <a href="../blogs/ecommerce-development/" className="btn-cta">
                    Ecommerce Development
                  </a>
                </div>
              </div>
            </div>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="../images/GettyImages-168626742.jpeg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>Understand the Needs of Brands</h3>
                  <p>
                    FFor global brands, every new market is a new test. What works
                    in New York won’t work in Paris; what works in Paris might not
                    resonate in Buenos Aires. Business leaders understand this,
                    implementing localization practices across global markets.
                    Every choice matters for a brand, and the stakes are high.
                  </p>
                  <p>
                    But true localization, the kind that shows real cultural
                    literacy, is a complex equation of messaging, UX, and
                    strategy. Fostering a global brand is all about stepping into
                    your users’ shoes and understanding what fuels their interest.
                    That’s a marketing problem. So, get marketers to solve it.
                  </p>
                  <p>
                    That’s why BFM has developed Global Experience Assessment: a
                    unique hybrid program that merges testing, data science, and
                    market research to drive localization efforts and build brands
                    that earn affection the world over.
                  </p>
                  <h4>Why Global Brands Prefer Our Remarkable Services?</h4>
                  <p>
                    A global presence comes with distinct challenges – often
                    unexpected ones. Our team has experience helping brands clear
                    these hurdles, so they can move confidently in international
                    markets.
                  </p>
                  <p>
                    <strong>Scalable Testing.</strong> Testing can quickly become
                    unsustainable at a global scale. We’ve solved this by
                    leveraging the vast outsourcing network of Pactera EDGE, our
                    parent company, putting hundreds of thousands of global
                    resources within reach.
                  </p>
                  <p>
                    <strong>Cross-Team Collaboration.</strong> You get the best of
                    both worlds: class-leading localization knowledge, and
                    agency-grade creative thinking.
                  </p>
                  <p>
                    <strong>A Focus on Strategy.</strong> We work with you to
                    identify and prioritize business goals, and help stakeholders
                    see the strategic steps necessary to realize global success.
                  </p>
                  <a href="../services" className="btn-cta">
                    Our Services
                  </a>
                </div>
              </div>
            </div>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="../images/eCommerce_experience_case-study-page_SM.jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>We Prioritize Relevancy &amp; AI Readiness</h3>
                  {/*<h3>and AI readiness</h3>*/}
                  <p>
                    Customers respond to what’s relevant. Ensuring they only see
                    relevant products and content on your digital platforms
                    requires analytical savvy and quality data. And if you’re
                    investing in AI, a model that’s learning from bad data can be
                    worse than useless.
                  </p>
                  <p>
                    Delivering relevant – and ultimately, intelligent –
                    experiences demands unrelenting attention to data quality. But
                    typically, data curation is no one’s job.
                  </p>
                  <p>
                    As a result, curation either becomes an ungainly ad hoc
                    program, forces high-skill talent into repetitive work, or
                    simply doesn’t get done. In these cases, getting your data
                    unstuck requires help.
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
  
export const Social_media_marketing = () => (
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
                                Networks to sell your company's products and
                                services
                              </h1>
                              <ul id="breadcrumb" className="web">
                                <li>
                                  <a href="../../blogs/social-media-marketing">
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
                  <li>Networks to sell your company's products and services</li>
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
                    The use of social platforms and networks to sell your
                    company's products and services is known as social media
                    marketing. Social media marketing is a powerful way for your
                    marketing business of all types to increase profit and
                    customer reach. This sort of marketing connects with your
                    audience using social media apps to increase sales and website
                    traffic. We know, as of today, all customers are interacting
                    with brands on social media through different apps like
                    Facebook, Instagram, Pinterest, and Twitter. So, if you are
                    not interacting with your customers directly, you are missing
                    out on great profit and opportunity!
                  </p>
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    <a href="https://matrix-solutions.net">Matrix Solutions</a> is
                    the finest{" "}
                    <a href="https://www.matrix-solutions.net/digital-marketing/">
                      social media marketing agency
                    </a>
                    , providing its best social media marketing services to
                    marketing businesses. We use different social media management
                    tools to get the best results on social media platforms. We
                    understand how social media analytics work, so if you want to
                    analyze your business reach, engagement and sales. We help you
                    in the best ways through different social media analytical
                    tools.
                  </p>
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    We provide outstanding social media marketing services to our
                    consumers because social media marketing is now a must-have
                    technique.
                  </p>
                  <h3>Using SMM to grow your Businesses:</h3>
                  <p>
                    Social media marketing agency uses both creativity and
                    strategy to increase your business reach and engagement with
                    customers. Social media marketing is no longer optional. It is
                    now essential to boost up your sales and profit.
                  </p>
                  <p>
                    It comes with a lot of benefits here we will discuss some.{" "}
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Business Awareness:
                    </strong>
                  </p>
                  <p>
                    Social media is one of the most stress-free and easy-to-handle
                    platforms that may increase your business visibility. Applying
                    the right social media marketing strategies can help you raise
                    brand awareness. By spending just a few hours, it helps
                    enhance your brand visibility and user experience. Therefore,
                    having a social media page benefits your business in every
                    possible way.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Engage with your customers:
                    </strong>
                  </p>
                  <p>
                    Social media is a great way to communicate with your customers
                    and interact with them. The more you interact with customers,
                    the larger your audience becomes. Furthermore, customer
                    engagement and interaction is the best way to win customer
                    attention.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>Cost-Effective:</strong>
                  </p>
                  <p>
                    Social media marketing is probably the most cost-effective way
                    to increase business profit and engagement. Creating a social
                    media account and signing up is free for all users.
                    Cost-effective means that you get increased profit on small
                    investments. So, small business investment and little time can
                    significantly enhance your business sales and customer reach.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Increased Traffic:
                    </strong>
                  </p>
                  <p>
                    One of the other benefits of social media marketing is that it
                    increases audience traffic. By marketing your product and
                    sharing your content on different networking platforms, you
                    offer users a purpose to connect. Sharing quality content on
                    social media platforms makes sure to increase user traffic.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      Higher SEO Ranking:
                    </strong>
                  </p>
                  <p>
                    Not only do social media marketing services profit you more,
                    but they also help you improve your SEO rankings. These days
                    to run your business, you must need higher SEO rankings.
                    Companies that market their products on social media are more
                    likely to enhance their search engine results.
                  </p>
                  <h3 style={{ marginTop: 10 }}>
                    We are your trustworthy Social media marketing agency:
                  </h3>
                  <p>
                    If you are wondering where to get the best social media
                    marketing agency partner for your company, look no further.
                    Here we are offering our variety of social media marketing
                    services to help you in the best possible ways.
                  </p>
                  <p>So, let us have a look at the services we offer;</p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      You talk, we listen:
                    </strong>
                  </p>
                  <p>
                    As a social media marketing agency, we strive to understand
                    your business goals and vision first. Then we make our best
                    possible strategies to help you get the expected reach and
                    engagement.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      We value integrity:
                    </strong>
                  </p>
                  <p>
                    We have our principles and guidelines to work on, and we
                    believe in building a trustworthy relationship with our
                    clients. We provide social media marketing services not only
                    to sell your items but also, to build long-term consumer
                    relationships.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>
                      We work for higher SEO rankings:
                    </strong>
                  </p>
                  <p>
                    Matrix Solutions help you gain higher search engine results
                    through strategic social media marketing services. Our social
                    media managing experts use different analyzing tools to create
                    a better user approach and enhance SEO rankings in search
                    engine results.
                  </p>
                  <p>
                    <strong style={{ color: "#668cff" }}>Our Strategies:</strong>
                  </p>
                  <p>
                    We take the time to build strategies that inspire and also
                    that should be unique. We create tactics that not only fit
                    your business model but also reach a hitherto untapped
                    audience. Matrix Solutions offer you excellent social media
                    marketing services because we believe in quality, not in
                    quantity!
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
  
export const Search_engine_optimization= () => (
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
                                Search engine optimization (SEO) is the art of
                                growing quality traffic
                              </h1>
                              <ul id="breadcrumb" className="web">
                                <li>
                                  <a href="../../blogs/brand-identity">Next</a>
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
                  <li>Search engine optimization</li>
                </ul>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <ul id="breadcrumb" className="mobile">
                  <li>
                    <a href="../../blogs/brand-identity">Next</a>
                  </li>
                  {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
                </ul>
                <div className="tb-inner">
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    Whether you have a business website or any other informative
                    website, your website always needs to appear in organic search
                    engine results. The most used search engine results are
                    Google, Bing, and Yahoo, etc. Today, your business needs to
                    improve the ranking of your company website in search engine
                    results. By applying specific SEO techniques, your website
                    will show up in organic search engine results.
                  </p>
                  <p>
                    Matrix Solutions is the{" "}
                    <a href="../../digital-marketing/">best SEO Company</a>{" "}
                    emerging with new and logical search engine optimization
                    strategies. We know how SEO digital marketing works and how we
                    best market your website in organic search engine results.
                  </p>
                  <p>
                    Search engine optimization benefits your website in every
                    possible way. So, let us have a look at some benefits.
                  </p>
                  <h3>Why is SEO worth it?</h3>
                  <p>
                    Nowadays, SEO is a vital holistic marketing technique for
                    increasing your website visibility and ranking in search
                    engine results. Besides this, search engine optimization has
                    been an essential tool in business marketing.
                  </p>
                  <p>Some benefits are as follow:</p>
                  <p>
                    <strong>Increased Website Traffic:</strong>
                  </p>
                  <p>
                    According to Google search results, the websites that invest
                    in SEO get 50% of the total traffic. While the website appears
                    on top of organic search results, it gets 90% of the total
                    traffic. Moreover, search is the primary source of digital
                    traffic for business websites and other marketing channels.{" "}
                  </p>
                  <p>
                    <strong>Organic Search Results:</strong>
                  </p>
                  <p>
                    Search engine optimization helps your website appear in
                    organic search engine results. For this reason, we apply our
                    technical SEO strategies to rank your website higher. Quality
                    SEO digital marketing tools increases your website traffic and
                    thus increases your brand recognition as well.
                  </p>
                  <p>
                    <strong>SEO means better user experience:</strong>
                  </p>
                  <p>
                    Whether you have a business website or other local website, it
                    must provide a better user experience to the audience. SEO
                    builds a quality user experience and thus attracts more
                    visitors to your website. Therefore, a positive user
                    experience is a pivotal element in your website ranking.
                  </p>
                  <p>
                    <strong>
                      It helps the target audience find your website:
                    </strong>
                  </p>
                  <p>
                    If your website appears on top of organic results, the
                    audience will find your website easily. That is another
                    benefit of search engine optimization. As a result, having a
                    strong presence in search results helps you achieve your
                    marketing objectives and make it easier for people to locate
                    your website.
                  </p>
                  <h3>Why Choose Us as your SEO partner agency?</h3>
                  <p>
                    Matrix Solutions is a search engine optimization leading
                    company. We help businesses gain traffic by implementing
                    statistical search engine techniques. We are different from
                    other SEO companies by our standardized SEO skills, which we
                    apply to make your website rank higher in Google search. It is
                    how we rock and put us as one of the best leading SEO digital
                    marketing agencies.
                  </p>
                  <p>
                    <strong>Our White Hat services:</strong>
                  </p>
                  <p>
                    Unlike other SEO companies, we offer only White Hat services
                    to our clients. It means we do not spam the web or the
                    internet. In addition, our strategies are approved by search
                    engines like Google, Yahoo, Bing. At the same time, other
                    Black Hat services offered by local SEO companies are brief
                    and gives you temporary search engine rankings.
                  </p>
                  <p>
                    <strong>Outstanding Results:</strong>
                  </p>
                  <p>
                    We do not just exaggerate but, we implement our strategies to
                    assist you. Our SEO digital marketing services help your
                    website with long-lasting results. Whether it is design or
                    your website ranking, our strategic implementation always has
                    outstanding results.
                  </p>
                  <p>
                    <strong>We work for higher SEO rankings:</strong>
                  </p>
                  <p>
                    Matrix Solutions help you gain higher search engine results
                    through strategic SEO techniques. Our digital SEO experts use
                    different search engine optimization tools to create a better
                    user approach and enhance SEO rankings in search engine
                    results.
                  </p>
                  <p>
                    <strong>Personalized Customer Service:</strong>
                  </p>
                  <p>
                    You will be in direct contact with our SEO expert at{" "}
                    <a href="../../">Matrix Solutions</a>. So, with just a phone
                    call, you can tailor your services, and we'll go to work. Our
                    digital SEO experts will adjust their strategies according to
                    your specifications without any hurdle.
                  </p>
                  <p>
                    <strong>We are Transparent:</strong>
                  </p>
                  <p>
                    We understand that paying an agency and not receiving adequate
                    outcomes is your greatest dread. But, now you need not worry
                    because we are honest with our customers. We are clear about
                    what we do and offer 24/7 access to our clients. It is how
                    Matrix Solutions, the best SEO Company builds a trustworthy
                    relationship with customers!
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
  
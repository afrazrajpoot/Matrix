export const Digital_marketing = () => (
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
                              <h1>Services / Digital Marketing</h1>
                              {/*<p>
                                                How can your marketing become more data-driven and more human-centric? We believe the answer lies in deeper collaboration, powerful storytelling, and analytical rigor – combined with the agile methodology needed to bring it all together.
                                            </p>*/}
                              {/*<a class="btn scroll" href="#what-we-do">Our services</a>
                                            <a class="btn" href="our-work">Our work</a>*/}
                              <ul id="breadcrumb" className="web">
                                <li>
                                  <a href="../technology/">Previous</a> |{" "}
                                  <a href="../branding/">Next</a>
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
                  <li>Digital marketing</li>
                </ul>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <ul id="breadcrumb" className="mobile">
                  <li>
                    <a href="../technology/">Previous</a> |{" "}
                    <a href="../branding/">Next</a>
                  </li>
                  {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
                </ul>
                <div className="tb-inner">
                  {/*<p style="font-weight:600;margin-top:0;margin-bottom:2vw;">
                            How can your marketing become more data-driven and more human-centric? We believe the answer lies in deeper collaboration, powerful storytelling, and analytical rigor – combined with the agile methodology needed to bring it all together.
                        </p>
                        <h3>The challenge of meeting audience expectations</h3>
                        <p>Audiences today are empowered by connected technologies – and bombarded with marketing messages. It’s harder than ever to be heard above the noise.</p>
                        <p>Even conversion-focused brands need to think about building and retaining a loyal audience to protect themselves against commoditization or disruption. To build that kind of brand, you need a story. And to shape that story, you need a strategy.</p>
                        <p>Matrix Solutions leverages our digital experience, analytics expertise, and creative talent to build marketing strategies that deliver exceptional results. In a landscape of disruption, our team blends the art and science of strategy, seizing opportunities through actionable insights and powerful storytelling.</p>
  
  <a href="../technology" class="btn submit" style="color: blue; position:  relative; left: 45%;">OUR TECHNOLOGY</a>
                    </div>
                </div>
            </div>
  
            <div class="image-block">
                <div class="content-inner">
                    <div class="ib-inner">
                        <img src="../images/CaseStudy_Sony-LSUX_hero_big_0.jpg" />
                    </div>
                </div>
            </div>
            <div class="text-block">
                <div class="content-inner">
                    <div class="tb-inner">
                        <h3>Data that lives up to its potential</h3>
                        <p>Audiences today are empowered by connected technologies – and bombarded with marketing messages. It’s harder than ever to be heard above the noise.</p>
                        <p>Even conversion-focused brands need to think about building and retaining a loyal audience to protect themselves against commoditization or disruption. To build that kind of brand, you need a story. And to shape that story, you need a strategy.</p>
                        <p>Matrix Solutions leverages our digital experience, analytics expertise, and creative talent to build marketing strategies that deliver exceptional results. In a landscape of disruption, our team blends the art and science of strategy, seizing opportunities through actionable insights and powerful storytelling.</p>
                    </div>
                </div>
            </div>
            <div class="image-block">
                <div class="content-inner">
                    <div class="ib-inner">
                        <img src="../images/CaseStudy_ServiceKing_Hero_big_0_0.jpg" />
                    </div>
                </div>
            </div>
            <div class="text-block">
                <div class="content-inner">
                    <div class="tb-inner">
                        <h3>Choosing an SEO partner</h3>
                        <p>Big or small, businesses that win at search reap enormous benefits. But although SEO is technical, it’s not an exact science, and it takes time to show results (anyone who tells you otherwise is lying).</p>
                        <p>As a result, you’re putting a lot of trust in an SEO partner. Here’s what you should be looking for from your search agency:</p>
                        <p><Strong>Focused on people.</Strong> A good SEO agency naturally lives and breathes the technical stuff, but ultimately people, not bots, do business with you. Your search marketing team should care about the customer experience.</p>
                        <p><strong>Focused on people.</strong> SEO changes fast. There are new challenges all the time, from algorithm changes to the impact of voice. An agency that hasn’t changed their approach in 3 years is hopelessly out of touch. A great SEO agency is always evolving.</p>
                        <p><strong>Clear communication.</strong> Google’s algorithm is complex. SEO decisions often involve weighing pros and cons. So it’s important that your SEO partner can clearly and transparently explain their recommendations.</p>
                    </div>
                </div>
            </div>
            <div class="image-block">
                <div class="content-inner">
                    <div class="ib-inner">
                        <img src="../images/IMG_6679.jpg" />
                    </div>
                </div>
            </div>
            <div class="text-block">
                <div class="content-inner">
                    <div class="tb-inner">
                        <h3>Getting the most from your ad spend</h3>
                        <p>Between search, display, YouTube, sponsored content, and social media – and the targeting options available in each of those channels – digital media offers a paralyzing amount of choice.</p>
                        <p>The challenge is knowing how reach the right people on the right platforms. Without sufficient tools, time, and expertise on hand, it can be hard to tell if your marketing dollars are being spent wisely, let alone efficiently. </p>
                        <p>We’re experts at creating high-performance ads and hyper-targeted campaigns, using all the tools of digital media to optimize how your marketing budget is spent. Our team of paid media specialists, data scientists, and creatives work together to connect you with your audience, generating leads, sales, and revenue with maximum effectiveness.</p>
                    </div>
                </div>
            </div>
            <div class="image-block">
                <div class="content-inner">
                    <div class="ib-inner">
                        <img src="../images/Digital-Marketing111.jpg" />
                    </div>
                </div>
            </div>
            <div class="text-block">
                <div class="content-inner">
                    <div class="tb-inner">
                        <h3>Getting content to work for you</h3>
                        <p>Great content marketing is almost unfair. It brings qualified purchasers to you, helps drive conversions while providing brand lift, and continues to deliver value for years. </p>
                        <p>But in a crowded digital space, not every piece of content achieves its full potential. Content success requires agility, strategy, a willingness to provide value, and above all, persistence.</p>
                        <p>At BFM, we create content that resonates with your customers because it’s engineered for them. Our content marketing services start with well-crafted strategies, drawing on channel expertise and performance data to make better content that works harder for your business.</p>
                    </div>
                </div>
            </div>
            <div class="image-block">
                <div class="content-inner">
                    <div class="ib-inner">
                        <img src="../images/best-digital-marketing-agency-ad-campaigns-for-your-inspiration-1.png" />
                    </div>
                </div>
            </div>*/}
                  <p
                    style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}
                  >
                    Are you intending to make your marketing more data-driven and
                    more human-centric? We believe the answer lies in content
                    marketing, deeper collaboration, powerful storytelling, and
                    analytical rigour – combined with the agile methodology needed
                    to bring it all together.
                  </p>
                  <h3>Our Digital Marketing Services</h3>
                  <p>
                    Here’s the list of digital marketing services we offer to make
                    your brand stand differently;
                  </p>
                  <ul>
                    <li>Search Engine Optimization</li>
                    <li>Pay Per Click</li>
                    <li>Social Media Marketing</li>
                    <li>Content Marketing Services</li>
                    <li>Digital PR</li>
                    <li>Paid Ad</li>
                    <li>Business Intelligence </li>
                    <li>Data Analytics </li>
                  </ul>
                  <h3>The Real Challenge to Meet Audience Expectations</h3>
                  <p>
                    In this era of technical advancement, the audience is
                    empowered by connected technologies and bombarded with
                    marketing messages. As a result, it's harder than ever to be
                    heard above the noise.
                  </p>
                  <p>
                    Even conversion-focused brands need to think about building
                    and retaining a loyal audience to protect themselves against
                    commoditization or disruption. To build that kind of brand,
                    you need a story. And to shape that story, you need a
                    strategy.
                  </p>
                  <p>
                    Matrix Solutions commands the digital experience, social media
                    marketing, analytics expertise, and creative talent to build
                    marketing strategies that deliver exceptional results.
                  </p>
                  {/*<a href="../technology" class="ctaButton" style="padding: 10px 5px 10px 5px; color:white; position: relative; left: 45%; background-color: royalblue; margin: 30px 0px 30px 0px; font-family: 'Futura Lt BT'; text-decoration:none;">OUR TECHNOLOGY</a>*/}
                </div>
              </div>
            </div>
            <a href="javascript:;" className="btn-cta contact-icon1" style={{}}>
              LET'S TALK ABOUT YOUR PROJECT
            </a>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="../images/CaseStudy_Sony-LSUX_hero_big_0.jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>Data Has the Power to Do All We Do</h3>
                  <p>
                    Audiences today are empowered by connected technologies – and
                    bombarded with marketing messages. As a result, it's harder
                    than ever to be heard above the noise.
                  </p>
                  <p>
                    Even conversion-focused brands need to think about building
                    and retaining a loyal audience to protect themselves against
                    commoditization or disruption. To build that kind of brand,
                    you need a story. And to shape that story, you need a
                    strategy.
                  </p>
                  <p>
                    Matrix Solutions leverages Data Analytics, Business
                    Intelligence and creative talent to build marketing strategies
                    that deliver exceptional results. Our team blends the art and
                    science of strategy in a landscape of disruption, seizing
                    opportunities through actionable insights and powerful
                    storytelling.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="../images/CaseStudy_ServiceKing_Hero_big_0_0.jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>Choosing the Right SEO Partner</h3>
                  <p>
                    Big or small, businesses that win at search reap enormous
                    benefits. But although SEO is technical, it’s not an exact
                    science, and it takes time to show results (anyone who tells
                    you otherwise is lying).
                  </p>
                  <p>
                    As a result, you're putting a lot of trust in a Search Engine
                    Optimization partner. Here’s what you should be looking for
                    from your search agency:
                  </p>
                  <p>
                    <strong>We are focused on people.</strong> A good SEO agency
                    naturally lives and breathes the technical stuff, but
                    ultimately people, not bots, do business with you. Therefore,
                    your search marketing team should care about the customer
                    experience.
                  </p>
                  <p>
                    <strong>Focused on people.</strong> SEO changes fast. There
                    are new challenges all the time, from algorithm changes to the
                    impact of voice. An agency that hasn't changed its approach in
                    3 years is hopelessly out of touch. But, on the other hand, a
                    great SEO agency is constantly evolving.
                  </p>
                  <p>
                    <strong>Clear communication.</strong> Google's algorithm is
                    complex. As a result, SEO decisions often involve weighing
                    pros and cons. So it's essential that your SEO partner can
                    clearly and transparently explain their recommendations.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="../images/IMG_6679.jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>
                    Ad Campaign: The Best Approach to Reach Your Potential
                    Customers{" "}
                  </h3>
                  <p>
                    Between search, display, YouTube, sponsored content, and
                    social media – and the targeting options available in each of
                    those channels – digital media offers a paralyzing amount of
                    choice.
                  </p>
                  <p>
                    The challenge is knowing how to reach the right people on the
                    right platforms. Without good tools, time, and expertise on
                    hand, it can be hard to tell if your marketing dollars are
                    being spent wisely, let alone efficiently.
                  </p>
                  <p>
                    We're experts at creating high-performance ads and
                    hyper-targeted campaigns, using digital media tools to
                    optimize how your marketing budget is spent. Our team of Paid
                    Media, Digital PR, data scientists, and creatives work
                    together to connect you with your audience, generating leads,
                    sales, and revenue with maximum effectiveness.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="../images/Digital-Marketing111.jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>Creative Content to Improve Your Business</h3>
                  <p>
                    Great content marketing is almost unfair. It brings qualified
                    purchasers to you, helps drive conversions while providing
                    brand lift, and continues to deliver value for years.
                  </p>
                  <p>
                    But in a crowded digital space, not every piece of content
                    achieves its full potential. Content success requires agility,
                    strategy, a willingness to provide value, and above all,
                    persistence.
                  </p>
                  <p>
                    At BFM, we create content that resonates with your customers
                    because it’s engineered for them. Our content marketing
                    services start with well-crafted strategies, drawing on
                    channel expertise and performance data to make better content
                    that works harder for your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="../images/best-digital-marketing-agency-ad-campaigns-for-your-inspiration-1.png" />
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
  
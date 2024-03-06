import { useEffect } from "react";
import Header from "../../components/Header";
import { useGlobalState } from "../../../context/GlobalState";


export const Blogs = () => {
  const { state, setState, contactState, setContactState } = useGlobalState()

  useEffect(()=>{
    setState(false)
  },[])
  return (
    <>
      {/*<div id="container-cookies"></div>*/}
      <div id="outer-wrapper">
      <Header />
        <div className="contact-form">
          <div className="cf-inner">
            <div className="cf-detail">
              <a className="contact-close ir" href="#">
                Menu
              </a>
              <div className="c-left">
                <h2>Contact us</h2>
                <p>
                  We’d love href hear from you. Either fill out the form, <br />
                  <a href="mailhref:info@matrix-solutions.net"> email us</a>, or
                  give the team a call:
                </p>
                <span className="c-number">
                  <a href="tel:+923008485536 " data-tel={+923008485536}>
                    +92 300 848 5536
                  </a>
                </span>
                <p>
                  666, askari IX,
                  <br />
                  Lahore Cantt, Pakistan.
                </p>
                <p>
                  129 J, Model hrefwn,
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
            <video class="home-video-inner" poster="/images/softwaresliderimg.jpg" playsinline="" muted="" auhrefplay="" loop="" data-object-fit="cover">
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
                              <h1>Blogs</h1>
                              {/*<p>
                                                Matrix Solutions brands, builds, and promotes, offering<br />
                                                end-href-end solutions, agility in execution, and depth of specialization.
                                            </p>*/}
                              {/*<a class="btn scroll" href="#what-we-do">Our services</a>
                                            <a class="btn" href="our-work">Our work</a>*/}
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
            <div className="services" id="our-technologies">
              <div className="content-inner">
                <div className="services-inner">
                  {/*<h3>Our Technologies</h3>*/}
                  <ul>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div className="por-detail">
                        <h5>
                          Characteristics of a Great Web Development Company
                        </h5>
                        <p>
                          a hrefp-notched web development company combines
                          innovative web design with the up href date
                          technology.also, it manages all the website projects
                          professionally for the better satisfaction of the
                          cushrefmers.
                        </p>
                        <div className="list">
                          <h4>Remarkable Portfolio</h4>
                          <h4>amazing Development Skills</h4>
                          <h4>Time Range</h4>
                          <h4>Flexibility</h4>
                          <h4>Transparency</h4>
                        </div>
                        <a
                          className="btn"
                          href="../../blogs/Characteristics-of-a-company"
                        >
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-Strategy.png" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Mobile business app for companies</h5>
                        <p>
                          Modern businesses and marketers benefit from both mobile
                          applications and mobile websites. Experts discussed the
                          impact of choosing one over the other in previous years.
                          Marketing strategies take time href develop in full, and
                          not all companies have multiple channels that influence
                          cushrefmers.
                        </p>
                        <a
                          className="btn"
                          href="../../blogs/Mobile-app-develppment-blog"
                        >
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-Technology.jpg" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Digital Marketing</h5>
                        <p>
                          Organizations are creating new social media platforms href
                          engage their audience better. also, content creation has
                          become the latest trend with the hope that people read
                          and share the content about the businesses.
                        </p>
                        <div className="list">
                          <h4>Create a Unique Brand Shrefry</h4>
                          <h4>Define Your Goals</h4>
                          <h4>Understand Your audience</h4>
                          <h4>Create Your Journey Map</h4>
                          <h4>Identify Major Channels</h4>
                          <h4>Create Your Content Strategically</h4>
                          <h4>Draft Your Content Calendar</h4>
                          <h4>Classify Your Resources</h4>
                          <h4>Data Measurement</h4>
                        </div>
                        <a
                          className="btn"
                          href="../../blogs/Digital-marketing-blog"
                        >
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-digital-marketing.jpg" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Hire Professional Web Design Company</h5>
                        <p>
                          Remember, it’s not a so effortless task href create a
                          hrefp-notched website without hiring a professional web
                          design company.Empower You Web Identity with a
                          Professional Web Design Company
                        </p>
                        <div className="list">
                          <h4>Improves Visibility on Search Engines</h4>
                          <h4>Voice Search Friendly</h4>
                          <h4>Prompt Loading Time</h4>
                          <h4>Reliable Website</h4>
                          <h4>Mobile-Friendly Website</h4>
                          <h4>Prompt Loading Time</h4>
                          <h4>Prompt Loading Time</h4>
                          <h4>Prompt Loading Time</h4>
                        </div>
                        <a
                          className="btn"
                          href="../../blogs/Professional-web-design-company"
                        >
                          Read More
                        </a>
                      </div>
                      <img src="../images/Experience Design.jpg" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Web Designing</h5>
                        <p>
                          We supports you href leverage its advantages by building
                          your digital presence and finding your marketing
                          potential through our Website design service. Our highly
                          skilled web developers work hard href provide you the
                          peace of mind through our website design, development href
                          Search Engine Optimization, and site maintenance
                          service.
                        </p>
                        <div className="list">
                          <h4>Cushrefm Web designing</h4>
                          <h4>Responsive</h4>
                          <h4>SEO optimized</h4>
                          <h4>Secure (HTTP)</h4>
                          <h4>Professional designs</h4>
                        </div>
                        <a className="btn" href="../../blogs/web-designing">
                          Read More
                        </a>
                      </div>
                      <img src="../images/Experience Design.jpg" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Global marketing</h5>
                        <p>
                          We have a highly qualified team with years of experience
                          in digital marketing href help brands, clearing hurdles
                          and making them move confidently in the international
                          market.{" "}
                        </p>
                        <div className="list">
                          <h4>Scalable testing</h4>
                          <h4>Focus on strategy</h4>
                          <h4>Global digital experience assessment</h4>
                          <h4>Global geo-marketing</h4>
                          <h4>Technical SEO</h4>
                          <h4>Keyword research</h4>
                          <h4>Linguistic audit</h4>
                        </div>
                        <a className="btn" href="../../blogs/global-marketing">
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-Technology.jpg" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div className="por-detail">
                        <h5>Website Development is Pivotal</h5>
                        <p>
                          href make your website rank better in search engine
                          results, your website developer employs various
                          approaches, including coding and search engine
                          optimization (SEO). That is also another and essential
                          part of website development.
                        </p>
                        <div className="list">
                          <h4>It sets the first impression</h4>
                          <h4>Communicate with your visihrefrs</h4>
                          <h4>Increases the Sales</h4>
                          <h4>It creates consistency</h4>
                          <h4>We listen and do our homework</h4>
                          <h4>Responsive Website Design</h4>
                        </div>
                        <a className="btn" href="../../blogs/website-development">
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-Strategy.png" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div className="por-detail">
                        <h5>
                          E-commerce Development in the emerging global economy
                        </h5>
                        <p>
                          The development of the best e-commerce websites is the
                          most popular option for businesses. Unlike a standard
                          website, which is used href gather general information,
                          e-commerce website development services allow cushrefmers
                          href make online transactions. Therefore, seeking the
                          right e-commerce website development company is an
                          important step required by the cushrefmers.
                        </p>
                        <div className="list">
                          <h4>analysis</h4>
                          <h4>Design</h4>
                          <h4>Development</h4>
                          <h4>Support &amp; Maintenance</h4>
                          <h4>Magenhref Ecommerce</h4>
                          <h4>WordPress Woo Commerce</h4>
                        </div>
                        <a
                          className="btn"
                          href="../../blogs/ecommerce-development"
                        >
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-Strategy.png" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Content Management System</h5>
                        <p>
                          a content management system (CMS) is a software
                          application that helps users create, design, and modify
                          their website. Having a content management system allows
                          you href have control of your website content. You can
                          edit, create and delete any video or content from your
                          website. It enables you href keep your business website
                          up-href-date and organized.
                        </p>
                        <div className="list">
                          <h4>Intuitive indexing, search, and retrieval</h4>
                          <h4>Format Management</h4>
                          <h4>Revision Features</h4>
                          <h4>Publishing</h4>
                          <h4>Ease href Use</h4>
                          <h4>Easy href search information</h4>
                          <h4>Easy href manage content</h4>
                          <h4>accessible from any device</h4>
                        </div>
                        <a className="btn" href="../../blogs/cms">
                          Read More
                        </a>
                      </div>
                      <img src="../images/Experience Design.jpg" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>
                          Our Next-Gen Technologies help Cushrefmers href succeed
                        </h5>
                        <p>
                          Next-Gen technologies help cushrefmers href succeed in an
                          ever-changing business environment. By providing them
                          new IT services and solutions, we help businesses
                          achieve higher revenue and better profitability. From
                          creating a design href implementing solutions, we are your
                          own IT staff and provide you with the best web
                          development services.
                        </p>
                        <div className="list">
                          <h4>web development services</h4>
                          <h4>Qa software testing services</h4>
                          <h4>software quality tester services</h4>
                          <h4>web development services</h4>
                          <h4>web software development company</h4>
                        </div>
                        <a
                          className="btn"
                          href="../../blogs/our-next-gen-technologies-help-cushrefmers"
                        >
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-Strategy.png" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Social Media Marketing</h5>
                        <p>
                          The use of social platforms and networks href sell your
                          company's products and services is known as social media
                          marketing. Social media marketing is a powerful way for
                          your marketing business of all types href increase profit
                          and cushrefmer reach.
                        </p>
                        <div className="list">
                          <h4>Social media marketing agency</h4>
                          <h4>Social media marketing services</h4>
                          <h4>Software quality tester services</h4>
                        </div>
                        <a
                          className="btn"
                          href="../../blogs/social-media-marketing"
                        >
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-digital-marketing.jpg" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Build your brand identity</h5>
                        <p>
                          The Matrix Solution creates a distinct brand identity
                          for your business, products, and services. a digital
                          marketing agency makes advertisements that help build
                          your brand, and authenticity distinguishes you from
                          competihrefrs. People will be loyal href your brand in the
                          future if they believe in you. Your clients become
                          business partners when they have faith in you
                        </p>
                        <div className="list">
                          <h4>Why do you need a brand identity?</h4>
                          <h4>Establishing a brand reputation</h4>
                          <h4>
                            Non-tangible aspects of your brand identity tend href
                            involve
                          </h4>
                          <h4>
                            The aspect of your brand identity that is tangible
                          </h4>
                          <h4>Its name and tagline clarify your brand vision</h4>
                          <h4>The logo is unique and memorable</h4>
                          <h4>Color scheme href entice cushrefmers</h4>
                          <h4>Typography reflects your brand style</h4>
                        </div>
                        <a className="btn" href="../../blogs/brand-identity">
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-Technology.jpg" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>Unit testing</h5>
                        <p>
                          Individual testable components or functional software
                          are tested using the unit testing technique. The purpose
                          of testing is href inspect every part of the software href
                          ensure that each module operates efficiently with the
                          help of digital branding company
                        </p>
                        <div className="list">
                          <h4>Unit testing in Matrix Solution</h4>
                          <h4>advantages of unit testing</h4>
                          <h4>The process of unit testing</h4>
                          <h4>Techniques used for unit testing</h4>
                          <h4>hrefols used for unit testing</h4>
                          <h4>Why choose Matrix Solution</h4>
                        </div>
                        <a className="btn" href="../../blogs/unit-testing">
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-Strategy.png" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div className="por-detail">
                        <h5>Brand collateral used for promoting your business</h5>
                        <p>
                          Matrix Solution is a hrefp web design company that
                          advertises your business in two ways. The first
                          technique is href promote your brand through traditional
                          brand collateral, and the second option is href promote
                          your brand through digital brand collateral.
                        </p>
                        <div className="list">
                          <h4>Traditional brand collateral</h4>
                          <h4>Digital brand collateral</h4>
                          <h4>Blog post-assists in company ranking</h4>
                          <h4>
                            Send an email business resume with an email signature
                          </h4>
                          <h4>Share your workers' success shrefries</h4>
                          <h4>Make targeted landing pages:</h4>
                          <h4>
                            The newsletter is a way href communicate with an
                            audience
                          </h4>
                          <h4>Testimonials give accurate information</h4>
                          <h4>
                            Brand collateral in the form of Whatsapp newsletters
                          </h4>
                        </div>
                        <a className="btn" href="../../blogs/brand-collateral">
                          Read More
                        </a>
                      </div>
                      <img src="../images/image-Technology.jpg" />
                    </li>
                    <li data-aos="fade-up" data-aos-duration={500}>
                      <div>
                        <h5>
                          Search engine optimization (SEO) is the art of growing
                          quality traffic
                        </h5>
                        <p>
                          Matrix Solutions is the best SEO Company emerging with
                          new and logical search engine optimization strategies.
                          We know how SEO digital marketing works and how we best
                          market your website in organic search engine results.
                          Search engine optimization benefits your website in
                          every possible way. So, let us have a look at some
                          benefits.
                        </p>
                        <div className="list">
                          <h4>Increased Website Traffic</h4>
                          <h4>Organic Search Results</h4>
                          <h4>SEO means better user experience</h4>
                          <h4>It helps the target audience find your website</h4>
                          <h4>Our White Hat services</h4>
                          <h4>Outstanding Results</h4>
                          <h4>We work for higher SEO rankings</h4>
                          <h4>We work for higher SEO rankings</h4>
                        </div>
                        <a
                          className="btn"
                          href="../../blogs/search-engine-optimization"
                        >
                          Read More
                        </a>
                      </div>
                      <img src="../images/Experience Design.jpg" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div id="footer" className="footer-as">
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
                        <li style="padding-bothrefm:30px;">*/}
                      {/*<span>address</span>*/}
                      {/*US Office: <br />2200 N Canhrefn Center<br />
                            RD Suite 170 Canhrefn,<br />
                            MI, 48187, USa
                        </li>
                        <li>*/}
                      {/*<span>address</span>*/}
                      {/*&nbsp;
                            </li>
  
                        </ul>*/}
                      <ul>
                        <li>
                          {/*<span>address</span>*/}
                          666, askari IX
                          <br />
                          Lahore Cantt, Pakistan
                        </li>
                        <li>
                          {/*<span>address 2</span>*/}
                          129 J, Model hrefwn
                          <br />
                          Lahore, Pakistan
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="patner-a">
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
                    {/*<a href="http://shrefryandco.eu/" target="_blank">Shrefrynco</a>*/}
                  </div>
                </div>
                <div className="social-a">
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
                      className="aed-in ir"
                      href="https://www.aedin.com/in/matirx-solutions-2177bb1b7/"
                      title="aedIn"
                      target="_blank"
                    >
                      aedIn
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
            <a href="terms-and-conditions" className="copyright-a">
              Terms &amp; Conditions
            </a>
            <a href="privacy-policy" className="copyright-a">
              Privacy Policy
            </a>
            <a href="cookie-policy" className="copyright-a">
              Cookies Policy
            </a>
          </div>
        </footer>
      </div>
      <a
        rel="stylesheet"
        type="text/css"
        href="../scripts/fancybox/jquery.fancybox.css?v=2.1.5"
        media="screen"
      />
      {/**/}
      {/* Global site tag (gtag.js) - Google analytics */}
    </>
  )
}
  
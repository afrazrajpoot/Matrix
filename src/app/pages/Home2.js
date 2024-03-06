import React, { useEffect } from 'react'
import $ from 'jquery';
import Slider1 from '../components/Slider';
import Header from '../components/Header';
import Footer from '../components/Footer';




export const Home2 = () => {

 useEffect(()=>{

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
            <div className="c-right thankyou">
              <div className="form">
                <form
                  id="MyForm"
                  name="MyForm"
                  method="post"
                  action="/register-frm-action.asp"
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
          <div id="slider" className="full-h">
            <div id="content-inner" className="flexslider">
              <ul className="slides">
                <li>
                  <div
                    className="bgslider shade"
                    style={{ backgroundImage: "url(/images/img-home.jpg)" }}
                  >
                    <img
                      src="/images/softwaresliderimg.jpg"
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
                              Precision and Accuracy <br />
                              Our rules to follow.
                            </h1>
                            <p>
                              We offers IT solutions integrated on system
                              platforms at the cutting edge technology
                              landscape.{" "}
                            </p>
                            <a className="btn scroll" href="../services/">
                              Our services
                            </a>
                            <a className="btn" href="our-work">
                              Our work
                            </a>
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
          <div className="recent-work" id="recent-work">
            <div className="content-inner">
              <div className="recent-work-inner aos-all">
                <h3 className="heading">Recent work</h3>
                <div className="div-repeat">
                  <div className="work-right-column">
                    <div
                      className="image-bg web"
                      style={{ backgroundImage: "url(images/nwec-new1.jpg)" }}
                      data-aos="fade-left"
                      data-aos-duration={500}
                    />
                    <div
                      className="image-bg mobile"
                      style={{
                        backgroundImage: "url(images/nwec-new1-m.jpg)",
                        backgroundPosition: "top center"
                      }}
                      data-aos="fade-left"
                      data-aos-duration={500}
                    />
                  </div>
                  <a href="https://www.newwestend.com/renew" target="_black">
                    <div
                      className="work-left-column"
                      data-aos="fade-right"
                      data-aos-duration={500}
                    >
                      <div
                        className="work-inside"
                        style={{
                          background:
                            "linear-gradient(90deg,#2e1c44 5%,#93378c 100%)"
                        }}
                      >
                        <label>NEW WEST END COMPANY</label>
                        <h2>
                          +<span className="counter">100</span>%
                        </h2>
                        <h3>
                          Better together, for good: Our 2021-26 plan for the
                          West End
                        </h3>
                        <p>AV, Static, Dyanamic, Social</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="div-repeat">
                  <div className="work-right-column">
                    <div
                      className="image-bg web"
                      style={{
                        backgroundImage: "url(images/edf-img-recent.jpg)"
                      }}
                      data-aos="fade-right"
                      data-aos-duration={500}
                    />
                    <div
                      className="image-bg mobile"
                      style={{
                        backgroundImage:
                          "url(images/edf-img-recent-mobile.jpg)",
                        backgroundPosition: "top center"
                      }}
                      data-aos="fade-right"
                      data-aos-duration={500}
                    />
                  </div>
                  <a href="https://www.edftrading.com/" target="_black">
                    <div
                      className="work-left-column"
                      data-aos="fade-left"
                      data-aos-duration={500}
                    >
                      <div
                        className="work-inside"
                        style={{
                          background:
                            "linear-gradient(90deg,#2e1c44 5%,#00e5a3 100%)"
                        }}
                      >
                        <label>EDF Trading</label>
                        <h2>
                          +<span className="counter">100</span>%
                        </h2>
                        <h3>Located in south-west London</h3>
                        <p>AV, Static, Dyanamic, Social</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="div-repeat">
                  <div className="work-right-column">
                    <div
                      className="image-bg web"
                      style={{
                        backgroundImage:
                          "url(images/kingston-thumb-img-recent.jpg)"
                      }}
                      data-aos="fade-left"
                      data-aos-duration={500}
                    />
                    <div
                      className="image-bg mobile"
                      style={{
                        backgroundImage:
                          "url(images/kingston-thumb-img-recent-m.jpg)",
                        backgroundPosition: "top center"
                      }}
                      data-aos="fade-left"
                      data-aos-duration={500}
                    />
                  </div>
                  <a href="https://kingstonuponthames.info/" target="_black">
                    <div
                      className="work-left-column"
                      data-aos="fade-right"
                      data-aos-duration={500}
                    >
                      <div
                        className="work-inside"
                        style={{
                          background:
                            "linear-gradient(90deg,#2e1c44 5%,#93378c 100%)"
                        }}
                      >
                        <label>KINGSTON UPON THAMES</label>
                        <h2>
                          +<span className="counter">100</span>%
                        </h2>
                        <h3>Located in south-west London</h3>
                        <p>AV, Static, Dyanamic, Social</p>
                      </div>
                    </div>
                  </a>
                </div>
                {/*<div class="div-repeat">
                          <div class="work-right-column">
                              <div class="image-bg web" style="background-image: url(images/galinne.jpg);" data-aos="fade-left" data-aos-duration="500"></div>
                              <div class="image-bg mobile" style="background-image: url(images/glainne-recent-mobile.jpg);" data-aos="fade-left" data-aos-duration="500"></div>
                          </div>
                          <a href="http://glainne.sbronline.co.uk/" target="_black">
                              <div class="work-left-column" data-aos="fade-right" data-aos-duration="500">
                                  <div class="work-inside" style="background:linear-gradient(90deg,#2e1c44 5%,#00e5a3 100%);">
                                      <label>Glainne</label>
                                      <h2>+<span class="counter">100</span>%</h2>
                                      <h3>Glainne Imagine a world designed for you.</h3>
                                      <p>Display, Static, SEO, Social</p>
                                  </div>
                              </div>
                          </a>
                      </div>*/}
                {/*   <div class="div-repeat">
                          <div class="work-right-column">
                              <div class="image-bg web" style="background-image: url(images/westbrompton.jpg);" data-aos="fade-right" data-aos-duration="500"></div>
                              <div class="image-bg mobile" style="background-image: url(images/brompton-recent-mobile.jpg);" data-aos="fade-right" data-aos-duration="500"></div>
                          </div>
                          <a href="http://www.westbromptoncrossing.com/" target="_black">
                              <div class="work-left-column" data-aos="fade-left" data-aos-duration="500">
                                  <div class="work-inside" style="background:linear-gradient(90deg,#2e1c44 5%,#93378c 100%)">
                                      <label>West Brompton Crossign</label>
                                      <h2>+<span class="counter">100</span>%</h2>
                                      <h3>Destination eating, drinking and shopping in the heart of west London</h3>
                                      <p>AV, Static, Dyanamic, Social</p>
                                  </div>
                              </div>
                          </a>
                      </div> */}
                <div className="div-repeat">
                  <div className="work-right-column">
                    <div
                      className="image-bg web"
                      style={{ backgroundImage: "url(images/apo.jpg)" }}
                      data-aos="fade-right"
                      data-aos-duration={500}
                    />
                    <div
                      className="image-bg mobile"
                      style={{
                        backgroundImage: "url(images/apo-mobile-recent.jpg)"
                      }}
                      data-aos="fade-right"
                      data-aos-duration={500}
                    />
                  </div>
                  <a href="https://a-part-of.com/" target="_black">
                    <div
                      className="work-left-column"
                      data-aos="fade-left"
                      data-aos-duration={500}
                    >
                      <div
                        className="work-inside"
                        style={{
                          background:
                            "linear-gradient(90deg,#2e1c44 5%,#00e5a3 100%)"
                        }}
                      >
                        <label>A part of_</label>
                        <h2>
                          +<span className="counter">100</span>%
                        </h2>
                        <h3>
                          Who knows better than you what you want from your
                          home?
                        </h3>
                        <p> AV, Static, Display, Social</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="our-services">
            <div className="content-inner">
              <div id="what-we-do" className="osv-inner">
                <h3>What we do</h3>
                {/*<div style="width:100%;float:left;">
                          <p>Our aim is to deliver the best and the most efficient web and mobile solutions. We provide wide range of services including website development and design, E-commerce online solutions, Content Management System integration, Custom Web/Mobile applications development, Web based enterprise solutions, Responsive web design, Website management, Internet marketing and more.</p>
                          <p>The Matrix software design team will help you create competitive long-term advantages using creative software solutions that will save you time, resources and money. Using a customer-centric approach in a collaborative environment, the Matrix software development team will find the best solution for your unique application.</p>
                      </div>*/}
                <ul>
                  <li data-aos="fade-up" data-aos-duration={500}>
                    <a href="../strategy/">
                      <span>
                        <label
                          style={{
                            backgroundImage: "url(images/our-process.png)"
                          }}
                        />
                      </span>
                      <div>
                        <h5>Strategy</h5>
                        <div className="list">
                          <h4>Digital Strategy</h4>
                          <h4>Brand Strategy</h4>
                          <h4>Digital Transformation</h4>
                          <h5 className="btn">Read More</h5>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={500}>
                    <a href="../experience-design/">
                      <span>
                        <label
                          style={{
                            backgroundImage:
                              "url(images/content-management-systems.png)"
                          }}
                        />
                      </span>
                      <div>
                        <h5>Experience Design</h5>
                        <div className="list">
                          <h4>Website Design</h4>
                          <h4>Mobile App Design</h4>
                          <h4>eCommerce Design</h4>
                          <h4>Global Experience Assessment</h4>
                          <h4>Data Curation + Labeling</h4>
                          <h4>Information Architecture + User Experience</h4>
                          <h5 className="btn">Read More</h5>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={500}>
                    <a href="../technology/">
                      <span>
                        <label
                          style={{
                            backgroundImage: "url(images/web-development.png)"
                          }}
                        />
                      </span>
                      <div>
                        <h5>Technology</h5>
                        <div className="list">
                          <h4>Solutions Architecture</h4>
                          <h4>Website Development</h4>
                          <h4>App Development</h4>
                          <h4>eCommerce Development</h4>
                          <h4>Next Gen</h4>
                          <h4>Partnerships + Content Management Systems</h4>
                          <h5 className="btn">Read More</h5>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={500}>
                    <a href="../digital-marketing/">
                      <span>
                        <label
                          style={{
                            backgroundImage:
                              "url(images/e-commerce-web-design.png)"
                          }}
                        />
                      </span>
                      <div>
                        <h5>Digital Marketing</h5>
                        <div className="list">
                          <h4>Marketing Strategy</h4>
                          <h4>Social Media Marketing</h4>
                          <h4>Search Engine Optimization</h4>
                          <h4>Paid Media</h4>
                          <h4>Data Analytics + Business Intelligence</h4>
                          <h4>Content Marketing</h4>
                          <h4>Digital PR</h4>
                          <h4>Influencer Marketing</h4>
                          <h5 className="btn">Read More</h5>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={500}>
                    <a href="../branding/">
                      <span>
                        <label
                          style={{
                            backgroundImage:
                              "url(images/analytics-conversions.png)"
                          }}
                        />
                      </span>
                      <div>
                        <h5>Branding</h5>
                        <div className="list">
                          <h4>Logo Design</h4>
                          <h4>Brand Collateral</h4>
                          <h4>Brand Identity</h4>
                          <h5 className="btn">Read More</h5>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/*<li data-aos="fade-up" data-aos-duration="500">
                          <span><label style="background-image:url(images/search-engine-optimisation.png)"></label></span>
                          <div>
                              <h5>SEO & Digital Marketing*/}
                  {/*(SEO)*/}
                  {/*</h5>
                                  <p>Takes care of the SEO of brand’s websites to get more traffic so that they can always stay at the top.</p>
                              </div>
                          </li>
                          <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                              <span><label style="background-image:url(images/public-relations2.PNG)"></label></span>
                              <div>
                                  <h5>Mobile Applications</h5>
                                  <p>Unmatched services of custom Mobile Application Development are delivered by using new generation technologies.</p>
                              </div>
                          </li>
                          <li data-aos="fade-up" data-aos-duration="500">
                              <span><label style="background-image:url(images/web-design.png)"></label></span>
                              <div>
                                  <h5>Custom Software Solutions</h5>
                                  <p>Providing best consulting for businesses to incorporate the technological advancements.</p>
                              </div>
                          </li>
                          <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                              <span><label style="background-image:url(images/seo-partners-and-links.png)"></label></span>
                              <div>
                                  <h5>Testing</h5>
                                  <p>Quality Analysts test the software thoroughly to check for errors by forming test cases.</p>
                              </div>
                          </li>*/}
                  {/*<li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                              <span style="background-image:url(images/public-relations.png)"></span>
                              <div>
                                  <h5>Public Relations</h5>
                                  <p>No new communities in the noise footprint and greater respite for those who are already in it.</p>
                              </div>
                          </li>
                          <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                              <span style="background-image:url(images/pay-per-click-advertising.png)"></span>
                              <div>
                                  <h5>Pay-Per-Click Advertising (PPC)</h5>
                                  <p>No new communities in the noise footprint and greater respite for those who are already in it.</p>
                              </div>
                          </li>
                          <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                              <span style="background-image:url(images/analytics-conversions.png)"></span>
                              <div>
                                  <h5>Analytics & Conversions</h5>
                                  <p>No new communities in the noise footprint and greater respite for those who are already in it.</p>
                              </div>
                          </li>*/}
                </ul>
              </div>
            </div>
          </div>
          <div id="our-clients" className="div-clients related">
            <div className="content-inner">
              <h3>Our clients</h3>
            {/* <Slider1 /> */}
            </div>
          </div>
          <div className="project" id="our-technologies">
            <div className="content-inner">
              <div className="project-inner">
                <h3>Our technologies</h3>
                <ul>
                  <li data-aos="fade-up" data-aos-duration={500}>
                    <img src="/images/frame-work-icon.png" />
                    <div className="por-detail">
                      <h5>Frameworks</h5>
                      <p>
                        We work on cutting-edge technologies by using like
                        ASP.Net, AngularJs, ReactJs, React Native, Node.Js,
                        latest html techniques for more attractive user
                        interface.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={500}>
                    <img src="/images/cms-icon.jpg" />
                    <div>
                      <h5>CMS</h5>
                      <p>
                        We provide complete solution for content management by
                        using the advanced and latest technology based CMS
                        (Umbraco, Kentico , Wordpress).
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={500}>
                    <img src="/images/ecommerce-icon.jpg" />
                    <div>
                      <h5>Ecommerce Solution</h5>
                      <p>
                        Wordpress/ WooCommerce is most popular CMS for Ecommerce
                        solutions however we also provide the Umbraco solutions
                        as well.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={500}>
                    <img src="/images/mobile-develempment-icon.png" />
                    <div>
                      <h5>Mobile Development</h5>
                      <p>
                        Our mobile development expert team develop newest styles
                        in Mobile App and generate matchlessly and advance
                        solutions for business growth.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={500}>
                    <img src="/images/desgining-icon.png" />
                    <div>
                      <h5>Design Work</h5>
                      <p>
                        Our team creates intuitive user experiences wrapped up
                        in beautiful designs using latest technologies according
                        to specification.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration={500}>
                    <img src="/images/integration.png" />
                    <div>
                      <h5>Integrations </h5>
                      <p>
                        The best integration services are offered to the clients
                        so that the productivity of the software applications
                        can reach to the fullest.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <a href="technology" className="btn-cta">
                Go to technology
              </a>
            </div>
          </div>
          <div className="grid-box">
            <div className="content-inner">
              <div className="grid-inner" id="why-to-choose-us">
                <h3>Why choose us</h3>
                <div className="grid-box">
                  <div
                    className="grid-block"
                    data-aos="fade-up"
                    data-aos-duration={500}
                  >
                    <div className="img-sec">
                      <img className="img" src="/images/development.png" />
                    </div>
                    <div className="grid-info">
                      <h5>Quality Assurance</h5>
                      <p>
                        Quality assurance is an essential part of the
                        development process and you can rely on our experienced
                        quality testing experts.
                      </p>
                    </div>
                  </div>
                  <div
                    className="grid-block"
                    data-aos="fade-up"
                    data-aos-duration={500}
                  >
                    <div className="img-sec">
                      <img className="img" src="/images/discuss.png" />
                    </div>
                    <div className="grid-info">
                      <h5>Customer Support</h5>
                      <p>
                        We offer 24×7 customer support. Our experienced staff
                        makes everything possible to resolve all your queries
                        round the clock.
                      </p>
                    </div>
                  </div>
                  <div
                    className="grid-block"
                    data-aos="fade-up"
                    data-aos-duration={500}
                  >
                    <div className="img-sec">
                      <img className="img" src="/images/development.png" />
                    </div>
                    <div className="grid-info">
                      <h5>Privacy/Data Protection</h5>
                      <p>
                        We take your privacy very seriously and also welcome to
                        signing NDAs (Non-Disclosure Agreements) before
                        commencing any work.
                      </p>
                    </div>
                  </div>
                  <div
                    className="grid-block"
                    data-aos="fade-up"
                    data-aos-duration={500}
                  >
                    <div className="img-sec">
                      <img className="img" src="/images/development.png" />
                    </div>
                    <div className="grid-info">
                      <h5>Progress Update</h5>
                      <p>
                        We will keep you posted on the progress with regular
                        updates on daily basis to make sure we are heading in
                        the right direction.
                      </p>
                    </div>
                  </div>
                  <div
                    className="grid-block"
                    data-aos="fade-up"
                    data-aos-duration={500}
                  >
                    <div className="img-sec">
                      <img className="img" src="/images/idea.png" />
                    </div>
                    <div className="grid-info">
                      <h5>Dedicated Team</h5>
                      <p>
                        We have a team of highly skilled and dedicated
                        developers/designers who work for only ONE CLIENT at a
                        time on one or more projects.
                      </p>
                    </div>
                  </div>
                  <div
                    className="grid-block"
                    data-aos="fade-up"
                    data-aos-duration={500}
                  >
                    <div className="img-sec">
                      <img className="img" src="/images/design.png" />
                    </div>
                    <div className="grid-info">
                      <h5>All under One Roof</h5>
                      <p>
                        We offer strategy, design, development and marketing all
                        under one roof. A carefully chosen full-service provider
                        can save you time and money.
                      </p>
                    </div>
                  </div>
                  <div
                    className="grid-block"
                    data-aos="fade-up"
                    data-aos-duration={500}
                  >
                    <div className="img-sec">
                      <img className="img" src="/images/comments.png" />
                    </div>
                    <div className="grid-info">
                      <h5>Our Pricing</h5>
                      <p>
                        We provide high quality, custom made affordable
                        solutions for every business and ensure that our prices
                        are exceptionally competitive.
                      </p>
                    </div>
                  </div>
                  <div
                    className="grid-block"
                    data-aos="fade-up"
                    data-aos-duration={500}
                  >
                    <div className="img-sec">
                      <img className="img" src="/images/show.png" />
                    </div>
                    <div className="grid-info">
                      <h5>Payments</h5>
                      <p>
                        We accept payment by all major credit and debit cards,
                        PayPal, Skrill, Western Union, MoneyGram and
                        international bank wire transfer etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </div>
    <link
      rel="stylesheet"
      type="text/css"
      href="scripts/fancybox/jquery.fancybox.css?v=2.1.5"
      media="screen"
    />
  </>
  )
}



export default Home2
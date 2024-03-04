export const Our_work = () => (
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
            <div id="slider" className="small-h">
              <div id="content-inner" className="flexslider">
                <ul className="slides">
                  <li>
                    <div
                      className="bgslider shade"
                      style={{ backgroundImage: "url(../images/img-home.jpg)" }}
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
                              <h1>Our Work</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*<div class="fillter">
                <div class="content-inner">
                    <div>
                        <h1 class="ow-heading">Our Work</h1>
                        <ul id="hiddenformbedroomId">
                            <li id="liContactingNumerofBedroomsDDL">
                                <a class="drop-d" name="txt_bedrooms" rel="-1">Show me work relating to...</a>
                                <ul id="ContactingNumerofBedroomsDDL" style="display: none;">
                                    <li><a href="javascript:;" rel="1">Date</a></li>
                                    <li><a href="javascript:;" rel="2">Insight</a></li>
                                    <li><a href="javascript:;" rel="3">Offline media</a></li>
                                    <li><a href="javascript:;" rel="4">Views</a></li>
                                    <li><a href="javascript:;" rel="1">Date</a></li>
                                    <li><a href="javascript:;" rel="2">Insight</a></li>
                                    <li><a href="javascript:;" rel="3">Offline media</a></li>
                                    <li><a href="javascript:;" rel="4">Views</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>*/}
            <div
              className="breadcrumb"
              style={{ backgroundColor: "#f3f4f5 !important" }}
            >
              <div className="content-inner">
                <ul>
                  <li>
                    <a href="../">Home</a>
                  </li>
                  <li>Our work</li>
                </ul>
              </div>
            </div>
            <div className="recent-work ow-page">
              {/*<div class="content-inner">
                    <div class="recent-work-inner aos-all">
                        <h3 class="heading">Recent work</h3>
                        <div class="div-repeat">
                            <div class="work-right-column">
                                <div class="image-bg web" style="background-image: url(../images/nwec-new1.jpg);" data-aos="fade-left" data-aos-duration="500"></div>
                                <div class="image-bg mobile" style="background-image: url(../images/nwec-new1-m.jpg);background-position:top center;" data-aos="fade-left" data-aos-duration="500"></div>
                            </div>
                            <a href="http://dev.sbronline.co.uk/nwec/v5/" target="_black">
                                <div class="work-left-column" data-aos="fade-right" data-aos-duration="500">
                                    <div class="work-inside" style="background:linear-gradient(90deg,#2e1c44 5%,#93378c 100%);">
                                        <label>NEW WEST END COMPANY</label>
                                        <h2>+<span class="counter">100</span>%</h2>
                                        <h3>Better together, for good: Our 2021-26 plan for the West End</h3>
                                        <p>AV, Static, Dyanamic, Social</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="div-repeat">
                            <div class="work-right-column">
                                <div class="image-bg web" style="background-image: url(../images/galinne.jpg);" data-aos="fade-left" data-aos-duration="500"></div>
                                <div class="image-bg mobile" style="background-image: url(../images/glainne-recent-mobile.jpg);" data-aos="fade-left" data-aos-duration="500"></div>
                            </div>
                            <a href="http://glainne.sbronline.co.uk/" target="_black">
                                <div class="work-left-column" data-aos="fade-right" data-aos-duration="500">
                                    <div class="work-inside" style="background:linear-gradient(90deg,#2e1c44 5%,#00e5a3 100%);">
                                        <label>Glainne</label>
                                        <h2>+<span class="counter">100</span>%</h2>
                                        <h3>Glainne Imagine a world designed for you.</h3>
                                        <p> Display, Static, SEO, Social</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="div-repeat">
                            <div class="work-right-column">
                                <div class="image-bg web" style="background-image: url(../images/westbrompton.jpg);" data-aos="fade-right" data-aos-duration="500"></div>
                                <div class="image-bg mobile" style="background-image: url(../images/brompton-recent-mobile.jpg);" data-aos="fade-right" data-aos-duration="500"></div>
                            </div>
                            <a href="https://westbromptoncrossing.com/" target="_black">
                                <div class="work-left-column" data-aos="fade-left" data-aos-duration="500">
                                    <div class="work-inside" style="background:linear-gradient(90deg,#2e1c44 5%,#93378c 100%)">
                                        <label>West Brompton Crossign</label>
                                        <h2>+<span class="counter">100</span>%</h2>
                                        <h3>Destination eating, drinking and shopping in the heart of west London</h3>
                                        <p>AV, Static, Dyanamic, Social</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="div-repeat">
                            <div class="work-right-column">
                                <div class="image-bg web" style="background-image: url(../images/apo.jpg);" data-aos="fade-right" data-aos-duration="500"></div>
                                <div class="image-bg mobile" style="background-image: url(../images/apo-mobile-recent.jpg);" data-aos="fade-right" data-aos-duration="500"></div>
                            </div>
                            <a href="https://a-part-of.com/" target="_black">
                                <div class="work-left-column" data-aos="fade-left" data-aos-duration="500">
                                    <div class="work-inside" style="background:linear-gradient(90deg,#2e1c44 5%,#00e5a3 100%);">
                                        <label>A part of_</label>
                                        <h2>+<span class="counter">100</span>%</h2>
                                        <h3>Who knows better than you what you want from your home?</h3>
                                        <p> AV, Static, Display, Social</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>*/}
            </div>
            <div className="our-work full-w">
              <div className="content-inner">
                {/*<h1>Our Work</h1>*/}
                <h3>All Projects</h3>
                <ul className="aos-all">
                  <li data-aos="fade-up" title="Regent Street Online">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.regentstreetonline.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/regentstreetonline.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Regent Street Online</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="The Dulwich Estate">
                    <a
                      title=""
                      target="_blank"
                      href="https://www.thedulwichestate.org.uk/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/The-Dulwich-Estate.png"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>The Dulwich Estate</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="EDF">
                    <a
                      title=""
                      target="_blank"
                      href="https://www.edftrading.com/"
                    >
                      <img alt="" src="../images/our-client/edf-image.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Edf Trading</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Efaad - Dubai Police">
                    <a
                      title=""
                      target="_blank"
                      href="https://efaad.dubaipolice.gov.ae/Efaad/#/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/efaad.dubaipolice.gov.ae.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Efaad - Dubai Police</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Fujairah HR Portal">
                    <a title="" target="_blank" href="https://fuj-hr.ae/">
                      <img alt="" src="../images/our-client/fuj-hr.ae.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Fujairah HR Portal</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Havens Compass">
                    <a
                      title=""
                      target="_blank"
                      href="https://www.havenscompass.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/www.havenscompass.com.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Havens Compass</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="AL Asab">
                    <a
                      title=""
                      target="_blank"
                      href="http://imrisr.alasab.com:8020/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/imrisr.alasab.com.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>AL Asab</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="All-Out Mobile App">
                    <a title="" target="_blank" href="https://allout.ae/">
                      <img alt="" src="../images/our-client/httpsallout.ae.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>All-Out Mobile App</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Trendi">
                    <a title="" target="_blank" href="https://trendi-iq.com/">
                      <img alt="" src="../images/our-client/trendi-iq.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Trendi</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Mozakrah">
                    <a title="" target="_blank" href="https://mozakrah.com/">
                      <img alt="" src="../images/our-client/mozakrah.com.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Mozakrah</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="MOI EDMS">
                    <a
                      title=""
                      target="_blank"
                      href="https://moi.gov.ae/en/eservices/default.aspx"
                    >
                      <img alt="" src="../images/our-client/moi.gov.ae.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>MOI EDMS</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="StarBazaar">
                    <a title="" target="_blank" href="https://www.starbazaar.pk/">
                      <img
                        alt=""
                        src="../images/our-client/www.starbazaar.pk.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>StarBazaar</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="800CarGuru">
                    <a title="" target="_blank" href="https://800carguru.ae/">
                      <img alt="" src="../images/our-client/800carguru.ae.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>800CarGuru</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="The PetStore">
                    <a title="" target="_blank" href="https://thepetstore.ae/">
                      <img alt="" src="../images/our-client/thepetstore.ae.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>The PetStore</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Digitus Qatar">
                    <a title="" target="_blank" href="https://www.cybase.ae/">
                      <img alt="" src="../images/our-client/www.cybase.ae.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Digitus Qatar</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Kloud Klub">
                    <a title="" target="_blank" href="https://kloudklub.com/">
                      <img alt="" src="../images/our-client/kloudklub.com.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Kloud Klub</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="ECCC - Health">
                    <a title="" target="_blank" href="https://eccc-dubai.com/">
                      <img alt="" src="../images/our-client/eccc-dubai.com.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>ECCC - Health</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="JOP(Joy Of Plants)">
                    <a title="" target="_blank" href="https://joyofplants.com/">
                      <img
                        alt=""
                        src="../images/our-client/joyofplants.com.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>JOP(Joy Of Plants)</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Topraq">
                    <a title="" target="_blank" href="https://www.topraq.ai/tr/">
                      <img alt="" src="../images/our-client/www.topraq.ai.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Topraq</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="KASWAA">
                    <a title="" target="_blank" href="https://live.kaswaa.com/">
                      <img
                        alt=""
                        src="../images/our-client/live.kaswaa.com.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>KASWAA</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="INSPA">
                    <a title="" target="_blank" href="https://inspa.com/">
                      <img alt="" src="../images/our-client/inspa.com.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>INSPA</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="ZAAM">
                    <a title="" target="_blank" href="https://zaam.life/">
                      <img alt="" src="../images/our-client/zaam.life.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>ZAAM</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="YCCF">
                    <a
                      title=""
                      target="_blank"
                      href="https://yccf-dev.webflow.io/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/yccf-dev.webflow.io.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>YCCF</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Xaana">
                    <a
                      title=""
                      target="_blank"
                      href="https://xaana-ai.webflow.io/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/xaana-ai.webflow.io.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Xaana</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  {/* Matrix Projects */}
                  <li data-aos="fade-up" title="Systech">
                    <a
                      title=""
                      target="_blank"
                      href="https://www.systech-int.com/"
                    >
                      <img alt="" src="../images/our-client/systech-image.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Systech</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="New West End Company">
                    <a title="" target="_blank" href="https://www.newwestend.com">
                      <img alt="" src="../images/our-client/nwec-img.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>New West End Company</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Torre Rioja">
                    <a title="" target="_blank" href="http://www.torrerioja.com/">
                      <img alt="" src="../images/our-client/torre-rioja.png" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Torre Rioja</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="MODA">
                    <a title="" target="_blank" href="http://modaliving.com/">
                      <img alt="" src="../images/our-client/MODA.png" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>MODA</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="U By Urbeo">
                    <a title="" target="_blank" href="https://www.ubyurbeo.com/">
                      <img alt="" src="../images/our-client/u-by-urbeo.png" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>U by Urbeo</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Apo">
                    <a title="" target="_blank" href="https://a-part-of.com/">
                      <img alt="" src="../images/our-client/apo-img.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Apo</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Kingston Upon Thames">
                    <a
                      title=""
                      target="_blank"
                      href="https://kingstonuponthames.info/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/kingston-thumb-img-project.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Kingston Upon Thames</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="ARK">
                    <a title="" target="_blank" href="https://arkcoliving.co.uk/">
                      <img
                        alt=""
                        src="../images/our-client/ark-thumb-img-project.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>ARK</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="EcoWorld London">
                    <a title="" target="_blank" href="http://ecoworldlondon.com/">
                      <img alt="" src="../images/our-client/ecoworldlondon.png" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>EcoWorld London</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Aribau 195">
                    <a title="" target="_blank" href="https://aribau195.es/">
                      <img alt="" src="../images/our-client/aribau-image.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Aribau 195</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    title="The Earls Court Development Company"
                  >
                    <a
                      title=""
                      target="_blank"
                      href="https://theearlscourtdevelopmentcompany.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/the-earls-court-development-company-img.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>The Earls Court Development Company</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Gran Via 639">
                    <a title="" target="_blank" href="https://gv639.es/">
                      <img
                        alt=""
                        src="../images/our-client/gv639-thumb-img-project.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Gran Via 639</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Ausias March">
                    <a title="" target="_blank" href="https://am3640.es/">
                      <img
                        alt=""
                        src="../images/our-client/AM-thumb-img-project.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Ausias March</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Glainne">
                    <a
                      title=""
                      target="_blank"
                      href="http://glainne.sbronline.co.uk/"
                    >
                      <img alt="" src="../images/our-client/glainne-img.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Glainne</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="West Brompton Crossing">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.westbromptoncrossing.com"
                    >
                      <img
                        alt=""
                        src="../images/our-client/west-brompton-img.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>West Brompton Crossing</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Casa Tecla Sala">
                    <a title="" target="_blank" href="https://casateclasala.es/">
                      <img
                        alt=""
                        src="../images/our-client/cts-thumb-img-project.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Casa Tecla Sala</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Ibervalles">
                    <a title="" target="_blank" href="https://ibervalles.com/">
                      <img
                        alt=""
                        src="../images/our-client/ibervalles-thumb-img-project.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Ibervalles</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Albert Dock.png">
                    <a title="" target="_blank" href="http://albertdock.com/">
                      <img alt="" src="../images/our-client/AlbertDock.png" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Albert Dock</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="NOE GROUP">
                    <a title="" target="_blank" href="http://www.noegroup.co.uk/">
                      <img alt="" src="../images/our-client/noe-group.png" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Noe Group</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Heart Of Sheffield">
                    <a
                      title=""
                      target="_blank"
                      href="https://heartofsheffield.co.uk"
                    >
                      <img
                        alt=""
                        src="../images/our-client/heart-of-sheffield.png"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Heart Of Sheffield</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Alcalá 544 Madrid">
                    <a title="" target="_blank" href="https://alcala544.com/">
                      <img
                        alt=""
                        src="../images/our-client/alcala544-thumb-img-project.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Alcalá 544 Madrid</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="ProTem">
                    <a title="" target="_blank" href="https://protem.online/">
                      <img
                        alt=""
                        src="../images/our-client/protem-thumb-img-project.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>ProTem</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Cundall">
                    <a title="" target="_blank" href="http://www.cundall.com/">
                      <img alt="" src="../images/our-client/cundall.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Cundall</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="52 Conduit Street">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.52conduitst.com/"
                    >
                      <img alt="" src="../images/our-client/52conduitst.png" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>52 Conduit Street</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Puerto De Somport 21 23">
                    <a
                      title=""
                      target="_blank"
                      href="https://puertodesomport2123.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/PuertoDeSomport2123.png"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Puerto De Somport 21 23</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Dolphin Square">
                    <a
                      title=""
                      target="_blank"
                      href="https://www.dsqrestoration.co.uk/"
                    >
                      <img alt="" src="../images/our-client/dolphin-square.png" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Dolphin Square</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Urbit">
                    <a title="" target="_blank" href="https://urbitbcn.com/">
                      <img
                        alt=""
                        src="../images/our-client/urbit-thumb-img-project.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Urbit</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Boadilla Hills">
                    <a title="" target="_blank" href="https://boadillahills.es/">
                      <img
                        alt=""
                        src="../images/our-client/boadillahhills-thumb-img-project.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Boadilla Hills</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="De La Vega">
                    <a
                      title=""
                      target="_blank"
                      href="https://delavegabusinesspark.com/"
                    >
                      <img alt="" src="../images/our-client/DLV.png" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>De La Vega</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Diagonal Beethoven">
                    <a
                      title=""
                      target="_blank"
                      href="https://diagonalbeethoven.com/"
                    >
                      <img alt="" src="../images/our-client/beethoven.png" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Diagonal Beethoven</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Women Talk Real Estate">
                    <a
                      title=""
                      target="_blank"
                      href="http://womentalkrealestate.org/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/Women-Talk-Real-Estate.png"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Women Talk Real Estate</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Regent Street Offices">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.rsofficedirect.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/regentstreetoffice.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Regent Street Offices</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Real Estate Balance">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.realestatebalance.org/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/Real-Estate-Balance.png"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Real Estate Balance</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    title="HARLEY STREET MEDICAL AREA LONDON W1"
                  >
                    <a
                      title=""
                      target="_blank"
                      href="http://www.harleystreetmedicalarea.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/harleystreetmedicalarea.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Harley Street</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Pembroke Real Estate">
                    <a title="" target="_blank" href="http://www.pembrokere.com">
                      <img alt="" src="../images/our-client/pembrokere.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Pembroke Real Estate</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="MADLINS">
                    <a title="" target="_blank" href="http://madlins.co.uk/">
                      <img alt="" src="../images/our-client/madlins.png" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Madlins</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="The Pollen Estate">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.thepollenestate.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/The-Pollen-Estate.png"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>The Pollen Estate</h3>
                        <span>visit website </span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="The Portman Estate">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.portmanestate.co.uk/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/The-Portman-Estate.png"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>The Portman Estate</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Belong in Bermondsey">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.belonginbermondsey.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/belonginbermondsey.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Belong in Bermondsey</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="PUBLICA">
                    <a title="" target="_blank" href="http://www.publica.co.uk/">
                      <img alt="" src="../images/our-client/publica.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Publica</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Williams Group">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.williamsgrp.co.uk"
                    >
                      <img alt="" src="../images/our-client/wg.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Williams Group</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li
                    data-aos="fade-up"
                    title="OCCC ESTATE RENEWAL CORNWALL ROAD"
                  >
                    <a
                      title=""
                      target="_blank"
                      href="http://www.occcrenewal.co.uk"
                    >
                      <img alt="" src="../images/our-client/occc.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Occc Estate Renewal Cornwall Road</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="ROYAL ELM PARK">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.royalelmpark.com/"
                    >
                      <img alt="" src="../images/our-client/royalelmpark.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Royal Elm Park</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="185 Park Street">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.185parkstreetlondon.co.uk/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/185parkstreetlondon.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>185 Park Street</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="THE KENSINGTON">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.the-kensington.info"
                    >
                      <img alt="" src="../images/our-client/kensington.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>The Kensington</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="ELEPHANT AND CASTLE">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.elephantandcastletowncentre.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/elephantandcastletowncentre.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Elephant And Castle</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="The Portman Burtley Estate">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.portmanburtleyestate.co.uk/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/portmanburtleyestate.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>The Portman Burtley Estate</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="ase">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.aseresearch.com/"
                    >
                      <img alt="" src="../images/our-client/ase.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>ASE</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Vixcroft">
                    <a title="" target="_blank" href="http://vixcroft.co.uk/">
                      <img alt="" src="../images/our-client/vixcroft.png" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Vixcroft</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="The Howard de Walden Estate">
                    <a title="" target="_blank" href="http://www.hdwe.co.uk/">
                      <img alt="" src="../images/our-client/hdwe.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>The Howard de Walden Estate</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="OLD OAK PARK">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.oldoakpark.co.uk/"
                    >
                      <img alt="" src="../images/our-client/oldoakpark.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Old Oak Park</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Granger Reis">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.grangerreis.com/"
                    >
                      <img alt="" src="../images/our-client/grangerreis.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Granger Reis</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Heathrow Hub">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.heathrowhub.com/"
                    >
                      <img alt="" src="../images/our-client/heathrowhub.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Heathrow Hub</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="LR PARK LANE PLANS">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.lrparklaneplans.co.uk/"
                    >
                      <img alt="" src="../images/our-client/parklane.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Lr Park Lane Plans</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Written By Mrs Bach">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.writtenbymrsbach.com"
                    >
                      <img
                        alt=""
                        src="../images/our-client/writtenbymrsbach.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Written By Mrs Bach</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="ROYAL MINT COURT">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.royalmintcourt.info/"
                    >
                      <img alt="" src="../images/our-client/royalmintcourt.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Royal Mint Court</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="STANTON CROSS WELLINGBOROUGH">
                    <a
                      title=""
                      target="_blank"
                      href="http://stantoncross.co.uk//"
                    >
                      <img alt="" src="../images/our-client/stanton-cross.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Stanton Cross</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="BAGS">
                    <a title="" target="_blank" href="http://www.bags1933.com/">
                      <img alt="" src="../images/our-client/bags.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Bags</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="East Village London E20">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.eastvillagelondon.co.uk/"
                    >
                      <img alt="" src="../images/our-client/eastvillage.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>East Village London E20</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Get Living London">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.getlivinglondon.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/get-living-london.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Get Living London</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Brecon Beacons">
                    <img
                      alt=""
                      src="../images/our-client/brecon-beacons.jpg"
                      title="Brecon Beacons"
                    />
                    <a
                      title=""
                      target="_blank"
                      href="http://brand.breconbeacons.org/"
                    >
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Brecon Beacons</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="EA Shaw">
                    <a title="" target="_blank" href="http://www.eashaw.com/">
                      <img
                        alt=""
                        src="../images/our-client/eashaw.jpg"
                        title="EA SHAW"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>EA Shaw</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="CBRE Uk Residential">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.cbreukresidential.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/cbre-uk-resedential.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Cbre Uk Residential</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Leslie Jones">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.lesliejones.co.uk/"
                    >
                      <img alt="" src="../images/our-client/lesliejones.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Leslie Jones</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Gordon Rusell Design ">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.gordonrussellmuseum.org/default.aspx"
                    >
                      <img alt="" src="../images/our-client/gordon-rusell.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Gordon Rusell Design </h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Herefordshire">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.hereyoucan.co.uk/"
                    >
                      <img alt="" src="../images/our-client/herefordshire.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Herefordshire</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Cambridge Business Park">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.cambridgebusinesspark.co.uk/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/cambridgebusinesspark.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Cambridge Business Park</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Summer Street">
                    <a
                      title=""
                      target="_blank"
                      href="http://regentstreetonline.com/summerstreets/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/regent-street-summer-street.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Summer Street</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Berkeley Way">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.berkeleyway.co.uk/"
                    >
                      <img alt="" src="../images/our-client/berkeleyway.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Berkeley Way</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Sloane Street">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.sloanestreet.co.uk"
                    >
                      <img alt="" src="../images/our-client/sloanestreet.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Sloane Street</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="St. Johns">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.stjohns-shopping.co.uk/"
                    >
                      <img alt="" src="../images/our-client/st-jones.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>St. Johns</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Vebnet Limited">
                    <a title="" target="_blank" href="http://www.vebnet.com/">
                      <img alt="" src="../images/our-client/vebnet.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Vebnet Limited</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Tour 64">
                    <a title="" target="_blank" href="http://www.tour64.fr/">
                      <img alt="" src="../images/our-client/tour64.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Tour 64</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Europolis Parks">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.europolisparks.com/"
                    >
                      <img alt="" src="../images/our-client/europolisparks.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Europolis Parks</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Westend London">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.westendlondon.com/"
                    >
                      <img alt="" src="../images/our-client/westendlondon.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Westend London</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="G1 architecture">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.g1architecture.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/g1-architecture.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>G1 architecture</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Old Market Hereford">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.oldmarkethereford.co.uk/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/oldmark-ethereford.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Old Market Hereford</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Ashcroft">
                    <a title="" target="_blank" href="http://www.ashcroft.co.uk/">
                      <img alt="" src="../images/our-client/ashcroft.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Ashcroft</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Moor Sheffield">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.moorsheffield.com/"
                    >
                      <img alt="" src="../images/our-client/moor-sheffield.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Moor Sheffield</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Bloomberg Place">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.bbp-walbrooksquare.co.uk/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/bloomberg-place.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Bloomberg Place</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Showcase Intrernational">
                    <a
                      title=""
                      target="_blank"
                      href="http://showcaseinternational.co.uk/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/showcase-connecting.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Showcase Intrernational</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Alinea">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.alineacostconsulting.com/"
                    >
                      <img alt="" src="../images/our-client/alinea.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Alinea</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Television Centre W12">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.television-centre.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/television-centre.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Television Centre W12</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Implementar">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.implementar.com/"
                    >
                      <img alt="" src="../images/our-client/implementar.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Implementar</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Rediscover your Stratford">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.rediscoveryourstratford.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/rediscoveryourstratford.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Rediscover your Stratford</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Blanche Eatery">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.blancheeatery.com/"
                    >
                      <img alt="" src="../images/our-client/blanche-eatery.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Blanche Eatery</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Living In France">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.living-in-france.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/living_in_france.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Living In France</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Elsley Court">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.elsleycourt.com/"
                    >
                      <img alt="" src="../images/our-client/elsleycourt.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Elsley Court</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Ceona Offshore">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.ceona-offshore.com/"
                    >
                      <img alt="" src="../images/our-client/ceona.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Ceona Offshore</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Energetica">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.energetica.uk.com/"
                    >
                      <img alt="" src="../images/our-client/energetica.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Energetica</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Admotus Marketing">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.admotusmarketing.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/admotusmarketing.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Admotus Marketing</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Lakeland (private intranet) ">
                    <a title="" target="_blank" href="#">
                      <img alt="" src="../images/our-client/lakeland.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>
                          Lakeland
                          <br /> (private intranet){" "}
                        </h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="The Meads">
                    <a title="" target="_blank" href="http://www.themeads.co.uk/">
                      <img alt="" src="../images/our-client/themeads.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>The Meads</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Bucksberks SBP">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.bucksberkssbp.org.uk"
                    >
                      <img alt="" src="../images/our-client/bucksberkssbp.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Bucksberks SBP</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="BAWN Management">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.bawnmanagement.com/"
                    >
                      <img alt="" src="../images/our-client/bawn.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>BAWN Management</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Langham House">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.308regentstreet.com/"
                    >
                      <img alt="" src="../images/our-client/langhamhouse.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Langham House</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Cinema Next">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.cinemanext.co.uk/"
                    >
                      <img alt="" src="../images/our-client/cinemanext.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Cinema Next</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Portugal">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.portugalwfes2011.com/"
                    >
                      <img alt="" src="../images/our-client/portugal.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3> Portugal</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Collins Winning">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.collinswinning.com/"
                    >
                      <img alt="" src="../images/our-client/collinswinning.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Collins Winning</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Discovereastgate">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.discovereastgate.com"
                    >
                      <img
                        alt=""
                        src="../images/our-client/discovereastgate.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Discovereastgate</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Rock Asphalte">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.briggsamasco.co.uk/"
                    >
                      <img alt="" src="../images/our-client/rockasphalte.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Rock Asphalte</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Europolis">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.caimmointernational.com/"
                    >
                      <img alt="" src="../images/our-client/europolis.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3> Europolis</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Betre">
                    <a title="" target="_blank" href="http://www.betre.org.uk/">
                      <img alt="" src="../images/our-client/betre.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Betre</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Kallaway Limited">
                    <a title="" target="_blank" href="http://www.kallaway.co.uk/">
                      <img alt="" src="../images/our-client/kallaway.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Kallaway Limited</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Preston Tithebarn">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.prestontithebarn.com/"
                    >
                      <img alt="" src="../images/our-client/preston.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Preston Tithebarn</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Kent House">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.kenthousew1.com/"
                    >
                      <img alt="" src="../images/our-client/kenthouse.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Kent House</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Mr Peabody & Sherman">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.regentstreetonline.com/christmas/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/regent-street-christmas.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Mr Peabody &amp; Sherman</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Q3 Retail">
                    <a title="" target="_blank" href="http://www.q3retail.com/">
                      <img alt="" src="../images/our-client/q3.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Q3 Retail</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="London Luxury">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.londonluxuryquarter.com/"
                    >
                      <img alt="" src="../images/our-client/londonluxury.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>London Luxury</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Choir of the Year">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.choiroftheyear.co.uk"
                    >
                      <img alt="" src="../images/our-client/choiroftheyear.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Choir of the Year</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="More Basildon">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.morebasildon.co.uk/"
                    >
                      <img alt="" src="../images/our-client/morebasildon.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>More Basildon</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="West Sussex SBP">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.sustainablebusiness.org.uk/"
                    >
                      <img alt="" src="../images/our-client/westsussexsbp.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>West Sussex SBP</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Lapithus">
                    <a title="" target="_blank" href="http://www.lapithus.com/">
                      <img alt="" src="../images/our-client/lapithus.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Lapithus</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Brimcom">
                    <a title="" target="_blank" href="http://brimcom.com.au/new/">
                      <img alt="" src="../images/our-client/brimcom.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Brimcom</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Ultimate Montenegro">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.ultimatemontenegro.com/"
                    >
                      <img alt="" src="../images/our-client/ultimate.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Ultimate Montenegro</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="French Property Investment">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.frenchpropertyinvestment.co.uk/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/frenchpropertyinvestment.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>French Property Investment</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Crown Equity Release">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.crownequityrelease.co.uk/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/crownequityrelease.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Crown Equity Release</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Isabella Camera">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.isabellas-camera.com/"
                    >
                      <img alt="" src="../images/our-client/isabellacamera.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Isabella Camera</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Quatro Public Relations">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.quatro-pr.co.uk/"
                    >
                      <img alt="" src="../images/our-client/quatro.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Quatro Public Relations</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Nalla">
                    <a title="" target="_blank" href="http://www.nalla.co.uk/">
                      <img alt="" src="../images/our-client/nalla.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Nalla</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Elefant Art Space">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.elefantartspace.com"
                    >
                      <img
                        alt=""
                        src="../images/our-client/elefantartspace.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Elefant Art Space</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Fifty">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.fiftygrosvenorhill.com/"
                    >
                      <img alt="" src="../images/our-client/fifty.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Fifty</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="David Leslie Cakes">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.davidlesliecakes.com/"
                    >
                      <img alt="" src="../images/our-client/dlcakes.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>David Leslie Cakes</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="South City Retail">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.southcityretail.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/southcityretail.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>South City Retail</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="European Stars">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.europeanstars.net"
                    >
                      <img alt="" src="../images/our-client/europeanstars.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>European Stars</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title=" London Media Centre">
                    <a title="" target="_blank" href="http://www.lmcrs.co.uk/">
                      <img alt="" src="../images/our-client/lmcrs.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3> London Media Centre</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="AJD Construction Managers">
                    <a title="" target="_blank" href="http://www.ajdcm.com/">
                      <img alt="" src="../images/our-client/ajd.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Ajd Construction Managers</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Elizabeth House">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.elizabethhousewaterloo.co.uk/"
                    >
                      <img alt="" src="../images/our-client/elizabethhouse.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Elizabeth House</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Sustainable Business Partner">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.hampshireiowsustainablebusiness.co.uk/"
                    >
                      <img alt="" src="../images/our-client/thesbp.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Sustainable Business Partner</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Central London Taskforce">
                    <a title="" target="_blank" href="http://www.c-london.co.uk/">
                      <img
                        alt=""
                        src="../images/our-client/centrallondontaskforce.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Central London Taskforce</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="John Marshall Surveys">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.propertysurveyfrance.com/"
                    >
                      <img
                        alt=""
                        src="../images/our-client/johnmarshallsurveys.jpg"
                      />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>John Marshall Surveys </h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Alex Moris visulaisation">
                    <a
                      title=""
                      target="_blank"
                      href="http://http://www.amv-cgi.com/"
                    >
                      <img alt="" src="../images/our-client/amv.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Alex Moris visulaisation</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Regent Street Direct">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.regentstreetlocal.info/"
                    >
                      <img alt="" src="../images/our-client/rgdirect.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Regent Street Direct</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Epromoters">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.epromoters.co.uk"
                    >
                      <img alt="" src="../images/our-client/epromoters.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Epromoters</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Gazprom Retail">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.gazprom-energy.com"
                    >
                      <img alt="" src="../images/our-client/gazpromretail.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Gazprom Retail</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="We are Rock">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.wearerock.co.uk/"
                    >
                      <img alt="" src="../images/our-client/wearerock.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>We are Rock</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Al-fouz">
                    <a title="" target="_blank" href="http://www.al-fouz.com/">
                      <img alt="" src="../images/our-client/alfouz.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Al-fouz</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="6 Kean Street">
                    <a title="" target="_blank" href="#">
                      <img alt="" src="../images/our-client/6-kean-street.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>6 Kean Street</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Tanager Limited">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.tanagerlimited.ie/"
                    >
                      <img alt="" src="../images/our-client/tanager.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Tanager Limited</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Triathlon Homes">
                    <a
                      title=""
                      target="_blank"
                      href="http://www.triathlonhomes.com/"
                    >
                      <img alt="" src="../images/our-client/triathlonhomes.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Triathlon Homes</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                  <li data-aos="fade-up" title="Live Culture">
                    <a title="" target="_blank" href="http://www.liveculture.tv/">
                      <img alt="" src="../images/our-client/live-culture.jpg" />
                      <div className="hover" style={{ display: "none" }}>
                        <h3>Live Culture</h3>
                        <span>visit website</span>
                      </div>
                    </a>
                  </li>
                </ul>
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
  
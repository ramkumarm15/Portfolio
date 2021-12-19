import React, { useState, useEffect } from "react";

import { PagenavigationLeft, PagenavigationRight } from "./Pagenavigation";

import Head from "../styles/assets/images/profile.jpeg";
import Github from "../styles/assets/images/github.svg";
import LinkedIn from "../styles/assets/images/linkedin.svg";

export const Aboutpage = () => {
   const [show, setShow] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timer);
   });
   return (
      <>
         <section id="about" className="section">
            <div className={`intro ${show ? "animate active" : ""}`}>
               <div className="wrap">
                  <PagenavigationLeft title="Home" path="/" whiteBg={true} />
                  <PagenavigationRight
                     title="Skills"
                     path="/skills"
                     whiteBg={true}
                  />
                  <div className="container">
                     <div className="row align-items-center h-100">
                        <div className="col-md-6 pr-md-5 mb-5">
                           <div className="mb-2 text-title">
                              <h2 className="title web-theme-text">About me</h2>
                           </div>
                           <p className="text-intro mt-3">
                              <span className="text">
                                 A self-taught developer.
                              </span>{" "}
                              I completed my Computer Science engineering from Kamaraj college of
                              engineering and technology in year 2021. A rookie full-stack
                              developer specialized in React JS and Django. Also
                              I have done some projects that were saved in
                              Github repositories, You may check it.
                           </p>
                           <div className="social-icons">
                              <a
                                 href="https://www.linkedin.com/in/ramkumar15/"
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 <img src={LinkedIn} alt="linkedin" />
                              </a>
                              <a
                                 href="https://github.com/ramkumarm15"
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 <img src={Github} alt="github" />
                              </a>
                           </div>
                           <div className="form-group mt-5">
                              <a
                                 href="https://bit.ly/2Xw2n5n"
                                 className="btns"
                                 download="Ramkumar Resume.pdf"
                                 rel="noreferrer"
                              >
                                 Download CV
                              </a>
                           </div>
                        </div>
                        <div className="col-md-6 col-lg-5 px-md-5 pt-3 offset-xl-1">
                           <div className="position-relative profile">
                              <img
                                 src={Head}
                                 className="img-fluid w-100"
                                 alt=""
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

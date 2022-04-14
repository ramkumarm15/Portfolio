import React from "react";

import { PagenavigationLeft, PagenavigationRight } from "./Pagenavigation";

import HackerRank from "../styles/assets/images/badge1.svg";
import WebDesign from "../styles/assets/images/badge2.svg";
import ReactBadge from "../styles/assets/images/react.svg";
import Frontend from "../styles/assets/images/Frontend.png";
import Backend from "../styles/assets/images/Backend.png";
import Database from "../styles/assets/images/Database.png";

const Skillpage = () => {
   const [show, setShow] = React.useState(false);

   React.useEffect(() => {
      const timer = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timer);
   });
   return (
      <>
         <section id="education" className="section">
            <div className={`intro ${show ? "animate active" : ""}`}>
               <div className="wrap">
                  <PagenavigationLeft
                     title="About"
                     path="/about"
                     whiteBg={true}
                  />
                  <PagenavigationRight
                     title="Portfolio"
                     path="/portfolio"
                     whiteBg={true}
                  />
                  <div className="container">
                     <div className="mb-5 text-title">
                        <h6 className="title">SkillSet</h6>
                     </div>
                     <div className="row justify-content-md-center">
                        <div className="col-lg-3">
                           <div className="card skill-card border shadow-none">
                              <div className="card-body text-center p-0 py-3">
                                 <img src={Frontend} alt="" height="150" />
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3">
                           <div className="card skill-card border shadow-none">
                              <div className="card-body text-center">
                                 <img src={Backend} alt="" height="150" />
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3">
                           <div className="card skill-card border shadow-none">
                              <div className="card-body text-center">
                                 <img src={Database} alt="" height="150" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row justify-content-md-center">
                        <div className="col-lg-3 text-center">
                           <div className="card border shadow-none">
                              <div className="card-body">
                                 <h6 className="certificate">
                                    Certification Earned
                                 </h6>
                                 <div className="badges">
                                    <a href="https://coursera.org/share/f010ac573d1238396b52d0e108709ed4">
                                       <img
                                          src={ReactBadge}
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="Frontend Development with React"
                                          alt="badge1"
                                       />
                                    </a>
                                    <a href="https://www.hackerrank.com/certificates/a23d77d8ba49">
                                       <img
                                          src={HackerRank}
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="NodeJS from HackerRank"
                                          alt="badge2"
                                       />
                                    </a>
                                    <a href="https://www.freecodecamp.org/certification/fcc8a70404a-2cc3-4897-a5dd-af9d7be7b93f/responsive-web-design">
                                       <img
                                          src={WebDesign}
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="Responsive Web Design from Freecodecamp"
                                          alt="badge3"
                                       />
                                    </a>
                                 </div>
                              </div>
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

export default Skillpage;
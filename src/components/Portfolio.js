import React from "react";

import { PagenavigationLeft, PagenavigationRight } from "./Pagenavigation";

export const Portfolio = () => {
   const [show, setShow] = React.useState(false);

   React.useEffect(() => {
      const timer = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timer);
   });
   return (
      <>
         <section id="projects" className="section">
            <div className="project-container">
               <div className={`intro ${show ? "animate" : ""}`}>
                  <div className="wrap">
                     <PagenavigationLeft
                        title="Skills"
                        path="/skills"
                        whiteBg={true}
                     />
                     <PagenavigationRight
                        title="Blogs"
                        path="/blogs"
                        whiteBg={true}
                     />
                     <div className="container">
                        <div className="mb-5 text-title">
                           <h6 className="title web-theme-text">Projects</h6>
                        </div>
                        <div className="row align-items-center h-100">
                           <div className="col-md-6 col-lg-3">
                              <a
                                 className="project-box"
                                 target="_blank"
                                 href="https://jwt-login-system.herokuapp.com/"
                                 rel="noreferrer"
                              >
                                 <div className="project-inner">
                                    <h4 title="JWT Login System using Rest API">
                                       JWT Login System using Rest API
                                    </h4>
                                    <p className="project-stack">
                                       Django, DRF and ReactJS
                                    </p>
                                 </div>
                              </a>
                           </div>
                           <div className="col-md-6 col-lg-3">
                              <a
                                 className="project-box"
                                 target="_blank"
                                 href="https://ramkumarm15.github.io/Supportive/dashboard.html"
                                 rel="noreferrer"
                              >
                                 <div className="project-inner">
                                    <h4 title="Admin Dashboard Template">
                                       Admin Dashboard Template
                                    </h4>
                                    <p className="project-stack">
                                       Bootstrap and jQuery
                                    </p>
                                 </div>
                              </a>
                           </div>
                           <div className="col-md-6 col-lg-3">
                              <a
                                 className="project-box"
                                 target="_blank"
                                 href="https://github.com/ramkumarm15/User-Authentication-using-Django-REST-Framework"
                                 rel="noreferrer"
                              >
                                 <div className="project-inner">
                                    <h4
                                       title="User Authentication in Django REST
                                       Framework for SPA"
                                    >
                                       User Authentication in Django REST
                                       Framework for SPA
                                    </h4>
                                    <p className="project-stack">Django, DRF</p>
                                 </div>
                              </a>
                           </div>
                           <div className="col-md-6 col-lg-3">
                              <a
                                 className="project-box"
                                 target="_blank"
                                 href="https://ramkumarm15.github.io/covid19.github.io/"
                                 rel="noreferrer"
                              >
                                 <div className="project-inner">
                                    <h4 title="Covid Case Visualizer">
                                       Covid Case Visualizer
                                    </h4>
                                    <p className="project-stack">
                                       Pure javascript and API
                                    </p>
                                 </div>
                              </a>
                           </div>
                           <div className="col-md-6 col-lg-3">
                              <a
                                 className="project-box"
                                 target="_blank"
                                 href="https://forecastingweather.herokuapp.com/"
                                 rel="noreferrer"
                              >
                                 <div className="project-inner">
                                    <h4 title="Weather Forecasting">
                                       Weather Forecasting
                                    </h4>
                                    <p className="project-stack">
                                       Django and API
                                    </p>
                                 </div>
                              </a>
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

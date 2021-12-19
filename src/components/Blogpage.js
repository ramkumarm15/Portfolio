import React, { useContext, useEffect, useState } from "react";

import { BlogContext } from "../context/context";

import { PagenavigationLeft, PagenavigationRight } from "./Pagenavigation";

export const Blogpage = () => {
   const { devTo } = useContext(BlogContext);

   const [show, setShow] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timer);
   });
   return (
      <>
         <section id="blog" className="section">
            <div className={`intro ${show ? "animate" : ""}`}>
               <div className="wrap">
                  <PagenavigationLeft
                     title="Portfolio"
                     path="/portfolio"
                     whiteBg={true}
                  />
                  <PagenavigationRight
                     title="Contact"
                     path="/contact"
                     whiteBg={true}
                  />
                  <div className="container">
                     <div className="mb-5 text-title">
                        <h6 className="title web-theme-text">Dev.to Blogs</h6>
                     </div>
                     <div className="row align-items-center h-100">
                        {devTo.map((item, index) => (
                           <div className="col-md-6 col-lg-3" key={index}>
                              <a
                                 className="project-box"
                                 target="_blank"
                                 href={item.url}
                                 rel="noreferrer"
                              >
                                 <div className="project-inner">
                                    <h4>{item.title}</h4>
                                    <p className="project-stack">
                                       Post Reactions :{" "}
                                       <span className="text-danger fs-4">
                                          {item.public_reactions_count}
                                       </span>
                                    </p>
                                 </div>
                              </a>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

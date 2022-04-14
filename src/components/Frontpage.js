import React, { useState, useEffect } from "react";

import { PagenavigationRight } from "./Pagenavigation";

const Frontpage = () => {
   const [show, setShow] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timer);
   });

   return (
      <>
         <main>
            <section id="home" className="section">
               <div className={`intro ${show ? "animate" : ""}`}>
                  <div className="wrap">
                     <PagenavigationRight
                        title="About"
                        path="/about"
                        whiteBg={false}
                     />
                     <div className="container">
                        <div className="row align-items-center h-100">
                           <div className="col-lg-6 col-xl-5">
                              <div className="mb-3 text-title">
                                 <h6 className="title">
                                    Full Stack Developer
                                 </h6>
                              </div>
                              <h1 className="text-white">
                                 <span className="text">Hello, </span>
                                 my name is M.Ramkumar.
                              </h1>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </>
   );
};

export default Frontpage;
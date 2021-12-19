import React from "react";

import { Widget } from "@typeform/embed-react";
import { PagenavigationLeft } from "./Pagenavigation";

const Contactpage = () => {
   return (
      <>
         <section>
            <PagenavigationLeft
               title="Blogs"
               path="/blogs"
               whiteBg={true}
            />
            <div className="container-fluid p-0">
               <div className="row">
                  <div className="col-md-12">
                     <Widget
                        id="c0kOTuHD"
                        style={{ height: "100vh" }}
                        className="my-form"
                     />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Contactpage;

import React from "react";

import { Switch, Route } from "react-router-dom";

import { Aboutpage } from "./components/Aboutpage";
import { Blogpage } from "./components/Blogpage";
import Contactpage from "./components/Contactpage";
import { Error404 } from "./components/Error404";
import { Frontpage } from "./components/Frontpage";
import { Portfolio } from "./components/Portfolio";
import { Skillpage } from "./components/Skillpage";

import { BlogContextProvider } from "./context/context";
import { Layout } from "./hocs/Layout";

function App() {
   const Router = ({ component: Component, ...rest }) => {
      return (
         <>
            <Route
               {...rest}
               render={(props) => (
                  <Layout>
                     <Component {...props} />
                  </Layout>
               )}
            />
         </>
      );
   };
   return (
      <BlogContextProvider>
         <div className="wrapper">
            <Switch>
               <Router exact path="/" component={Frontpage} />
               <Router exact path="/about" component={Aboutpage} />
               <Router exact path="/skills" component={Skillpage} />
               <Router exact path="/portfolio" component={Portfolio} />
               <Router exact path="/blogs" component={Blogpage} />
               <Router exact path="/contact" component={Contactpage} />
               <Router component={Error404} />
            </Switch>
         </div>
      </BlogContextProvider>
   );
}

export default App;

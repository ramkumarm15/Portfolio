import React from "react";

import { Switch, Route } from "react-router-dom";

import { BlogContextProvider } from "./context/context";
import { Layout } from "./hocs/Layout";

const About = React.lazy(() => import("./components/Aboutpage"));
const Blog = React.lazy(() => import("./components/Blogpage"));
const Contact = React.lazy(() => import("./components/Contactpage"));
const Errorpage = React.lazy(() => import("./components/Error404"));
const Frontpage = React.lazy(() => import("./components/Frontpage"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Skill = React.lazy(() => import("./components/Skillpage"));

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
         <React.Suspense fallback="">
            <div className="wrapper">
               <Switch>
                  <Router exact path="/" component={Frontpage} />
                  <Router exact path="/about" component={About} />
                  <Router exact path="/skills" component={Skill} />
                  <Router exact path="/portfolio" component={Portfolio} />
                  <Router exact path="/blogs" component={Blog} />
                  <Router exact path="/contact" component={Contact} />
                  <Router component={Errorpage} />
               </Switch>
            </div>
         </React.Suspense>
      </BlogContextProvider>
   );
}

export default App;

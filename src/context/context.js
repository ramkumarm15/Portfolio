import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const BlogContext = createContext([]);

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const BlogContextProvider = (props) => {
   const [devTo, setDevTo] = useState([]);

   const fetchData = async () => {
      try {
         const res = await axios.get(
            "https://dev.to/api/articles?username=ramkumarm15"
         );
         setDevTo(res.data);
      } catch (err) {
         // console.log(err.response);
      }
   };

   useEffect(() => {
      fetchData();
   }, []);
   return (
      <BlogContext.Provider value={{ devTo }}>
         {props.children}
      </BlogContext.Provider>
   );
};

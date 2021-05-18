import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "5f84bef8343c433494c146e203edb335";

  useEffect(() => {
    axios
      .get(
        `
        https://newsapi.org/v2/everything?q=Agriculture in India&from=2021-03-12&sortBy=publishedAt&apiKey=5f84bef8343c433494c146e203edb335`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

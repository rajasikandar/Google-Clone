import { useState, useEffect } from "react";
import API_KEY from "./keys";

/*const CONTEXT_KEY = "CONTEXT_KEY";*/
/* Which search Engine to use using key*/
const CONTEXT_KEY = "748ad978bb38f0827";
/*The Below is an example of a Custom Hook i.e useGoogleSearch */
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  /*When Ever the term or the keyword changes then the following function will call */
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        /* Once we get the response back we change the reponse and get the json from the response and then we will set that Data to that result */
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;

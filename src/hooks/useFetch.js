import { useState, useEffect } from "react";

// a CUSTOM HOOK for making a request, error message, loading message
// only have to maintain the code for fetching data here, externalize logic into it's own file

const useFetch = (url) => {
  // pass in the endpoint as a param, not hardcoded
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // data is loading at first while we make request
  const [error, setError] = useState(null);

  useEffect(() => {
    // store abort controller in const abortCont
    const abortCont = new AbortController();

    // associate aborController w/ fetch by adding 2nd arg to `fetch`
    // use signal property
    fetch(url, { signal: abortCont.signal })
      .then((response) => {
        if (!response.ok) {
          // if error, go right to .catch block
          throw Error("Could not fetch data"); // creating a new Error object with this message
        }
        return response.json();
      })
      .then((data) => {
        // data here is the local version, same name as data state
        setData(data);
        setLoading(false); // NOT loading
        setError(null); // no Error if we get data
      })

      // catches the error thrown & names it `err`, an instance of the Error object
      .catch((err) => {
        // abort controller throws an error which gets caught here
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          // get message from error,  message is a property of Error
          setError(err.message); // set Error state to be that Error message
          setLoading(false);
        }
      });

    // clean up function to stop fetch
    // aborts whatever fetch it's associated w/
    return () => abortCont.abort(); // abort method
    
    // url is a dependency
    // whenever url changes, rerun function to get data for that endpoint
  }, [url]);

  // ====   HOOK RETURNS AN OBJECT WITH 3 PROPERTIES   =====///
  // can destructure and grab properties from this hook in other components
  // use object instead of array, that way order will not matter
  return { data, loading, error };
};

export default useFetch;

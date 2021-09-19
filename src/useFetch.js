import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  const getData = async (url) => {
    try {
      const resp = await fetch(url);
      const jsonData = await resp.json();
      setData(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return [data];
};

export default useFetch;

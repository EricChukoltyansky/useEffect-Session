import React from "react";
import { useEffect } from "react";

function useFetch(options) {
  const [data, setData] = React.useState(null);
   
  useEffect(() => {
    fetch(options.url)
      .then((response) => response.json())
      .then((data) => setData(data));
  });
  return {
    data,
  };
}

export {useFetch};

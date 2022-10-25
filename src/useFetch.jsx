import React from "react";

function useFetch(options) {
  const [data, setData] = React.useState(null);

  return {
    data,
  };
}

export default useFetch;

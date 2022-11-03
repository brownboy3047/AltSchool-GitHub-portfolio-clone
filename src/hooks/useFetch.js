import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // to redirect to error page
  const redirectPage = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const jsonData = await response.json();

        setIsPending(false);
        setData(jsonData);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError("Could not fetch data");

        // redirect to error page if error occor
        redirectPage("*");
      }
    };

    fetchData();
  }, [url, redirectPage]);

  return { data, isPending, error };
};

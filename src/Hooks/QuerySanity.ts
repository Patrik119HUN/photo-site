import { useState, useEffect } from "react";
import sanityClient from "utils/sanityClient";

export default function QuerySanity(Query: string, defaultValue: any = null) {
  const [QueryData, setQueryData] = useState(defaultValue);
  useEffect(() => {
    let isCancelled = false;
    sanityClient
      .fetch(Query)
      .then((data) => {
        if (!isCancelled) {
          setQueryData(data);
        }
      })
      .catch(console.error);
    return () => {
      isCancelled = true;
    };
  }, [Query]);
  return QueryData;
}

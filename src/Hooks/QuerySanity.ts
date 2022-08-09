import { useState, useEffect } from "react";
import sanityClient from "utils/sanityClient";

export default function QuerySanity(Query: string, defaultValue: any = null) {
  const [QueryData, setQueryData] = useState(defaultValue);
  useEffect(() => {
    sanityClient
      .fetch(Query)
      .then((data) => setQueryData(data))
      .catch(console.error);
  }, [Query]);
  return QueryData;
}

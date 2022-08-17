import groq from "groq";
import { useState, useEffect } from "react";
import sanityClient from "utils/sanityClient";
import { Image } from "types/SanityImage";


export function QuerySanity(Query: string, defaultValue: any = null) {
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
export function FetchImages(lastId): Image[] {
  const [images, setImages] = useState<Image[]>([]);
  useEffect(() => {
    if (lastId === null) {
      return;
    }
    sanityClient
      .fetch(
        groq`*[_type == "image_gallery" && _id > $lastId] | order(_id) [0...5]{
        _id,
        "place":city ->city,
        "imageUrl": picture.asset->url,
        "alt":picture.alt,
        "name":picture.name,
      }`,
        { lastId }
      )
      .then((result) => {
        setImages(images.concat(result));
      });
  }, [lastId]);
  return images;
}

export function GetNextPage(result: any, setlastId) {
  if (result.length > 0) {
    setlastId(result[result.length - 1]._id);
  } else {
    setlastId(null); // Reached the end
  }
}

import { useEffect, useState } from "react";
import { client } from "../static/contentfulClient";

export function useGetImagePosts() {
  const [data, setData] = useState();

  useEffect(() => {
    client
      .getEntries({ content_type: "imagePost" })
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return { data };
}
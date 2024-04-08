import { useGetImagePosts } from "../../hooks/useGetImagePosts";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const { data: images } = useGetImagePosts();
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaderVisible(false);
    }, 1500); // Change this to the amount of time you want the loader to show

    return () => clearTimeout(timer);
  }, []);

  // Check if images are loaded
  if (isLoaderVisible) {
    return <Loader loadingTime={1500} intervalTime={10} />;
  } else if (!images || !images.items || images.items.length <= 1) {
    return <div>Loading...</div>;
  }

  // Get the first image URL and alt text
  const imageUrl = images.items[0].fields.image.fields.file.url;
  const imageAlt = images.items[0].fields.title;
  const caption = images.items[0].fields.caption;

  return (
    <div className="flex items-center jusitfy-center flex-col">
      <h1 className="text-5xl font-bold">{caption}</h1>
      <img src={imageUrl} alt={imageAlt} />
    </div>
  );
};

export default Home;
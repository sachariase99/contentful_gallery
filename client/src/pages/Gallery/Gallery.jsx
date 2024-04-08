import { useState, useEffect } from "react";
import { ImageCard } from "../../components/ImageCard/ImageCard";
import { useGetImagePosts } from "../../hooks/useGetImagePosts";
import Modal from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";

const Gallery = () => {
  const { data: images } = useGetImagePosts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaderVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoaderVisible) {
    return <Loader loadingTime={1500} intervalTime={10} />;
  } else if (!images || !images.items || images.items.length <= 1) {
    return <div>Loading...</div>;
  }
  
  const restImages = images.items.slice(1);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-8 my-8">
      <div className="grid grid-cols-3 gap-4">
        {restImages.map((item, index) => {
          return (
            <div key={index} onClick={() => openModal(index)}>
              <ImageCard
                url={item.fields.image.fields.file.url}
                alt={item.fields.title}
                title={item.fields.title}
                caption={item.fields.caption}
              />
            </div>
          );
        })}
      </div>
      {isModalOpen && (
        <Modal
          image={restImages[currentImageIndex].fields.image.fields.file.url}
          closeModal={closeModal}
          nextImage={() =>
            setCurrentImageIndex((currentImageIndex + 1) % restImages.length)
          }
          prevImage={() =>
            setCurrentImageIndex(
              (currentImageIndex - 1 + restImages.length) % restImages.length
            )
          }
        />
      )}
    </div>
  );
};

export default Gallery;

import { useState, useEffect, SetStateAction } from "react";
import "./App.css";

import Modal from "react-modal";
import { requestPhotosByQuery } from "./components/api";
import Loader from "./components/Loader/Loader";
import toast from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import FormSearch from "./components/FormSearch/FormSearch";
import LoadMore from "./components/LoadMore/LoadMore";
import ImageModal from "./components/ImageModal/ImageModal";
import React from "react";
import { Image } from "./type";

Modal.setAppElement("#root");

// interface ImageType {
//   id: string;
//   alt_description: string;
//   cover_photo: {
//     urls: {
//       small: string;
//     };
//   };
// }
function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [queryImg, setQueryImg] = useState<string>("");
  const [error, setError] = useState<boolean | string>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (queryImg.length === 0) return;
    async function fetchPhotosByQuery(): Promise<void> {
      try {
        setLoading(true);
        const data = await requestPhotosByQuery(queryImg, page);
        if (!data) {
          setError("No images found");
        }

        if (page >= 1) {
          setImages(data.results);
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
        }
      } catch (error) {
        setError("Error fetcing images");
      } finally {
        setLoading(false);
      }
    }

    fetchPhotosByQuery();
  }, [queryImg, page]);

  const onSetSearchQuery = (searchTitle: string): void => {
    if (searchTitle.trim() === "") {
      setError("Please enter a search query");
      return;
    }
    setQueryImg(searchTitle);
    setPage(1);
  };

  const loadMore = (): void => {
    setPage((page) => page + 1);
  };

  const handleImageClickAndOpenModal = (id: string): void => {
    const imageModal = images.filter((image) => image.id === id)[0];
    setSelectedImage(imageModal);
    setIsOpen(true);
    document.body.classList.add("modal-open");
  };

  const isCloseModal = (): void => {
    setIsOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div>
      <h1>Photo Search</h1>
      <FormSearch onSetSearchQuery={onSetSearchQuery} toast={toast} />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {!error && (
        <ImageGallery images={images} onClick={handleImageClickAndOpenModal} />
      )}
      {images.length > 0 && <LoadMore loadMore={loadMore} />}

      {selectedImage && (
        <ImageModal image={selectedImage} onClose={isCloseModal} />
      )}
    </div>
  );
}

export default App;

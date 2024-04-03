import { useState, useEffect } from "react";
import "./App.css";

import { requestPhotosByQuery } from "./components/api";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import FormSearch from "./components/FormSearch/FormSearch";
import LoadMore from "./components/LoadMore/LoadMore";
import Modal from "react-modal";
import ImageModal from "./components/ImageModal/ImageModal";

Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [queryImg, setQueryImg] = useState("");
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (queryImg.length === 0) return;

    async function fetchPhotosByQuery() {
      try {
        setLoading(true);
        const data = await requestPhotosByQuery(queryImg, page);

        setImages((prevImages) => {
          if (prevImages.length > 0) {
            return [...prevImages, ...data.results];
          } else {
            if (data.results.length === 0) {
              setError("No images found");
            }
            return data.results;
          }
        });
      } catch (error) {
        setError("Error fetcing images");
      } finally {
        setLoading(false);
      }
    }

    fetchPhotosByQuery();
  }, [queryImg, page]);

  const onSetSearchQuery = (searchTitle) => {
    if (searchTitle.trim() === "") {
      setError("Please enter a search query");
      return;
    }
    setQueryImg(searchTitle);
  };

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <h1>Photo Search</h1>
      <FormSearch onSetSearchQuery={onSetSearchQuery} />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {!error && <ImageGallery images={images} onClick={handleImageClick} />}
      {images.length > 0 && <LoadMore loadMore={loadMore} />}

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default App;

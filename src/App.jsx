import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { requestImages, requestPhotosByQuery } from "./components/api";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import FormSearch from "./components/FormSearch/FormSearch";
import LoadMore from "./components/LoadMore/LoadMore";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [queryImg, setQueryImg] = useState("");
  // let queryImg = "";
  // let page = 0;

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);
        const data = await requestImages();
        // console.log(data);
        setImages(data.results);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  useEffect(() => {
    if (queryImg.length === 0) return;

    async function fetchPhotosByQuery() {
      try {
        setLoading(true);
        const data = await requestPhotosByQuery(queryImg, page);
        setImages((prevImages) => {
          if (prevImages) {
            return [...prevImages, ...data.results];
          } else {
            return [...data.results];
          }
        });
        // setImages(data.results);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotosByQuery();
  }, [queryImg, page]);

  const onSetSearchQuery = (searchTitle) => {
    setQueryImg(searchTitle);
  };

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <div>
      <h1>Photo Search</h1>
      <FormSearch onSetSearchQuery={onSetSearchQuery} />
      {loading && <Loader />}
      <ImageGallery images={images} />
      <LoadMore loadMore={loadMore} />
    </div>
  );
}

export default App;

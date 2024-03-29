import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { requestImages } from "./components/api";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import FormSearch from "./components/FormSearch/FormSearch";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);
        const data = await requestImages();
        setImages(data);
      } catch (error) {
        // Тут будемо обробляти помилку
      } finally {
        // 2. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);
  const handleSearch = (query) => {
    console.log("query", query);
  };

  return (
    <div>
      <h1>Photo Search</h1>
      <FormSearch onSearch={handleSearch} />
      {loading && <Loader />}
      <ImageGallery images={images} />
    </div>
  );
}

export default App;

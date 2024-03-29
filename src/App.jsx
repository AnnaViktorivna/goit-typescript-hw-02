import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { requestImages } from "./components/api";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import FormSearch from "./components/FormSearch/FormSearch";

function App() {
  // const [images, setImages] = useState([]);
  //const [res, setRes] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchPhotos() {
  //     try {
  //       setLoading(true);
  //       const data = await requestImages();
  //       setImages(data);
  //     } catch (error) {
  //       // Тут будемо обробляти помилку
  //     } finally {
  //       // 2. Встановлюємо індикатор в false після запиту
  //       setLoading(false);
  //     }
  //   }

  //   fetchPhotos();
  // }, []);
  // const handleSearch = () => {
  //   console.log("query", query);
  // };

  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=a7ioE0htOPw-O5srRHJVQMt3ROHyiYRBO5_YsKRY6OQ`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(result);
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  const Submit = () => {
    fetchRequest();
    setImg("");
  };

  return (
    <div>
      <input
        className='col-3 form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark'
        type='text'
        placeholder='Search Anything...'
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <button
        type='submit'
        onClick={Submit}
        className='btn bg-dark text-white fs-3 mx-3'
      >
        Search
      </button>
      <div className='col-12 d-flex justify-content-evenly flex-wrap'>
        {res.map((val) => {
          return (
            <li key={val.id}>
              <img
                className='col-3 img-fluid img-thumbnail'
                src={val.urls.small}
                alt='val.alt_description'
              />
            </li>
          );
        })}
      </div>

      {/* <h1>Photo Search</h1>
      <FormSearch onSearch={handleSearch} />
      {loading && <Loader />}
      <ImageGallery images={images} /> */}
    </div>
  );
}

export default App;

import axios from "axios";

export const requestImages = async () => {
  const { data } = await axios.get(
    "https://api.unsplash.com/photos/?client_id=a7ioE0htOPw-O5srRHJVQMt3ROHyiYRBO5_YsKRY6OQ&per_page=100"
  );
  return data;
};

// import axios from "axios";

// const API_KEY = "a7ioE0htOPw-O5srRHJVQMt3ROHyiYRBO5_YsKRY6OQ";

// axios.defaults.baseURL = "https://api.unsplash.com";

// export const requestImages = async (currentPage, per_page, photo) => {
//   const { data } = await axios.get(
//     `search/photos?client_id=${API_KEY}&page=${currentPage}&per_page=${per_page}&query=${photo}`
//   );
//   return data;
// };

import axios from "axios";

export const requestPhotosByQuery = async (queryImg, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/collections?page=${page}&query=${queryImg}&client_id=a7ioE0htOPw-O5srRHJVQMt3ROHyiYRBO5_YsKRY6OQ`
  );
  return data;
};

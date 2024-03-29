import axios from "axios";

export const requestImages = async () => {
  const { data } = await axios.get(
    "https://api.unsplash.com/photos/?client_id=a7ioE0htOPw-O5srRHJVQMt3ROHyiYRBO5_YsKRY6OQ&per_page=100"
  );
  return data;
};

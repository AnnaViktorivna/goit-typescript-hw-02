import axios from "axios";
import { Image } from "../type";
interface UnsplashResponse {
  results: [Image];
  total_pages: number;
  data: string;
}

export const requestPhotosByQuery = async (
  queryImg: string,
  page: number
): Promise<UnsplashResponse> => {
  const { data } = await axios.get<UnsplashResponse>(
    `https://api.unsplash.com/search/collections?page=${page}&query=${queryImg}&client_id=a7ioE0htOPw-O5srRHJVQMt3ROHyiYRBO5_YsKRY6OQ`
  );
  console.log(data);
  return data;
};

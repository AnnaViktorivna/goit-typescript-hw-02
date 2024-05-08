export interface Image {
  id: string;
  cover_photo: {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
    likes: number;
    slug: string;
  };
}

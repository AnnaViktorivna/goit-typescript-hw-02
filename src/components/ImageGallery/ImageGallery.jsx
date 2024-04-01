const ImageGallery = ({ images }) => {
  return (
    <ul>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <li key={image.id}>
              <div>
                <img
                  src={image.cover_photo.urls.small}
                  alt={image.alt_description}
                />
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;

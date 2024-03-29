const ImageGallery = ({ images }) => {
  return (
    <div>
      {" "}
      {images.length > 0 && (
        <ul>
          {images.map((data) => (
            <li key={data.id}>
              <div>
                <img src={data.urls.small} alt={data.alt_description} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageGallery;

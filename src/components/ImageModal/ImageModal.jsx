const ImageModal = ({ image, onClose }) => {
  return (
    <div>
      <img src={image.cover_photo.urls.regular} alt={image.alt_description} />
      <p>{image.alt_description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ImageModal;

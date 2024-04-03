import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
};

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel='Image Modal'
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <button onClick={onClose}>X</button>
      <h2 style={{ color: "red" }}>{image.cover_photo.alt_description}</h2>
      <img
        src={image.cover_photo.urls.regular}
        alt={image.cover_photo.alt_description}
      />
      <p>{image.cover_photo.alt_description}</p>
    </Modal>
  );
};

export default ImageModal;

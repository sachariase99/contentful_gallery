import { IoClose } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Modal = ({ image, title, closeModal, nextImage, prevImage }) => {
  return (
    <div
    className="fixed top-0 left-0 w-full h-full bg-[#00000080] flex justify-center items-center z-50"
    >
      <div
      className="bg-white p-5 rounded-xl relative h-[600px] w-[500px]"
      >
        <button
          className="absolute top-1/2 left-2 -translate-y-1/2 text-3xl"
          onClick={prevImage}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={closeModal}
          className="absolute right-[10px] top-[10px] text-3xl"
        >
          <IoClose />
        </button>
        <div className="flex justify-center items-center h-[500px]">
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-[400px]"
          />
        </div>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl"
          onClick={nextImage}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Modal;

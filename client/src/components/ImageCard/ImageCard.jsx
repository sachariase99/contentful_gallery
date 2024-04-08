export const ImageCard = ({ url, alt, caption }) => {
    return (
      <figure className=" border-gray-100 border-2 rounded-xl bg-white hover:bg-[#eeefff] cursor-pointer">
        <img className="h-[300px] m-auto" src={url} alt={alt} />
        <figcaption className="my-2 mx-2">{caption}</figcaption>
      </figure>
    );
  };
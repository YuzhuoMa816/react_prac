import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";
function ImageSlider({ url, limit = 5 }) {
  const [imageList, setImageList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  function handlePreviousClick() {
    setCurrentSlide((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  }

  function handleNextClick() {
    setCurrentSlide((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
    // setCurrentSlide(
    //   currentSlide === imageList.length - 1 ? 0 : currentSlide + 1
    // );
  }

  async function fetchImage(imageUrl) {
    try {
      setLoading(true);
      setErrorMsg(null);
      setImageList([]);

      const response = await fetch(`${imageUrl}?page=1&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImageList(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      console.log("url: " + url);
      fetchImage(url);
    }
  }, [url]);

  console.log(imageList);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error detected</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePreviousClick}
        className="arrow left-arrow"
      />
      {imageList && imageList.length
        ? imageList.map((image, index) => (
            <img
              key={image.id}
              alt={"false loading"}
              src={image.download_url}
              className={`current-image ${
                index === currentSlide ? "" : "hide-current-image"
              }`}
            />
          ))
        : null}
      <div></div>

      <BsArrowRightCircleFill
        onClick={handleNextClick}
        className="arrow right-arrow"
      />

      <span className="circle-indicator">
        {imageList.length > 0
          ? imageList.map((_, index) => (
              <button
                key={index}
                className={`current-indicator ${
                  index === currentSlide ? "" : "hide-current-indicator"
                }`}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;

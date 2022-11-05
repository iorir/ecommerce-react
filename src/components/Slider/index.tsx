import axios from "axios";
import { useEffect, useState } from "react";
function Slider() {
  const [gallery, setGallery] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const getGallery = async () => {
    await axios
      .get(
        `https://www.jsonbulut.com/json/gallery.php?ref=${process.env.REACT_APP_API_KEY}`
      )
      .then((res: any) => {
        setGallery(res.data.Galleries[0].Gallery[132][0]);
      });
  };
  const handleNext = () => {
    currentIndex < gallery.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0);
  };

  const handlePrev = () => {
    currentIndex > 0
      ? setCurrentIndex(currentIndex - 1)
      : setCurrentIndex(gallery.length - 1);
  };

  useEffect(() => {
    getGallery();
  }, []);

  return (
    gallery && (
      <div className="w-full select-none col-span-5 relative mt-8 ml-3">
        <div>
          <img
            className="aspect-video slider"
            src={`https://www.jsonbulut.com/admin/upload/${gallery[currentIndex].url}`}
            alt=""
          />
        </div>
        <div className="bottom-10 absolute w-full content-center transform -translate-y-1/2 px-3 bg-opacity-75 bg-orange-600 flex justify-between items-center">
          <button onClick={() => handlePrev()}>Previous</button>
          <button onClick={() => handleNext()}>Next</button>
        </div>
      </div>
    )
  );
}

export default Slider;

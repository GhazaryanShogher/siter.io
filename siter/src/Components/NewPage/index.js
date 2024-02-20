import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getItems } from "../Utils";
import Loader from "../Loader";
const NewPage = () => {
  const location = useLocation();
  const [spin, setSpin] = useState(false);
  const [items, setItems] = useState([]);
  const searchParams = new URLSearchParams(location.search);
  const imageId = searchParams.get("id");
  const [resData, setResData] = useState([]);

  const getObjectById = (array, itemId) => {
    return array.find((item) => item.id === itemId);
  };

  useEffect(() => {
    getItems(2, 9, setSpin, setItems);
  }, []);
  useEffect(() => {
    setSpin(true);
    const result = getObjectById(items, imageId);
    if (!!result) {
      setResData(result);
      setSpin(false);
    }
  }, [imageId, items]);

  return (
    <div className="new-page">
      {spin ? (
        <Loader />
      ) : (
        <div className="content animated">
          <div className="animated-item fadeIn">
            <h1>{`Author: ${resData?.author}`}</h1>
            <p className="animated-item slideInFromBottom">
              Immerse yourself in the tranquil beauty of nature's landscapes.
              From majestic mountains to serene lakes, the picture captures the
              essence of tranquility and serenity. With vibrant hues and
              breathtaking vistas, it invites you to embark on a journey of
              exploration and discovery.
            </p>
          </div>
          <div className="animated-item slideInFromLeft">
            <img
              src={resData?.download_url}
              alt="beautiful nature"
              width={300}
              height={300}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPage;

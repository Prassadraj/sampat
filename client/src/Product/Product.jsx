import React, { useContext, useState } from "react";
import { ProductDataContext } from "../Context/ProductData";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import "./product.css";

function Product() {
  const { data } = useContext(ProductDataContext);
  const { id } = useParams();
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const product = data.find((product) => product.id === parseInt(id));
  const [imgURL, setImgURL] = useState(product.img[0]);
  console.log(imgURL);

  if (!product) {
    return <div className="text-red-500">Product not found</div>;
  }

  return (
    <div className="flex max-w-4xl mx-auto my-28 gap-3">
      {/* Left column for image thumbnails */}
      <div className="flex flex-col gap-3">
        {product.img.map((img, index) => (
          <img
            key={index}
            
            src={img}
            alt={`Product ${index + 1}`}
            width="100px"
            onClick={() => setImgURL(img)}
            style={{
              cursor: "pointer",
              border: imgURL === img ? "2px solid black" : "none",
              borderRadius:"10px"
            }}
          />
        ))}
      </div>

      {/* Right column for magnified image */}
      <div
        className="w-1/2 pr-8 relative"
        onMouseEnter={() => setIsHoveringImage(true)}
        onMouseLeave={(e) => setIsHoveringImage(false)}
      >
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: product.desc,
              isFluidWidth: true,
              src: imgURL, // Display the first image by default
            },
            largeImage: {
              src: imgURL, // Use the first image for magnification
              width: 620,
              height: 620,
            },
            enlargedImageContainerStyle: { zIndex: 999 }, // Ensure magnifier is above other content
            isHintEnabled: true, // Show hint to activate magnification
          }}
        />
      </div>

      {/* Right column for features */}
      <div className="w-1/2 pl-8">
        <h2 className="text-xl font-semibold mb-4">{product.desc}</h2>
        {!isHoveringImage && (
          <p className="text-gray-700">{product.features}</p>
        )}
      </div>
    </div>
  );
}

export default Product;

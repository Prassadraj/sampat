import React, { useContext, useState } from "react";
import { ProductDataContext } from "../../Context/ProductData";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import "./product.css";
import { motion } from "framer-motion";

function Product() {
  const { data } = useContext(ProductDataContext);
  const { id } = useParams();
  const product = data.find((product) => product.id === parseInt(id));
  const [imgURL, setImgURL] = useState(product.img[0]);

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
              borderRadius: "10px",
            }}
          />
        ))}
      </div>

      {/* Right column for magnified image */}
      <div className="w-1/2 pr-8 relative">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: product.name,
              isFluidWidth: true,
              src: imgURL, // Display the selected image
            },
            largeImage: {
              src: imgURL, // Use the selected image for magnification
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
        <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
        <motion.p
          className="text-sm text-justify md:text-xl md:w-96 text-gray-600 mt-4"
          initial={{ opacity: 0, x: -90 }}
          animate={{ opacity: 1, x: 0 }} // Use x-axis for animation
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {product.features}
        </motion.p>
      </div>
    </div>
  );
}

export default Product;

import React, { useContext, useState } from "react";
import { ProductDataContext } from "../Context/ProductData";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

function Product() {
  const { data } = useContext(ProductDataContext);
  const { id } = useParams();
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const product = data.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div className="text-red-500">Product not found</div>;
  }

  return (
    <div className="flex max-w-4xl mx-auto my-8">
      {/* Left column for image */}
      <div
        className="w-1/2 pr-8 relative" // Added 'relative' for positioning
        onMouseEnter={() => setIsHoveringImage(true)}
        onMouseLeave={() => setIsHoveringImage(false)}
      >
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: product.desc,
              isFluidWidth: true,
              src: product.img,
            },
            largeImage: {
              src: product.img,
              width: 1200,
              height: 1200,
            },
            // Optional props can be added for customization
          }}
        />
        {/* Optional: Add magnified image container styling */}
        {/* <div className="magnify-glass-container"></div> */}
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

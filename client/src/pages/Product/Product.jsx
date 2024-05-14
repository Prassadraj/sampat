import React, { useContext, useEffect, useRef, useState } from "react";
import { ProductDataContext } from "../../Context/ProductData";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import "./product.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faHome } from "@fortawesome/free-solid-svg-icons";
import Nav from "../Nav/Nav";
import { Cursor } from "../../component/Cursor";

function Product() {
  const { data } = useContext(ProductDataContext);
  const { id } = useParams();
  const product = data.find((product) => product.id === parseInt(id));
  const [imgURL, setImgURL] = useState(product.img[0]);
  const navigation = useNavigate();
  const [measure, setMeasure] = useState(0);

  const topRef = useRef(null);
  if (!product) {
    return <div className="text-red-500">Product not found</div>;
  }
  const relatedProducts = data.filter(
    (items) => items.same == product.same && items.id !== product.id
  );
  const handleRelatedProductClick = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scroll = () => {
    setMeasure(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);

  return (
    <div className="absolute top-0" ref={topRef}>
      <div className="">
        <Nav />

        <div className="flex items-center w-full ml-52 overflow-x-hidden mt-52 my-10 gap-8">
          {/* Left column for image thumbnails */}
          <div
            className="flex flex-col gap-3 "
            style={{ transform: `translateX(-${measure}px)` }}
          >
            {product.img.map((img, index) => (
              <img
                key={index}
                src={img}
                className="duration-700 "
                alt={`Product ${index + 1}`}
                width="90px"
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
          <div
            className="w-96 pr-8 relative z-10"
            style={{ transform: `translateY(-${measure * 2}px)` }}
          >
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: product.name,
                  isFluidWidth: true,
                  src: imgURL,
                },
                largeImage: {
                  src: imgURL,
                  width: 620,
                  height: 620,
                },
                enlargedImageContainerStyle: { zIndex: 999 },
                isHintEnabled: true,
              }}
            />
          </div>
      

          {/* Right column for features */}
          <div
            className="w-1/2 pl-8"
            style={{ transform: `translateX(${measure * 4}px)` }}
          >
            <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
            <motion.p
              className="text-sm text-justify md:text-xl md:w-96 text-gray-600 mt-4"
              initial={{ opacity: 0, x: -90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              {product.features}
            </motion.p>
          </div>
        </div>
        <div className="h-64 mt-10 ">
          {relatedProducts.length > 0 && (
            <div style={{ transform: `translateY(-${measure - 50}px)` }}>
              <h1 className="ml-52  mb-6 text-3xl">Related Products</h1>

              <div className="grid grid-cols-4 ml-44 gap-10">
                {relatedProducts.map((products) => (
                  <Link
                    to={`/product/${products.id}`}
                    key={products.id}
                    onClick={handleRelatedProductClick}
                    className="hover:opacity-75 transition-opacity duration-300 ease-in-out"
                  >
                    <div
                      key={products.id}
                      className="flex flex-col items-center"
                    >
                      <img
                        src={products.img}
                        alt=""
                        onClick={() => setImgURL(products.img)}
                        className="hover:opacity-90 shadow-lg transition-opacity duration-300 ease-in-out"
                        style={{ borderRadius: "10px" }}
                        width="200px"
                      />
                      <p className="mt-5 mb-10">{products.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;

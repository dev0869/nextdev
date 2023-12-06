'use client'
import Link from "next/link";
import { useState, useCallback } from "react";
import slugify from "slugify";
import { useAppSelector } from "@/redux/hooks";

const ExplorePage = () => {
  const [handleview, setHandleview] = useState("bike");
  const product = useAppSelector((st) => st.products.data);
  console.log(product);

  const filteredProducts = useCallback(() => {
    if (handleview === "bike") {
      return product.filter((pro) => pro.price === "bike").slice(0, 3);
    } else {
      return product.filter((pro) => pro.price === "scooter").slice(0, 3);
    }
  }, [handleview, product]);

  return (
    <div className="container">
      <h1
        className="text-center mt-10 h2 md:h1 text-uppercase col-12 text-[28px] md:text-[2.5rem]  italic"
        style={{ fontWeight: "700" }}
      >
        EXPLORE OUR PRODUCTS
      </h1>
      <p className="text-center text-[16px] md:text-[18px] mb-4">
        Checkout the range of our scooters and motorcycles with exciting
        features and latest technology.
      </p>
      <div className="p-2 flex justify-center">
        <button
          onClick={() => setHandleview("bike")}
          className={
            handleview === "bike"
              ? "text-xl font-[600] mb-2 mx-2 border-b-2 px-1 border-red-600 text-red-600"
              : "text-xl font-[600] mb-2 mx-2 border-b-2 px-1 border-gray-800 text-gray-800"
          }
        >
          {" "}
          Bike
        </button>
        <button
          onClick={() => setHandleview("scooter")}
          className={
            handleview === "scooter"
              ? "text-xl font-[600] mb-2 mx-2 border-b-2 px-1 border-red-600 text-red-600"
              : "text-xl font-[600] mb-2 mx-2 border-b-2 px-1 border-gray-800 text-gray-800"
          }
        >
          Scooter
        </button>
      </div>
{
    product.map((ele)=>ele.name)
}
      {/* {handleview === "bike" && (
        <div className="flex flex-wrap justify-center">
          {filteredProducts.map((ele, i) => {
            const slug = slugify(ele.name, {
              lower: true,
              strict: true,
            });
            return (
              <div className="scooterimg flex flex-wrap flex-col" key={i}> */}
                {/* <Link state={ele} to={`/e-bike/${slug}`}> */}
                  {/* <LazyLoadImage
                    alt={"img"}
                    effect="blur"
                    src={ele.images[1]}
                    width={400}
                  />
                  <h2 style={{ textAlign: "center" }}>{ele.name}</h2> */}
                {/* </Link> */}
              {/* </div>
            );
          })}
        </div>
      )} */}
      {/* {handleview === "scooter" && (
        <div className="flex flex-wrap justify-center">
          {filteredProducts.map((ele, i) => {
            const slug = slugify(ele.name, {
              lower: true,
              strict: true,
            });
            return (
              <div className="scooterimg flex flex-wrap flex-col" key={i}> */}
                {/* <Link state={ele} to={`/e-bike/${slug}`}> */}
                  {/* <LazyLoadImage
                    alt={"img"}
                    effect="blur"
                    src={ele.images[1]}
                    width={400}
                  /> */}
{/* 
                  <h2 style={{ textAlign: "center" }}>{ele.name}</h2> */}
                {/* </Link> */}
              {/* </div>
            );
          })}
        </div> */}
      {/* )} */}
    </div>
  );
};

export default ExplorePage;

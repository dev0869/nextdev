"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";

export const getButtonClass = (currentView: string, targetView: string) =>
  `text-xl font-[600] mb-2 mx-2 border-b-2 px-1 ${
    currentView === targetView
      ? "border-red-600 text-red-600"
      : "border-gray-800 text-gray-800"
  }`;

const ExplorePage = () => {
  const [handleview, setHandleview] = useState("bike");
  const product = useAppSelector((st) => st.products.data);
  const selectProducts = product
    .filter((ele) => ele.type === handleview)
    .slice(0, 3);

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
          className={getButtonClass(handleview, "bike")}
        >
          Bike
        </button>
        <button
          onClick={() => setHandleview("scooter")}
          className={getButtonClass(handleview, "scooter")}
        >
          Scooter
        </button>
      </div>
      <div className="dflex">
        {selectProducts?.map((ele, i) => {
          const slug = ele.name;
          return (
            <>
              <Link
                href={{
                  pathname: `/products/${handleview}/${slug}`,
                  query: { id: ele._id },
                }}
                className=" cflex flex-wrap flex-col"
                key={i}
              >
                <Image
                  alt={"img"}
                  src={ele.images[1]}
                  width={400}
                  height={400}
                  quality={50}
                 priority
              
                />
                <h2 style={{ textAlign: "center" }}>{ele.name}</h2>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ExplorePage;

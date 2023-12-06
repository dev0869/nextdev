'use client'
import './index.css'
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { banner5, banner6, banner7 } from "../../assets/images/banner";
import { bycicle, telephone, setting } from "../../assets/images/icon";
import Link from "next/link";
export const Carasol = () => {
  const imgs = [banner7, banner5, banner6];

  return (  
    <div className="border">
      <Carousel interval={1000}>
        {imgs.map((ele, id) => (
          <Carousel.Item key={id}>
            <Image
              className="d-block w-100"
              loading="lazy"
              src={ele}
              alt={`Slide ${id + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};



export const HelpSection = () => {
  const help = [
    {
      path: "/product",
      img: bycicle,
      text: "BOOK NOW",
    },

    {
      path: "/testbookride",
      img: telephone,
      text: `TEST RIDE`,
    },
    {
      img: setting,
      path: "/callback",
      text: "24 Hours Customer Support",
    },
  ];
  return (
    <div className=" flex justify-center p-4 ">
      <div className="col-12 mt-9  d-flex flex-col md:flex-row justify-center gap-4 md:gap-0 ">
        <div className=" justify-center  py-4 d-flex flex-col">
          <h1
            className="text-start h2 md:h1 text-uppercase col-12 text-[2rem] md:text-[3rem]  italic"
            style={{ fontWeight: "1000", fontFamily: "speed", color: "red" }}
          >
            How we can help You ?
          </h1>
          <div className="col-12 justify-center flex mt-8">
            {help.map((e, i) => {
              return (
                <Link
                  href={e.path}
                  key={i}
                  className="help-box w-[33%] md:w-[200px]"
                >
                  <div className="help-icon w-24 h-24">
                    <Image src={e.img} className="w-20" alt="" />
                  </div>
                  <p className="help-label mt-2 md:text-[20px]  text-center font-[500] md:font-[550] md:text-2xl">
                    {e.text}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

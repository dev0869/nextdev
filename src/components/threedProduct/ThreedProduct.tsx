"use client";
import Image from "next/image";
import img2 from "@/assets/right-rotate.png";
import { Icons } from "@/app/contstants";

import img from "@/assets/left-rotate.png";
import "./index.css";
import { RiPriceTag3Line } from "react-icons/ri";
import { BsFillAlarmFill } from "react-icons/bs";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { BiSolidParking } from "react-icons/bi";
import { GiCharging, GiSpeedometer } from "react-icons/gi";
import React, { useRef, useState } from "react";
import Link from "next/link";
export default function ThreedProduct({ data }: any) {
  const { name, images, specs, feature, price } = data;
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    if (cardRef.current) {
      cardRef.current.style.cursor = "grabbing";
    }
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    if (cardRef.current) {
      const dragDistance = e.clientX - (dragStart ?? 0);
      const numImages = 5;
      const angleIncrement = 72;
      const currentImage = Math.round(
        (dragDistance / cardRef.current.clientWidth) * numImages
      );
      const clampedImage = Math.max(0, Math.min(currentImage, numImages - 1));

      cardRef.current.style.setProperty(
        "--i",
        clampedImage * angleIncrement + "deg"
      );
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDragStart(0);
    if (cardRef.current) {
      cardRef.current.style.cursor = "grab";
    }
  };
  const featureKey = Object.keys(feature)?.map((e) =>
    e.includes("_") ? e.replace(/_/g, " ") : e
  );
  const featureval: React.ReactNode[] = Object.values(feature);
  const specKey: string[] = Object.keys(specs)?.map((e) =>
    e.includes("_") ? e.replace(/_/g, " ") : e
  );
  const specval: React.ReactNode[] = Object.values(specs);
  return (
    <>
      <div className="banner">
        <div className="Rotatebanner ">
          <h1> 360° EXPERIENCE</h1>
        </div>
        <div className="stack">
          <ul className="fr flex items-center flex-col">
            <li className="flex items-center m-[12px]">
              <h1>Environment Friendly</h1>
              <GiPlantsAndAnimals size={12} className="box" />
            </li>
            <li className="flex items-center m-[12px] gap-[12px]">
              <h1>Easy to Park</h1>
              <BiSolidParking
                size={12}
                style={{ width: "65px", marginLeft: "19px" }}
                className="box"
              />
            </li>{" "}
            <li
              style={{
                display: "flex",
                alignItems: "center",
                margin: "12px",
                gap: "12px",
              }}
            >
              <h1>Cost Effective</h1>
              <RiPriceTag3Line
                size={12}
                style={{ width: "65px", marginLeft: "5px" }}
                className="box"
              />
            </li>
          </ul>

          <div className="cardmain">
            <Image
              className="cardmainimg"
              width={100}
              height={100}
              src={img}
              alt=""
            />
            <div
              className="card"
              ref={cardRef}
              onMouseDown={handleDragStart}
              onMouseMove={handleDrag}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
              {[0, 1, 2, 3, 4].map((index) => (
                <React.Fragment key={index}>
                  <span style={{ "--i": index } as React.CSSProperties}></span>
                  <Image src={images[index]} width={400} height={400} alt="" />
                </React.Fragment>
              ))}
            </div>
            <Image
              className="cardmainimg"
              width={100}
              height={100}
              src={img2}
              alt="sds"
            />
          </div>

          <ul
            className="fr"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
                margin: "12px",
                gap: "12px",
              }}
            >
              <h1>Anti-Theft Alarm</h1>
              <BsFillAlarmFill size={12} className="box" />
            </li>{" "}
            <li
              style={{
                display: "flex",
                alignItems: "center",
                margin: "12px",
                gap: "12px",
              }}
            >
              <h1>USB 2.0 Charging</h1>
              <GiCharging size={12} className="box" />
            </li>{" "}
            <li
              style={{
                display: "flex",
                alignItems: "center",
                margin: "12px",
                gap: "12px",
              }}
            >
              <h1>Speed Control</h1>
              <GiSpeedometer size={12} className="box" />
            </li>
          </ul>
        </div>

        <div
          className="navButton"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link href={"/cart"}>
            <button
              style={{
                padding: "10px 15px",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
      {/* specification */}
      <div style={{ background: "#FAFCEA", padding: "40px 0" }}>
        <div className="Rotatebanner ">
          <h1 style={{ color: "black" }}>-{name} Specification-</h1>
          <br />
          <div className="cflex gap-2 flex-wrap flex-row">
            {specKey?.map((e, i) => (
              <div className="spec" key={i}>
                <div style={{ fontSize: 60 }}>{Icons[i]}</div>
                <h2>-{e}-</h2>
                <p>{specval[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-md p-8">
        <div className="lowcontent">
          <h1>
            RIDE WITH DESH KI NAYI DADHKAN{" "}
            <span className="hide">
              {name}
              <br />
              AT JUST 20 PAISA PER KM
            </span>
          </h1>
        </div>
        <div
          style={{
            textAlign: "center",

            display: "flex",
            justifyContent: "space-around",
            fontSize: "30px",
          }}
          className="er"
        >
          {featureKey.map((e, i) => {
            return (
              <div key={i}>
                <div className="specdetail">
                  <h1 style={{ fontWeight: 900 }} className=" text-capitalize">
                    {e}
                  </h1>
                  <p>{featureval[i]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="banner2">
        <div className="bannerc1">
          <Image
            style={{ mixBlendMode: "darken" }}
            src={images[0]}
            alt="saad"
            width={1000}
            height={500}
          />
        </div>
        <div className="bannerc2">
          <h1>{name} PRICE</h1>

          <div className="varients">
            <h2>Varients</h2>
            <h2>Ex-Showroom Price</h2>
          </div>
          <div className="varients">
            <p>{name}</p>
            <p>₹ {price}</p>
          </div>

          <div className="navButton">
            <Link href={"/cart"}>
              <button
                // onClick={handlecart}
                style={{ padding: "8px", marginTop: "20px", fontSize: "18px" }}
              >
                Buy Now
              </button>
            </Link>
          </div>
          <p style={{ padding: "30px 0" }}>
            *All prices are ex-showroom, T&C apply.
          </p>
        </div>
      </div>
    </>
  );
}

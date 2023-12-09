"use client";
import ThreedProduct from "@/components/threedProduct/ThreedProduct";
import "./index.css";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
export default function Page({
  params,
}: {
  params: { productType: string; slug: string[] };
}) {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const products = useAppSelector((st) => st.products.data);
  const ProductDetails = products.find((ele) => ele._id === productId);

  return (
    <>
      <div className="productMain w-full h-[100dvh]">
        <Image
          src={`${ProductDetails?.bannerimg}`}
          alt="image"
          width={900}
          height={200}
          className="w-[100dvw] h-[100dvh]"
        />
      </div>
      {ProductDetails && <ThreedProduct data={ProductDetails} />}
    </>
  );
}

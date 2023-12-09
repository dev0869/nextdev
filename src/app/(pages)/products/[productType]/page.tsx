"use client";
import "./index.css";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { productType: string } }) {
  const { productType } = params;
  const product = useAppSelector((st) => st.products.data);
  const ProductType = product.filter((pro) => pro.type === productType);
  return (
    <>
      <div>
        <h1 className="scootermain ">{`E-${productType?.toUpperCase()}S`}</h1>

        <div className="cflex gap-3 flex-wrap">
          <div className="row flex flex-wrap items-center justify-center">
            {ProductType?.length !== 0 && (
              <>
                {ProductType.map((ele, i) => {
                  const slug = ele.name;
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-center w-[400px] overflow-hidden"
                    >
                      <Link href={{
                        pathname:`/products/${productType}/${slug}`,
                        query:{id:ele._id}}}>
                        <Image
                          alt={"img"}
                          src={ele.images[0]}
                          width={450}
                          height={450}
                        />
                        <h2 style={{ textAlign: "center" }}>{ele.name}</h2>
                      </Link>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

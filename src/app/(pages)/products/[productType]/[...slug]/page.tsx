"use client";
import './index.css'
import { useAppSelector } from "@/redux/hooks";
import Image from 'next/image';
import { useSearchParams } from "next/navigation";
export default function Page({ params }: { params: { productType:string,slug: string[] } }) {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id')
  const products = useAppSelector((st) => st.products.data);
  console.log(products);
  const ProductDetails = products.find(
    (ele) => ele._id === productId
  );

  console.log(ProductDetails);
  return <>
    <div className="productMain w-full">
        <Image
          src={`${ProductDetails?.bannerimg}`}
          alt="image"
          
          width={9200}
          height={1200}
          className='w-[100vw] h-[100vh]'
       

        />
      </div>
      {/* {productData && <Rotate data={productData} />} */}
    
    </>;
}



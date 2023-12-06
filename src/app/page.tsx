"use client";
import { Carasol } from "@/components/carasol/Carasol";
import { HelpSection } from "@/components/carasol/Carasol";
import { getProducts } from "@/apis/ProductApi";
import ExplorePage from "@/components/explore/ExplorePage";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "@/redux/hooks";
import { getProductsData } from "@/redux/Features/ProductSlice";
export default function Home() {
  const dispatch = useAppDispatch();
  const { isPending, isSuccess, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (isSuccess) {
    dispatch(getProductsData(data));
  }
  console.log(data);
  return (
    <>
      <Carasol />
      <HelpSection />
      <ExplorePage/>
    </>
  );
}

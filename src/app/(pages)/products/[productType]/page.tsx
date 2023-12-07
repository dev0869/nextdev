export default function Page({ params }: { params: { productType: string } }) {
    console.log(params);
    return <div>My vi: {params.productType}</div>
  }
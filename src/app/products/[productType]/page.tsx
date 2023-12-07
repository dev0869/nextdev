export default function Page({ params }: { params: { productType: string } }) {
    return <div>My vi: {params.productType}</div>
  }
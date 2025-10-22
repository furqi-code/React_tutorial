import Link from "next/link";

export default async function Product({ params }) {
  const { productId } = await params;
  return (
    <>
      <Link href={`/about`}>GO TO ABOUT</Link>
      <h1>{productId}</h1>
    </>
  );
}

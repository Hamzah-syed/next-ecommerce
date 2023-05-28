import Image from 'next/image'
import { client } from "@/lib/sanityClient"


export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    title,
    description
  }`);
  return res
}



interface IProduct {
  title: string,
  description: string
  image: string[]
}

export default async function Home() {

  const data: IProduct[] = await getProductData()


  return (
    <div>
      {data.map((item) => (
        <>
          <h1>{item.title}</h1>
        </>



      ))}
    </div>
  )
}

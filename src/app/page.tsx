// Lib
import { client } from "@/lib/sanityClient"
// Components
import Hero from "@/sections/Hero";


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
    <main>
      {/* Hero */}
      <Hero />
      {data.map((item) => (
        <>
          <h1>{item.title}</h1>
        </>



      ))}
    </main>
  )
}

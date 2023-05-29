// Lib
import { client } from "@/lib/sanityClient"
// Components
import Hero from "@/sections/Hero";
import ProductCard from "@/components/shared/ProductCard";
import { Image } from "sanity";


 const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    title,
    description,
    price,
    image,
    _id,
    category->{
      name
    }
  }`);
  return res
}



interface IProduct {
  title: string,
  description: string,
  image: Image,
  price: number,
  _id: string
  category: {
    name: string
  }
}

export default async function Home() {

  const data: IProduct[] = await getProductData()


  return (
    <main>
      {/* Hero */}
      <Hero />
      {/* Products */}
      <div className="grid grid-cols-[repeat(4,auto)] justify-center  mt-16 wrapper lg:mt-28 gap-x-10 wrapper">
        {data.map((item) => (
          <>
            <ProductCard
              data={{
                _id: item._id,
                title: item.title,
                category: item.category?.name,
                price: item.price,
                productImage: {
                  src: item.image
                }
              }}
            />
          </>
        ))}
      </div>
    </main>
  )
}

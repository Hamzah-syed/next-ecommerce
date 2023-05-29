import { cookies } from "next/headers"

const getCartData = async () => {
    const uid = cookies().get("userid")?.value
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart?userid=${uid}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-store",


    })
    const result = await res.json()
    return result
}

const page = async () => {
    const d = await getCartData();
    console.log(d)
    return (
        <div>page</div>
    )
}

export default page
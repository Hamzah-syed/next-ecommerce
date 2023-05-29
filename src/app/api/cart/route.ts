import { NextRequest, NextResponse } from "next/server"
import { db, cartTable, insertSchema, updateSchema } from "@/lib/drizzle"
import { cookies, headers } from 'next/headers';
import { v4 as uuid } from "uuid";
import { eq, and } from 'drizzle-orm';
import { ZodError } from "zod"

export const GET = async (request: NextRequest) => {
    const sparams = request.nextUrl
    console.log()
    try {
        if (sparams.searchParams.has("userid")) {
            const uid = sparams.searchParams.get("userid") as string
            const res = await db.select().from(cartTable).where(eq(cartTable.userid, uid));
            return NextResponse.json({ data: res })
        } else {
            cookies().set('userid', uuid());
            return NextResponse.json({ message: "Empty cart!" })
        }
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: "Something went wrong", err: error.message }, {
                status: 500,
            })
        } else {
            console.log(error)
        }
    }

}

export const POST = async (request: NextRequest) => {
    const req = await request.json().catch((err) => console.log(err))

    try {
        const cartItem = insertSchema.parse(req);
        let _uid = cookies().get("userid")?.value
        console.log(_uid)
        if (!_uid) {
            cookies().set('userid', uuid());
        }

        let uid = cookies().get("userid")?.value as string

        const res = await db.insert(cartTable).values({ userid: uid, ...cartItem }).returning({
            id: cartTable.id
        })

        return NextResponse.json({ data: res })

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: "Something went wrong", err: error.message }, {
                status: 500
            })
        } else {
            console.log(error)
        }
    }

}

export const PUT = async (request: NextRequest) => {
    const req = await request.json().catch((err) => console.log(err))

    try {
        const cartItem = updateSchema.parse(req);
        if (cartItem.id) {
            const res = await db.update(cartTable).set({ quantity: cartItem.quantity }).where(eq(cartTable.id, cartItem.id)).returning({
                id: cartTable.id,
            })
            return NextResponse.json({ data: res })
        } else {
            return NextResponse.json({ message: "Id is required" }, {
                status: 400
            })
        }

    } catch (error) {
        if (error instanceof ZodError) {
            return NextResponse.json({ message: "Something went wrong", err: error }, {
                status: 500
            })
        }
        else if (error instanceof Error) {
            return NextResponse.json({ message: "Something went wrong", err: error.message }, {
                status: 500
            })
        } else {
            console.log(error)
        }
    }

}
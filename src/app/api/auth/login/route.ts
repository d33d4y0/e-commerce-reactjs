import { NextResponse } from "next/server";
import axios from "axios";

type LoginRequest = {
    username: string;
    password: string;
}

export async function POST(request: Request) {
    const loginRequest: LoginRequest = await request.json();
    const { data } = await axios.post("https://fakestoreapi.com/auth/login", {
        "username": loginRequest.username,
        "password": loginRequest.password
    });
    // NextResponse.setCookie({
    //     name: "token",
    //     value: data.token,
    //     options: {
    //         httpOnly: true,
    //         secure: true,
    //         path: "/",
    //         sameSite: "lax",
    //         expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) // 7 days
    //     }
    // });
    // NextResponse.setHeader("Authorization", `Bearer ${data.token}`);
    const resp: NextResponse = new NextResponse();
    return NextResponse.json({ data });
}

export async function GET(request: Request) {
    return NextResponse.json({ message: "Hello, World!" });
}
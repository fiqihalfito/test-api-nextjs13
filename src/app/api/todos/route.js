import { addTodo } from "@/lib/todos"
import { NextResponse } from "next/server"

export async function GET(request) {
    return new Response('Hello, Next.js!')
}

export async function POST(request) {
    const res = await request.json()
    const newTodos = await addTodo(res)
    return NextResponse.json(newTodos)
}



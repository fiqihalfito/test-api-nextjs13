import { deleteTodo } from "@/lib/todos"
import { NextResponse } from "next/server"

export async function DELETE(request, { params }) {
    const id = params.id
    const deletedTodo = await deleteTodo(id)
    return NextResponse.json(deletedTodo)
}
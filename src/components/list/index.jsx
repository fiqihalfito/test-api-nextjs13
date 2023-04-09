"use client"

import { useRouter } from "next/navigation"
import { useTransition } from "react"

const TodoList = ({ todo }) => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()


    async function handleDelete(e) {
        const res = await fetch(`http://localhost:3000/api/todos/${todo.id}`, {
            method: "DELETE"
        })
        const resData = await res.json()

        startTransition(() => {
            router.refresh()
        })
    }

    return (
        <li className="group flex gap-8">
            <p>{todo.name}</p>
            <button
                className="hidden group-hover:inline"
                onClick={handleDelete}>
                x
            </button>
        </li>
    )
}

export default TodoList
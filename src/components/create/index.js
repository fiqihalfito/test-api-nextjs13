"use client"
import { addTodo } from "@/lib/todos"
import { useRouter } from 'next/navigation';
import { useState, useTransition } from "react"

const CreateTodo = () => {

    const router = useRouter();
    const [isPending, startTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)

    const [todo, setTodo] = useState({
        name: null
    })

    function handleChange(e) {
        return setTodo({
            name: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        // setIsFetching(true)

        // fetching
        const res = await fetch('http://localhost:3000/api/todos', {
            method: "POST",
            body: JSON.stringify(todo)
        })
        const data = await res.json()

        // setIsFetching(false)

        startTransition(() => {
            // Refresh the current route and fetch new data from the server without
            // losing client-side browser or React state.
            router.refresh()
        })

    }

    console.log(todo);

    return (
        <div>
            <form>
                <label htmlFor="todo">
                    Todo Name
                </label>
                <input
                    type='name'
                    name='name'
                    placeholder='name'
                    id='todo'
                    className='block text-black'
                    onChange={handleChange}
                />

                <input
                    type='submit'
                    value={'Submit'}
                    className='px-4 py-2 bg-blue-400 rounded-lg'
                    onClick={handleSubmit}
                />
            </form>
        </div>
    )
}

export default CreateTodo
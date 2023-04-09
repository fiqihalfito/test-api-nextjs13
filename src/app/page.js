import CreateTodo from '@/components/create'
import TodoList from '@/components/list'
import { getTodos } from '@/lib/todos'


export default async function Home() {

    const todos = await getTodos()

    return (
        <main>
            <CreateTodo />
            <p className='text-2xl font-bold'>Todos :</p>
            <ol>
                {todos?.map(todo => (
                    <TodoList key={todo.id} todo={todo} />
                ))}
            </ol>
        </main>
    )
}

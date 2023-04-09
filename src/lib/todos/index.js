import prisma from "../../../prisma"

export const getTodos = async () => {
    try {
        const todos = await prisma.todo.findMany()
        return todos
    } catch (error) {
        console.log(error.message);
        return null
    }

}

export const addTodo = async (todo) => {
    const newTodo = await prisma.todo.create({
        data: todo
    })
    return newTodo

}

export const deleteTodo = async (id) => {
    const deletedTodo = await prisma.todo.delete({
        where: {
            id: Number(id)
        }
    })

    return deletedTodo
}
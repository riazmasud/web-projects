// import { useEffect, useState } from "react";
// import { dummyData } from "../src/data/todos";
// import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  // const [todos, setTodos] = useState(dummyData);

  // const [todos, setTodos] = useState(() => {
  //   const savedTodos: Todo[] = JSON.parse(
  //     localStorage.getItem("todos") || "[]",
  //   );
  //   return savedTodos.length > 0 ? savedTodos : dummyData;
  // });

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  // function setTodoCompleted(id: number, completed: boolean) {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)),
  //   );
  // }

  // function addTodo(title: string) {
  //   setTodos((prevTodos) => [
  //     {
  //       id: Date.now(),
  //       title: title,
  //       completed: false,
  //     },
  //     ...prevTodos,
  //   ]);
  // }

  // function deleteTodo(id: number) {
  //   setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  // }

  // function deleteAllCompletedTodos() {
  //   setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  // }

  //Instead of having all the functions above here,
  // we are using a custom hook useTodos() and extracting the functions below
  const {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
  } = useTodos();
  return (
    <>
      <main className="py-10 h-screen bg-white space-y-5 overflow-y-auto">
        <h1 className="bg-blend-color text-black text-center text-2xl">
          Your Todos
        </h1>
        <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
          <AddTodoForm onSubmit={addTodo} />
          <TodoList
            todos={todos}
            onCompleteChange={setTodoCompleted}
            onDelete={deleteTodo}
          />
        </div>
        <TodoSummary
          todos={todos}
          deleteAllCompleted={deleteAllCompletedTodos}
        />
      </main>
    </>
  );
}

export default App;

import React, { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}
export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState("");
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  }

  return (
    <form className="flex mb-5" onSubmit={handleSubmit}>
      <input
        value={input}
        placeholder="What needs to be added?"
        onChange={(e) => setInput(e.target.value)}
        className="rounded-s-md grow border border-gray-400 p-2"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
      >
        Add
      </button>
    </form>
  );
}

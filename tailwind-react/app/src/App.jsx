import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={`${theme} min-h-screen text-slate-900 dark:bg-background dark:text-white `}
    >
      <div className="flex items-center justify-between p-4">
        <div className="font-bold">Logo</div>
        {/* Desktop */}
        <div className="hidden sm:flex gap-2">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <button
          className="hidden sm:block text-xl cursor-pointer"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button
          className="text-xl cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {/* Mobile */}
      {open && (
        <div className="flex flex-col items-center gap-2 text-slate-900 dark:bg-background-mobile-menu dark:text-white p-4 sm:hidden">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <button
            className="text-xl cursor-pointer sm:hidden"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 dark:bg-background text-white dark:text-white p-6 gap-6 text-center font-semibold text-2xl sm:text-sm">
        <div className="bg-slate-500 p-4 rounded transition-all duration-300 ease-out hover:bg-slate-600 hover:scale-105 hover:shadow-xl">
          Feature One
        </div>
        <div className="bg-slate-500 p-4 roundedtransition-all duration-300 ease-out hover:bg-slate-600 hover:scale-105 hover:shadow-xl">
          Feature Two
        </div>
        <div className="bg-slate-500 p-4 rounded transition-all duration-300 ease-out hover:bg-slate-600 hover:scale-105 hover:shadow-xl">
          Feature Three
        </div>
        <div className="bg-slate-500 p-4 rounded transition-all duration-300 ease-out hover:bg-slate-600 hover:scale-105 hover:shadow-xl">
          Feature Four
        </div>
        <div className="bg-slate-500 p-4 rounded transition-all duration-300 ease-out hover:bg-slate-600 hover:scale-105 hover:shadow-xl">
          Feature Five
        </div>
        <div className="bg-slate-500 p-4 rounded transition-all duration-300 ease-out hover:bg-slate-600 hover:scale-105 hover:shadow-xl">
          Feature Six
        </div>
      </div>
    </div>
  );
}

export default App;

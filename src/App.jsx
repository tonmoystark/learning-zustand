import Counter from "./components/Counter";
import Cart from "./components/shopping-cart/Cart";
import UserLogInOut from "./components/UserLogInOut";
import { useTheme } from "./store/useTheme";

function App() {
  const { theme, handleTheme } = useTheme();

  const themeClasses =
    theme === "light" ? "bg-purple-200 text-black" : "bg-green-900 text-white";

  return (
    <div className={`min-h-screen ${themeClasses}`}>
      <nav className={`${themeClasses} text-xl`}>
        <header className="w-full flex justify-around py-6">
          <a href="">Tonmoy</a>
          <a href="">hira</a>
          <a href="">jira</a>
          <a href="">sira</a>
          <button
            onClick={handleTheme}
          >{theme === "light" ? "🌙" : "😎"}</button>
        </header>
      </nav>
      <h1 className="text-2xl text-center font-bold py-5">Learning Zustand</h1>

      <main>
        <Counter />
        <UserLogInOut />
        <div>
          <h1>Shopping Cart</h1>
          <div className="flex flex-wrap gap-2">
            <Cart />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

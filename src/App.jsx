import { useState } from "react";
import Counter from "./components/Counter";
import Cart from "./components/shopping-cart/Cart";
import UserLogInOut from "./components/UserLogInOut";
import { useTheme } from "./store/useTheme";
import GitPosts from "./components/GitPosts";

function App() {
  const { theme, handleTheme } = useTheme();

  const [showCart, setShowCart] = useState(false)

  const showHideCart = () => {
    setShowCart(!showCart)
  }

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
        <div className="border">
          <h1 className="text-3xl text-center">Shopping Cart</h1>
          <button
          className="text-2xl px-4 py-2 bg-amber-600 "
          onClick={showHideCart}
          >{showCart ? "hide Cart" : "Show Cart"}</button>
          <div className={`flex-wrap transition-all duration-300 gap-2 ${showCart ? 'flex' : 'hidden'}`}>
            <Cart />
          </div>

        </div>
          <div>
            <GitPosts/>
          </div>
      </main>
    </div>
  );
}

export default App;

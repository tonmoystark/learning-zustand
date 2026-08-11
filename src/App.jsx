import Counter from "./components/Counter"
import Cart from "./components/shopping-cart/Cart"
import UserLogInOut from "./components/UserLogInOut"

function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
  )
}

export default App

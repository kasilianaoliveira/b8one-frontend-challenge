import { ToastContainer } from "react-toastify"
import { Cart } from "./components/Cart"
import { Favorite } from "./components/Favorite"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { CartContextProvider } from "./context/cartContext"
import { FavoriteContextProvider } from "./context/favoriteContext"
import './global.css'
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <CartContextProvider>
      <FavoriteContextProvider>
        <main className='App'>
          <Header />
          <Favorite />
          <Cart />
          <Products />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </main>
      </FavoriteContextProvider>
    </CartContextProvider>

  )
}

export default App

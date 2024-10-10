import { ToastContainer } from "react-toastify"
import { Cart } from "./components/Cart"
import { Favorite } from "./components/Favorite"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import './global.css'
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (

    <main className='App'>
      <Header />
      <Favorite />
      <Cart />
      <Products />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
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

  )
}

export default App

import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import LogoImg from '../../assets/logo.webp'
import styles from "./styles.module.css"
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { FavoriteContext } from '../../context/favoriteContext'
export const Header = () => {
  const { toggleCart, productCount } = useContext(CartContext)
  const { toggleFavorite, favorites } = useContext(FavoriteContext)

  return (
    <header className={styles.container}>
      <nav className={styles['content-wrapper']}>
        <img className={styles.logo} src={LogoImg} alt="Logo da Loja Virtual" />
        <ul className={styles['cart-container']}>
          <li onClick={toggleFavorite}>
            <HeartOutlined/>
            <span className={styles['cart-quantity']}>{favorites.length}</span>
          </li>
          <li onClick={toggleCart}>
            <ShoppingCartOutlined />
            <span className={styles['cart-quantity']}>{productCount}</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

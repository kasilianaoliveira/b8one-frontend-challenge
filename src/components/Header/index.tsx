import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import LogoImg from '../../assets/logo.webp'
import styles from "./styles.module.css"
import { useCartStore } from '../../stores/cartStore'
import { useFavoriteStore } from '../../stores/favoriteStore'

export const Header = () => {

  const {  toggleCart, productCount } = useCartStore();
  const {  toggleFavoriteVisibility, favorites } = useFavoriteStore();


  return (
    <header className={styles.container}>
      <nav className={styles['content-wrapper']}>
        <img className={styles.logo} src={LogoImg} alt="Logo da Loja Virtual" />
        <ul className={styles['cart-container']}>
          <li onClick={toggleFavoriteVisibility}>
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

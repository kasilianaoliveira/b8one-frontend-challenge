import { useContext } from 'react'
import { CartItem } from '../CartItem'
import styles from './styles.module.css'
import { CartContext } from '../../context/cartContext'
import { formatToLocaleString } from '../../utils/formatToLocaleString'
export const Cart = () => {
  const { isVisible, toggleCart, products, productsTotalPrice, productCount } = useContext(CartContext)

  const filterPrice = formatToLocaleString(productsTotalPrice)


  return (

    <div className={`${styles['cart-container']} ${isVisible && styles['cart-visibility']}`}>
      <div className={styles['cart-escape-area']} onClick={toggleCart}/>
      <div className={styles['cart-content']}>
        <h3 className={styles['cart-title']}>Seu Carrinho</h3>
        {
          products.map(product => (
            <CartItem key={product.id} product={product} />
          ))
        }

        {productCount > 0 && (
          <>
            <p>Total: {filterPrice}</p>
          </>
        )}

        {
          productCount === 0 && <p>Seu carrinho está vazinho :(</p>
        }
      </div>
    </div>
  )
}

import { memo } from 'react'
import { CartItem } from '../CartItem'
import styles from './styles.module.css'
import { formatToLocaleString } from '../../utils/formatToLocaleString'
import { useCartStore } from '../../stores/cartStore'

export const CartComponent = () => {
  const { 
    cart,
    productsTotalPrice,
    productCount,
    decreaseProductQuantity,
    addToCart,
    removeProductFromCart,
    isCartVisible,
    toggleCart
  } = useCartStore();

  const filterPrice = formatToLocaleString(productsTotalPrice)

  return (

    <div className={`${styles['cart-container']} ${isCartVisible && styles['cart-visibility']}`}>
      <div className={styles['cart-escape-area']} onClick={toggleCart} />
      <div className={styles['cart-content']}>
        <h3 className={styles['cart-title']}>Seu Carrinho</h3>
        {
          cart.map(product => (
            <CartItem
              key={product.id}
              product={product}
              decreaseProductQuantity={decreaseProductQuantity}
              addToCart={addToCart}
              removeProductFromCart={removeProductFromCart
              } />
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

export const Cart = memo(CartComponent);
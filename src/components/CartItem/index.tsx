import { FC, useContext } from 'react';
import { formatToLocaleString } from '../../utils/formatToLocaleString';
import styles from './styles.module.css';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { CartContext } from '../../context/cartContext';
import { Cart } from '../../types/cart';
import { notification } from '../../utils/notification';

interface ICartItemProps {
  product: Cart;
}

export const CartItem: FC<ICartItemProps> = ({ product }) => {
  const salePriceConverted = formatToLocaleString(product.salePrice)
  const { decreaseProductQuantity, addProductToCart, removeProductFromCart } = useContext(CartContext)

  return (
    <div className={styles['cart-item-container']}>
      <img src={product.image} className={styles['cart-item-image']} />

      <div className={styles['cart-item-details']}>
        <p className={styles['cart-item-title']}>
          {product.title}
        </p>
        <p>R${salePriceConverted}</p>
        <div className={styles['cart-item-quantity']}>
          <MinusOutlined onClick={() => decreaseProductQuantity(product.id)} />
          <p>{product.quantity}</p>
          <PlusOutlined onClick={() => addProductToCart(product)} />
        </div>
      </div>

      <button
        className={styles['cart-item-button']}
        onClick={() => {
          removeProductFromCart(product.id)
          notification('Produto removido do carrinho!')
        }}
      >
        <CloseOutlined />
      </button>
    </div >
  )
}

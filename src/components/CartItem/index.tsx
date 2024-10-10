import { FC, memo } from 'react';
import { formatToLocaleString } from '../../utils/formatToLocaleString';
import styles from './styles.module.css';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { notification } from '../../utils/notification';
import { IProductProps } from '../../types/product';
import { ICartItemProps } from '../../types/cartItem';


export const CartItemComponent: FC<ICartItemProps> = ({
  product,
  handleAddToCart,
  handleRemoveFromCart,
  decreaseProductQuantity }) => {
  const salePriceConverted = formatToLocaleString(product.salePrice)

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
          <PlusOutlined onClick={() => handleAddToCart(product)} />
        </div>
      </div>

      <button
        className={styles['cart-item-button']}
        onClick={() => {
          handleRemoveFromCart(product.id)
          notification('Produto removido do carrinho!')
        }}
      >
        <CloseOutlined />
      </button>
    </div >
  )
}

export const CartItem = memo(CartItemComponent);
import styles from './styles.module.css';
import { FavoriteIcon } from '../FavoriteIcon';
import { ProductDetails } from '../ProductDetails';
import { FC, memo } from 'react';
import { CardProductProps } from '../../types/cardProduct';
import CartButton from '../CartButton';

const areEqual = (prevProps: CardProductProps, nextProps: CardProductProps) => {
  return prevProps.product.id === nextProps.product.id;
};
const CardProductComponent: FC<CardProductProps> = ({
  product,
  handleAddToCart,
  handleAddToFavorites,
  handleRemoveFromCart,
  handleRemoveFromFavorites,
}) => {

  return (
    <div className={styles.container}>
      <div className={styles['image-content']}>
        <img className={styles['product-image']} src={product.image} alt="Product Image" />
        <FavoriteIcon
          product={product}
          handleFavoriteProduct={handleAddToFavorites}
          handleRemoveFromFavorites={handleRemoveFromFavorites}
        />
      </div>
      <ProductDetails
        title={product.title}
        originalPrice={product.originalPrice}
        salePrice={product.salePrice}
      />

      <CartButton
        product={product}
        handleRemoveFromCart={handleRemoveFromCart}
        handleAddToCart={handleAddToCart}
        productId={product.id}
      />

    </div>
  )
}
export const CardProduct = memo(CardProductComponent, areEqual);

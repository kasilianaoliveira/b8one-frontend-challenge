import styles from './styles.module.css';
import { FavoriteIcon } from '../FavoriteIcon';
import { ProductDetails } from '../ProductDetails';
import { AddProductButton } from '../AddProductButton';
import { FC, useContext } from 'react';
import { CardProductProps } from '../../types/cardProduct';
import { CartContext } from '../../context/cartContext';
import { FavoriteContext } from '../../context/favoriteContext';
import { notification } from '../../utils/notification';


export const CardProduct: FC<CardProductProps> = ({
  product,
  handleAddProduct,
  handleFavoriteProduct
}) => {
  const { products } = useContext(CartContext)
  const { favorites } = useContext(FavoriteContext)


  const isProductAdded = (productId: string) => {
    return products.some((item) => item.id === productId);
  }

  return (
    <div className={styles.container}>
      <div className={styles['image-content']}>
        <img className={styles['product-image']} src={product.image} alt="Product Image" />
        <FavoriteIcon
          product={product}
          favorites={favorites}
          handleFavoriteProduct={handleFavoriteProduct}
        />
      </div>
      <ProductDetails
        title={product.title}
        originalPrice={product.originalPrice}
        salePrice={product.salePrice}
      />

      {
        !isProductAdded(product.id) ? (
          <AddProductButton
            onClick={() => {
              handleAddProduct(product)
              notification('Produto adicionado ao carrinho!')
            }}

            isAddButton={true}
            label="Adicionar" />
        ) : (
          <AddProductButton
            label="Adicionado" />
        )
      }


    </div>
  )
}

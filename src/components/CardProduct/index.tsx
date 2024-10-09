import styles from './styles.module.css';
import { FavoriteIcon } from "../FavoriteIcon";
import { ProductDetails } from "../ProductDetails";
import { AddProductButton } from "../AddProductButton";
import { FC } from 'react';
import { CardProductProps } from '../../types/cardProduct';


export const CardProduct: FC<CardProductProps> = ({
  product,
  addProduct,
  favorites,
  handleAddProduct,
  handleFavoriteProduct
}) => {

  const isProductAdded = (productId: string) => {
    return addProduct.some((item) => item.id === productId);
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
            onClick={() => handleAddProduct(product)}
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

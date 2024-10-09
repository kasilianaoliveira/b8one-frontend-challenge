import { useState } from 'react'
import { productsMock } from '../../mock/productsMock'
import { CardProduct } from '../CardProduct'
import styles from './styles.module.css'
import { IProductProps } from '../../types/product'

export const Products = () => {
  const [addProduct, setAddProduct] = useState<IProductProps[]>([])
  const [favorites, setFavorites] = useState<IProductProps[]>([])

  const handleAddProduct = (product: IProductProps) => {
    setAddProduct((prevState) => {
      const isProductInCart = prevState.some((item) => item.id === product.id);

      if (isProductInCart) {
        return prevState;
      }
      const updatedCart = [...prevState, product];
      return updatedCart;
    })
  }
  const handleFavoriteProduct = (product: IProductProps) => {
    setFavorites((prevFavorites) => {
      const isProductInFavorites = prevFavorites.some((item) => item.id === product.id);

      if (isProductInFavorites) {
        const updatedFavorites = prevFavorites.filter((item) => item.id!== product.id);
        return updatedFavorites;
      }
      return [...prevFavorites, product];
    });
  };

  return (
    <div className={styles['products-container']}>
      {productsMock.map((product) => (
        <CardProduct
          key={product.id}
          product={product}
          addProduct={addProduct}
          favorites={favorites}
          handleAddProduct={handleAddProduct}
          handleFavoriteProduct={handleFavoriteProduct}
        />
      ))}
    </div>
  )
}

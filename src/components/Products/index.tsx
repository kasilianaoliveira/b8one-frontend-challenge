import { useContext } from 'react'
import { productsMock } from '../../mock/productsMock'
import { CardProduct } from '../CardProduct'
import styles from './styles.module.css'
import { CartContext } from '../../context/cartContext'
import { FavoriteContext } from '../../context/favoriteContext'

export const Products = () => {

  const { addProductToCart } = useContext(CartContext)
  const { addProductToFavorites } = useContext(FavoriteContext)

  return (
    <div className={styles['products-container']}>
      {productsMock.map((product) => (
        <CardProduct
          key={product.id}
          product={product}
          handleAddProduct={() => addProductToCart(product)}
          handleFavoriteProduct={() => addProductToFavorites(product)}
        />
      ))}

    </div>
  )
}

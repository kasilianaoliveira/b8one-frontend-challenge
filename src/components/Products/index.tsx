import { useCallback, useMemo } from 'react'
import { productsMock } from '../../mock/productsMock'
import { CardProduct } from '../CardProduct'
import styles from './styles.module.css'
import { notification } from '../../utils/notification'
import { useCartStore } from '../../stores/cartStore'
import { IProductProps } from '../../types/product'
import { useFavoriteStore } from '../../stores/favoriteStore'

export const Products = () => {

  const { addToCart, removeProductFromCart } = useCartStore();
  const { addProductToFavorites, removeProductFromFavorites } = useFavoriteStore();

  const handleAddToCart = useCallback((product: IProductProps) => {
    addToCart(product);
    notification('Produto adicionado ao carrinho!');
  }, [addToCart]);

  const handleRemoveFromCart = useCallback((productId: string) => {
    removeProductFromCart(productId);
    notification('Produto removido do carrinho!');
  }, [removeProductFromCart]);

  const handleAddToFavorites = useCallback((product: IProductProps) => {
    addProductToFavorites(product);
    notification('Produto adicionado aos favoritos');
  }, [addToCart]);

  const handleRemoveFromFavorites = useCallback((productId: string) => {
    removeProductFromFavorites(productId);
    notification('Produto removido dos favoritos!');
  }, [removeProductFromCart]);

  const renderedProducts = useMemo(() => {
    return productsMock.map((product) => {
      return (
        <CardProduct
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddToFavorites={handleAddToFavorites}
          handleRemoveFromFavorites={handleRemoveFromFavorites}
        />
      );
    });
  }, [productsMock,
    handleAddToCart,
    handleRemoveFromCart,
    handleRemoveFromFavorites,
    handleAddToFavorites]);


  return (
    <div className={styles['products-container']}>
      {renderedProducts}
    </div>
  )
}

